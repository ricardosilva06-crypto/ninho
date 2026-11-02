-- Ninho: database schema for Supabase.
-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste everything -> Run.

create extension if not exists pgcrypto;

-- A household ("ninho") groups the people who share data.
create table if not exists public.households (
  id uuid primary key default gen_random_uuid(),
  name text not null default 'Ninho',
  invite_code text not null unique default upper(substr(encode(gen_random_bytes(4), 'hex'), 1, 6)),
  created_at timestamptz not null default now()
);

create table if not exists public.household_members (
  household_id uuid not null references public.households(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (household_id, user_id)
);

-- Every record of the app (lists, events, budget, ...) is one JSON document.
create table if not exists public.items (
  household_id uuid not null references public.households(id) on delete cascade,
  col text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid default auth.uid(),
  primary key (household_id, col, id)
);

alter table public.households enable row level security;
alter table public.household_members enable row level security;
alter table public.items enable row level security;

create or replace function public.is_member(h uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.household_members where household_id = h and user_id = auth.uid());
$$;

drop policy if exists "members read household" on public.households;
create policy "members read household" on public.households for select using (public.is_member(id));
drop policy if exists "members update household" on public.households;
create policy "members update household" on public.households for update using (public.is_member(id));

drop policy if exists "members see members" on public.household_members;
create policy "members see members" on public.household_members for select using (public.is_member(household_id));
drop policy if exists "leave household" on public.household_members;
create policy "leave household" on public.household_members for delete using (user_id = auth.uid());

drop policy if exists "members use items" on public.items;
create policy "members use items" on public.items for all
  using (public.is_member(household_id)) with check (public.is_member(household_id));

-- Create a household and join it.
create or replace function public.create_household(p_name text default 'Ninho')
returns public.households language plpgsql security definer set search_path = public as $$
declare h public.households;
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  insert into public.households(name) values (coalesce(nullif(p_name, ''), 'Ninho')) returning * into h;
  insert into public.household_members(household_id, user_id) values (h.id, auth.uid());
  return h;
end $$;

-- Join with an invite code (max. 6 people per household).
create or replace function public.join_household(p_code text)
returns public.households language plpgsql security definer set search_path = public as $$
declare h public.households;
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  select * into h from public.households where invite_code = upper(trim(p_code));
  if not found then return null; end if;
  if (select count(*) from public.household_members where household_id = h.id) >= 6 then raise exception 'household full'; end if;
  insert into public.household_members(household_id, user_id) values (h.id, auth.uid()) on conflict do nothing;
  return h;
end $$;

grant execute on function public.create_household(text) to authenticated;
grant execute on function public.join_household(text) to authenticated;

-- Live updates between phones.
alter table public.items replica identity full;
do $$ begin
  alter publication supabase_realtime add table public.items;
exception when duplicate_object then null; end $$;

-- Private file storage: files live under <household_id>/...
insert into storage.buckets (id, name, public, file_size_limit)
values ('ficheiros', 'ficheiros', false, 26214400)
on conflict (id) do nothing;

drop policy if exists "ninho read files" on storage.objects;
create policy "ninho read files" on storage.objects for select to authenticated
  using (bucket_id = 'ficheiros' and public.is_member(((storage.foldername(name))[1])::uuid));
drop policy if exists "ninho add files" on storage.objects;
create policy "ninho add files" on storage.objects for insert to authenticated
  with check (bucket_id = 'ficheiros' and public.is_member(((storage.foldername(name))[1])::uuid));
drop policy if exists "ninho delete files" on storage.objects;
create policy "ninho delete files" on storage.objects for delete to authenticated
  using (bucket_id = 'ficheiros' and public.is_member(((storage.foldername(name))[1])::uuid));
