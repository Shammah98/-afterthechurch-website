# AfterTheChurch.com — professional trauma-informed website

This is a complete replacement Next.js project built from the supplied brief.

## Included

- Editorial, image-led homepage using all supplied photographs
- Public resources and survivor-story library
- Progressive disclosure for sensitive educational content
- Content notices with full-content, short-summary and back choices
- Story filtering by topic, intensity, length, identity, background, region and media
- Sign in, sign up, email verification, forgotten password and reset password
- Philosophical quote carousel with swipe, keyboard, pause and previous/next controls
- Written, audio and video story submission
- Three mandatory privacy levels with exact public preview
- Private Supabase Storage uploads
- Account dashboard for privacy changes, correction requests, unpublishing and deletion
- Restricted moderation dashboard
- Quick Exit button
- Rate limiting and honeypot spam protection
- Security headers, form states, focus states, reduced motion and responsive layout
- Privacy, terms, safety, FAQ, custom 404 and error pages
- Scheduled deletion of rejected/withdrawn submissions after 30 days
- Logo and four supplied photographs

## 1. Install

Install Node.js 20.9 or newer.

Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 2. Create Supabase project

Create a Supabase project, then open `SQL Editor > New query`.

Paste all of `supabase/setup.sql` and click **Run**.

## 3. Configure authentication in Supabase

Open `Authentication > URL Configuration`.

Set the Site URL to the live website URL.

Add redirect URLs:

```text
http://localhost:3000/auth/callback
http://localhost:3000/auth/reset
https://afterthechurch.com/auth/callback
https://afterthechurch.com/auth/reset
https://www.afterthechurch.com/auth/callback
https://www.afterthechurch.com/auth/reset
```

Keep email confirmation enabled. For production, configure a custom SMTP
provider so authentication emails do not depend on development limits.

## 4. Environment variables

Copy `.env.example` and rename the copy `.env.local`.

Fill in every value. Generate random secrets with:

```bash
openssl rand -hex 32
```

Never put `SUPABASE_SERVICE_ROLE_KEY`, `RATE_LIMIT_SECRET` or `CRON_SECRET`
inside GitHub, screenshots or any variable beginning with `NEXT_PUBLIC_`.

`ADMIN_EMAILS` is a comma-separated list of accounts allowed to open `/admin`.

## 5. Vercel

Import the GitHub repository into Vercel.

Add these Environment Variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAILS`
- `RATE_LIMIT_SECRET`
- `CRON_SECRET`

Apply them to Production, Preview and Development.

## 6. Moderation

1. Sign up using an email included in `ADMIN_EMAILS`.
2. Confirm the email.
3. Open `/admin`.
4. Review pending submissions.
5. Add a reviewer note.
6. Approve or reject.

Approval moves private media from `pending/` to `published/` inside the private
bucket. The website still uses temporary signed URLs rather than public files.

Rejected or author-withdrawn submissions receive a 30-day deletion date. The
daily Vercel Cron route removes the media and database record when that date
passes.

## 7. User account actions

At `/account`, an author can:

- Change public privacy level
- Send a correction/change request
- Temporarily unpublish an approved story
- Permanently delete the story and current media file

## 8. Human decisions still required

Software cannot truthfully invent these organisational facts:

- Named leadership and governance details
- Safeguarding officer and escalation procedure
- Real complaints and appeals contact
- Verified funding sources and conflict-of-interest register
- Country-specific crisis, legal and medical resources
- Reviewer training and documented editorial policy
- Final legal review of Privacy Policy, Terms and allegation-publication rules
- Backup and disaster-recovery retention
- Cross-browser and assistive-technology testing by real users
- Virus scanning for uploaded media
- Resumable TUS uploads for long or unstable mobile video transfers
- Distributed rate limiting at larger scale

Do not publish claims that these processes exist until they are actually in place.
