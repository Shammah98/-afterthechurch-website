import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About AfterTheChurch" };

export default function AboutPage() {
  return (
    <>
      <section className="pageHero splitHero">
        <div>
          <p className="eyebrow">Who is behind AfterTheChurch</p>
          <h1>A survivor-led project that must earn trust through transparency.</h1>
          <p className="lead">
            AfterTheChurch was created by survivors and advocates who understand
            how difficult it can be to question a trusted religious community.
          </p>
        </div>
        <Image
          src="/images/group-field.jpg"
          alt="A group walking together along a path through a field."
          width={760}
          height={500}
        />
      </section>

      <section className="aboutContent editorialSection">
        <div>
          <h2>What the project is for</h2>
          <p>
            The website is being developed to provide religiously neutral
            explanations, privacy-controlled survivor accounts and practical
            information for people affected by abuse, coercion, manipulation,
            exclusion, financial exploitation and psychological harm in religious
            settings.
          </p>
          <p>
            It does not require visitors to reject or adopt a religion, forgive,
            reconcile, report publicly or use a particular label for their
            experience.
          </p>
        </div>

        <div>
          <h2>Independence and funding</h2>
          <p>
            The project is not controlled by a church, denomination, political
            organisation or religious ministry. Before making stronger claims
            about funding independence, the organisation should publish its
            actual funding sources, donor safeguards and conflict-of-interest rules.
          </p>
          <p>
            Donors should not receive access to unpublished stories, survivor
            identities or editorial control.
          </p>
        </div>

        <div>
          <h2>Leadership and safeguarding</h2>
          <p>
            Public information should identify leadership roles, relevant
            experience, safeguarding responsibilities and the route for complaints.
            A team member may use a pseudonym where disclosure creates a genuine
            safety risk, but their responsibilities should still be clear.
          </p>
        </div>

        <div>
          <h2>What remains to be published</h2>
          <ul className="plainList">
            <li>Named leadership and governance information.</li>
            <li>Safeguarding policy and escalation route.</li>
            <li>Editorial and moderation standards.</li>
            <li>Funding sources and conflict-of-interest register.</li>
            <li>Complaints and appeals procedure.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
