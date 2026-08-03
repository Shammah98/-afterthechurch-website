import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="narrowPage prosePage">
      <p className="eyebrow">Terms of use</p>
      <h1>Use the platform without exposing or targeting survivors.</h1>

      <h2>Educational information</h2>
      <p>
        Content is provided for general information and does not replace medical,
        legal, safeguarding, financial or mental-health advice.
      </p>

      <h2>Story rights and consent</h2>
      <p>
        Submit only material you have the right and consent to share. Do not upload
        private information, recordings of people who did not consent, passwords,
        verification codes, medical records or information that exposes another
        survivor.
      </p>

      <h2>Prohibited conduct</h2>
      <p>
        Do not harass authors, attempt to identify anonymous contributors,
        impersonate another person, upload malware, evade moderation, scrape private
        material, threaten anyone or use the platform to coordinate retaliation.
      </p>

      <h2>Moderation and publication</h2>
      <p>
        Submission does not guarantee publication. Material may be withheld because
        of safety, privacy, consent, legal or editorial concerns. When a proposed
        change alters meaning, the author should be asked to approve it.
      </p>

      <h2>Account security</h2>
      <p>
        Keep account credentials private and report suspected unauthorised access.
        The organisation may suspend access where necessary to protect users or the
        service.
      </p>
    </section>
  );
}
