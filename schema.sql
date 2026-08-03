-- Run this entire file in Supabase > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  privacy_level text not null check (privacy_level in ('public','anonymous_church','fully_anonymous')),
  email text not null,
  display_name text not null,
  church_name text,
  church_display text not null,
  title text not null,
  summary text not null,
  body text not null,
  content_notes text,
  consent text not null check (consent='yes')
);

create table if not exists public.connection_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  name text not null,
  interest text not null,
  message text,
  consent text not null check (consent='yes'),
  status text not null default 'new'
);

alter table public.stories enable row level security;
alter table public.connection_requests enable row level security;

-- No browser role receives direct table access. The Next.js server performs validated
-- submissions and returns only explicitly selected public fields.
revoke all on public.stories from anon, authenticated;
revoke all on public.connection_requests from anon, authenticated;

create index if not exists stories_status_created_idx on public.stories(status,created_at desc);
