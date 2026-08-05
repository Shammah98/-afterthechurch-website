import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Rules for using AfterTheChurch, submitting survivor stories and understanding the platform’s legal limits."
};

export default function TermsPage() {
  return (
    <section className="legalPage">
      <header className="legalHero">
        <p className="eyebrow">Terms of use and legal notice</p>
        <h1>Clear rules for using and contributing to AfterTheChurch.</h1>
        <p className="lead">
          These Terms protect survivors, readers, contributors and the people who
          operate the website. Please read them before creating an account or
          submitting material.
        </p>
        <div className="legalMeta">
          <span><strong>Effective:</strong> 5 August 2026</span>
          <span><strong>Last reviewed:</strong> 5 August 2026</span>
          <Link href="/privacy">Read the Privacy Policy</Link>
        </div>
      </header>

      <div className="legalLayout">
        <nav className="legalToc" aria-label="Terms of use sections">
          <p className="eyebrow">On this page</p>
          <a href="#agreement">1. Agreement and eligibility</a>
          <a href="#purpose">2. Platform purpose</a>
          <a href="#advice">3. No professional advice</a>
          <a href="#stories">4. Survivor stories</a>
          <a href="#licence">5. Publication licence</a>
          <a href="#conduct">6. Acceptable use</a>
          <a href="#moderation">7. Moderation</a>
          <a href="#notice">8. Complaints and takedown</a>
          <a href="#intellectual-property">9. Intellectual property</a>
          <a href="#third-parties">10. Third-party services</a>
          <a href="#warranties">11. Warranties and availability</a>
          <a href="#liability">12. Limitation of liability</a>
          <a href="#responsibility">13. Contributor responsibility</a>
          <a href="#termination">14. Suspension and changes</a>
          <a href="#law">15. Governing law</a>
          <a href="#general">16. General terms</a>
          <a href="#conclusion">17. Conclusion</a>
        </nav>

        <article className="legalDocument">
          <div className="legalImportant">
            <strong>Important</strong>
            <p>
              No contract can remove rights or liabilities that the law does not
              allow to be excluded. These Terms limit risk only to the extent
              permitted by applicable law.
            </p>
          </div>

          <section id="agreement">
            <h2>1. Agreement and eligibility</h2>
            <p>
              By accessing the site you agree to follow the provisions that apply
              to public use. By creating an account, submitting material or using
              account tools, you expressly accept these Terms and the{" "}
              <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do
              not create an account or submit material.
            </p>
            <p>
              Accounts and story submissions are intended for people aged 18 or
              over. A person under 18 may contribute only with verifiable consent
              from a parent or legal guardian and prior written agreement from the
              operator. You must have legal capacity to grant the rights and make
              the promises contained in these Terms.
            </p>
          </section>

          <section id="purpose">
            <h2>2. Platform purpose and operator</h2>
            <p>
              AfterTheChurch is a survivor-led educational and storytelling
              project operated from Norway by Ian Shammah. It provides public
              educational material, moderated personal accounts and practical
              signposting concerning harm in religious settings.
            </p>
            <p>
              Using the site does not create a therapist–client, doctor–patient,
              lawyer–client, fiduciary, pastoral, employment, agency or other
              professional relationship with AfterTheChurch, its owner, host,
              moderators, contributors or service providers.
            </p>
          </section>

          <section id="advice">
            <h2>3. No emergency or professional advice</h2>
            <p>
              The site is not an emergency, crisis, medical, mental-health, legal,
              financial, safeguarding or law-enforcement service. Information is
              general and may not reflect your facts, health needs, risk level,
              jurisdiction or changes in professional guidance.
            </p>
            <p>
              Do not delay emergency help, medical treatment, safeguarding action
              or qualified legal advice because of something on this site.
              Decisions made after reading the site remain the user’s responsibility.
              For immediate risks, use the{" "}
              <Link href="/safety">Safety and Urgent Help page</Link> and an
              appropriate local professional or emergency service.
            </p>
          </section>

          <section id="stories">
            <h2>4. Survivor stories are contributor content</h2>
            <p>
              Survivor stories express the contributor’s recollection, experience
              or opinion. They are not statements made by AfterTheChurch and do not
              necessarily reflect the views of the owner, host, moderators or
              service providers. Moderation does not mean that every factual claim
              has been independently investigated, verified or endorsed.
            </p>
            <p>
              Contributors must distinguish, as clearly as reasonably possible,
              between firsthand experience, information received from another
              person and personal interpretation. A contributor must not knowingly
              or recklessly submit false factual allegations.
            </p>
            <p>
              Privacy labels reduce intentional disclosure on this site but do not
              guarantee anonymity. A contributor should remove unnecessary dates,
              locations, roles, images, voice details or distinctive facts that
              could expose them or another survivor.
            </p>
          </section>

          <section id="licence">
            <h2>5. Ownership and publication licence</h2>
            <p>
              Contributors retain ownership of their original material. By
              submitting it, the contributor grants AfterTheChurch a non-exclusive,
              worldwide, royalty-free licence to securely store, review, reproduce,
              format, transcode, caption, excerpt, edit for spelling, clarity,
              privacy, safety or length, and publish the material through the site
              under the selected privacy level.
            </p>
            <p>
              Material changes that could alter meaning should be referred to the
              contributor for approval where reasonably possible. AfterTheChurch
              will not sell a contributor’s story or license it for advertising,
              documentary use or third-party commercial publication without
              separate permission.
            </p>
            <p>
              The contributor may withdraw the publication licence for future use
              by unpublishing or deleting the submission. Limited copies may be
              retained where necessary for backups, security, compliance or legal
              claims. Withdrawal cannot control copies already made by readers,
              search engines, archives or unaffiliated third parties.
            </p>
          </section>

          <section id="conduct">
            <h2>6. Acceptable use</h2>
            <p>You must not use the site to:</p>
            <ul className="plainList">
              <li>threaten, harass, intimidate, stalk or coordinate retaliation against a contributor or any other person;</li>
              <li>identify or attempt to identify an anonymous contributor, or publish another person’s private contact, location, health or account information;</li>
              <li>impersonate someone, submit content on their behalf without authority or misrepresent your connection to an organisation;</li>
              <li>upload material that is unlawful, defamatory, maliciously false, discriminatory, sexually exploitative, privacy-invasive or that infringes copyright, confidentiality or image rights;</li>
              <li>upload malware, attempt unauthorised access, test vulnerabilities without written permission, evade rate limits or interfere with the service;</li>
              <li>scrape private areas, build identification profiles, republish stories in bulk or use content to train a model or dataset without written permission;</li>
              <li>submit recordings, photographs or documents unless you have the necessary rights, permissions and lawful basis to share them;</li>
              <li>use the platform as a substitute for reporting an emergency or an immediate child or adult safeguarding risk.</li>
            </ul>
          </section>

          <section id="moderation">
            <h2>7. Moderation and editorial discretion</h2>
            <p>
              Submission does not guarantee review, publication, continued hosting
              or a response within a particular time. To protect contributors,
              affected people and the service, AfterTheChurch may request evidence
              or clarification, redact details, add context or warnings, restrict
              access, refuse, unpublish, preserve or delete material.
            </p>
            <p>
              These decisions may be based on safety, privacy, consent, accuracy,
              legal risk, available moderation capacity, editorial relevance or a
              breach of these Terms. The operator has no general duty to monitor
              every item or investigate every allegation, but may act when a
              credible concern is received.
            </p>
          </section>

          <section id="notice">
            <h2>8. Complaints, correction and takedown requests</h2>
            <p>
              If content identifies you, infringes your rights, creates a safety
              risk or is materially inaccurate, email{" "}
              <a href="mailto:sha2mmah@gmail.com">sha2mmah@gmail.com</a> with
              “Legal notice” in the subject line. Include:
            </p>
            <ul className="plainList">
              <li>the exact page address and the specific words or media concerned;</li>
              <li>the legal, privacy, safety or factual basis for the request;</li>
              <li>your relationship to the material and the result requested;</li>
              <li>a safe way to contact you and a statement that the information in your notice is accurate to the best of your knowledge.</li>
            </ul>
            <p>
              Do not send passports, medical records or other sensitive proof in
              the first email. We may temporarily restrict content while assessing
              a credible notice. We may share the substance of a complaint with the
              contributor where necessary for a fair review, but will limit contact
              details and sensitive information where reasonably possible.
            </p>
          </section>

          <section id="intellectual-property">
            <h2>9. Website intellectual property</h2>
            <p>
              Except for contributor-owned stories and third-party material,
              AfterTheChurch owns or licenses the site design, original text,
              branding, selection and arrangement of material. You may read, link
              to and quote brief extracts for personal, educational, critical or
              other uses permitted by law with appropriate attribution.
            </p>
            <p>
              No permission is granted to copy the site substantially, remove
              attribution, use the branding as your own, sell site material or
              republish survivor stories outside the limits of applicable law and
              the contributor’s rights.
            </p>
          </section>

          <section id="third-parties">
            <h2>10. Third-party links and services</h2>
            <p>
              The site links to independent helplines, authorities, research and
              other services. A link is provided for convenience and does not create
              control, partnership, endorsement or responsibility for that third
              party. Their content, availability, confidentiality, eligibility,
              charges and privacy practices may change.
            </p>
            <p>
              Accounts, storage and hosting depend on third-party infrastructure,
              including Supabase and Vercel. Those providers have their own terms,
              security measures and service limitations.
            </p>
          </section>

          <section id="warranties">
            <h2>11. No warranties and no promise of uninterrupted availability</h2>
            <p>
              To the maximum extent permitted by law, the site and its content are
              provided “as is” and “as available.” AfterTheChurch does not promise
              that content is complete, error-free, suitable for a particular
              decision, continuously available, secure against every attack or
              preserved indefinitely.
            </p>
            <p>
              Contact information and professional guidance can change. Users
              should confirm urgent or important information directly with the
              relevant official service.
            </p>
          </section>

          <section id="liability">
            <h2>12. Limitation of liability</h2>
            <div className="liabilityBox">
              <p>
                To the maximum extent permitted by applicable law,
                AfterTheChurch, its owner, host, moderators, volunteers and service
                providers will not be liable for indirect, incidental, special,
                consequential or purely economic loss arising from use of, inability
                to use, or reliance on the site; contributor content; third-party
                conduct or services; unauthorised copying; loss of anonymity; or
                service interruption.
              </p>
              <p>
                Where liability can lawfully be limited, the aggregate liability of
                AfterTheChurch and its operator arising from free use of the site
                will not exceed NOK 1,000.
              </p>
              <p>
                Nothing in these Terms excludes or limits liability where doing so
                would be unlawful, including liability for fraud, wilful misconduct
                or gross negligence; death or personal injury caused by negligence;
                mandatory data-protection obligations; or any non-excludable
                statutory right.
              </p>
            </div>
          </section>

          <section id="responsibility">
            <h2>13. Contributor responsibility for submitted material</h2>
            <p>
              A contributor confirms that, to the best of their knowledge, their
              submission is based on their genuine experience, they have the right
              to submit it, and any uploaded recording, image, document or third-party
              material is used lawfully with necessary permission.
            </p>
            <p>
              To the extent permitted by law, a contributor is responsible for
              direct losses and third-party claims caused by their knowing or
              reckless breach of those confirmations or their intentional unlawful
              use of the platform. This does not make a contributor responsible for
              an editorial change made solely by AfterTheChurch or for a claim caused
              by the operator’s own unlawful conduct.
            </p>
          </section>

          <section id="termination">
            <h2>14. Account suspension, termination and changes</h2>
            <p>
              AfterTheChurch may restrict or suspend an account where reasonably
              necessary for security, legal compliance, investigation of abuse or
              protection of another person. Where safe and lawful, the user will be
              told the reason and given a way to request review.
            </p>
            <p>
              We may change or discontinue features and update these Terms.
              Material changes affecting registered users will be communicated by a
              reasonable method. Continued account use after the stated effective
              date constitutes acceptance where the law allows; new consent will be
              requested where required.
            </p>
          </section>

          <section id="law">
            <h2>15. Governing law and disputes</h2>
            <p>
              These Terms and non-contractual disputes concerning the site are
              governed by Norwegian law. The parties should first try to resolve a
              dispute in good faith by written notice. Subject to mandatory law,
              Norwegian courts have jurisdiction.
            </p>
            <p>
              This clause does not remove mandatory consumer, data-protection or
              other rights that apply in the country where a user lives, nor any
              right to complain to a competent supervisory authority.
            </p>
          </section>

          <section id="general">
            <h2>16. General legal terms</h2>
            <p>
              If a provision is invalid or unenforceable, it will be limited to the
              minimum extent necessary and the remaining provisions will continue.
              A failure to enforce a term is not a waiver. These Terms, the Privacy
              Policy and any specific written contributor agreement form the entire
              agreement concerning use of the site and replace earlier statements
              on the same subject.
            </p>
            <p>
              Headings and summaries help navigation but do not override the full
              wording. No person other than the user and the operator receives a
              contractual right under these Terms unless mandatory law provides
              otherwise.
            </p>
          </section>

          <section className="legalConclusion" id="conclusion">
            <p className="eyebrow">Conclusion</p>
            <h2>Use the site carefully, lawfully and without exposing survivors.</h2>
            <p>
              These Terms are designed to allow difficult experiences to be shared
              while setting firm limits around safety, privacy, accuracy and legal
              responsibility. If a provision conflicts with mandatory law, that law
              prevails.
            </p>
            <div className="pageActions">
              <Link className="button primary" href="/privacy">Read the Privacy Policy</Link>
              <Link className="button secondary" href="/share">Review Story Submission</Link>
              <Link className="textLink" href="/safety">Safety and Urgent Help</Link>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
