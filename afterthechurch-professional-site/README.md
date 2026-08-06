# AfterTheChurch.com — professional trauma-informed website

This is a complete replacement Next.js project built from the supplied brief.

## Included

- Editorial, image-led homepage using all supplied photographs
- Public resources and survivor-story library
- Progressive disclosure for sensitive educational content
- Content notices with full-content, short-summary and back choices
- Story filtering by topic, intensity, length, identity, background, region and media
- Public use and story submission without sign-up or sign-in
- Philosophical quote carousel with swipe, keyboard, pause and previous/next controls
- Written, audio and video story submission
- Three mandatory privacy levels with exact public preview
- Private Supabase Storage uploads
- Device-linked submission controls for privacy changes, correction requests, unpublishing and deletion
- Restricted administrator sign-in and moderation dashboard at `/admin`
- Email notification to the administrator when a new story enters moderation
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

## 3. Configure contributor and administrator access in Supabase

Open `Authentication > Providers` and enable anonymous sign-ins. The website
uses an invisible anonymous session only when a visitor submits or manages a
story. Visitors do not see an account, sign-up or sign-in screen.

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

Email/password authentication is reserved for administrators. For production,
configure a custom SMTP provider so administrator password-reset emails do not
depend on development limits.

## 4. Environment variables

Generate random secrets with:

```bash
openssl rand -hex 32
```

Never put `SUPABASE_SERVICE_ROLE_KEY`, `RATE_LIMIT_SECRET`, `CRON_SECRET` or
`RESEND_API_KEY` inside GitHub, screenshots or any variable beginning with
`NEXT_PUBLIC_`.

`ADMIN_EMAILS` is a comma-separated list of administrator accounts allowed to
open `/admin`.

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
- `RESEND_API_KEY`
- `STORY_NOTIFICATION_EMAIL` (for example `sha2mmah@gmail.com`)
- `STORY_NOTIFICATION_FROM` (for example `AfterTheChurch Notifications <notifications@updates.afterthechurch.com>`)

Apply them to Production, Preview and Development.

## 6. Story-submission email notifications

Create a Resend account, add a sending domain or subdomain and create an API
key. A subdomain such as `updates.afterthechurch.com` keeps notification-email
reputation separate from the main website.

Set `RESEND_API_KEY` in Vercel. Set `STORY_NOTIFICATION_EMAIL` to the private
administrator inbox. After the sending domain is verified, set
`STORY_NOTIFICATION_FROM` to an address using that domain.

Until a custom domain is verified, Resend's testing sender may be used where
permitted by the Resend account. Email-provider failure never blocks or deletes
a story submission. The notification contains moderation metadata and a link to
`/admin`, but intentionally excludes the full story text to reduce privacy
exposure.

## 7. Moderation

1. In Supabase Authentication, create or retain the administrator user.
2. Put that exact email address in `ADMIN_EMAILS` in Vercel.
3. Open `/admin` and sign in there.
4. Review pending submissions.
5. Add a reviewer note.
6. Approve or reject.

Approval moves private media from `pending/` to `published/` inside the private
bucket. The website still uses temporary signed URLs rather than public files.

Rejected or author-withdrawn submissions receive a 30-day deletion date. The
daily Vercel Cron route removes the media and database record when that date
passes.

## 8. Public contributor controls

No account or sign-in is required. At `/manage`, a contributor using the same
browser can:

- Change public privacy level
- Send a correction/change request
- Temporarily unpublish an approved story
- Permanently delete the story and current media file

The private contributor session is stored on that device. Clearing the site’s
browser data or moving to another device can remove access to those controls.

## 9. Human decisions still required

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
