import type { Metadata } from "next";
import Link from "next/link";
import HelpSomeoneForm from "@/components/HelpSomeoneForm";

export const metadata: Metadata = {
  title: "Help Someone Else Safely",
  description:
    "Send a private support request when you are worried about someone affected by religious harm or coercive control."
};

export default function HelpSomeonePage() {
  return (
    <section className="narrowPage prosePage">
      <p className="eyebrow">Help someone else safely</p>
      <h1>Tell us what is happening without putting them at greater risk.</h1>
      <p className="lead">
        This private form is for a friend, relative, student, colleague or other person you are worried about.
        Share only what AfterTheChurch needs to understand the situation and decide what a safe next step could be.
      </p>

      <div className="urgentNotice urgentContactNotice">
        <p className="eyebrow">Immediate danger</p>
        <h2>Do not wait for a reply from AfterTheChurch.</h2>
        <p>
          AfterTheChurch is not an emergency, medical, police or statutory safeguarding service.
          If someone may be seriously harmed now, contact the emergency or safeguarding service where they live.
        </p>
        <Link className="textLink" href="/safety">
          Open Safety and Urgent Help
        </Link>
      </div>

      <section className="contactPreparation" aria-labelledby="before-sharing">
        <div>
          <p className="eyebrow">Before sharing details</p>
          <h2 id="before-sharing">Protect their privacy first.</h2>
        </div>
        <ul className="plainList">
          <li>Do not include a home address, passwords, identification numbers, medical records or information that is not needed.</li>
          <li>If they do not know you are contacting us, do not give us their phone number, email or other direct contact details.</li>
          <li>Tell us if their device, messages, location, finances or movements may be monitored.</li>
          <li>Tell us about any risk of violence, suicide or self-harm, sexual harm, medical neglect, homelessness, child-safeguarding concerns or retaliation.</li>
        </ul>
      </section>

      <div className="formSection">
        <HelpSomeoneForm />
      </div>

      <p className="fieldHelp" style={{ marginTop: "30px" }}>
        Requests are kept private and reviewed only by authorised AfterTheChurch administrators.
        Read the <Link href="/privacy">Privacy Policy</Link> for information about data handling.
      </p>
    </section>
  );
}
