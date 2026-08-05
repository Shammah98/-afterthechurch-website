import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AfterTheChurch collects, uses, protects, publishes and deletes survivor-story information."
};

const dataRows = [
  {
    data: "Private contributor session",
    examples: "A random technical identifier, browser session token and session dates. Public contributors are not asked to create an account or password.",
    purpose: "Keep a submission and its private management controls connected to the browser used to submit it.",
    basis: "Performance of the Terms of Use; legitimate interests in secure access and preventing unauthorised changes."
  },
  {
    data: "Moderator authentication",
    examples: "Administrator email address, password hash, session token and password-reset records.",
    purpose: "Restrict the private moderation queue to specifically authorised administrators.",
    basis: "Legitimate interests in safeguarding, confidentiality and service security."
  },
  {
    data: "Story submission and moderation",
    examples: "Title, summary, story text, chosen identity, named organisation, privacy level, categories, content notices, region, religious background, images, audio, video, moderation notes and change requests.",
    purpose: "Privately receive, review, edit, publish, manage or delete a submission according to the contributor’s choices.",
    basis: "Consent; explicit consent where a contributor includes special-category information; legitimate interests in safe editorial review and legal claims."
  },
  {
    data: "Security and technical records",
    examples: "IP address and browser information used to create a one-way rate-limit fingerprint, timestamps, request records, security logs and error information.",
    purpose: "Prevent spam, abuse and unauthorised access; diagnose faults; protect contributors and the service.",
    basis: "Legitimate interests in security, service integrity and abuse prevention; legal obligations where applicable."
  },
  {
    data: "Published material",
    examples: "The approved story, selected identity fields, media, content notices, categories and publication metadata.",
    purpose: "Make the contributor’s approved story available to readers under the selected privacy setting.",
    basis: "Consent and the publication licence in the Terms of Use."
  }
];

export default function PrivacyPage() {
  return (
    <section className="legalPage">
      <header className="legalHero">
        <p className="eyebrow">Privacy policy</p>
        <h1>Your information, your choices and our responsibilities.</h1>
        <p className="lead">
          This policy explains what AfterTheChurch processes, why it is needed,
          who can receive it and how you can exercise your rights. It applies to
          public browsing, private contributor sessions, story submissions, uploaded media,
          moderation and communications.
        </p>
        <div className="legalMeta">
          <span><strong>Effective:</strong> 5 August 2026</span>
          <span><strong>Last reviewed:</strong> 5 August 2026</span>
          <Link href="/terms">Read the Terms of Use</Link>
        </div>
      </header>

      <div className="legalLayout">
        <nav className="legalToc" aria-label="Privacy policy sections">
          <p className="eyebrow">On this page</p>
          <a href="#controller">1. Controller and contact</a>
          <a href="#collect">2. Information we process</a>
          <a href="#sensitive">3. Sensitive stories</a>
          <a href="#sharing">4. Service providers</a>
          <a href="#publication">5. Publication and anonymity</a>
          <a href="#retention">6. Retention and deletion</a>
          <a href="#storage">7. Cookies and storage</a>
          <a href="#security">8. Security</a>
          <a href="#rights">9. Your rights</a>
          <a href="#children">10. Children</a>
          <a href="#changes">11. Changes</a>
          <a href="#conclusion">12. Conclusion</a>
        </nav>

        <article className="legalDocument">
          <section className="legalSummary">
            <h2>Privacy at a glance</h2>
            <div className="legalSummaryGrid">
              <div><strong>No sale of personal data</strong><span>We do not sell personal information or run targeted advertising.</span></div>
              <div><strong>Private by default</strong><span>New submissions remain private until moderation is complete and publication is approved.</span></div>
              <div><strong>Choice of public identity</strong><span>Contributors choose which name and organisation details appear publicly.</span></div>
              <div><strong>Deletion controls</strong><span>Contributors can unpublish, request changes and delete submissions from the same browser without an account.</span></div>
            </div>
          </section>

          <section id="controller">
            <h2>1. Data controller and contact</h2>
            <p>
              AfterTheChurch is a survivor-led project operated from Norway. Until
              a separate legal entity is identified on this website, <strong>Ian
              Shammah, operating AfterTheChurch</strong>, is the data controller
              for the processing described here.
            </p>
            <div className="legalContact">
              <strong>Privacy, legal and takedown contact</strong>
              <a href="mailto:sha2mmah@gmail.com">sha2mmah@gmail.com</a>
              <span>Use “Privacy request” or “Legal notice” in the subject line.</span>
            </div>
            <p>
              AfterTheChurch is not a confidential crisis, medical, legal or
              safeguarding service. Do not use this email for emergencies. Use the{" "}
              <Link href="/safety">Safety and Urgent Help page</Link> instead.
            </p>
          </section>

          <section id="collect">
            <h2>2. Information we process and why</h2>
            <p>
              We aim to collect only information needed to receive and
              moderate stories, protect the service and honour contributors’ choices.
              You do not need an account or sign-in to read, submit or use any
              public feature.
            </p>
            <div className="dataUseList">
              {dataRows.map((row) => (
                <article key={row.data}>
                  <h3>{row.data}</h3>
                  <p><strong>Examples:</strong> {row.examples}</p>
                  <p><strong>Purpose:</strong> {row.purpose}</p>
                  <p><strong>Legal basis:</strong> {row.basis}</p>
                </article>
              ))}
            </div>
            <p>
              When processing is required by law, necessary to protect vital
              interests or needed to establish, exercise or defend legal claims, a
              different lawful basis may apply. We will explain that basis when
              reasonably possible.
            </p>
          </section>

          <section id="sensitive">
            <h2>3. Survivor stories may contain sensitive information</h2>
            <p>
              A submission can reveal religious or philosophical beliefs, health,
              sexuality, ethnic background, trauma or alleged offences. Some of this
              is “special-category” personal data under the GDPR. Do not include it
              unless it is necessary to your story and you want us to process it
              under the privacy level you selected.
            </p>
            <p>
              The story form asks for explicit consent before submission. Consent can
              be withdrawn by unpublishing or deleting the submission, or by
              contacting us. Withdrawal does not make earlier lawful processing
              unlawful and cannot reliably remove copies already made by readers,
              search engines, archives or other third parties.
            </p>
            <p>
              Do not upload private medical records, government identifiers,
              passwords, verification codes, private addresses or another person’s
              confidential material. Where a story identifies another person, we may
              limit, redact or refuse publication to protect privacy, safety and legal
              rights.
            </p>
          </section>

          <section id="sharing">
            <h2>4. Who receives information</h2>
            <ul className="plainList">
              <li><strong>Authorised moderators</strong> can access private submissions only where needed for review, safety, support requests or administration.</li>
              <li><strong>Supabase</strong> provides anonymous contributor sessions, administrator authentication, database services and private file storage as a data processor.</li>
              <li><strong>Vercel</strong> provides website hosting, delivery, security and operational logging as a data processor.</li>
              <li><strong>Email infrastructure</strong> delivers password-reset messages for authorised administrators only.</li>
              <li><strong>Authorities or advisers</strong> may receive limited information where required by law, necessary to protect life or safety, or reasonably needed for legal claims.</li>
            </ul>
            <p>
              We do not give unpublished stories or contributor identities to donors,
              churches, ministries or advertisers. Service providers may process
              information outside Norway or the EEA subject to their contractual
              safeguards and lawful transfer mechanisms. Their current terms and
              subprocessor arrangements govern those transfers.
            </p>
            <div className="legalExternalLinks">
              <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">Supabase privacy information ↗</a>
              <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Vercel privacy information ↗</a>
            </div>
          </section>

          <section id="publication">
            <h2>5. Publication, privacy levels and limits of anonymity</h2>
            <div className="privacyLevelList">
              <p><strong>Fully Public:</strong> the chosen name and church or organisation name are displayed.</p>
              <p><strong>Anonymous Church:</strong> the chosen name is displayed and the organisation appears as “Church Name Withheld.”</p>
              <p><strong>Anonymous Author:</strong> “Anonymous Author” is displayed and the church or organisation name is shown.</p>
              <p><strong>Fully Anonymous:</strong> “Anonymous Author” and “Church Name Withheld” are displayed.</p>
            </div>
            <p>
              These settings control what AfterTheChurch intentionally displays.
              They cannot guarantee that a person will remain unidentified. Writing
              style, dates, events, locations, images, voices and details may allow
              others to infer identity. Public pages may be copied, photographed,
              cached, indexed or archived beyond our control.
            </p>
            <p>
              Moderation reduces risk but does not independently verify every claim
              or guarantee that published material is complete, accurate or lawful.
              People identified or affected by content can request review,
              correction, restriction or removal using the contact above.
            </p>
          </section>

          <section id="retention">
            <h2>6. Retention and deletion</h2>
            <ul className="plainList">
              <li>Rate-limit fingerprints are automatically removed after approximately 24 hours.</li>
              <li>Anonymous technical session identifiers are retained as needed to connect private submission controls, prevent abuse and meet legal obligations.</li>
              <li>Administrator authentication records are retained while moderation access is authorised and for the limited period needed for security or legal obligations.</li>
              <li>Pending submissions are retained while review or requested changes remain active.</li>
              <li>Approved stories remain until withdrawn, deleted or removed through moderation.</li>
              <li>Rejected and withdrawn submissions are scheduled for deletion after 30 days, unless the contributor deletes them sooner or a lawful preservation need applies.</li>
              <li>Current uploaded media is removed with a permanent submission deletion. Provider backups or security logs may retain encrypted or isolated copies for a limited period under provider schedules.</li>
            </ul>
            <p>
              We may preserve specific records when reasonably necessary for safety,
              fraud prevention, a legal obligation or the establishment, exercise or
              defence of legal claims. Access will be restricted and the material
              deleted when the preservation purpose ends.
            </p>
          </section>

          <section id="storage">
            <h2>7. Cookies, local storage and public browsing</h2>
            <p>
              When a visitor submits or manages a story, the site stores an
              essential anonymous session token in that browser. It contains no
              public account email or password and exists so another visitor cannot
              change the submission. Clearing site data or changing device may
              remove access to those private controls. Administrator sessions and
              content-warning choices may also be stored in the browser.
            </p>
            <p>
              The site does not currently use advertising or third-party behavioural
              analytics. Essential hosting and security logs may still be generated.
              If non-essential analytics, marketing cookies or similar technologies
              are introduced, the notice and consent controls must be updated before
              activation where the law requires it.
            </p>
          </section>

          <section id="security">
            <h2>8. Security and breach response</h2>
            <p>
              Measures include private media storage, signed short-lived media links,
              authenticated server routes, restricted administrator access, input
              validation, rate limiting and limited collection. Access should be
              granted only to people who need it for an authorised purpose.
            </p>
            <p>
              No internet service can guarantee absolute security or uninterrupted
              availability. If a breach creates a risk to people’s rights and
              freedoms, we will assess notification duties and notify the relevant
              authority and affected people where required.
            </p>
          </section>

          <section id="rights">
            <h2>9. Your data-protection rights</h2>
            <p>
              Depending on the circumstances, you may request access, correction,
              deletion, restriction, portability, withdrawal of consent or objection
              to processing based on legitimate interests. You also have the right not
              to be subject to a solely automated decision that produces legal or
              similarly significant effects.
            </p>
            <p>
              Send requests to{" "}
              <a href="mailto:sha2mmah@gmail.com">sha2mmah@gmail.com</a>. We may ask
              for proportionate information to verify your identity or authority. Do
              not email identity documents unless specifically requested through a
              safe method. We aim to respond without undue delay and normally within
              one month where the GDPR applies.
            </p>
            <p>
              If the issue is not resolved, you may complain to the{" "}
              <a href="https://www.datatilsynet.no/en/about-us/contact-us/how-to-complain-to-the-norwegian-dpa/" target="_blank" rel="noreferrer">
                Norwegian Data Protection Authority (Datatilsynet)
              </a>{" "}
              or the supervisory authority where you live or work.
            </p>
          </section>

          <section id="children">
            <h2>10. Children and young people</h2>
            <p>
              Public educational material can be read without an account. Story
              submissions are intended for people aged 18 or over. A person
              under 18 must not submit a story unless a parent or
              legal guardian has provided verifiable consent and the operator has
              agreed in writing beforehand.
            </p>
            <p>
              If we learn that a child’s information was submitted without an
              appropriate basis, we may restrict access and delete it. Immediate child
              safety concerns should be directed to emergency or specialist services,
              not the story form.
            </p>
          </section>

          <section id="changes">
            <h2>11. Changes to this policy</h2>
            <p>
              We may update this policy when the service, providers or law changes.
              The effective date will be changed and material changes affecting
              contributors will be communicated through a reasonable channel where possible.
              New uses requiring consent will not be applied merely by rewriting this
              policy.
            </p>
          </section>

          <section className="legalConclusion" id="conclusion">
            <p className="eyebrow">Conclusion</p>
            <h2>Privacy is a continuing responsibility.</h2>
            <p>
              The purpose of this policy is not to remove every risk. It is to set
              clear limits, collect less, keep unpublished stories restricted, make
              publication a deliberate choice and give contributors workable routes
              to change or remove their information.
            </p>
            <div className="pageActions">
              <Link className="button primary" href="/terms">Read the Terms of Use</Link>
              <Link className="button secondary" href="/manage">Manage Your Submissions</Link>
              <Link className="textLink" href="/safety">Safety and Urgent Help</Link>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
