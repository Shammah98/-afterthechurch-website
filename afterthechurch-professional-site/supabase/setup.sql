-- AFTERTHECHURCH DATABASE AND PRIVATE MEDIA SETUP
-- Run once in Supabase: SQL Editor > New query > paste this file > Run.
-- Also enable Authentication > Providers > Anonymous Sign-ins. Public visitors
-- receive a private technical session without creating or seeing an account.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  communications boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, communications)
  values (
    new.id,
    nullif(new.raw_user_meta_data->>'display_name', ''),
    coalesce((new.raw_user_meta_data->>'communications')::boolean, false)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 120),
  display_name text not null check (char_length(display_name) between 1 and 80),
  church_name text not null check (char_length(church_name) between 1 and 160),
  privacy_level text not null
    check (
  privacy_level in (
    'public',
    'anonymous_church',
    'anonymous_author',
    'fully_anonymous'
  )
),
  media_type text not null
    check (media_type in ('written', 'audio', 'video')),
  media_path text,
  image_path text,
  short_summary text not null check (char_length(short_summary) between 1 and 650),
  story_text text,
  categories text[] not null default '{}',
  content_warnings text[] not null default '{}',
  content_intensity text not null default 'moderate'
    check (content_intensity in ('gentle', 'moderate', 'high')),
  reading_minutes integer not null default 1 check (reading_minutes between 1 and 240),
  religious_background text,
  country_region text,
  consent_confirmed boolean not null default false,
  rights_confirmed boolean not null default false,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'withdrawn', 'changes_requested')),
  moderator_notes text,
  author_change_request text,
  view_count bigint not null default 0,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  retention_expires_at timestamptz
);

alter table public.stories
  add column if not exists image_path text;

create index if not exists stories_status_created_idx
  on public.stories (status, created_at desc);

create index if not exists stories_user_created_idx
  on public.stories (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.stories enable row level security;

-- Direct table access is intentionally closed. The website uses authenticated,
-- validated server routes and the service role. Do not add broad anon policies.

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'story-media',
  'story-media',
  false,
  262144000,
  array[
    'audio/mpeg',
    'audio/mp4',
    'audio/wav',
    'audio/x-m4a',
    'image/jpeg',
    'image/png',
    'image/webp',
    'video/mp4',
    'video/quicktime',
    'video/webm'
  ]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create table if not exists public.support_requests (
  id uuid primary key default gen_random_uuid(),
  person_name text not null check (char_length(person_name) between 1 and 120),
  person_age text not null check (char_length(person_age) between 1 and 40),
  person_gender text,
  country text not null check (char_length(country) between 1 and 100),
  knows_about_request text not null check (knows_about_request in ('yes', 'no', 'unsure')),
  direct_contact_permitted boolean not null default false,
  permission_to_share_contact boolean not null default false,
  safe_phone text,
  other_contact text,
  safe_contact_notes text,
  requester_name text,
  requester_relationship text,
  requester_contact text,
  situation text not null check (char_length(situation) between 30 and 6000),
  safety_concerns text,
  urgent_risk boolean not null default false,
  privacy_confirmed boolean not null default false,
  emergency_confirmed boolean not null default false,
  status text not null default 'new'
    check (status in ('new', 'reviewing', 'referred', 'closed')),
  admin_notes text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  retention_expires_at timestamptz,
  constraint support_requests_contact_permission_check check (
    direct_contact_permitted = false
    or (
      knows_about_request = 'yes'
      and permission_to_share_contact = true
      and (safe_phone is not null or other_contact is not null)
    )
  ),
  constraint support_requests_followup_check check (
    direct_contact_permitted = true or requester_contact is not null
  )
);

create index if not exists support_requests_status_created_idx
  on public.support_requests (status, created_at desc);

create index if not exists support_requests_retention_idx
  on public.support_requests (retention_expires_at)
  where retention_expires_at is not null;

alter table public.support_requests enable row level security;

create table if not exists public.request_events (
  id bigint generated by default as identity primary key,
  event_key text not null,
  ip_hash text not null,
  created_at timestamptz not null default now()
);

create index if not exists request_events_lookup_idx
  on public.request_events (event_key, ip_hash, created_at desc);

alter table public.request_events enable row level security;

create or replace function public.check_rate_limit(
  p_event text,
  p_ip_hash text,
  p_limit integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  recent_count integer;
begin
  delete from public.request_events
  where created_at < now() - interval '24 hours';

  select count(*)
  into recent_count
  from public.request_events
  where event_key = p_event
    and ip_hash = p_ip_hash
    and created_at >= now() - make_interval(secs => p_window_seconds);

  if recent_count >= p_limit then
    return false;
  end if;

  insert into public.request_events (event_key, ip_hash)
  values (p_event, p_ip_hash);

  return true;
end;
$$;

revoke all on function public.check_rate_limit(text, text, integer, integer)
from public, anon, authenticated;

grant execute on function public.check_rate_limit(text, text, integer, integer)
to service_role;

create or replace function public.increment_story_view(p_story_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.stories
  set view_count = view_count + 1
  where id = p_story_id and status = 'approved';
$$;

revoke all on function public.increment_story_view(uuid)
from public, anon, authenticated;

grant execute on function public.increment_story_view(uuid)
to service_role;
