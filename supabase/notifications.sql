-- Ninho: activity log + push notifications.
-- Run once in Supabase: SQL Editor -> New query -> paste -> Run.
-- Replace __PROJECT_URL__, __VAPID_PUBLIC__ and __VAPID_PRIVATE__ before running
-- (the private copy you were given already has them filled in).

create extension if not exists pg_net with schema extensions;

-- Secrets only the server (service role) can read: RLS on, no policies.
create table if not exists public.app_secrets (key text primary key, value text not null);
alter table public.app_secrets enable row level security;
insert into public.app_secrets(key, value) values
  ('vapid_public', '__VAPID_PUBLIC__'),
  ('vapid_private', '__VAPID_PRIVATE__'),
  ('vapid_subject', 'https://ricardosilva06-crypto.github.io/ninho/')
on conflict (key) do update set value = excluded.value;

-- Who did what.
create table if not exists public.activity (
  id bigint generated always as identity primary key,
  household_id uuid not null references public.households(id) on delete cascade,
  actor uuid not null,
  action text not null,
  col text not null,
  item_id text not null,
  title text not null default '',
  notified boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists activity_household_time on public.activity(household_id, created_at desc);
alter table public.activity enable row level security;
drop policy if exists "members read activity" on public.activity;
create policy "members read activity" on public.activity for select using (public.is_member(household_id));

-- Phones that want notifications.
create table if not exists public.push_subscriptions (
  endpoint text primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  household_id uuid not null references public.households(id) on delete cascade,
  p256dh text not null,
  auth text not null,
  created_at timestamptz not null default now()
);
alter table public.push_subscriptions enable row level security;
drop policy if exists "own subscriptions" on public.push_subscriptions;
create policy "own subscriptions" on public.push_subscriptions for all
  using (user_id = auth.uid()) with check (user_id = auth.uid() and public.is_member(household_id));

-- Log every change made by a signed-in member.
create or replace function public.log_activity() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  r public.items; act text; t text; uid uuid := auth.uid(); oldn int; newn int;
begin
  if uid is null then return null; end if;
  if TG_OP = 'DELETE' then r := OLD; act := 'delete';
  else r := NEW; act := case when TG_OP = 'INSERT' then 'add' else 'edit' end; end if;
  if r.col in ('membros', 'definicoes') then return null; end if;
  t := coalesce(r.data->>'titulo', r.data->>'nome', r.data->>'texto', r.data->>'legenda', '');
  if r.col = 'listas' and TG_OP = 'UPDATE' then
    oldn := coalesce(jsonb_array_length(OLD.data->'itens'), 0);
    newn := coalesce(jsonb_array_length(NEW.data->'itens'), 0);
    if newn > oldn then act := 'list_add'; t := coalesce(NEW.data->'itens'->(newn - 1)->>'texto', '') || '|' || coalesce(NEW.data->>'nome', '');
    elsif newn < oldn then act := 'list_remove';
    elsif OLD.data->>'nome' is distinct from NEW.data->>'nome' then act := 'edit';
    else act := 'list_check'; end if;
  end if;
  if r.col = 'refeicoes' then t := r.id; end if;
  -- one notice per burst of edits to the same thing
  if act in ('edit', 'list_check', 'list_remove') and exists (
    select 1 from public.activity a where a.household_id = r.household_id and a.actor = uid and a.col = r.col
      and a.item_id = r.id and a.action = act and a.created_at > now() - interval '3 minutes') then
    return null;
  end if;
  insert into public.activity(household_id, actor, action, col, item_id, title)
  values (r.household_id, uid, act, r.col, r.id, left(t, 200));
  return null;
end $$;
drop trigger if exists items_activity on public.items;
create trigger items_activity after insert or update or delete on public.items
  for each row execute function public.log_activity();

-- Each new activity row asks the "notify" Edge Function to send the push.
create or replace function public.activity_push() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
begin
  perform net.http_post(
    url := '__PROJECT_URL__/functions/v1/notify',
    body := jsonb_build_object('id', NEW.id),
    headers := '{"Content-Type": "application/json"}'::jsonb
  );
  return null;
end $$;
drop trigger if exists activity_push on public.activity;
create trigger activity_push after insert on public.activity
  for each row execute function public.activity_push();

-- Live in-app notices.
do $$ begin
  alter publication supabase_realtime add table public.activity;
exception when duplicate_object then null; end $$;
