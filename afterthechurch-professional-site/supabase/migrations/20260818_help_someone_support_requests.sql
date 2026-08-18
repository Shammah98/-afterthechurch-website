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

-- No public table policies are created. Public submissions and administrator
-- review both go through validated server routes that use the service role.
