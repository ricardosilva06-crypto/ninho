// Ninho "notify" Edge Function: sends a push notification to the other
// member(s) of a household when an activity row is created.
// Deploy with "Verify JWT" OFF. It only acts on activity rows that exist and
// have not been sent yet, so calling it from outside can't send anything new.
import { createClient } from "npm:@supabase/supabase-js@2.50.0";
import webpush from "npm:web-push@3.6.7";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

const ROUTE: Record<string, string> = { lugares: "mapa", vaquinhas: "orcamento", eventos: "calendario" };
const NOUN: Record<string, string> = {
  listas: "a lista", eventos: "o evento", orcamento: "o movimento", documentos: "o documento", datas: "a data especial",
  horario: "o horário", receitas: "a receita", lugares: "o lugar", contactos: "o contacto", vaquinhas: "a vaquinha", galeria: "uma foto",
};
const VERB: Record<string, string> = { add: "adicionou", edit: "alterou", delete: "apagou" };

function describe(a: { action: string; col: string; title: string }, who: string): { title: string; body: string } {
  const q = (s: string) => (s ? ` «${s}»` : "");
  if (a.col === "mensagens") return { title: `💬 ${who}`, body: a.title || "Nova mensagem" };
  if (a.action === "list_add") { const [item, list] = a.title.split("|"); return { title: "🛒 Listas", body: `${who} adicionou «${item}» à lista ${list}` }; }
  if (a.action === "list_remove") return { title: "🛒 Listas", body: `${who} removeu itens da lista${q(a.title)}` };
  if (a.action === "list_check") return { title: "✅ Listas", body: `${who} riscou itens da lista${q(a.title)}` };
  if (a.col === "galeria") return { title: "📷 Galeria", body: a.action === "add" ? `${who} adicionou uma foto${q(a.title)}` : `${who} ${VERB[a.action]} uma foto` };
  if (a.col === "refeicoes") return { title: "🍽 Refeições", body: `${who} alterou o plano de refeições` };
  if (a.col === "vaquinhas" && a.action === "edit") return { title: "🐷 Vaquinhas", body: `${who} mexeu na vaquinha${q(a.title)}` };
  return { title: "Ninho", body: `${who} ${VERB[a.action] ?? "alterou"} ${NOUN[a.col] ?? "um item"}${q(a.title)}` };
}

Deno.serve(async (req) => {
  const { id } = await req.json().catch(() => ({ id: null }));
  if (!id) return new Response("missing id", { status: 400 });

  const { data: a } = await sb.from("activity").select("*").eq("id", id).maybeSingle();
  if (!a || a.notified) return new Response("skip");
  await sb.from("activity").update({ notified: true }).eq("id", id);

  const { data: secrets } = await sb.from("app_secrets").select("key,value");
  const S = Object.fromEntries((secrets ?? []).map((s) => [s.key, s.value]));
  webpush.setVapidDetails(S.vapid_subject, S.vapid_public, S.vapid_private);

  const { data: m } = await sb.from("items").select("data").eq("household_id", a.household_id).eq("col", "membros").eq("id", a.actor).maybeSingle();
  const d = (m?.data ?? {}) as { apelido?: string; email?: string };
  let who = d.apelido || "";
  if (!who && d.email) { const w = d.email.split("@")[0].replace(/[0-9]+/g, " ").split(/[._\-+ ]+/).filter(Boolean)[0] || "Alguém"; who = w[0].toUpperCase() + w.slice(1).toLowerCase(); }
  who = who || "Alguém";

  const msg = describe(a, who);
  const payload = JSON.stringify({ ...msg, url: "#" + (ROUTE[a.col] ?? a.col), tag: `${a.col}-${a.item_id}` });

  const { data: subs } = await sb.from("push_subscriptions").select("*").eq("household_id", a.household_id).neq("user_id", a.actor);
  await Promise.all((subs ?? []).map(async (s) => {
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload, { TTL: 60 * 60 * 24 });
    } catch (e) {
      const code = (e as { statusCode?: number }).statusCode;
      if (code === 404 || code === 410) await sb.from("push_subscriptions").delete().eq("endpoint", s.endpoint);
      else console.error("push failed", code, (e as Error).message);
    }
  }));
  return new Response("ok");
});
