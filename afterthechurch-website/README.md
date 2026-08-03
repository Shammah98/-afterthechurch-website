# AfterTheChurch.com — finished MVP

A trauma-informed website for resources, moderated survivor stories, three privacy levels, private peer-connection requests and a password-protected moderation queue.

## What is included

- Homepage, About, Resources, Community, Privacy and Terms
- Story submission with:
  - Fully Public
  - Anonymous Church
  - Fully Anonymous
- Nothing publishes automatically
- Moderator dashboard at `/admin`
- Supabase database with Row Level Security
- Responsive mobile design

## Setup without writing code

### 1. Put this folder on GitHub
1. Sign in to GitHub.
2. Create a new **private** repository named `afterthechurch-website`.
3. Choose **uploading an existing file**.
4. Drag every file and folder from this project into GitHub and commit.

### 2. Create the database
1. Create a free Supabase project.
2. Open **SQL Editor** → **New query**.
3. Open `supabase/schema.sql` from this project, copy all of it, paste it into the editor and click **Run**.
4. Open **Project Settings / API** or the project **Connect** dialog.
5. Copy the Project URL and the **service_role** secret key. Never expose the service-role key in screenshots or public GitHub files.

### 3. Deploy with Vercel
1. Sign in to Vercel with GitHub.
2. Click **Add New → Project** and import your GitHub repository.
3. Add these Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = your service-role secret
   - `ADMIN_PASSWORD` = a long unique password (20+ characters)
   - `NEXT_PUBLIC_SITE_URL` = temporary Vercel URL, then change to `https://afterthechurch.com`
4. Click **Deploy**.

### 4. Connect AfterTheChurch.com
1. In Vercel, open the project → **Settings → Domains**.
2. Add `afterthechurch.com` and `www.afterthechurch.com`.
3. Vercel will show the DNS records to add where the domain was purchased.
4. Make `afterthechurch.com` the primary domain and redirect `www` to it.

## First launch checklist

- Replace placeholder legal wording with a Norway/GDPR-reviewed privacy notice.
- Add the organisation’s public email and privacy contact.
- Appoint moderators and a safeguarding lead before accepting submissions.
- Test all three privacy choices with dummy stories.
- Confirm that private email and original church name never appear publicly.
- Use a password manager for the admin password.
- Enable Supabase MFA for administrator accounts.
- Establish written moderation, correction, removal, retention and escalation procedures.
- Do not promise absolute confidentiality: explain legal and safeguarding limits.

## Local preview (optional)

Install Node.js, copy `.env.example` to `.env.local`, insert your values, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important production improvements

This is a strong MVP, not a substitute for professional security and legal review. Before scaling, add rate limiting/CAPTCHA, malware-safe uploads (if introduced), individual moderator accounts with MFA, audit logs, encrypted backups, email notifications, a proper consent history, retention automation and independent penetration testing.
