create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  institucion text not null,
  correo text not null,
  created_at timestamptz not null default now()
);

alter table public.registrations enable row level security;

create policy "Allow public inserts"
  on public.registrations
  for insert
  to anon
  with check (true);
