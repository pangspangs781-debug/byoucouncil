-- BYOU CITY Council System — run once in Supabase SQL Editor
create table if not exists public.council_state (
  id bigint primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.council_state enable row level security;
create policy "public read council state" on public.council_state for select using (true);
create policy "public write council state" on public.council_state for insert with check (true);
create policy "public update council state" on public.council_state for update using (true) with check (true);
insert into public.council_state(id,payload) values (1,'{}'::jsonb) on conflict (id) do nothing;

-- Enable realtime updates for every connected browser.
do $$
begin
  alter publication supabase_realtime add table public.council_state;
exception when duplicate_object then null;
end $$;

insert into storage.buckets (id,name,public) values ('council-media','council-media',true) on conflict (id) do update set public=true;
create policy "public media view" on storage.objects for select using (bucket_id='council-media');
create policy "public media upload" on storage.objects for insert with check (bucket_id='council-media');
create policy "public media update" on storage.objects for update using (bucket_id='council-media');
create policy "public media delete" on storage.objects for delete using (bucket_id='council-media');
