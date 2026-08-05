-- AFTERTHECHURCH: MODERATED COMMENTS
-- Run once in Supabase SQL Editor.

create table if not exists public.story_comments (
  id uuid primary key default gen_random_uuid(),
  story_id uuid not null references public.stories(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 80),
  body text not null check (char_length(body) between 10 and 2000),
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index if not exists story_comments_story_status_created_idx
  on public.story_comments (story_id, status, created_at asc);

create index if not exists story_comments_status_created_idx
  on public.story_comments (status, created_at asc);

alter table public.story_comments enable row level security;

-- Direct browser access remains closed. The website uses validated server routes
-- and the Supabase service role for submission, display and moderation.
