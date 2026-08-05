import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety and Urgent Help",
  description:
    "Practical safety planning and verified survivor-support contacts for the UK, Norway, the United States and other countries."
};

type SupportContact = {
  name: string;
  purpose: string;
  phone?: string;
  phoneHref?: string;
  text?: string;
  textHref?: string;
  availability?: string;
  href: string;
  linkLabel: string;
};

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

const ukContacts: SupportContact[] = [
  {
    name: "National Domestic Abuse Helpline",
    purpose: "Confidential support, options and refuge referrals for women, run by Refuge.",
    phone: "0808 2000 247",
    phoneHref: "tel:08082000247",
    availability: "Free, 24 hours a day",
    href: "https://www.nationaldahelpline.org.uk/",
    linkLabel: "Call, chat or plan online"
  },
  {
    name: "Men’s Advice Line",
    purpose: "Specialist domestic-abuse support for men, including trans and non-binary people.",
    phone: "0808 801 0327",
    phoneHref: "tel:08088010327",
    href: "https://mensadviceline.org.uk/",
    linkLabel: "Check current opening times and webchat"
  },
  {
    name: "Galop",
    purpose: "Domestic-abuse support for LGBT+ people, plus specialist help with hate crime and conversion practices.",
    phone: "0800 999 5428",
    phoneHref: "tel:08009995428",
    href: "https://galop.org.uk/get-help/helplines/",
    linkLabel: "Check helpline hours and online options"
  },
  {
    name: "Rape Crisis England & Wales",
    purpose: "Specialist support if something sexual happened without consent, or you are unsure.",
    phone: "0808 500 2222",
    phoneHref: "tel:08085002222",
    availability: "Free phone and online chat, 24 hours a day; ages 16+",
    href: "https://rapecrisis.org.uk/get-help/want-to-talk/",
    linkLabel: "Open the support line"
  },
  {
    name: "NHS urgent mental-health help",
    purpose: "Urgent assessment and connection to a local mental-health professional.",
    phone: "111",
    phoneHref: "tel:111",
    availability: "Call 111 and select the mental-health option",
    href: "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/",
    linkLabel: "Read NHS urgent-help guidance"
  },
  {
    name: "Samaritans",
    purpose: "A listening service for distress, despair or suicidal thoughts.",
    phone: "116 123",
    phoneHref: "tel:116123",
    availability: "Free, day or night",
    href: "https://www.samaritans.org/how-we-can-help/contact-samaritan/talk-us-phone/",
    linkLabel: "See what happens when you call"
  },
  {
    name: "Childline and NSPCC",
    purpose: "Childline supports anyone under 19. Adults worried about a child can contact the NSPCC.",
    phone: "Childline: 0800 1111",
    phoneHref: "tel:08001111",
    text: "NSPCC: 0808 800 5000",
    textHref: "tel:08088005000",
    href: "https://www.nspcc.org.uk/keeping-children-safe/reporting-abuse/nspcc-helpline/",
    linkLabel: "Report a concern or get advice"
  },
  {
    name: "Housing, benefits, debt and legal routes",
    purpose: "Shelter can help with homelessness and housing rights. Citizens Advice can help map benefits, debt, employment, family and consumer options.",
    href: "https://www.citizensadvice.org.uk/",
    linkLabel: "Find your local Citizens Advice service"
  }
];

const norwayContacts: SupportContact[] = [
  {
    name: "VO-linjen",
    purpose: "Norway’s national helpline for anyone affected by domestic violence or abuse, including concerned relatives.",
    phone: "116 006",
    phoneHref: "tel:116006",
    availability: "Free, anonymous if preferred, 24 hours a day; Norwegian and English",
    href: "https://dinutvei.no/en/english/the-vo-helpline-116-006/",
    linkLabel: "Call, chat or find local services"
  },
  {
    name: "Legevakt",
    purpose: "Immediate medical or mental-health help that cannot wait for your GP. Call 113 when life or health is in immediate danger.",
    phone: "116 117",
    phoneHref: "tel:116117",
    availability: "Free to call, 24 hours a day",
    href: "https://www.helsenorge.no/en/help-services-in-the-municipalities/out-of-hours-medical-service/",
    linkLabel: "Read official medical guidance"
  },
  {
    name: "Mental Helse",
    purpose: "Anonymous emotional support when you need someone to talk to.",
    phone: "116 123",
    phoneHref: "tel:116123",
    availability: "Free; phone and chat are open around the clock",
    href: "https://www.helsenorge.no/en/healthcare/",
    linkLabel: "See Helsenorge’s support options"
  },
  {
    name: "Children, young people and sexual abuse",
    purpose: "The emergency helpline for children and young people is 116 111. Dinutvei lists sexual-abuse support, crisis shelters and local services.",
    phone: "116 111",
    phoneHref: "tel:116111",
    href: "https://dinutvei.no/en/",
    linkLabel: "Find a specialist service"
  }
];

const usContacts: SupportContact[] = [
  {
    name: "National Domestic Violence Hotline",
    purpose: "Live advocates for relationship abuse, safety planning and local referrals.",
    phone: "800-799-7233",
    phoneHref: "tel:18007997233",
    text: "Text START to 88788",
    textHref: "sms:88788?body=START",
    availability: "Free and confidential, 24 hours a day",
    href: "https://www.thehotline.org/get-help/",
    linkLabel: "Chat with a live advocate"
  },
  {
    name: "RAINN National Sexual Assault Hotline",
    purpose: "Specialist support for sexual assault and connection to local services.",
    phone: "800-656-4673",
    phoneHref: "tel:18006564673",
    text: "Text HOPE to 64673",
    textHref: "sms:64673?body=HOPE",
    availability: "Free and confidential, 24 hours a day; English and Spanish",
    href: "https://rainn.org/help-and-healing/hotline/",
    linkLabel: "Open the hotline and chat"
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    purpose: "A crisis counsellor for suicidal thoughts, emotional distress or concern about another person.",
    phone: "Call or text 988",
    phoneHref: "tel:988",
    availability: "Free and confidential, 24 hours a day",
    href: "https://988lifeline.org/",
    linkLabel: "Chat with 988"
  },
  {
    name: "211 local essentials",
    purpose: "Local referrals for housing, food, healthcare, bills and other essential services.",
    phone: "211",
    phoneHref: "tel:211",
    href: "https://www.211.org/",
    linkLabel: "Search local 211 services"
  }
];

function ContactCard({ contact }: { contact: SupportContact }) {
  return (
    <article className="contactCard">
      <h3>{contact.name}</h3>
      <p>{contact.purpose}</p>
      {contact.phone && contact.phoneHref ? (
        <a className="contactNumber" href={contact.phoneHref}>
          {contact.phone}
        </a>
      ) : null}
      {contact.text && contact.textHref ? (
        <a className="contactText" href={contact.textHref}>
          {contact.text}
        </a>
      ) : null}
      {contact.availability ? <p className="contactAvailability">{contact.availability}</p> : null}
      <a className="textLink contactLink" href={contact.href} target="_blank" rel="noreferrer">
        {contact.linkLabel} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function SafetyPage() {
  return (
    <section className="narrowPage prosePage safetyPage">
      <p className="eyebrow">Safety and urgent help</p>
      <h1>Get help and plan safely.</h1>
      <p className="lead">
        AfterTheChurch is not an emergency, medical, legal, safeguarding or crisis-response
        service. The independent services below can help you assess risk, find urgent care
        and plan what to do next without requiring you to decide everything today.
      </p>

      <div className="urgentNotice urgentContactNotice">
        <p className="eyebrow">Immediate danger</p>
        <h2>Call the emergency number where you are.</h2>
        <div className="emergencyNumbers" aria-label="Emergency numbers by location">
          <a href="tel:999"><strong>UK</strong><span>999</span></a>
          <a href="tel:112"><strong>Europe</strong><span>112</span></a>
          <a href="tel:112"><strong>Norway police</strong><span>112</span></a>
          <a href="tel:113"><strong>Norway medical</strong><span>113</span></a>
          <a href="tel:911"><strong>US / Canada</strong><span>911</span></a>
        </div>
        <p>
          Say where you are, what is happening now, whether anyone is injured, whether
          weapons are present and whether children or dependent adults are involved. In
          the UK, if you call 999 from a mobile and cannot speak, listen and press 55 when
          prompted. Elsewhere, follow the operator’s instructions.
        </p>
      </div>

      <nav className="contactJumpNav" aria-label="Jump to support contacts">
        <a href="#uk-support">UK</a>
        <a href="#norway-support">Norway</a>
        <a href="#us-support">United States</a>
        <a href="#international-support">Other countries</a>
        <a href="#contact-script">What to say</a>
      </nav>

      <section className="contactPreparation" aria-labelledby="before-contacting">
        <div>
          <p className="eyebrow">Before contacting a service</p>
          <h2 id="before-contacting">Make the contact safer for you.</h2>
        </div>
        <ul className="plainList">
          <li>Use a device, phone plan or email account the controlling person or organisation cannot access, if possible.</li>
          <li>Tell the adviser whether it is safe to call back, leave voicemail, text or send email. You can say “do not contact me” unless you call again.</li>
          <li>Ask about confidentiality, record keeping and the limits of confidentiality before giving names, addresses or evidence.</li>
          <li>If you need an interpreter, disability access, medication, transport, pet accommodation or help for children, say so early.</li>
          <li>Do not confront anyone, announce a plan to leave or collect evidence if discovery could increase the danger.</li>
        </ul>
      </section>

      <section className="supportRegion" id="uk-support" aria-labelledby="uk-heading">
        <div className="supportRegionHeader">
          <p className="eyebrow">United Kingdom</p>
          <h2 id="uk-heading">UK support contacts</h2>
          <p>Use 999 for immediate danger. These services cover different needs and eligibility.</p>
        </div>
        <div className="contactGrid">
          {ukContacts.map((contact) => <ContactCard contact={contact} key={contact.name} />)}
        </div>
        <p className="directoryNote">
          For housing help, you can also use the{" "}
          <a href="https://england.shelter.org.uk/get_help/helpline" target="_blank" rel="noreferrer">
            Shelter emergency helpline and webchat
          </a>. Services and law differ across England, Wales, Scotland and Northern Ireland,
          so use each organisation’s location checker.
        </p>
      </section>

      <section className="supportRegion" id="norway-support" aria-labelledby="norway-heading">
        <div className="supportRegionHeader">
          <p className="eyebrow">Norway</p>
          <h2 id="norway-heading">Norway support contacts</h2>
          <p>Use police 112 or medical emergency 113 for immediate danger.</p>
        </div>
        <div className="contactGrid">
          {norwayContacts.map((contact) => <ContactCard contact={contact} key={contact.name} />)}
        </div>
        <p className="directoryNote">
          A local crisis shelter can provide a safe place, advice, guidance, legal help and
          referrals. You can contact one even if you do not need accommodation or are not
          ready to leave. Find one through{" "}
          <a href="https://dinutvei.no/en/" target="_blank" rel="noreferrer">Dinutvei</a>.
        </p>
      </section>

      <section className="supportRegion" id="us-support" aria-labelledby="us-heading">
        <div className="supportRegionHeader">
          <p className="eyebrow">United States</p>
          <h2 id="us-heading">US support contacts</h2>
          <p>Use 911 for immediate danger or a life-threatening medical emergency.</p>
        </div>
        <div className="contactGrid">
          {usContacts.map((contact) => <ContactCard contact={contact} key={contact.name} />)}
        </div>
      </section>

      <section className="supportRegion internationalRegion" id="international-support" aria-labelledby="international-heading">
        <div className="supportRegionHeader">
          <p className="eyebrow">Other countries</p>
          <h2 id="international-heading">Find verified help where you live</h2>
          <p>
            Do not assume a number works outside its stated country. Use a country directory
            and confirm the service’s remit before sharing identifying information.
          </p>
        </div>
        <div className="internationalLinks">
          <a href="https://lila.help/" target="_blank" rel="noreferrer">
            <strong>Lila.help</strong>
            <span>Vetted gender-based violence helplines and organisations in almost every country.</span>
          </a>
          <a href="https://nomoredirectory.org/" target="_blank" rel="noreferrer">
            <strong>NO MORE Global Directory</strong>
            <span>Domestic and sexual violence services searchable by country and region.</span>
          </a>
          <a href="https://findahelpline.com/" target="_blank" rel="noreferrer">
            <strong>Find A Helpline</strong>
            <span>Verified crisis and emotional-support services in more than 150 countries.</span>
          </a>
          <a href="https://childhelplineinternational.org/helplines/" target="_blank" rel="noreferrer">
            <strong>Child Helpline International</strong>
            <span>Local child and young-person helplines by country.</span>
          </a>
        </div>
      </section>

      <section className="contactScript" id="contact-script" aria-labelledby="script-heading">
        <p className="eyebrow">If words are difficult</p>
        <h2 id="script-heading">You can read this out or paste it into a chat.</h2>
        <blockquote>
          “I am experiencing control or abuse connected with a religious community. I am
          worried about [the immediate risk]. I need help with [safety planning / medical
          care / housing / money / a child / legal options]. It is [safe / not safe] to call
          me back. Please do not leave a voicemail. Before I give my name, can you explain
          confidentiality and when you must share information?”
        </blockquote>
        <p>
          You do not need perfect language, proof or a complete plan. If the first service
          is not the right one, ask: “Who can make a safe referral, and what will you share
          with them?”
        </p>
      </section>

      <h2 id="safety-plan">A safety plan can help before, during or after leaving</h2>
      <p>
        A safety plan is a personal, practical set of options for different levels of risk.
        It is not a promise to leave and it should not be controlled by another person.
        Start with the area that would make one realistic option more available.
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
        demands, witnesses and the names of professionals contacted. Separate what you
        directly observed from what another person reported. Store copies somewhere the
        organisation or controlling person cannot access. Do not collect evidence when
        discovery, illegal access or confrontation would increase risk.
      </p>

      <h2>Technology may reveal more than browser history</h2>
      <p>
        Shared accounts, location services, family phone plans, cloud backups, connected
        vehicles, email recovery addresses and message previews can expose activity.
        Abruptly changing settings may alert a person who is monitoring the device. When
        possible, use a safer device and obtain specialist technology-safety advice before
        making changes.
      </p>

      <h2 id="quick-exit">What the Quick Exit button does</h2>
      <p>
        The button immediately replaces this website with Google. It does not display a
        confirmation message. It also does not erase browser history, downloads, network
        logs, screenshots, synced tabs or records held by an employer, school, internet
        provider or device administrator.
      </p>

      <h2>Private browsing is limited</h2>
      <p>
        Private-browsing mode can reduce records stored on the device after the private
        window closes, but it does not make activity invisible to networks, websites or
        monitoring software. Use a safer device where opening a private window, clearing
        history or changing settings could itself create danger.
      </p>

      <h2>Choose support independent of the organisation involved</h2>
      <p>
        Depending on the situation, useful support may include an independent doctor,
        counsellor, domestic-abuse advocate, safeguarding professional, lawyer, debt
        adviser, housing service, police service or specialist helpline. Ask about
        confidentiality, record keeping, mandatory reporting, fees and conflicts of
        interest before sharing more than is necessary.
      </p>

      <p className="serviceAccuracyNote">
        Contact details and opening hours can change. The services above were checked on
        5 August 2026. If a line does not connect, use its official website or your local
        emergency service. AfterTheChurch does not receive referral fees from these services.
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
