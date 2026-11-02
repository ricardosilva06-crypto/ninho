(() => {
/* ---------- icons ---------- */
const P = {
  listas:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2"/><circle cx="4.5" cy="12" r="1.2"/><circle cx="4.5" cy="18" r="1.2"/>',
  calendario:'<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  orcamento:'<path d="M4 8.5c0-1.4 1.1-2.5 2.5-2.5h11A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z"/><path d="M16 12.5h.01M4 10h16"/>',
  documentos:'<path d="M7 3.5h7l5 5V19a1.5 1.5 0 0 1-1.5 1.5h-10.5A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5z"/><path d="M14 3.5V9h5M9 13h6M9 16.5h4"/>',
  datas:'<path d="M12 20s-7.5-4.5-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.5-7.5 10-7.5 10z"/>',
  refeicoes:'<path d="M7 3v8M4.5 3v5a2.5 2.5 0 0 0 5 0V3M7 11v10M17 3c-2 1-3 3.5-3 7h3v11"/>',
  horario:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  receitas:'<path d="M4 11h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z"/><path d="M9 7c0-1.5 1-2 1-3.5M13 7c0-1.5 1-2 1-3.5M2.5 11h19"/>',
  mapa:'<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  mensagens:'<path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 3.5v-3.5h-1A1.5 1.5 0 0 1 3 16V7a1.5 1.5 0 0 1 1.5-1.5z"/>',
  nos:'<circle cx="9" cy="8.5" r="3"/><circle cx="16.5" cy="9.5" r="2.4"/><path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M14.5 14.3c.6-.2 1.3-.3 2-.3 2.2 0 3.8 1.6 4.3 4"/>',
  galeria:'<rect x="3.5" y="4.5" width="17" height="15" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M20.5 15.5l-4.5-4.5-8.5 8.5"/>',
  contactos:'<rect x="4.5" y="3.5" width="15" height="17" rx="3"/><circle cx="12" cy="10" r="2.6"/><path d="M8 16.5c.7-1.6 2.2-2.5 4-2.5s3.3.9 4 2.5"/>',
  home:'<path d="M4 10.5L12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19z"/><path d="M9.5 20.5v-6h5v6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', back:'<path d="M15 5l-7 7 7 7"/>', check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>', trash:'<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>',
  send:'<path d="M4 12l16-8-6 16-2.5-6.5z"/>', chev:'<path d="M9 5l7 7-7 7"/>', copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
  ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
  bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  clip:'<path d="M20 11.5l-8.2 8.2a5 5 0 0 1-7.1-7.1l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8"/>',
  cart:'<path d="M3 4h2.5l2.2 11h10.6L20.5 8H6.5"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>'
};
const ic = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]||''}</svg>`;

/* ---------- helpers ---------- */
const $ = (s, r=document) => r.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = (n) => String(n).padStart(2,'0');
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parse = (s) => { const [y,m,d] = String(s||'').split('-').map(Number); return new Date(y, (m||1)-1, d||1); };
const today = () => { const d = new Date(); d.setHours(0,0,0,0); return d; };
const addDays = (d,n) => { const x = new Date(d); x.setDate(x.getDate()+n); return x; };
const diffDays = (a,b) => Math.round((parse(iso(b)) - parse(iso(a))) / 86400000);
const MESES = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const DIAS = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
const DIAS_C = ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
const fmtDate = (s) => { const d = parse(s); return `${d.getDate()} de ${MESES[d.getMonth()]}${d.getFullYear()!==new Date().getFullYear()?' de '+d.getFullYear():''}`; };
const eur = (n) => (Number(n)||0).toLocaleString('pt-PT',{style:'currency',currency:'EUR'});
const monday = (d) => { const x = new Date(d); const w = (x.getDay()+6)%7; x.setDate(x.getDate()-w); x.setHours(0,0,0,0); return x; };
const nextOcc = (s, yearly) => {
  const d = parse(s); if (!yearly) return d;
  const t = today(); let n = new Date(t.getFullYear(), d.getMonth(), d.getDate());
  if (n < t) n = new Date(t.getFullYear()+1, d.getMonth(), d.getDate());
  return n;
};
const plural = (n, one, many) => `${n} ${n===1?one:many}`;
const rid = () => Math.random().toString(36).slice(2,10) + Date.now().toString(36);

/* ---------- store: Supabase, one "items" table holding JSON documents per household ---------- */
const COLS = ['listas','eventos','orcamento','documentos','datas','refeicoes','horario','receitas','lugares','membros','galeria','contactos','definicoes','mensagens','vaquinhas'];
const S = { data:{}, msgs:[], uid:null, email:null, hid:null, household:null, mode:'loading', writable:true, profiles:{}, sb:null, urls:{} };
COLS.forEach(c => S.data[c] = []);
const watchers = {};
const cache = {}; // col -> Map(id -> data)
COLS.forEach(c => cache[c] = new Map());
function emit(c){
  const rows = [...cache[c]].map(([id, v]) => ({id, ...v}));
  (watchers[c] || []).forEach(f => f(rows, {fromCache:false}));
}
const store = {
  watch(c, f){ (watchers[c] ||= []).push(f); },
  async set(c, id, v){
    const prev = cache[c].get(id);
    cache[c].set(id, v); emit(c);
    return guard(async () => {
      const { error } = await S.sb.from('items').upsert({household_id:S.hid, col:c, id, data:v, updated_at:new Date().toISOString()}, {onConflict:'household_id,col,id'});
      if (error) { prev === undefined ? cache[c].delete(id) : cache[c].set(id, prev); emit(c); throw error; }
    });
  },
  async add(c, v){ const id = rid(); await store.set(c, id, v); return id; },
  async update(c, id, v){ return store.set(c, id, {...(cache[c].get(id) || {}), ...v}); },
  async remove(c, id){
    const prev = cache[c].get(id);
    cache[c].delete(id); emit(c);
    return guard(async () => {
      const { error } = await S.sb.from('items').delete().match({household_id:S.hid, col:c, id});
      if (error) { if (prev !== undefined) cache[c].set(id, prev); emit(c); throw error; }
    });
  }
};
async function guard(fn){
  try { return await fn(); }
  catch(e){
    if (!navigator.onLine) toast('Sem internet. Tenta outra vez quando tiveres rede.');
    else toast('Não foi possível guardar. Tenta outra vez.');
    console.warn(e); throw e;
  }
}
function setStatus(s){ S.mode = s; render(); }

/* ---------- names ---------- */
const members = () => S.data.membros;
function nameOf(id){
  if (!id) return 'Alguém';
  const m = members().find(x => x.id === id);
  if (m && m.apelido) return m.apelido;
  if (m && m.email) { const w = m.email.split('@')[0].replace(/[0-9]+/g,' ').split(/[._\-+ ]+/).filter(Boolean)[0] || m.email.split('@')[0]; return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); }
  return id === S.uid ? 'Eu' : 'Alguém';
}
const PALETTE = ['#D9485F','#3D63C9','#1E8A5A','#7B5CD6','#E38A1C','#14A08C'];
const colorOf = (id) => { let h = 0; for (const ch of String(id||'')) h = (h*31 + ch.charCodeAt(0)) >>> 0; return PALETTE[h % PALETTE.length]; };
function avatar(id, size=36){
  const n = nameOf(id); const ini = n.trim().split(/\s+/).map(w => w[0]).join('').slice(0,2).toUpperCase();
  return `<span class="av" style="--s:${size}px;background:${colorOf(id)}" aria-label="${esc(n)}">${esc(ini)}</span>`;
}
function refreshProfiles(){}

/* ---------- toast & sheet ---------- */
function toast(msg){ const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2600); }
function closeSheet(){ $('#sheet-root').innerHTML = ''; }
function sheet({title, fields=[], save='Guardar', onSave, onDelete, extra=''}){
  const root = $('#sheet-root');
  root.innerHTML = `<div class="scrim" data-close="1"><form class="sheet" id="sheetform" autocomplete="off">
    <div class="row between"><h2>${esc(title)}</h2><button type="button" class="iconbtn" data-close="1" aria-label="Fechar">✕</button></div>
    ${fields.map(f => fieldHTML(f)).join('')}
    ${extra}
    <div class="row between" style="margin-top:4px">
      ${onDelete ? `<button type="button" class="btn danger" id="sheet-del">Apagar</button>` : '<span></span>'}
      ${onSave ? `<button class="btn primary" type="submit" ${S.writable?'':'disabled'}>${esc(save)}</button>` : ''}
    </div></form></div>`;
  root.querySelector('.scrim').addEventListener('click', e => { if (e.target.dataset.close) closeSheet(); });
  const form = $('#sheetform');
  const first = form.querySelector('input,textarea,select'); if (first && first.type !== 'file' && first.type !== 'date') setTimeout(() => first.focus(), 60);
  let confirmDel = false;
  if (onDelete) $('#sheet-del').onclick = async (e) => {
    if (!confirmDel) { confirmDel = true; e.target.textContent = 'Confirmar apagar'; return; }
    e.target.disabled = true;
    try { await onDelete(); closeSheet(); toast('Apagado'); } catch(err) { e.target.disabled = false; }
  };
  form.onsubmit = async (e) => {
    e.preventDefault();
    const v = {};
    fields.forEach(f => {
      const el = form.querySelector('#f-'+f.id); if (!el) return;
      v[f.id] = f.type === 'checkbox' ? el.checked : f.type === 'file' ? el.files : f.type === 'number' ? (el.value === '' ? null : Number(el.value)) : el.value.trim();
    });
    const missing = fields.find(f => f.required && !v[f.id] && v[f.id] !== 0);
    if (missing) { toast(`Preenche: ${missing.label}`); return; }
    const btn = form.querySelector('[type=submit]'); btn.disabled = true; btn.textContent = 'A guardar…';
    try { await onSave(v); closeSheet(); } catch(err) { btn.disabled = false; btn.textContent = save; }
  };
  return form;
}
function fieldHTML(f){
  const id = 'f-'+f.id, val = f.value ?? '';
  if (f.type === 'checkbox') return `<label class="checkline"><input type="checkbox" id="${id}" ${val?'checked':''}> ${esc(f.label)}</label>`;
  let input;
  if (f.type === 'textarea') input = `<textarea class="in" id="${id}" placeholder="${esc(f.ph||'')}">${esc(val)}</textarea>`;
  else if (f.type === 'select') input = `<select class="in" id="${id}">${f.options.map(o => `<option value="${esc(o.v)}" ${String(o.v)===String(val)?'selected':''}>${esc(o.t)}</option>`).join('')}</select>`;
  else if (f.type === 'file') input = `<input class="in" type="file" id="${id}" ${f.accept?`accept="${f.accept}"`:''} ${f.multiple?'multiple':''}>`;
  else input = `<input class="in" id="${id}" type="${f.type||'text'}" value="${esc(val)}" placeholder="${esc(f.ph||'')}" ${f.type==='number'?'step="any" inputmode="decimal"':''} ${f.list?`list="${f.list}"`:''}>`;
  return `<label class="field"><span>${esc(f.label)}</span>${input}${f.hint?`<small class="muted">${esc(f.hint)}</small>`:''}</label>`;
}

/* ---------- uploads (Supabase Storage, private bucket, signed URLs) ---------- */
async function shrinkImage(file){
  if (!/^image\/(jpeg|png|webp)$/.test(file.type) || file.size < 600000) return file;
  try {
    const url = URL.createObjectURL(file);
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
    const k = Math.min(1, 1800 / Math.max(img.width, img.height));
    const c = document.createElement('canvas'); c.width = Math.round(img.width*k); c.height = Math.round(img.height*k);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
    return await new Promise(res => c.toBlob(b => res(b || file), 'image/jpeg', .85));
  } catch(e) { return file; }
}
async function upload(file){
  if (file.size > 25*1024*1024) { toast('Ficheiro demasiado grande (máx. 25 MB).'); throw new Error('too big'); }
  const blob = await shrinkImage(file);
  const ext = (blob.type === 'image/jpeg' && blob !== file) ? 'jpg' : ((file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g,''));
  const path = `${S.hid}/${rid()}.${ext}`;
  const { error } = await S.sb.storage.from('ficheiros').upload(path, blob, {contentType: blob.type || 'application/octet-stream', upsert:false});
  if (error) { toast('Não foi possível enviar o ficheiro.'); console.warn(error); throw error; }
  return { id: path, contentType: blob.type };
}
async function deleteFile(path){ try { await S.sb.storage.from('ficheiros').remove([path]); } catch(e) {} }
const PIXEL = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
const pendingUrls = new Set(); let urlTimer = null;
function blobUrl(path){
  const u = S.urls[path];
  if (u && u.exp > Date.now()) return u.url;
  pendingUrls.add(path);
  clearTimeout(urlTimer); urlTimer = setTimeout(fetchUrls, 30);
  return PIXEL;
}
async function fetchUrls(){
  const paths = [...pendingUrls]; pendingUrls.clear(); if (!paths.length) return;
  const { data, error } = await S.sb.storage.from('ficheiros').createSignedUrls(paths, 60*60*24*7);
  if (error || !data) return;
  let n = 0; data.forEach(d => { if (d.signedUrl) { S.urls[d.path] = {url:d.signedUrl, exp:Date.now() + 1000*60*60*24*6}; n++; } });
  if (n) render();
}
/* ---------- modules ---------- */
const MODS = [
  ['listas','Listas'],['calendario','Calendário'],['orcamento','Orçamento'],['documentos','Documentos'],
  ['datas','Datas especiais'],['refeicoes','Refeições'],['horario','Horários'],['receitas','Receitas'],
  ['mapa','Lugares'],['mensagens','Mensagens'],['nos','Nós dois'],['galeria','Galeria'],['contactos','Contactos']
];
const view = { listId:null, calSel:iso(today()), calMonth:null, budMonth:iso(today()).slice(0,7), week:iso(monday(today())), recipeId:null, photoId:null, ttWho:'todos', placeFilter:'todos' };

function subtitle(k){
  const d = S.data, t = today();
  switch(k){
    case 'listas': { const open = d.listas.reduce((a,l) => a + (l.itens||[]).filter(i => !i.feito).length, 0); return d.listas.length ? `${plural(d.listas.length,'lista','listas')} · ${open} por fazer` : 'Compras, tarefas, ideias'; }
    case 'calendario': { const nx = d.eventos.filter(e => e.data >= iso(t)).sort((a,b) => (a.data+(a.hora||'')).localeCompare(b.data+(b.hora||'')))[0];
      if (!nx) return 'Nada marcado';
      const dd = diffDays(t, parse(nx.data)); const when = dd === 0 ? 'hoje' : dd === 1 ? 'amanhã' : dd < 7 ? DIAS[parse(nx.data).getDay()] : fmtDate(nx.data);
      return `${nx.titulo} · ${when}${nx.hora ? ' ' + nx.hora : ''}`; }
    case 'orcamento': { const m = iso(t).slice(0,7); const g = d.orcamento.filter(e => e.tipo !== 'receita' && (e.data||'').startsWith(m)).reduce((a,e) => a + (+e.valor||0), 0); return g ? `${eur(g)} gastos este mês` : 'Despesas e contas a dois'; }
    case 'documentos': return d.documentos.length ? plural(d.documentos.length,'documento','documentos') : 'Guarda o que é importante';
    case 'datas': { const nx = nextSpecial(); return nx ? `${nx.title}: ${nx.days === 0 ? 'hoje!' : 'faltam '+plural(nx.days,'dia','dias')}` : 'Contagem para o que importa'; }
    case 'refeicoes': { const r = d.refeicoes.find(x => x.id === iso(t)); return r && (r.jantar||r.almoco) ? `Hoje: ${r.jantar||r.almoco}` : 'Planeia a semana'; }
    case 'horario': { if (!d.horario.length) return 'Partilhem as vossas rotinas';
      const wd = (t.getDay()+6)%7; const now = `${pad(new Date().getHours())}:${pad(new Date().getMinutes())}`;
      const td = d.horario.filter(h => +h.dia === wd).sort((a,b) => (a.inicio||'').localeCompare(b.inicio||''));
      const cur = td.find(h => (h.inicio||'') <= now && now < (h.fim||'99')); if (cur) return `Agora: ${nameOf(cur.quem)} · ${cur.titulo} até ${cur.fim}`;
      const nx = td.find(h => (h.inicio||'') > now); return nx ? `${nameOf(nx.quem)} · ${nx.titulo} às ${nx.inicio}` : 'Hoje já estão livres ♥'; }
    case 'receitas': return d.receitas.length ? plural(d.receitas.length,'receita','receitas') : 'Sem receitas ainda';
    case 'mapa': return d.lugares.length ? plural(d.lugares.length,'lugar','lugares') : 'Sítios favoritos e por visitar';
    case 'mensagens': { const m = S.msgs[0]; return m ? `${nameOf(m.de)}: ${m.texto}`.slice(0,40) : 'Recados entre os dois'; }
    case 'nos': return plural(members().length || 1, 'membro', 'membros');
    case 'galeria': return d.galeria.length ? plural(d.galeria.length,'foto','fotos') : 'As vossas fotos';
    case 'contactos': return d.contactos.length ? plural(d.contactos.length,'contacto','contactos') : 'Família, médicos, serviços';
  }
  return '';
}
function nextSpecial(){
  const t = today();
  const all = S.data.datas.map(s => { const n = nextOcc(s.data, s.anual !== false); return {title:s.titulo, date:n, days:diffDays(t,n), id:s.id}; }).filter(x => x.days >= 0);
  all.sort((a,b) => a.days - b.days);
  return all[0];
}
const couple = () => S.data.definicoes.find(x => x.id === 'casal') || {};

/* ---------- views ---------- */
function header(title, color){
  return `<header class="top"><div class="brand"><a class="back" href="#inicio" aria-label="Voltar ao início">${ic('back')}</a>${color?`<span class="hdr-ico" style="--c:var(--c-${color});--t:var(--t-${color})">${ic(color)}</span>`:''}<h1 class="ptitle">${esc(title)}</h1></div></header>${statusBar()}`;
}
function statusBar(){
  if (S.mode === 'offline') return `<div class="status">Sem internet. Estás a ver os últimos dados guardados.</div>`;
  if (S.mode === 'slow') return `<div class="status">Ainda a ligar… os dados podem estar desatualizados.</div>`;
  return '';
}
const empty = (k, text, cta) => `<div class="empty"><div class="ico" style="--c:var(--c-${k})">${ic(k)}</div><p>${text}</p>${cta?`<button class="btn primary sm" data-act="${cta[0]}">${cta[1]}</button>`:''}</div>`;
const fab = (act) => S.writable ? `<button class="fab" data-act="${act}" aria-label="Adicionar">${ic('plus')}</button>` : '';

const TILT = [-1.2, 1, -.7, 1.3, -1, .6, -1.4, .9, -.5, 1.1, -.9, .7, -1.1];
const greeting = () => { const h = new Date().getHours(); return h < 6 ? 'Boa noite' : h < 13 ? 'Bom dia' : h < 20 ? 'Boa tarde' : 'Boa noite'; };
const NEST_SVG = `<svg viewBox="0 0 120 120" width="70%" aria-hidden="true" fill="none" stroke="#8A7B62" stroke-width="2.4" stroke-linecap="round"><path d="M60 52c-9-14-30-6-22 10 4 8 22 18 22 18s18-10 22-18c8-16-13-24-22-10z" fill="#F2553C" stroke="none"/><path d="M18 78c14 18 70 18 84 0M24 74c16 12 56 12 72 0M14 84c20 22 72 22 92 0M30 90c12 6 48 6 60 0"/><path d="M20 76l10 8M100 76l-10 8M40 88l-6 6M80 88l6 6"/></svg>`;
function vHome(){
  const c = couple(); const t = today();
  const together = c.desde ? diffDays(parse(c.desde), t) : null;
  const nx = nextSpecial();
  const meal = S.data.refeicoes.find(x => x.id === iso(t));
  const upcoming = S.data.eventos.filter(e => e.data >= iso(t)).sort((a,b) => (a.data+(a.hora||'')).localeCompare(b.data+(b.hora||''))).slice(0,2);
  const avs = memberIds().slice(0,3).map(id => avatar(id)).join('');
  const photo = [...S.data.galeria].sort((a,b) => (b.ts||0)-(a.ts||0))[0];
  const msg = S.msgs[0];
  const me = nameOf(S.uid);
  const openItems = S.data.listas.flatMap(l => (l.itens||[]).filter(i => !i.feito)).slice(0,3);
  const tile = (k, n, i, extra='', cls='') => `<a class="tile ${cls}" href="#${k}" style="--c:var(--c-${k});--t:var(--t-${k});--tilt:${TILT[i % TILT.length]}deg;--i:${i};text-decoration:none"><h3>${n}</h3><div class="sub">${esc(subtitle(k))}</div>${extra}<span class="big-ico">${ic(k)}</span></a>`;
  return `<header class="top home-top"><div><div class="date">${DIAS[t.getDay()]}, ${t.getDate()} de ${MESES[t.getMonth()]}</div><h1 class="hello">${greeting()},<br><em>${esc(me)}</em></h1></div><div class="row" style="gap:8px;flex:none"><a href="#novidades" class="bell" aria-label="Novidades">${ic('bell')}${unseen()?`<b>${unseen()}</b>`:''}</a><a href="#nos" class="avatars" aria-label="Nós dois">${avs}</a></div></header>${statusBar()}
  <section class="door" aria-label="O nosso cantinho">
    <a class="polaroid" href="#galeria"><span class="pic">${photo ? `<img src="${blobUrl(photo.foto)}" alt="${esc(photo.legenda||'A nossa foto')}">` : NEST_SVG}</span><span class="cap">${photo && photo.legenda ? esc(photo.legenda) : photo ? 'nós ♥' : 'põe aqui a vossa foto'}</span></a>
    <div class="door-side">
      ${together !== null && together >= 0
        ? `<div class="count"><span>juntos há</span><b>${together.toLocaleString('pt-PT')}</b><span>${together===1?'dia':'dias'} ♥</span></div>`
        : `<button class="mini-btn" data-act="couple">Desde quando estão juntos? ✎</button>`}
      ${nx ? `<a class="ticket" href="#datas"><b>${nx.days===0?'🎉':nx.days}</b><small>${nx.days===0?'é hoje':nx.days===1?'dia para':'dias para'}</small><span>${esc(nx.title)}</span></a>` : `<a class="mini-btn" href="#datas">+ Uma data especial</a>`}
      ${!(members().find(x => x.id === S.uid) || {}).apelido ? `<button class="mini-btn" data-act="editMe">Como queres ser chamado? ✎</button>` : ''}
      ${memberIds().length < 2 ? `<button class="mini-btn" data-act="invite">Convidar a minha cara-metade 💌</button>` : ''}
    </div>
  </section>
  <a class="sticky" href="#mensagens">${msg ? `<span class="hand">${esc(msg.texto.length > 120 ? msg.texto.slice(0,120)+'…' : msg.texto)}</span><small>${msg.de===S.uid?'tu':esc(nameOf(msg.de))} · ${new Date(msg.ts||0).toDateString()===new Date().toDateString()?'hoje':fmtDate(iso(new Date(msg.ts||0)))}</small>` : `<span class="hand">Deixa aqui um recado para a tua cara-metade…</span><small>toca para escrever</small>`}</a>
  ${(meal && (meal.almoco||meal.jantar)) || upcoming.length ? `<section class="agenda" aria-label="Hoje">
    ${meal && (meal.almoco||meal.jantar) ? `<a href="#refeicoes"><div class="when">hoje<b>🍽</b></div><div class="grow"><div class="small muted">À mesa</div><b>${esc([meal.almoco,meal.jantar].filter(Boolean).join(' · '))}</b></div></a>` : ''}
    ${upcoming.map(e => { const d = parse(e.data); return `<a href="#calendario"><div class="when">${MESES[d.getMonth()].slice(0,3)}<b>${d.getDate()}</b></div><div class="grow"><b>${esc(e.titulo)}</b><div class="small muted">${e.data===iso(t)?'Hoje':DIAS[d.getDay()]}${e.hora?' · '+esc(e.hora):''}</div></div></a>`; }).join('')}
  </section>` : ''}
  <section class="tiles" aria-label="Módulos">
    ${tile('listas','Listas',0, openItems.length ? `<div class="peek">${openItems.map(i => `<span><i></i>${esc(i.texto)}</span>`).join('')}</div>` : '', 'wide')}
    ${MODS.filter(([k]) => k !== 'listas').map(([k,n],i) => tile(k, n, i+1)).join('')}
  </section>`;
}

/* Lists */
function vListas(){
  const L = [...S.data.listas].sort((a,b) => (a.criado||0)-(b.criado||0));
  const cur = L.find(l => l.id === view.listId);
  if (cur) {
    const itens = cur.itens || [];
    const todo = itens.filter(i => !i.feito), done = itens.filter(i => i.feito);
    const item = (i) => `<div class="list-item"><button class="check ${i.feito?'on':''}" data-act="toggleItem" data-id="${i.id}" aria-label="${i.feito?'Desmarcar':'Marcar'}">${i.feito?ic('check'):''}</button><div class="grow ${i.feito?'done':''}">${esc(i.texto)}</div><button class="iconbtn" data-act="delItem" data-id="${i.id}" aria-label="Remover">${ic('trash')}</button></div>`;
    return `<header class="top"><div class="brand"><button class="back" data-act="listBack" aria-label="Voltar">${ic('back')}</button><h1 style="font-size:24px">${esc(cur.nome)}</h1></div><button class="iconbtn" data-act="editList" aria-label="Editar lista">${ic('edit')}</button></header>${statusBar()}
    ${S.writable?`<form class="addrow" id="additem"><input class="in" id="newitem" placeholder="Adicionar item…" autocomplete="off"><button class="btn primary">Adicionar</button></form>`:''}
    <div class="card" style="margin-top:12px">${todo.length ? todo.map(item).join('') : '<p class="muted">Tudo feito por aqui.</p>'}</div>
    ${done.length ? `<div class="row between" style="margin:18px 4px 8px"><div class="label">Feitos (${done.length})</div><button class="btn sm" data-act="clearDone">Limpar feitos</button></div><div class="card">${done.map(item).join('')}</div>` : ''}`;
  }
  return header('Listas','listas') + (L.length ? `<div class="stack">${L.map(l => { const it = l.itens||[]; const open = it.filter(i => !i.feito).length; return `<button class="card row" style="border:0;text-align:left;width:100%" data-act="openList" data-id="${l.id}"><div class="ico" style="--c:var(--c-listas);align-self:center">${ic(l.tipo==='compras'?'cart':'listas')}</div><div class="grow"><h3>${esc(l.nome)}</h3><div class="small muted">${open} por fazer · ${it.length} no total</div></div>${ic('chev')}</button>`; }).join('')}</div>` : empty('listas','Ainda não há listas. Comecem pela lista de compras.',['newList','Criar lista'])) + fab('newList');
}
function updateList(l, itens){ return store.update('listas', l.id, {itens}); }

/* Calendar */
function vCalendario(){
  const sel = parse(view.calSel);
  const m = view.calMonth ? parse(view.calMonth+'-01') : new Date(sel.getFullYear(), sel.getMonth(), 1);
  view.calMonth = iso(m).slice(0,7);
  const start = monday(m); const t = iso(today());
  const evBy = {}; S.data.eventos.forEach(e => (evBy[e.data] ||= []).push(e));
  const sdBy = {}; S.data.datas.forEach(s => { const d = parse(s.data); const k = s.anual !== false ? `${m.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}` : s.data; (sdBy[k] ||= []).push(s); });
  let cells = '';
  for (let i=0;i<42;i++){
    const d = addDays(start,i), k = iso(d);
    if (i>=35 && d.getMonth() !== m.getMonth()) break;
    const marks = (evBy[k]||[]).slice(0,3).map(() => '<i></i>').join('') + ((sdBy[k]||[]).length ? '<i class="sd"></i>' : '');
    cells += `<button data-act="calDay" data-d="${k}" class="${d.getMonth()!==m.getMonth()?'out':''} ${k===t?'today':''} ${k===view.calSel?'sel':''}" aria-label="${d.getDate()} de ${MESES[d.getMonth()]}"><span class="num">${d.getDate()}</span><span class="marks">${marks}</span></button>`;
  }
  const dayEv = (evBy[view.calSel]||[]).sort((a,b) => (a.hora||'').localeCompare(b.hora||''));
  const daySd = (sdBy[view.calSel]||[]);
  return header('Calendário','calendario') + `
  <div class="card">
    <div class="row between" style="margin-bottom:10px"><button class="iconbtn" data-act="calPrev" aria-label="Mês anterior">${ic('back')}</button><h3 style="text-transform:capitalize">${MESES[m.getMonth()]} ${m.getFullYear()}</h3><button class="iconbtn" data-act="calNext" aria-label="Mês seguinte">${ic('chev')}</button></div>
    <div class="cal">${DIAS_C.map(d => `<div class="wd">${d}</div>`).join('')}${cells}</div>
  </div>
  <div class="row between" style="margin:20px 4px 10px"><h3 style="text-transform:capitalize">${DIAS[sel.getDay()]}, ${fmtDate(view.calSel)}</h3></div>
  <div class="stack">
    ${daySd.map(s => `<div class="card row"><div class="ico" style="--c:var(--c-datas);align-self:center">${ic('datas')}</div><div class="grow"><b>${esc(s.titulo)}</b><div class="small muted">Data especial</div></div></div>`).join('')}
    ${dayEv.length ? dayEv.map(e => `<button class="card row" style="border:0;text-align:left;width:100%" data-act="editEvent" data-id="${e.id}"><div class="num" style="width:48px;font-weight:800;color:var(--c-calendario)">${esc(e.hora||'Dia')}</div><div class="grow"><b>${esc(e.titulo)}</b>${e.nota?`<div class="small muted">${esc(e.nota)}</div>`:''}<div class="small muted">${e.quem && e.quem!=='ambos' ? esc(nameOf(e.quem)) : 'Os dois'}</div></div></button>`).join('') : (daySd.length ? '' : `<p class="muted" style="padding:0 4px">Nada marcado para este dia.</p>`)}
  </div>` + fab('newEvent');
}
const whoOptions = (both=true) => [...(both?[{v:'ambos',t:'Os dois'}]:[]), ...memberIds().map(id => ({v:id, t:nameOf(id)}))];
const memberIds = () => [...new Set([S.uid, ...members().map(m => m.id)].filter(Boolean))];
function eventForm(e={}){
  sheet({ title: e.id ? 'Editar evento' : 'Novo evento', fields:[
    {id:'titulo',label:'Título',value:e.titulo,required:true,ph:'Jantar com os pais'},
    {id:'data',label:'Data',type:'date',value:e.data||view.calSel,required:true},
    {id:'hora',label:'Hora (opcional)',type:'time',value:e.hora},
    {id:'quem',label:'Para quem',type:'select',options:whoOptions(),value:e.quem||'ambos'},
    {id:'nota',label:'Notas',type:'textarea',value:e.nota}
  ], onSave: async v => { const doc = {...v, por:e.por||S.uid, criado:e.criado||Date.now()}; e.id ? await store.set('eventos',e.id,doc) : await store.add('eventos',doc); view.calSel = v.data; view.calMonth = v.data.slice(0,7); toast('Evento guardado'); },
    onDelete: e.id ? () => store.remove('eventos', e.id) : null });
}

/* Budget */
const CATS = ['Casa','Supermercado','Restaurantes','Transportes','Lazer','Saúde','Viagens','Presentes','Contas','Contribuição','Outros'];
const sumV = (a) => a.reduce((s,r) => s + (+r.valor||0), 0);
const jointCfg = () => S.data.definicoes.find(x => x.id === 'conjunta') || {};
const isJoint = (r) => r.conta === 'conjunta';
function jointBalance(){
  const J = S.data.orcamento.filter(isJoint);
  let bal = sumV(J.filter(r => r.tipo === 'receita')) - sumV(J.filter(r => r.tipo !== 'receita'));
  S.data.vaquinhas.forEach(v => (v.movs||[]).forEach(m => { if (m.origem === 'conjunta') bal -= (+m.valor||0); }));
  return bal;
}
const potTotal = (v) => (v.movs||[]).reduce((s,m) => s + (+m.valor||0), 0);
function monthNav(){
  const [y,mo] = view.budMonth.split('-').map(Number);
  return `<div class="row between" style="margin-bottom:12px"><button class="iconbtn" data-act="budPrev" aria-label="Mês anterior">${ic('back')}</button><h3 style="text-transform:capitalize">${MESES[mo-1]} ${y}</h3><button class="iconbtn" data-act="budNext" aria-label="Mês seguinte">${ic('chev')}</button></div>`;
}
function movRow(r){
  return `<button class="list-item" style="width:100%;border-left:0;border-right:0;border-top:0;background:none;text-align:left" data-act="editMov" data-id="${r.id}"><div class="grow"><b>${esc(r.titulo)}</b>${isJoint(r)?' <span class="pill" style="--c:var(--c-calendario)">Conjunta</span>':''}${r.fatura?` <span class="pill" style="--c:var(--c-documentos)" title="Tem fatura">${ic('clip').replace('<svg','<svg style="width:12px;height:12px;vertical-align:-1px"')} fatura</span>`:''}<div class="small muted">${fmtDate(r.data)} · ${esc(r.cat||'Outros')}${r.pago?(isJoint(r)?' · '+esc(nameOf(r.pago)):' · pago por '+esc(nameOf(r.pago))):''}${!isJoint(r)&&r.partilhado?(r.acertado?' · acertado':' · a meias'):''}</div></div><div class="num ${r.tipo==='receita'?'money-pos':''}" style="font-weight:800">${r.tipo==='receita'?'+':'−'}${eur(r.valor)}</div></button>`;
}
function vOrcamento(){
  const tab = view.budTab || 'movimentos';
  const tabs = `<div class="seg" style="margin-bottom:14px">${[['movimentos','Movimentos'],['conjunta','Conta conjunta'],['vaquinhas','Vaquinhas']].map(([k,t]) => `<button class="${tab===k?'on':''}" data-act="budTab" data-t="${k}">${t}</button>`).join('')}</div>`;
  const body = tab === 'conjunta' ? vConjunta() : tab === 'vaquinhas' ? vVaquinhas() : vMovimentos();
  return header('Orçamento','orcamento') + tabs + body;
}
function vMovimentos(){
  const mk = view.budMonth;
  const rows = S.data.orcamento.filter(e => (e.data||'').startsWith(mk)).sort((a,b) => b.data.localeCompare(a.data));
  const out = rows.filter(r => r.tipo !== 'receita'), inc = rows.filter(r => r.tipo === 'receita');
  const gastos = sumV(out), entradas = sumV(inc);
  const byCat = {}; out.forEach(r => byCat[r.cat||'Outros'] = (byCat[r.cat||'Outros']||0) + (+r.valor||0));
  const cats = Object.entries(byCat).sort((a,b) => b[1]-a[1]);
  /* settle-up: personal shared expenses split 50/50 */
  const ids = memberIds(); let settle = '';
  if (ids.length >= 2) {
    const [a,b] = ids; let bal = 0;
    S.data.orcamento.filter(r => !isJoint(r) && r.tipo !== 'receita' && r.partilhado && !r.acertado).forEach(r => { const half = (+r.valor||0)/2; if (r.pago === a) bal += half; else if (r.pago === b) bal -= half; });
    settle = Math.abs(bal) < 0.005 ? `<p>Estão quites. 🤝</p>` : `<p><b>${esc(nameOf(bal>0?b:a))}</b> deve <b class="num">${eur(Math.abs(bal))}</b> a <b>${esc(nameOf(bal>0?a:b))}</b></p><button class="btn sm" data-act="settle" style="justify-self:start">Marcar como acertado</button>`;
  }
  return monthNav() + `
  <div class="kpis"><div class="card"><span class="label">Gastos</span><b class="num money-neg">${eur(gastos)}</b></div><div class="card"><span class="label">Entradas</span><b class="num money-pos">${eur(entradas)}</b></div><div class="card"><span class="label">Saldo</span><b class="num ${entradas-gastos>=0?'money-pos':'money-neg'}">${eur(entradas-gastos)}</b></div></div>
  ${settle ? `<div class="card stack" style="margin-top:12px"><div class="label">Contas entre os dois</div>${settle}<p class="small muted">Conta só as despesas pessoais marcadas como "a meias" ainda por acertar.</p></div>` : ''}
  ${cats.length ? `<div class="card stack" style="margin-top:12px"><div class="label">Por categoria</div>${cats.map(([c,v]) => `<div class="stack" style="gap:4px"><div class="row between small"><span>${esc(c)}</span><span class="num">${eur(v)}</span></div><div class="bar"><i style="width:${Math.round(v/gastos*100)}%"></i></div></div>`).join('')}</div>` : ''}
  <div class="label" style="margin:20px 4px 8px">Movimentos</div>
  ${rows.length ? `<div class="card">${rows.map(movRow).join('')}</div>` : empty('orcamento','Sem movimentos neste mês.',['newMov','Adicionar despesa'])}` + fab('newMov');
}
function vConjunta(){
  const cfg = jointCfg(); const pct = cfg.pct ?? 30; const sal = cfg.salarios || {};
  const mk = view.budMonth; const ids = memberIds();
  const J = S.data.orcamento.filter(r => isJoint(r) && (r.data||'').startsWith(mk)).sort((a,b) => b.data.localeCompare(a.data));
  const bal = jointBalance();
  const people = ids.map(id => {
    const expected = (+sal[id]||0) * pct / 100;
    const paid = sumV(J.filter(r => r.tipo === 'receita' && r.pago === id));
    const k = expected ? Math.min(100, Math.round(paid/expected*100)) : 0;
    return `<div class="stack" style="gap:6px"><div class="row between"><div class="row">${avatar(id,28)}<b>${esc(nameOf(id))}</b></div><span class="num small">${eur(paid)} / ${expected?eur(expected):'—'}</span></div>
      <div class="bar"><i style="width:${k}%;${paid>=expected&&expected?'':'background:var(--c-calendario)'}"></i></div>
      <div class="row between small"><span class="muted">${expected ? (paid >= expected ? 'Contribuição do mês feita ✓' : `Falta ${eur(expected-paid)}`) : 'Salário por definir'}</span>${expected && paid < expected ? `<button class="btn sm" data-act="jointDeposit" data-id="${esc(id)}" data-v="${(expected-paid).toFixed(2)}">Registar transferência</button>` : ''}</div></div>`;
  }).join('<hr style="border:0;border-top:1px solid var(--line);margin:4px 0">');
  const totalExp = ids.reduce((s,id) => s + (+sal[id]||0)*pct/100, 0);
  return `<div class="card stack" style="background:linear-gradient(135deg,var(--hero-a),var(--hero-b));color:#fff">
      <div class="label" style="color:rgba(255,255,255,.8)">Saldo da conta conjunta</div>
      <div class="num" style="font-family:var(--display);font-size:38px;font-weight:800;line-height:1">${eur(bal)}</div>
      <div class="small" style="opacity:.9">Cada um contribui com <b>${pct}%</b> do salário${totalExp?` · ${eur(totalExp)} por mês no total`:''}</div>
      <button class="chip" data-act="jointSettings" style="justify-self:start">Salários e percentagem</button></div>
    <div style="margin-top:14px">${monthNav()}</div>
    <div class="card stack">${ids.length ? people : '<p class="muted">Ainda não há membros.</p>'}</div>
    <div class="label" style="margin:20px 4px 8px">Movimentos da conta conjunta</div>
    ${J.length ? `<div class="card">${J.map(movRow).join('')}</div>` : `<p class="muted" style="padding:0 4px">Sem movimentos neste mês. Usa o + para registar despesas pagas pela conta conjunta.</p>`}` + fab('newJointMov');
}
function vVaquinhas(){
  const V = [...S.data.vaquinhas].sort((a,b) => (a.criado||0)-(b.criado||0));
  const t = today();
  return (V.length ? `<div class="stack">${V.map(v => {
    const got = potTotal(v), goal = +v.objetivo || 0, k = goal ? Math.min(100, Math.round(got/goal*100)) : 0;
    let hint = '';
    if (goal && got < goal && v.prazo) { const months = Math.max(1, Math.ceil(diffDays(t, parse(v.prazo)) / 30.4)); hint = diffDays(t, parse(v.prazo)) < 0 ? 'Prazo ultrapassado' : `Poupar ${eur((goal-got)/months)}/mês até ${fmtDate(v.prazo)}`; }
    else if (goal && got >= goal) hint = 'Objetivo atingido! 🎉';
    return `<div class="card stack" style="gap:10px"><button class="row" style="border:0;background:none;padding:0;text-align:left;width:100%" data-act="editPot" data-id="${v.id}"><div style="font-size:30px;line-height:1">${esc(v.emoji||'🐷')}</div><div class="grow"><h3>${esc(v.nome)}</h3><div class="small muted num">${eur(got)}${goal?' de '+eur(goal):''}</div></div>${goal?`<b class="num" style="color:var(--c-orcamento)">${k}%</b>`:''}</button>
      ${goal ? `<div class="bar"><i style="width:${k}%"></i></div>` : ''}${hint?`<div class="small muted">${hint}</div>`:''}
      <div class="row" style="gap:8px"><button class="btn sm primary" data-act="potMove" data-id="${v.id}" data-dir="1">Pôr dinheiro</button><button class="btn sm" data-act="potMove" data-id="${v.id}" data-dir="-1">Tirar</button><button class="btn sm" data-act="potHistory" data-id="${v.id}">Histórico</button></div></div>`;
  }).join('')}</div>` : empty('orcamento','Criem vaquinhas para poupar juntos: férias, casamento, um carro novo…',['newPot','Criar vaquinha'])) + fab('newPot');
}
function potForm(v={}){
  sheet({ title: v.id ? 'Editar vaquinha' : 'Nova vaquinha', fields:[
    {id:'nome',label:'Nome',value:v.nome,required:true,ph:'Férias no Algarve'},
    {id:'emoji',label:'Emoji',value:v.emoji||'🐷'},
    {id:'objetivo',label:'Objetivo (€, opcional)',type:'number',value:v.objetivo},
    {id:'prazo',label:'Até quando (opcional)',type:'date',value:v.prazo}
  ], onSave: async x => { const doc = {nome:x.nome, emoji:x.emoji||'🐷', objetivo:x.objetivo, prazo:x.prazo, movs:v.movs||[], criado:v.criado||Date.now()}; v.id ? await store.set('vaquinhas', v.id, doc) : await store.add('vaquinhas', doc); toast('Vaquinha guardada'); },
  onDelete: v.id ? () => store.remove('vaquinhas', v.id) : null });
}
function potMoveForm(v, dir){
  sheet({ title: dir > 0 ? `Pôr dinheiro · ${v.nome}` : `Tirar dinheiro · ${v.nome}`, save: dir > 0 ? 'Pôr' : 'Tirar', fields:[
    {id:'valor',label:'Valor (€)',type:'number',required:true},
    {id:'quem',label:'Quem',type:'select',options:whoOptions(false),value:S.uid},
    {id:'origem',label: dir > 0 ? 'De onde vem o dinheiro' : 'Para onde vai o dinheiro',type:'select',options:[{v:'conjunta',t:'Conta conjunta'},{v:'pessoal',t:'Dinheiro pessoal'}],value:'conjunta'},
    {id:'data',label:'Data',type:'date',value:iso(today())},
    {id:'nota',label:'Nota (opcional)'}
  ], onSave: async x => { const m = {id:rid(), valor:dir*Math.abs(x.valor||0), quem:x.quem, origem:x.origem, data:x.data, nota:x.nota}; await store.update('vaquinhas', v.id, {movs:[...(v.movs||[]), m]}); toast(dir > 0 ? 'Dinheiro guardado 🐷' : 'Levantamento registado'); } });
}
function potHistory(v){
  const M = [...(v.movs||[])].sort((a,b) => (b.data||'').localeCompare(a.data||''));
  sheet({ title: `Histórico · ${v.nome}`, extra: M.length ? `<div>${M.map(m => `<div class="list-item"><div class="grow"><b>${esc(nameOf(m.quem))}</b><div class="small muted">${fmtDate(m.data)} · ${m.origem==='conjunta'?'conta conjunta':'pessoal'}${m.nota?' · '+esc(m.nota):''}</div></div><b class="num ${m.valor>=0?'money-pos':'money-neg'}">${m.valor>=0?'+':'−'}${eur(Math.abs(m.valor))}</b><button type="button" class="iconbtn" data-act="potDelMov" data-id="${v.id}" data-m="${m.id}" aria-label="Apagar">${ic('trash')}</button></div>`).join('')}</div>` : '<p class="muted">Ainda sem movimentos.</p>' });
}
function movForm(r={}, preset={}){
  const joint = (r.conta || preset.conta) === 'conjunta';
  const extra = r.fatura ? `<div class="row between card" style="padding:10px 12px;background:var(--surface-2);box-shadow:none"><a href="${blobUrl(r.fatura)}" target="_blank" rel="noopener" data-fatura="${esc(r.fatura)}">${ic('clip').replace('<svg','<svg style="width:16px;height:16px;vertical-align:-3px"')} Ver fatura</a><label class="checkline small"><input type="checkbox" id="f-semfatura"> Remover</label></div>` : '';
  const form = sheet({ title: r.id ? 'Editar movimento' : (joint ? 'Movimento da conta conjunta' : 'Novo movimento'), fields:[
    {id:'tipo',label:'Tipo',type:'select',options:[{v:'despesa',t:'Despesa'},{v:'receita',t:joint?'Entrada (transferência para a conta)':'Entrada'}],value:r.tipo||preset.tipo||'despesa'},
    {id:'titulo',label:'Descrição',value:r.titulo ?? preset.titulo,required:true,ph:'Supermercado'},
    {id:'valor',label:'Valor (€)',type:'number',value:r.valor ?? preset.valor,required:true},
    {id:'data',label:'Data',type:'date',value:r.data||iso(today()),required:true},
    {id:'conta',label:'Conta',type:'select',options:[{v:'pessoal',t:'Pessoal'},{v:'conjunta',t:'Conta conjunta'}],value:r.conta||preset.conta||'pessoal'},
    {id:'cat',label:'Categoria',type:'select',options:CATS.map(c => ({v:c,t:c})),value:r.cat||preset.cat||'Supermercado'},
    {id:'pago',label:'Quem pagou / transferiu',type:'select',options:whoOptions(false),value:r.pago||preset.pago||S.uid},
    {id:'partilhado',label:'Despesa a meias (só para conta pessoal)',type:'checkbox',value:r.id ? r.partilhado : !joint},
    {id:'fatura',label:r.fatura?'Trocar fatura':'Fatura (PDF ou foto, opcional)',type:'file',accept:'application/pdf,image/*'}
  ], extra, onSave: async v => {
    const doc = {tipo:v.tipo, titulo:v.titulo, valor:Math.abs(v.valor||0), data:v.data, conta:v.conta, cat:v.cat, pago:v.pago, partilhado:v.conta==='conjunta'?false:v.partilhado, acertado:!!r.acertado, criado:r.criado||Date.now(), fatura:r.fatura||null, faturaTipo:r.faturaTipo||null};
    const old = r.fatura;
    const rm = document.getElementById('f-semfatura');
    if (rm && rm.checked) { doc.fatura = null; doc.faturaTipo = null; }
    if (v.fatura && v.fatura[0]) { const u = await upload(v.fatura[0]); doc.fatura = u.id; doc.faturaTipo = u.contentType; }
    r.id ? await store.set('orcamento', r.id, doc) : await store.add('orcamento', doc);
    if (old && old !== doc.fatura) deleteFile(old);
    view.budMonth = v.data.slice(0,7); toast('Guardado');
  }, onDelete: r.id ? async () => { await store.remove('orcamento', r.id); if (r.fatura) deleteFile(r.fatura); } : null });
  /* the signed link may not be ready on first open: refresh it in place */
  const a = form.querySelector('[data-fatura]');
  if (a && a.getAttribute('href') === PIXEL) S.sb.storage.from('ficheiros').createSignedUrl(a.dataset.fatura, 3600).then(({data}) => { if (data) a.href = data.signedUrl; });
}

/* Documents */
function vDocumentos(){
  const D = [...S.data.documentos].sort((a,b) => (b.criado||0)-(a.criado||0));
  const groups = {}; D.forEach(d => (groups[d.pasta||'Geral'] ||= []).push(d));
  return header('Documentos','documentos') + 
  (D.length ? Object.entries(groups).map(([g, arr]) => `<div class="label" style="margin:14px 4px 8px">${esc(g)}</div><div class="card">${arr.map(d => `<div class="list-item"><div class="ico" style="--c:var(--c-documentos);align-self:center;width:40px;height:40px">${ic('documentos')}</div><div class="grow"><b>${esc(d.titulo)}</b><div class="small muted">${d.validade?'Validade: '+fmtDate(d.validade)+(diffDays(today(),parse(d.validade))<60?' ⚠︎':''):'Adicionado '+fmtDate(iso(new Date(d.criado||Date.now())))}</div></div>${d.ficheiro?`<a class="iconbtn" href="${blobUrl(d.ficheiro)}" target="_blank" rel="noopener" aria-label="Abrir">${ic('ext')}</a>`:''}<button class="iconbtn" data-act="editDoc" data-id="${d.id}" aria-label="Editar">${ic('edit')}</button></div>`).join('')}</div>`).join('')
  : empty('documentos','Cartões de cidadão, seguros, contratos, garantias… tudo num só sítio.',['newDoc','Adicionar documento'])) + fab('newDoc');
}
function docForm(d={}){
  sheet({ title: d.id ? 'Editar documento' : 'Novo documento', fields:[
    {id:'titulo',label:'Nome',value:d.titulo,required:true,ph:'Seguro do carro'},
    {id:'pasta',label:'Pasta',value:d.pasta||'Geral',list:'pastas'},
    {id:'validade',label:'Validade (opcional)',type:'date',value:d.validade},
    ...(d.id ? [] : [{id:'ficheiro',label:'Ficheiro (PDF ou imagem)',type:'file',accept:'application/pdf,image/*'}]),
    {id:'nota',label:'Notas',type:'textarea',value:d.nota}
  ], extra:`<datalist id="pastas">${[...new Set(['Geral','Casa','Saúde','Carro','Finanças','Viagens',...S.data.documentos.map(x => x.pasta).filter(Boolean)])].map(p => `<option value="${esc(p)}">`).join('')}</datalist>`,
  onSave: async v => {
    const doc = {titulo:v.titulo, pasta:v.pasta||'Geral', validade:v.validade, nota:v.nota, ficheiro:d.ficheiro||null, tipo:d.tipo||null, criado:d.criado||Date.now(), por:d.por||S.uid};
    if (v.ficheiro && v.ficheiro[0]) { const r = await upload(v.ficheiro[0]); doc.ficheiro = r.id; doc.tipo = r.contentType; }
    d.id ? await store.set('documentos', d.id, doc) : await store.add('documentos', doc); toast('Documento guardado');
  }, onDelete: d.id ? async () => { await store.remove('documentos', d.id); if (d.ficheiro) deleteFile(d.ficheiro); } : null });
}

/* Special days */
function vDatas(){
  const t = today();
  const L = S.data.datas.map(s => { const n = nextOcc(s.data, s.anual !== false); return {...s, n, days:diffDays(t,n), years: s.anual !== false ? n.getFullYear() - parse(s.data).getFullYear() : null}; }).sort((a,b) => (a.days<0)-(b.days<0) || Math.abs(a.days)-Math.abs(b.days));
  return header('Datas especiais','datas') + (L.length ? `<div class="stack">${L.map(s => `<button class="card row" style="border:0;text-align:left;width:100%" data-act="editDay" data-id="${s.id}">
    <div style="width:74px;text-align:center;flex:none"><div class="num" style="font-family:var(--display);font-size:34px;font-weight:800;color:color-mix(in srgb,var(--c-datas) 75%,var(--ink));line-height:1">${s.days<0?'✓':s.days}</div><div class="small muted">${s.days===0?'é hoje!':s.days<0?'passou':s.days===1?'dia':'dias'}</div></div>
    <div class="grow"><h3>${esc(s.titulo)}</h3><div class="small muted">${fmtDate(iso(s.n))}${s.years>0?` · ${s.years} ${s.years===1?'ano':'anos'}`:''}</div></div></button>`).join('')}</div>`
    : empty('datas','Aniversários, o dia em que se conheceram, a próxima viagem… vejam quanto falta.',['newDay','Adicionar data'])) + fab('newDay');
}
function dayForm(s={}){
  sheet({ title: s.id ? 'Editar data' : 'Nova data especial', fields:[
    {id:'titulo',label:'Nome',value:s.titulo,required:true,ph:'O nosso aniversário'},
    {id:'data',label:'Data',type:'date',value:s.data,required:true,hint:'Para aniversários, põe a data original (ex.: o ano em que começou).'},
    {id:'anual',label:'Repete todos os anos',type:'checkbox',value:s.id ? s.anual !== false : true}
  ], onSave: async v => { s.id ? await store.set('datas', s.id, v) : await store.add('datas', v); toast('Data guardada'); },
  onDelete: s.id ? () => store.remove('datas', s.id) : null });
}

/* Meals */
function vRefeicoes(){
  const w = parse(view.week); const t = iso(today());
  const titles = S.data.receitas.map(r => r.titulo);
  let html = '';
  for (let i=0;i<7;i++){
    const d = addDays(w,i), k = iso(d), r = S.data.refeicoes.find(x => x.id === k) || {};
    html += `<div class="card mealday" ${k===t?'style="outline:2px solid var(--c-refeicoes)"':''}><div class="d"><div style="text-transform:capitalize">${DIAS_C[i]}</div><div class="num muted small">${d.getDate()}/${d.getMonth()+1}</div></div><div>
      <button class="mealslot" data-act="meal" data-d="${k}" data-slot="almoco"><small>Almoço</small>${r.almoco?esc(r.almoco):'<span class="muted">—</span>'}</button>
      <button class="mealslot" data-act="meal" data-d="${k}" data-slot="jantar"><small>Jantar</small>${r.jantar?esc(r.jantar):'<span class="muted">—</span>'}</button></div></div>`;
  }
  const end = addDays(w,6);
  return header('Refeições','refeicoes') + `<div class="row between" style="margin-bottom:12px"><button class="iconbtn" data-act="wkPrev" aria-label="Semana anterior">${ic('back')}</button><h3>${w.getDate()} ${MESES[w.getMonth()].slice(0,3)} – ${end.getDate()} ${MESES[end.getMonth()].slice(0,3)}</h3><button class="iconbtn" data-act="wkNext" aria-label="Semana seguinte">${ic('chev')}</button></div><div class="week">${html}</div>
  <datalist id="recipe-titles">${titles.map(x => `<option value="${esc(x)}">`).join('')}</datalist>`;
}

/* Timetable */
function vHorario(){
  const ids = memberIds();
  const who = view.ttWho;
  const rows = S.data.horario.filter(h => who === 'todos' || h.quem === who);
  let days = '';
  for (let i=0;i<7;i++){
    const it = rows.filter(h => +h.dia === i).sort((a,b) => (a.inicio||'').localeCompare(b.inicio||''));
    if (!it.length) continue;
    days += `<div><div class="label" style="margin:0 4px 6px">${['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'][i]}</div><div class="stack" style="gap:6px">${it.map(h => `<button class="slot" style="--c:${colorOf(h.quem)}" data-act="editSlot" data-id="${h.id}"><div class="row between"><b>${esc(h.titulo)}</b><span class="num small muted">${esc(h.inicio||'')}${h.fim?'–'+esc(h.fim):''}</span></div><div class="small muted">${esc(nameOf(h.quem))}${h.local?' · '+esc(h.local):''}</div></button>`).join('')}</div></div>`;
  }
  return header('Horários','horario') + `<div class="seg" style="margin-bottom:14px"><button class="${who==='todos'?'on':''}" data-act="ttWho" data-w="todos">Os dois</button>${ids.map(id => `<button class="${who===id?'on':''}" data-act="ttWho" data-w="${esc(id)}">${esc(nameOf(id))}</button>`).join('')}</div>` +
  (days ? `<div class="tt">${days}</div>` : empty('horario','Trabalho, ginásio, aulas… vejam quando estão os dois livres.',['newSlot','Adicionar horário'])) + fab('newSlot');
}
function slotForm(h={}){
  sheet({ title: h.id ? 'Editar horário' : 'Novo horário', fields:[
    {id:'titulo',label:'O quê',value:h.titulo,required:true,ph:'Trabalho'},
    {id:'quem',label:'De quem',type:'select',options:whoOptions(false),value:h.quem||S.uid},
    {id:'dia',label:'Dia',type:'select',options:['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'].map((t,i) => ({v:i,t})),value:h.dia ?? 0},
    {id:'inicio',label:'Início',type:'time',value:h.inicio||'09:00'},
    {id:'fim',label:'Fim',type:'time',value:h.fim||'18:00'},
    {id:'local',label:'Local (opcional)',value:h.local},
    ...(h.id ? [] : [{id:'repetir',label:'Repetir de segunda a sexta',type:'checkbox'}])
  ], onSave: async v => {
    const base = {titulo:v.titulo, quem:v.quem, dia:+v.dia, inicio:v.inicio, fim:v.fim, local:v.local};
    if (h.id) await store.set('horario', h.id, base);
    else if (v.repetir) { for (let i=0;i<5;i++) await store.add('horario', {...base, dia:i}); }
    else await store.add('horario', base);
    toast('Horário guardado');
  }, onDelete: h.id ? () => store.remove('horario', h.id) : null });
}

/* Recipes */
function vReceitas(){
  const r = S.data.receitas.find(x => x.id === view.recipeId);
  if (r) {
    const ing = (r.ingredientes||'').split('\n').map(s => s.trim()).filter(Boolean);
    return `<header class="top"><div class="brand"><button class="back" data-act="recipeBack" aria-label="Voltar">${ic('back')}</button><h1 style="font-size:24px">${esc(r.titulo)}</h1></div><button class="iconbtn" data-act="editRecipe" data-id="${r.id}" aria-label="Editar">${ic('edit')}</button></header>${statusBar()}
    ${r.foto ? `<img class="photo-lg" src="${blobUrl(r.foto)}" alt="" style="margin-bottom:12px;aspect-ratio:16/10;object-fit:cover">` : ''}
    <div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:12px">${r.tempo?`<span class="pill" style="--c:var(--c-receitas)">${esc(r.tempo)} min</span>`:''}${r.doses?`<span class="pill" style="--c:var(--c-receitas)">${esc(r.doses)} doses</span>`:''}</div>
    <div class="card stack"><div class="row between"><h3>Ingredientes</h3>${ing.length && S.writable ? `<button class="btn sm" data-act="toShopping" data-id="${r.id}">${ic('cart').replace('<svg','<svg style="width:16px;height:16px;vertical-align:-3px"')} Para a lista</button>`:''}</div>${ing.length?`<ul style="margin:0;padding-left:20px">${ing.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`:'<p class="muted">—</p>'}</div>
    <div class="card stack" style="margin-top:12px"><h3>Preparação</h3><p class="pre">${esc(r.passos||'—')}</p></div>
    <button class="btn" style="margin-top:12px;width:100%" data-act="planRecipe" data-id="${r.id}">Pôr no plano de refeições</button>`;
  }
  const R = [...S.data.receitas].sort((a,b) => (a.titulo||'').localeCompare(b.titulo||''));
  return header('Receitas','receitas') + (R.length ? `<div class="tiles" style="margin-top:0">${R.map(r => `<button class="tile rcard" style="--c:var(--c-receitas);padding:0;overflow:hidden;min-height:0;justify-content:flex-start" data-act="openRecipe" data-id="${r.id}">${r.foto?`<img src="${blobUrl(r.foto)}" alt="" style="width:100%;aspect-ratio:4/3;object-fit:cover;display:block">`:`<div style="width:100%;aspect-ratio:4/3;display:grid;place-items:center;background:color-mix(in srgb,var(--c-receitas) 14%,transparent);color:var(--c-receitas)">${ic('receitas').replace('<svg','<svg style="width:40px;height:40px"')}</div>`}<div style="padding:10px 12px 14px"><h3 style="font-size:16px">${esc(r.titulo)}</h3><div class="sub">${r.tempo?esc(r.tempo)+' min':''}</div></div></button>`).join('')}</div>`
    : empty('receitas','Guardem as receitas que fazem juntos e as que querem experimentar.',['newRecipe','Adicionar receita'])) + fab('newRecipe');
}
function recipeForm(r={}){
  sheet({ title: r.id ? 'Editar receita' : 'Nova receita', fields:[
    {id:'titulo',label:'Nome',value:r.titulo,required:true,ph:'Arroz de pato'},
    {id:'tempo',label:'Tempo (min)',type:'number',value:r.tempo},
    {id:'doses',label:'Doses',type:'number',value:r.doses},
    {id:'ingredientes',label:'Ingredientes (um por linha)',type:'textarea',value:r.ingredientes,ph:'2 cebolas\n1 dente de alho'},
    {id:'passos',label:'Preparação',type:'textarea',value:r.passos},
    {id:'foto',label:r.foto?'Trocar foto':'Foto (opcional)',type:'file',accept:'image/*'}
  ], onSave: async v => {
    const doc = {titulo:v.titulo, tempo:v.tempo, doses:v.doses, ingredientes:v.ingredientes, passos:v.passos, foto:r.foto||null, criado:r.criado||Date.now()};
    if (v.foto && v.foto[0]) { const u = await upload(v.foto[0]); doc.foto = u.id; }
    r.id ? await store.set('receitas', r.id, doc) : await store.add('receitas', doc); toast('Receita guardada');
  }, onDelete: r.id ? async () => { await store.remove('receitas', r.id); view.recipeId = null; } : null });
}

/* Places */
const PTYPES = {casa:'Casa', restaurante:'Restaurante', cafe:'Café', viagem:'Viagem', passeio:'Passeio', desejo:'Queremos ir', outro:'Outro'};
function vMapa(){
  const f = view.placeFilter;
  const L = S.data.lugares.filter(l => f === 'todos' || (f === 'visitar' ? !l.visitado : l.visitado)).sort((a,b) => (a.nome||'').localeCompare(b.nome||''));
  return header('Lugares','mapa') + `<div class="seg" style="margin-bottom:14px">${[['todos','Todos'],['visitar','Por visitar'],['visitados','Já fomos']].map(([k,t]) => `<button class="${f===k?'on':''}" data-act="placeF" data-f="${k}">${t}</button>`).join('')}</div>` +
  (L.length ? `<div class="stack">${L.map(l => { const q = encodeURIComponent([l.nome,l.morada].filter(Boolean).join(', ')); return `<div class="card stack" style="gap:8px"><div class="row"><div class="ico" style="--c:var(--c-mapa);align-self:center;width:40px;height:40px">${ic('mapa')}</div><div class="grow"><h3>${esc(l.nome)}</h3><div class="small muted">${esc(PTYPES[l.tipo]||'Lugar')}${l.morada?' · '+esc(l.morada):''}</div></div><button class="iconbtn" data-act="editPlace" data-id="${l.id}" aria-label="Editar">${ic('edit')}</button></div>${l.nota?`<p class="small">${esc(l.nota)}</p>`:''}<div class="row" style="gap:8px;flex-wrap:wrap"><a class="btn sm" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Abrir no mapa ${ic('ext').replace('<svg','<svg style="width:14px;height:14px;vertical-align:-2px"')}</a><button class="btn sm" data-act="togglePlace" data-id="${l.id}">${l.visitado?'✓ Já fomos':'Marcar como visitado'}</button></div></div>`; }).join('')}</div>`
  : empty('mapa','O restaurante preferido, a casa dos pais, os sítios onde querem ir.',['newPlace','Adicionar lugar'])) + fab('newPlace');
}
function placeForm(l={}){
  sheet({ title: l.id ? 'Editar lugar' : 'Novo lugar', fields:[
    {id:'nome',label:'Nome',value:l.nome,required:true,ph:'Tasca do Zé'},
    {id:'tipo',label:'Tipo',type:'select',options:Object.entries(PTYPES).map(([v,t]) => ({v,t})),value:l.tipo||'restaurante'},
    {id:'morada',label:'Morada ou cidade',value:l.morada},
    {id:'nota',label:'Notas',type:'textarea',value:l.nota},
    {id:'visitado',label:'Já fomos',type:'checkbox',value:l.visitado}
  ], onSave: async v => { l.id ? await store.set('lugares', l.id, v) : await store.add('lugares', v); toast('Lugar guardado'); },
  onDelete: l.id ? () => store.remove('lugares', l.id) : null });
}

/* Messages */
function vMensagens(){
  const M = [...S.msgs].reverse();
  let lastDay = '';
  const body = M.map(m => { const d = new Date(m.ts||0); const day = iso(d); const sep = day !== lastDay ? `<div class="label" style="text-align:center;margin:10px 0 4px">${day===iso(today())?'Hoje':fmtDate(day)}</div>` : ''; lastDay = day; const me = m.de === S.uid;
    return `${sep}<div class="bubble ${me?'me':''}">${esc(m.texto)}<div class="meta">${me?'':esc(nameOf(m.de))+' · '}${pad(d.getHours())}:${pad(d.getMinutes())}</div></div>`; }).join('');
  return header('Mensagens','mensagens') + (M.length ? `<div class="chat" id="chat">${body}</div>` : empty('mensagens','Deixem recados um ao outro: "não te esqueças do pão" 💛')) +
    (S.writable ? `<form class="chatbar" id="chatform"><div class="inner"><input class="in" id="chatin" placeholder="Escreve uma mensagem…" autocomplete="off" maxlength="2000"><button class="btn primary" aria-label="Enviar">${ic('send').replace('<svg','<svg style="width:20px;height:20px;vertical-align:-4px"')}</button></div></form><div style="height:70px"></div>` : '');
}

/* Members */
function vNos(){
  const ids = memberIds(); const c = couple(); const code = S.household && S.household.invite_code;
  return header('Nós dois','nos') + `<div class="stack">${ids.map(id => { const m = members().find(x => x.id === id) || {}; return `<div class="card row">${avatar(id,52)}<div class="grow"><h3>${esc(nameOf(id))}${id===S.uid?' <span class="pill">tu</span>':''}</h3><div class="small muted">${m.aniversario?'Aniversário: '+fmtDate(m.aniversario):'Sem aniversário definido'}</div></div>${id===S.uid?`<button class="iconbtn" data-act="editMe" aria-label="Editar o meu perfil">${ic('edit')}</button>`:''}</div>`; }).join('')}</div>
  <div class="card stack" style="margin-top:14px"><div class="row between"><div class="label">O nosso ninho</div><button class="btn sm" data-act="couple">Editar</button></div><p><b>${esc(c.nome||'Ninho')}</b></p><p class="muted small">${c.desde?'Juntos desde '+fmtDate(c.desde):'Ainda sem data de início.'}</p></div>
  ${code ? `<div class="card stack" style="margin-top:14px"><div class="label">Código de convite</div><div class="row between"><b class="num" style="font-family:var(--display);font-size:28px;letter-spacing:.12em">${esc(code)}</b><button class="btn sm" data-act="copy" data-v="${esc(code)}">Copiar</button></div><button class="btn primary" data-act="invite">Enviar convite</button><p class="small muted">A tua namorada cria conta na app e escolhe "Entrar num ninho" com este código.</p></div>` : ''}
  ${pushCard()}
  <div class="card stack" style="margin-top:14px"><div class="label">Conta</div><p class="small">${esc(S.email||'')}</p><button class="btn" data-act="logout" style="justify-self:start">Terminar sessão</button></div>`;
}

/* Gallery */
function vGaleria(){
  const G = [...S.data.galeria].sort((a,b) => (b.ts||0)-(a.ts||0));
  const cur = G.find(g => g.id === view.photoId);
  if (cur) return `<header class="top"><div class="brand"><button class="back" data-act="photoBack" aria-label="Voltar">${ic('back')}</button><h1 style="font-size:20px">${esc(cur.legenda||fmtDate(iso(new Date(cur.ts||0))))}</h1></div><button class="iconbtn" data-act="editPhoto" data-id="${cur.id}" aria-label="Editar">${ic('edit')}</button></header><img class="photo-lg" src="${blobUrl(cur.foto)}" alt="${esc(cur.legenda||'')}"><p class="small muted" style="margin-top:8px">Enviada por ${esc(nameOf(cur.por))} · ${fmtDate(iso(new Date(cur.ts||0)))}</p>`;
  return header('Galeria','galeria') + (G.length ? `<div class="grid3">${G.map(g => `<button data-act="openPhoto" data-id="${g.id}" aria-label="${esc(g.legenda||'Foto')}"><img src="${blobUrl(g.foto)}" alt="" loading="lazy"></button>`).join('')}</div>` : empty('galeria','As vossas fotos favoritas, num álbum só vosso.',['newPhoto','Enviar fotos'])) + fab('newPhoto');
}

/* Contacts */
function vContactos(){
  const C = [...S.data.contactos].sort((a,b) => (a.nome||'').localeCompare(b.nome||''));
  return header('Contactos','contactos') + (C.length ? `<div class="card">${C.map(c => `<div class="list-item"><div class="grow"><b>${esc(c.nome)}</b>${c.relacao?` <span class="pill" style="--c:var(--c-contactos)">${esc(c.relacao)}</span>`:''}<div class="small muted">${[c.telefone,c.email].filter(Boolean).map(esc).join(' · ')}</div>${c.nota?`<div class="small">${esc(c.nota)}</div>`:''}</div>${c.telefone?`<button class="iconbtn" data-act="copy" data-v="${esc(c.telefone)}" aria-label="Copiar número">${ic('copy')}</button>`:''}<button class="iconbtn" data-act="editContact" data-id="${c.id}" aria-label="Editar">${ic('edit')}</button></div>`).join('')}</div>`
  : empty('contactos','Médico de família, canalizador, a vizinha do 3.º… à mão dos dois.',['newContact','Adicionar contacto'])) + fab('newContact');
}
function contactForm(c={}){
  sheet({ title: c.id ? 'Editar contacto' : 'Novo contacto', fields:[
    {id:'nome',label:'Nome',value:c.nome,required:true},
    {id:'relacao',label:'Relação',value:c.relacao,ph:'Família, saúde, serviços…'},
    {id:'telefone',label:'Telefone',type:'tel',value:c.telefone},
    {id:'email',label:'Email',type:'email',value:c.email},
    {id:'nota',label:'Notas',type:'textarea',value:c.nota}
  ], onSave: async v => { c.id ? await store.set('contactos', c.id, v) : await store.add('contactos', v); toast('Contacto guardado'); },
  onDelete: c.id ? () => store.remove('contactos', c.id) : null });
}

/* ---------- router & render ---------- */
const VIEWS = {inicio:vHome, listas:vListas, calendario:vCalendario, orcamento:vOrcamento, documentos:vDocumentos, datas:vDatas, refeicoes:vRefeicoes, horario:vHorario, receitas:vReceitas, mapa:vMapa, mensagens:vMensagens, nos:vNos, galeria:vGaleria, contactos:vContactos, novidades:vNovidades};
const route = () => { const h = location.hash.slice(1); return VIEWS[h] ? h : 'inicio'; };
let lastRoute = null;
function render(){
  if (!S.hid) return;
  const r = route();
  const y = window.scrollY;
  const active = document.activeElement && document.activeElement.id;
  const keep = active === 'newitem' || active === 'chatin' ? {id:active, v:document.activeElement.value} : null;
  $('#app').innerHTML = VIEWS[r]();
  if (keep) { const el = document.getElementById(keep.id); if (el) { el.value = keep.v; el.focus(); } }
  $('#nav').innerHTML = [['inicio','home','Início'],['calendario','calendario','Calendário'],['listas','listas','Listas'],['mensagens','mensagens','Mensagens']]
    .map(([k,i,t]) => `<a href="#${k}" class="${r===k?'on':''}" aria-label="${t}">${ic(i)}</a>`).join('');
  if (r !== lastRoute) { window.scrollTo(0,0); lastRoute = r; } else window.scrollTo(0,y);
  if (r === 'inicio') drawHero();
  if (r === 'mensagens' && lastChatCount !== S.msgs.length) { lastChatCount = S.msgs.length; window.scrollTo(0, document.body.scrollHeight); }
}
let lastChatCount = -1;
window.addEventListener('hashchange', () => { view.listId = null; view.recipeId = null; view.photoId = null; lastChatCount = -1; render(); });

/* hero texture: little interlocking twigs, drawn once per render */
function drawHero(){
  const c = $('#hero-canvas'); if (!c) return;
  const r = c.getBoundingClientRect(); const dpr = window.devicePixelRatio || 1;
  c.width = r.width*dpr; c.height = r.height*dpr; const g = c.getContext('2d'); g.scale(dpr,dpr);
  g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1.2; g.lineCap = 'round';
  let s = 7; const rnd = () => (s = (s*16807) % 2147483647) / 2147483647;
  const cx = r.width*0.82, cy = r.height*0.55;
  for (let i=0;i<70;i++){
    const a = rnd()*Math.PI*2, rad = 40 + rnd()*90, len = 30 + rnd()*50, t = a + Math.PI/2 + (rnd()-.5);
    const x = cx + Math.cos(a)*rad, y = cy + Math.sin(a)*rad*0.6;
    g.beginPath(); g.moveTo(x - Math.cos(t)*len/2, y - Math.sin(t)*len/2); g.quadraticCurveTo(x + (rnd()-.5)*10, y + (rnd()-.5)*10, x + Math.cos(t)*len/2, y + Math.sin(t)*len/2); g.stroke();
  }
}

/* ---------- actions ---------- */
const byId = (c, id) => S.data[c].find(x => x.id === id);
document.addEventListener('click', async (e) => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, id = b.dataset.id;
  const needW = !['openList','listBack','calDay','calPrev','calNext','budPrev','budNext','wkPrev','wkNext','ttWho','openRecipe','recipeBack','placeF','openPhoto','photoBack','copy','logout','invite','pushOn','pushOff','budTab','potHistory'].includes(a);
  if (needW && !S.writable) { toast('Estás em modo de leitura.'); return; }
  switch(a){
    case 'couple': { const c = couple(); sheet({title:'O nosso ninho', fields:[{id:'nome',label:'Nome da app',value:c.nome||'Ninho'},{id:'desde',label:'Juntos desde',type:'date',value:c.desde}], onSave: async v => { await store.set('definicoes','casal',v); toast('Guardado'); }}); break; }
    case 'newList': sheet({title:'Nova lista', fields:[{id:'nome',label:'Nome',required:true,ph:'Compras'},{id:'tipo',label:'Tipo',type:'select',options:[{v:'compras',t:'Compras'},{v:'tarefas',t:'Tarefas'},{v:'outra',t:'Outra'}]}], onSave: async v => { const nid = await store.add('listas',{...v, itens:[], criado:Date.now()}); view.listId = nid; }}); break;
    case 'openList': view.listId = id; render(); break;
    case 'listBack': view.listId = null; render(); break;
    case 'editList': { const l = byId('listas', view.listId); sheet({title:'Editar lista', fields:[{id:'nome',label:'Nome',value:l.nome,required:true}], onSave: v => store.update('listas', l.id, {nome:v.nome}), onDelete: async () => { await store.remove('listas', l.id); view.listId = null; }}); break; }
    case 'toggleItem': { const l = byId('listas', view.listId); await updateList(l, (l.itens||[]).map(i => i.id === id ? {...i, feito:!i.feito} : i)); break; }
    case 'delItem': { const l = byId('listas', view.listId); await updateList(l, (l.itens||[]).filter(i => i.id !== id)); break; }
    case 'clearDone': { const l = byId('listas', view.listId); await updateList(l, (l.itens||[]).filter(i => !i.feito)); break; }
    case 'calDay': view.calSel = b.dataset.d; render(); break;
    case 'calPrev': case 'calNext': { const m = parse(view.calMonth+'-01'); m.setMonth(m.getMonth() + (a==='calNext'?1:-1)); view.calMonth = iso(m).slice(0,7); render(); break; }
    case 'newEvent': eventForm(); break;
    case 'editEvent': eventForm(byId('eventos', id)); break;
    case 'budPrev': case 'budNext': { const m = parse(view.budMonth+'-01'); m.setMonth(m.getMonth() + (a==='budNext'?1:-1)); view.budMonth = iso(m).slice(0,7); render(); break; }
    case 'newMov': movForm(); break;
    case 'editMov': movForm(byId('orcamento', id)); break;
    case 'budTab': view.budTab = b.dataset.t; render(); break;
    case 'newJointMov': movForm({}, {conta:'conjunta', cat:'Casa'}); break;
    case 'jointDeposit': movForm({}, {conta:'conjunta', tipo:'receita', cat:'Contribuição', titulo:'Contribuição mensal', valor:+b.dataset.v, pago:id}); break;
    case 'jointSettings': { const cfg = jointCfg(); const sal = cfg.salarios || {}; const ids = memberIds();
      sheet({title:'Conta conjunta', fields:[{id:'pct',label:'Percentagem do salário de cada um (%)',type:'number',value:cfg.pct ?? 30}, ...ids.map((m,i) => ({id:'s'+i, label:`Salário líquido de ${nameOf(m)} (€)`, type:'number', value:sal[m]}))],
        onSave: async v => { const salarios = {}; ids.forEach((m,i) => { if (v['s'+i] != null) salarios[m] = Math.abs(v['s'+i]); }); await store.set('definicoes','conjunta',{pct: v.pct ?? 30, salarios}); toast('Guardado'); }}); break; }
    case 'newPot': potForm(); break;
    case 'editPot': potForm(byId('vaquinhas', id)); break;
    case 'potMove': potMoveForm(byId('vaquinhas', id), +b.dataset.dir); break;
    case 'potHistory': potHistory(byId('vaquinhas', id)); break;
    case 'potDelMov': { const v = byId('vaquinhas', id); await store.update('vaquinhas', id, {movs:(v.movs||[]).filter(m => m.id !== b.dataset.m)}); closeSheet(); potHistory(byId('vaquinhas', id)); toast('Apagado'); break; }
    case 'settle': { const open = S.data.orcamento.filter(r => !isJoint(r) && r.tipo !== 'receita' && r.partilhado && !r.acertado); for (const r of open) await store.update('orcamento', r.id, {acertado:true}); toast('Contas acertadas'); break; }
    case 'newDoc': docForm(); break;
    case 'editDoc': docForm(byId('documentos', id)); break;
    case 'newDay': dayForm(); break;
    case 'editDay': dayForm(byId('datas', id)); break;
    case 'wkPrev': case 'wkNext': view.week = iso(addDays(parse(view.week), a==='wkNext'?7:-7)); render(); break;
    case 'meal': { const k = b.dataset.d, slot = b.dataset.slot, r = S.data.refeicoes.find(x => x.id === k) || {};
      sheet({title:`${slot==='almoco'?'Almoço':'Jantar'} · ${fmtDate(k)}`, fields:[{id:'v',label:'O que vamos comer',value:r[slot],list:'recipe-titles',ph:'Bacalhau à Brás'}],
        onSave: async v => { const doc = {almoco:r.almoco||'', jantar:r.jantar||''}; doc[slot] = v.v; await store.set('refeicoes', k, doc); },
        onDelete: r[slot] ? async () => { await store.set('refeicoes', k, {almoco:r.almoco||'', jantar:r.jantar||'', [slot]:''}); } : null }); break; }
    case 'ttWho': view.ttWho = b.dataset.w; render(); break;
    case 'newSlot': slotForm(); break;
    case 'editSlot': slotForm(byId('horario', id)); break;
    case 'newRecipe': recipeForm(); break;
    case 'openRecipe': view.recipeId = id; window.scrollTo(0,0); render(); break;
    case 'recipeBack': view.recipeId = null; render(); break;
    case 'editRecipe': recipeForm(byId('receitas', id)); break;
    case 'toShopping': { const r = byId('receitas', id); const ing = (r.ingredientes||'').split('\n').map(s => s.trim()).filter(Boolean);
      const lists = S.data.listas; if (!lists.length) { const nid = await store.add('listas', {nome:'Compras', tipo:'compras', itens:ing.map(t => ({id:rid(), texto:t, feito:false})), criado:Date.now()}); toast('Criei a lista Compras'); break; }
      sheet({title:'Adicionar a que lista?', fields:[{id:'l',label:'Lista',type:'select',options:lists.map(l => ({v:l.id,t:l.nome})),value:(lists.find(l => l.tipo==='compras')||lists[0]).id}], save:'Adicionar',
        onSave: async v => { const l = byId('listas', v.l); await updateList(l, [...(l.itens||[]), ...ing.map(t => ({id:rid(), texto:t, feito:false}))]); toast(`${ing.length} ingredientes adicionados`); }}); break; }
    case 'planRecipe': { const r = byId('receitas', id); sheet({title:'Quando?', fields:[{id:'d',label:'Dia',type:'date',value:iso(today()),required:true},{id:'s',label:'Refeição',type:'select',options:[{v:'jantar',t:'Jantar'},{v:'almoco',t:'Almoço'}]}], save:'Planear',
        onSave: async v => { const cur = S.data.refeicoes.find(x => x.id === v.d) || {}; await store.set('refeicoes', v.d, {almoco:cur.almoco||'', jantar:cur.jantar||'', [v.s]:r.titulo}); toast('Adicionado ao plano'); }}); break; }
    case 'placeF': view.placeFilter = b.dataset.f; render(); break;
    case 'newPlace': placeForm(); break;
    case 'editPlace': placeForm(byId('lugares', id)); break;
    case 'togglePlace': { const l = byId('lugares', id); await store.update('lugares', id, {visitado:!l.visitado}); break; }
    case 'editMe': { const m = members().find(x => x.id === S.uid) || {}; sheet({title:'O meu perfil', fields:[{id:'apelido',label:'Como queres aparecer',value:m.apelido,ph:'Ricardo'},{id:'aniversario',label:'Aniversário',type:'date',value:m.aniversario}], onSave: v => store.set('membros', S.uid, {email:S.email, apelido:v.apelido, aniversario:v.aniversario, entrou:m.entrou||Date.now()})}); break; }
    case 'newPhoto':
      sheet({title:'Enviar fotos', fields:[{id:'f',label:'Fotos',type:'file',accept:'image/*',multiple:true,required:true},{id:'legenda',label:'Legenda (opcional)'}], save:'Enviar',
        onSave: async v => { const files = [...(v.f||[])]; if (!files.length) { toast('Escolhe pelo menos uma foto'); throw new Error('none'); } for (const f of files) { const u = await upload(f); await store.add('galeria', {foto:u.id, legenda:v.legenda, por:S.uid, ts:Date.now()}); } toast(files.length === 1 ? 'Foto enviada' : `${files.length} fotos enviadas`); }}); break;
    case 'openPhoto': view.photoId = id; render(); break;
    case 'photoBack': view.photoId = null; render(); break;
    case 'editPhoto': { const g = byId('galeria', id); sheet({title:'Foto', fields:[{id:'legenda',label:'Legenda',value:g.legenda}], onSave: v => store.update('galeria', id, {legenda:v.legenda}), onDelete: async () => { await store.remove('galeria', id); view.photoId = null; deleteFile(g.foto); }}); break; }
    case 'newContact': contactForm(); break;
    case 'editContact': contactForm(byId('contactos', id)); break;
    case 'logout': await S.sb.auth.signOut(); location.hash = ''; break;
    case 'invite': {
      const code = S.household && S.household.invite_code; const link = location.origin + location.pathname;
      const text = `Junta-te ao nosso Ninho 💛\n1. Abre ${link}\n2. Cria conta\n3. Escolhe "Entrar num ninho" e usa o código ${code}`;
      if (navigator.share) { try { await navigator.share({title:'Ninho', text}); } catch(err) {} }
      else { try { await navigator.clipboard.writeText(text); toast('Convite copiado. Cola-o no WhatsApp.'); } catch(err) { toast(text); } }
      break; }
    case 'pushOn': enablePush(); break;
    case 'pushOff': disablePush(); break;
    case 'copy': try { await navigator.clipboard.writeText(b.dataset.v); toast('Copiado'); } catch(err) { toast(b.dataset.v); } break;
  }
});
document.addEventListener('submit', async (e) => {
  if (e.target.id === 'additem') {
    e.preventDefault(); const inp = $('#newitem'); const t = inp.value.trim(); if (!t) return;
    const l = byId('listas', view.listId); inp.value = '';
    try { await updateList(l, [...(l.itens||[]), {id:rid(), texto:t, feito:false}]); } catch(err) { inp.value = t; }
  }
  if (e.target.id === 'chatform') {
    e.preventDefault(); const inp = $('#chatin'); const t = inp.value.trim(); if (!t) return; inp.value = '';
    try { await store.add('mensagens', {texto:t, de:S.uid, ts:Date.now()}); } catch(err) { inp.value = t; }
  }
});


/* ---------- activity & notifications ---------- */
S.activity = [];
const A_ROUTE = { lugares:'mapa', vaquinhas:'orcamento', eventos:'calendario' };
const A_NOUN = { listas:'a lista', eventos:'o evento', orcamento:'o movimento', documentos:'o documento', datas:'a data especial', horario:'o horário', receitas:'a receita', lugares:'o lugar', contactos:'o contacto', vaquinhas:'a vaquinha', galeria:'uma foto' };
const A_VERB = { add:'adicionou', edit:'alterou', delete:'apagou' };
const A_ICON = { listas:'listas', eventos:'calendario', orcamento:'orcamento', documentos:'documentos', datas:'datas', refeicoes:'refeicoes', horario:'horario', receitas:'receitas', lugares:'mapa', mensagens:'mensagens', galeria:'galeria', contactos:'contactos', vaquinhas:'orcamento' };
function describeActivity(a){
  const who = a.actor === S.uid ? 'Tu' : nameOf(a.actor);
  const q = (s) => s ? ` «${s}»` : '';
  if (a.col === 'mensagens') return `${who}: ${a.title || 'nova mensagem'}`;
  if (a.action === 'list_add') { const [item, list] = (a.title||'').split('|'); return `${who} adicionou «${item}» à lista ${list}`; }
  if (a.action === 'list_remove') return `${who} removeu itens de uma lista`;
  if (a.action === 'list_check') return `${who} riscou itens de uma lista`;
  if (a.col === 'galeria') return a.action === 'add' ? `${who} adicionou uma foto${q(a.title)}` : `${who} ${A_VERB[a.action]} uma foto`;
  if (a.col === 'refeicoes') return `${who} alterou o plano de refeições`;
  if (a.col === 'vaquinhas' && a.action === 'edit') return `${who} mexeu na vaquinha${q(a.title)}`;
  return `${who} ${A_VERB[a.action] || 'alterou'} ${A_NOUN[a.col] || 'um item'}${q(a.title)}`;
}
function timeAgo(ts){
  const s = (Date.now() - new Date(ts).getTime()) / 1000;
  if (s < 60) return 'agora'; if (s < 3600) return `há ${Math.floor(s/60)} min`; if (s < 86400) return `há ${Math.floor(s/3600)} h`;
  return fmtDate(iso(new Date(ts)));
}
let seenActivity = 0;
try { seenActivity = +localStorage.getItem('ninho-seen') || 0; } catch(e) {}
const unseen = () => S.activity.filter(a => a.actor !== S.uid && new Date(a.created_at).getTime() > seenActivity).length;
async function loadActivity(){
  const { data } = await S.sb.from('activity').select('*').eq('household_id', S.hid).order('created_at', {ascending:false}).limit(60);
  if (data) { S.activity = data; scheduleRender(); }
}
function onActivity(p){
  const a = p.new; if (!a || a.household_id !== S.hid) return;
  S.activity = [a, ...S.activity.filter(x => x.id !== a.id)].slice(0, 60);
  if (a.actor !== S.uid) toast(describeActivity(a));
  scheduleRender();
}
function vNovidades(){
  const L = S.activity;
  try { seenActivity = Date.now(); localStorage.setItem('ninho-seen', String(seenActivity)); } catch(e) {}
  return header('Novidades') + (L.length ? `<div class="card">${L.map(a => `<a class="list-item" href="#${A_ROUTE[a.col] || a.col}" style="text-decoration:none;color:inherit">${avatar(a.actor, 34)}<div class="grow"><div style="font-weight:600">${esc(describeActivity(a))}</div><div class="small muted">${timeAgo(a.created_at)}</div></div><span class="hdr-ico" style="--c:var(--c-${A_ICON[a.col]||'listas'});--t:var(--t-${A_ICON[a.col]||'listas'});width:30px;height:30px;border-radius:10px">${ic(A_ICON[a.col]||'listas').replace('<svg','<svg style="width:16px;height:16px"')}</span></a>`).join('')}</div>`
    : empty('mensagens','Aqui aparece tudo o que vocês os dois adicionam, alteram ou apagam.'));
}
const pushSupported = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
function b64ToBytes(b64){ const p = '='.repeat((4 - b64.length % 4) % 4); const s = atob((b64 + p).replace(/-/g,'+').replace(/_/g,'/')); return Uint8Array.from(s, c => c.charCodeAt(0)); }
S.pushOn = false;
async function checkPush(){
  if (!pushSupported() || Notification.permission !== 'granted') { S.pushOn = false; return; }
  try { const reg = await navigator.serviceWorker.ready; const sub = await reg.pushManager.getSubscription(); S.pushOn = !!sub; if (sub) savePushSub(sub); } catch(e) {}
}
async function savePushSub(sub){
  const j = sub.toJSON();
  await S.sb.from('push_subscriptions').upsert({ endpoint:j.endpoint, p256dh:j.keys.p256dh, auth:j.keys.auth, user_id:S.uid, household_id:S.hid }, { onConflict:'endpoint' });
}
async function enablePush(){
  if (isIOS() && !isStandalone()) { toast('No iPhone, primeiro adiciona o Ninho ao ecrã principal e abre-o pelo ícone.'); return; }
  if (!pushSupported()) { toast('Este navegador não suporta notificações.'); return; }
  const perm = await Notification.requestPermission();
  if (perm !== 'granted') { toast('Notificações bloqueadas. Ativa-as nas Definições do telemóvel → Ninho.'); render(); return; }
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = (await reg.pushManager.getSubscription()) || await reg.pushManager.subscribe({ userVisibleOnly:true, applicationServerKey: b64ToBytes((window.NINHO_CONFIG||{}).vapidPublicKey) });
    await savePushSub(sub); S.pushOn = true; toast('Notificações ativadas 🔔'); render();
  } catch(e) { console.warn(e); toast('Não foi possível ativar as notificações.'); }
}
async function disablePush(){
  try { const reg = await navigator.serviceWorker.ready; const sub = await reg.pushManager.getSubscription(); if (sub) { await S.sb.from('push_subscriptions').delete().eq('endpoint', sub.endpoint); await sub.unsubscribe(); } } catch(e) {}
  S.pushOn = false; toast('Notificações desligadas neste telemóvel'); render();
}
function pushCard(){
  let state, btn = '';
  if (!pushSupported() && !(isIOS() && !isStandalone())) state = 'Este navegador não suporta notificações.';
  else if (isIOS() && !isStandalone()) state = 'No iPhone, as notificações só funcionam com o Ninho no ecrã principal: Safari → Partilhar → Adicionar ao ecrã principal, e depois abre-o pelo ícone.';
  else if (Notification.permission === 'denied') state = 'Estão bloqueadas. Ativa-as em Definições → Notificações → Ninho.';
  else if (S.pushOn) { state = 'Ativas neste telemóvel. Recebes um aviso sempre que a tua cara-metade adiciona, altera ou apaga alguma coisa.'; btn = `<button class="btn" data-act="pushOff" style="justify-self:start">Desligar</button>`; }
  else { state = 'Recebe um aviso sempre que a tua cara-metade adiciona, altera ou apaga alguma coisa, mesmo com a app fechada.'; btn = `<button class="btn primary" data-act="pushOn" style="justify-self:start">Ativar notificações 🔔</button>`; }
  return `<div class="card stack" style="margin-top:14px"><div class="label">Notificações</div><p class="small">${state}</p>${btn}</div>`;
}

/* ---------- auth & boot ---------- */
const LOGO = `<svg viewBox="0 0 1024 1024" aria-hidden="true"><rect width="1024" height="1024" rx="230" fill="#E3EBE4"/><g transform="translate(512 512) scale(1.4) translate(-512 -560)"><path d="M512 470c-34-56-128-32-102 36 16 40 102 88 102 88s86-48 102-88c26-68-68-92-102-36z" fill="#F2553C"/><path d="M300 600c40 120 384 120 424 0" fill="none" stroke="#1F2A24" stroke-width="30" stroke-linecap="round"/></g></svg>`;
function authHero(title, hand){
  const mags = [['listas',-8,'6%','8%'],['calendario',7,'74%','4%'],['mensagens',-5,'80%','56%'],['galeria',9,'2%','60%'],['datas',-12,'40%','-6%']]
    .map(([k,r,x,y]) => `<span class="mag" style="--c:var(--c-${k});--t:var(--t-${k});left:${x};top:${y};transform:rotate(${r}deg)">${ic(k)}</span>`).join('');
  return `<div class="auth-hero">${mags}<div class="auth-logo">${LOGO}</div></div>
    <div class="auth-title"><h1>${title}</h1><p class="hand">${hand}</p></div>`;
}
function authScreen(mode='entrar', msg=''){
  $('#nav').innerHTML = '';
  $('#app').innerHTML = `<div class="auth">
    ${authHero('Ninho','o vosso cantinho partilhado ♥')}
    <div class="auth-card stack">
    <div class="seg"><button class="${mode==='entrar'?'on':''}" data-auth="entrar">Entrar</button><button class="${mode==='criar'?'on':''}" data-auth="criar">Criar conta</button></div>
    <form id="authform" class="stack">
      <label class="field"><span>Email</span><input class="in" id="a-email" type="email" autocomplete="email" required></label>
      <label class="field"><span>Palavra-passe</span><input class="in" id="a-pass" type="password" minlength="6" autocomplete="${mode==='criar'?'new-password':'current-password'}" required></label>
      <button class="btn primary">${mode==='criar'?'Criar conta':'Entrar'}</button>
    </form></div>
    ${msg?`<div class="sticky" style="margin-top:4px"><span class="hand" style="font-size:20px">${esc(msg)}</span></div>`:''}
    </div>`;
  document.querySelectorAll('[data-auth]').forEach(b => b.onclick = () => authScreen(b.dataset.auth));
  $('#authform').onsubmit = async (e) => {
    e.preventDefault();
    const email = $('#a-email').value.trim(), password = $('#a-pass').value;
    const btn = e.target.querySelector('button.primary'); btn.disabled = true; btn.textContent = 'Um momento…';
    const res = mode === 'criar'
      ? await S.sb.auth.signUp({email, password, options:{emailRedirectTo: location.origin + location.pathname}})
      : await S.sb.auth.signInWithPassword({email, password});
    if (res.error) {
      const m = /Invalid login/i.test(res.error.message) ? 'Email ou palavra-passe errados.' : /registered/i.test(res.error.message) ? 'Já existe uma conta com este email. Usa "Entrar".' : /confirm/i.test(res.error.message) ? 'Confirma primeiro o teu email (vê a caixa de correio).' : res.error.message;
      authScreen(mode, m); return;
    }
    if (mode === 'criar' && !res.data.session) { authScreen('entrar', 'Enviámos um email de confirmação. Confirma e depois entra aqui.'); return; }
  };
}
function householdScreen(msg=''){
  $('#nav').innerHTML = '';
  $('#app').innerHTML = `<div class="auth">
    ${authHero('Bem-vindo','falta só um passo…')}
    <div class="auth-card stack"><h3>Criar um ninho novo</h3><p class="small muted">Para quem chega primeiro. Depois convidas a tua cara-metade.</p><button class="btn primary" id="hh-new">Criar o nosso ninho</button></div>
    <form class="auth-card stack" id="hh-join"><h3>Entrar num ninho</h3><p class="small muted">Escreve o código de convite que recebeste.</p><input class="in" id="hh-code" placeholder="Código (ex.: 7F3A9C)" autocomplete="off" required style="text-transform:uppercase"><button class="btn">Entrar</button></form>
    ${msg?`<div class="sticky"><span class="hand" style="font-size:20px">${esc(msg)}</span></div>`:''}
    <button class="btn danger" data-act="logout" style="justify-self:center">Terminar sessão</button></div>`;
  $('#hh-new').onclick = async () => { const { data, error } = await S.sb.rpc('create_household', {p_name:'Ninho'}); if (error) return householdScreen('Não foi possível criar. Tenta outra vez.'); start(data); };
  $('#hh-join').onsubmit = async (e) => { e.preventDefault(); const { data, error } = await S.sb.rpc('join_household', {p_code: $('#hh-code').value.trim().toUpperCase()}); if (error || !data) return householdScreen('Código não encontrado. Confirma com a tua cara-metade.'); start(data); };
}
let channel = null;
function onChange(p){
  const row = p.eventType === 'DELETE' ? p.old : p.new;
  if (!row || row.household_id !== S.hid || !cache[row.col]) return;
  if (p.eventType === 'DELETE') cache[row.col].delete(row.id); else cache[row.col].set(row.id, row.data);
  emit(row.col);
}
async function loadAll(){
  const all = []; let from = 0;
  for (;;) {
    const { data, error } = await S.sb.from('items').select('col,id,data').eq('household_id', S.hid).range(from, from + 999);
    if (error) throw error;
    all.push(...data); if (data.length < 1000) break; from += 1000;
  }
  COLS.forEach(c => cache[c].clear());
  all.forEach(r => { if (cache[r.col]) cache[r.col].set(r.id, r.data); });
  try { localStorage.setItem('ninho-cache-' + S.hid, JSON.stringify(all)); } catch(e) {}
  COLS.forEach(emit);
}
function loadCached(){
  try { const all = JSON.parse(localStorage.getItem('ninho-cache-' + S.hid) || '[]'); all.forEach(r => { if (cache[r.col]) cache[r.col].set(r.id, r.data); }); COLS.forEach(emit); } catch(e) {}
}
async function start(household){
  S.household = household; S.hid = household.id;
  COLS.forEach(c => store.watch(c, rows => { S.data[c] = rows; if (c === 'mensagens') S.msgs = [...rows].sort((a,b) => (b.ts||0)-(a.ts||0)).slice(0,200); scheduleRender(); }));
  loadCached();
  const slow = setTimeout(() => { if (S.mode === 'loading') setStatus('slow'); }, 10000);
  try { await loadAll(); S.mode = 'live'; } catch(e) { S.mode = navigator.onLine ? 'slow' : 'offline'; }
  clearTimeout(slow);
  loadActivity().catch(() => {}); checkPush().then(() => scheduleRender());
  if (!members().some(m => m.id === S.uid)) store.set('membros', S.uid, {email:S.email, entrou:Date.now()}).catch(() => {});
  if (channel) S.sb.removeChannel(channel);
  channel = S.sb.channel('items-' + S.hid)
    .on('postgres_changes', {event:'INSERT', schema:'public', table:'items', filter:'household_id=eq.' + S.hid}, onChange)
    .on('postgres_changes', {event:'UPDATE', schema:'public', table:'items', filter:'household_id=eq.' + S.hid}, onChange)
    .on('postgres_changes', {event:'DELETE', schema:'public', table:'items'}, onChange)
    .on('postgres_changes', {event:'INSERT', schema:'public', table:'activity', filter:'household_id=eq.' + S.hid}, onActivity)
    .subscribe((status) => { if (status === 'SUBSCRIBED' && S.mode !== 'live') { loadAll().then(() => setStatus('live')).catch(() => {}); } });
  render();
}
let rTimer = null;
function scheduleRender(){ cancelAnimationFrame(rTimer); rTimer = requestAnimationFrame(render); }
window.addEventListener('online', () => { if (S.hid) loadAll().then(() => setStatus('live')).catch(() => {}); });
window.addEventListener('offline', () => { if (S.hid) setStatus('offline'); });
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && S.hid) loadAll().catch(() => {}); });

async function onSession(session){
  if (!session) { S.uid = null; S.hid = null; authScreen(); return; }
  if (S.uid === session.user.id && S.hid) return;
  S.uid = session.user.id; S.email = session.user.email;
  const { data, error } = await S.sb.from('household_members').select('household:households(*)').eq('user_id', S.uid).limit(1);
  if (error) { $('#app').innerHTML = `<div class="auth"><h1>Ninho</h1><p class="muted">Não foi possível ligar. Verifica a internet e recarrega.</p></div>`; return; }
  if (!data.length) { householdScreen(); return; }
  start(data[0].household);
}
async function boot(){
  const cfg = window.NINHO_CONFIG || {};
  if (!cfg.supabaseUrl || !cfg.supabaseAnonKey || !window.supabase) {
    $('#app').innerHTML = `<div class="auth"><h1>Ninho</h1><p class="muted">Falta configurar o Supabase em js/config.js.</p></div>`; return;
  }
  S.sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}});
  const { data } = await S.sb.auth.getSession();
  await onSession(data.session);
  S.sb.auth.onAuthStateChange((ev, session) => { if (ev === 'SIGNED_IN' || ev === 'SIGNED_OUT') onSession(session); });
}
['gesturestart','gesturechange'].forEach(ev => document.addEventListener(ev, e => e.preventDefault(), {passive:false}));
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
boot();
})();
