-- Private one-to-one Contact Us messaging.
-- Data API users have NO direct grants. Access is only via server-side routes
-- protected by an HttpOnly, unpredictable visitor cookie or verified admin JWT.
-- Messages are not a real-time crisis service and are not end-to-end encrypted.
create extension if not exists pgcrypto;

create table if not exists public.contact_threads (
  id uuid primary key default gen_random_uuid(),
  token_hash text not null unique check (char_length(token_hash) = 64),
  display_name text check (display_name is null or char_length(display_name) <= 70),
  status text not null default 'open' check (status in ('open','closed')),
  created_at timestamptz not null default now(),
  last_message_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.contact_threads(id) on delete cascade,
  sender text not null check (sender in ('visitor','team')),
  body text not null check (char_length(body) between 2 and 3000),
  created_at timestamptz not null default now()
);

create index if not exists contact_threads_last_message_idx
on public.contact_threads(last_message_at desc);

create index if not exists contact_messages_thread_created_idx
on public.contact_messages(thread_id, created_at);

alter table public.contact_threads enable row level security;
alter table public.contact_messages enable row level security;

revoke all on table public.contact_threads from PUBLIC, anon, authenticated;
revoke all on table public.contact_messages from PUBLIC, anon, authenticated;
grant select, insert, update, delete on public.contact_threads to service_role;
grant select, insert, update, delete on public.contact_messages to service_role;

comment on table public.contact_threads is 'Private, pseudonymous visitor-to-staff support conversations. Only privileged server code can access these records.';
comment on table public.contact_messages is 'Private contact messages; intentionally unavailable to anon and authenticated Data API roles.';
