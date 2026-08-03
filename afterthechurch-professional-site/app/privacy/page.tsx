import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy and Data" };

export default function PrivacyPage() {
  return (
    <section className="narrowPage prosePage">
      <p className="eyebrow">Privacy and data</p>
      <h1>Collect less, explain why, and allow deletion.</h1>

      <h2>Public browsing</h2>
      <p>
        Public resources and approved stories can be read without an account.
        The starter code does not enable advertising or third-party behavioural
        analytics. Essential hosting and security logs may still be created by the
        hosting and database providers.
      </p>

      <h2>Account data</h2>
      <p>
        Supabase Authentication stores the email address, password hash, session
        information and optional profile preferences needed to operate an account.
        Passwords are not stored in readable form by this website.
      </p>

      <h2>Story submissions</h2>
      <p>
        Submissions may include a chosen name, church or organisation name,
        location or religious background when voluntarily supplied, story text,
        uploaded media, privacy choices and moderation records. Contact email is
        not displayed publicly.
      </p>

      <h2>Public identity rules</h2>
      <p>
        Fully Public displays the chosen name and organisation. Anonymous Church
        displays the chosen name and “Church Name Withheld.” Fully Anonymous
        displays “Anonymous Author” and “Church Name Withheld.”
      </p>

      <h2>Retention</h2>
      <p>
        Approved stories remain until the author or organisation removes them
        under the applicable policy. Rejected and withdrawn submissions are marked
        for deletion after 30 days by the configured cleanup job. Backups may retain
        encrypted copies temporarily according to provider retention settings.
      </p>

      <h2>Deletion and correction</h2>
      <p>
        Account holders can request corrections, change public privacy, unpublish
        approved stories or permanently delete a submission and its current media
        object. Legal preservation duties may sometimes limit immediate deletion;
        any exception should be explained to the affected person.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        Authentication uses browser storage to maintain a signed-in session.
        Session choices for content notices are stored only for the current browser
        session. If non-essential analytics or marketing tools are introduced, a
        consent mechanism and updated notice will be required before activation.
      </p>
    </section>
  );
}
