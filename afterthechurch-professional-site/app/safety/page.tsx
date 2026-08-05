import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Safety and Urgent Help" };

const planningAreas = [
  {
    title: "People and communication",
    text: "Choose one or two trusted contacts, agree on a safer way to communicate and decide what a code word should mean."
  },
  {
    title: "Documents and records",
    text: "Consider identification, medical information, financial records, important messages and contact details. Store copies only where discovery will not increase risk."
  },
  {
    title: "Health and medication",
    text: "Identify independent medical care, necessary medication, prescriptions and any health decision that should not depend on a religious leader’s permission."
  },
  {
    title: "Money, housing and transport",
    text: "Map what you can access now, what the organisation controls, where you could stay briefly and how you could travel without relying on the same authority."
  }
];

export default function SafetyPage() {
  return (
    <section className="narrowPage prosePage">
      <p className="eyebrow">Safety and urgent help</p>
      <h1>Use support that matches the level of risk.</h1>
      <p className="lead">
        AfterTheChurch is an educational and storytelling platform. It is not an
        emergency, medical, legal, safeguarding or crisis-response service.
      </p>

      <div className="urgentNotice">
        <h2>Immediate danger or serious medical risk</h2>
        <p>
          Contact emergency services in your location when there is immediate
          violence, severe medical danger, abuse of a child or vulnerable adult,
          stalking, confinement, or an immediate risk of suicide or self-harm.
        </p>
        <p>
          If you can do so safely, state the immediate risk, location, injuries,
          weapons, children or dependent people involved and the help needed now.
          Laws and emergency systems differ by country.
        </p>
      </div>

      <h2 id="safety-plan">A safety plan can help before, during or after leaving</h2>
      <p>
        A safety plan is a personal, practical set of options for different levels
        of risk. It is not a promise to leave and it should not be controlled by
        another person. Start with the area that would make one realistic option
        more available.
      </p>

      <div className="safetyActionGrid">
        {planningAreas.map((area) => (
          <article key={area.title}>
            <strong>{area.title}</strong>
            <p>{area.text}</p>
          </article>
        ))}
      </div>

      <h2>Questions that can clarify the level of risk</h2>
      <ul className="plainList">
        <li>Has anyone threatened violence, suicide, exposure, shunning, homelessness or loss of children?</li>
        <li>Are your phone, accounts, transport, medication, money or location being monitored or controlled?</li>
        <li>Would seeking outside advice, reducing attendance or saying no trigger punishment?</li>
        <li>Is a child, dependent adult or another survivor currently unsafe?</li>
        <li>What would need to be available for the next twenty-four hours to be safer?</li>
      </ul>

      <h2>Make a private safety record only when it is safe</h2>
      <p>
        You may find it useful to record dates, exact messages, injuries, financial
        demands, witnesses and the names of professionals contacted. Separate what
        you directly observed from what another person reported. Store copies
        somewhere the organisation or controlling person cannot access. Do not
        collect evidence when discovery, illegal access or confrontation would
        increase risk.
      </p>

      <h2>Technology may reveal more than browser history</h2>
      <p>
        Shared accounts, location services, family phone plans, cloud backups,
        connected vehicles, email recovery addresses and message previews can
        expose activity. Abruptly changing settings may alert a person who is
        monitoring the device. When possible, use a safer device and obtain
        specialist technology-safety advice before making changes.
      </p>

      <h2 id="quick-exit">What the Quick Exit button does</h2>
      <p>
        The button immediately replaces this website with Google. It does not
        display a confirmation message. It also does not erase browser history,
        downloads, network logs, screenshots, synced tabs or records held by an
        employer, school, internet provider or device administrator.
      </p>

      <h2>Private browsing is limited</h2>
      <p>
        Private-browsing mode can reduce records stored on the device after the
        private window closes, but it does not make activity invisible to networks,
        websites or monitoring software. Use a safer device where opening a private
        window, clearing history or changing settings could itself create danger.
      </p>

      <h2>Choose support independent of the organisation involved</h2>
      <p>
        Depending on the situation, useful support may include an independent
        doctor, counsellor, domestic-abuse advocate, safeguarding professional,
        lawyer, debt adviser, housing service, police service or specialist
        helpline. Ask about confidentiality, record keeping, mandatory reporting,
        fees and conflicts of interest before sharing more than is necessary.
      </p>

      <div className="pageActions">
        <Link className="button primary" href="/resources/supporting-someone-still-inside">
          Help Someone Else Safely
        </Link>
        <Link className="button secondary" href="/privacy">
          Review Website Privacy
        </Link>
        <Link className="textLink" href="/resources">
          Browse Educational Resources
        </Link>
      </div>
    </section>
  );
}
