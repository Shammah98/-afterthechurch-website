import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Safety and Urgent Help" };

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
      </div>

      <h2>One option is to make a private safety record</h2>
      <p>
        You may find it useful to record dates, messages, injuries, financial
        demands, witnesses and the names of professionals contacted. Store copies
        somewhere the organisation or controlling person cannot access. This does
        not work for every situation, especially where discovery would increase risk.
      </p>

      <h2 id="quick-exit">What the Quick Exit button does</h2>
      <p>
        The button immediately replaces this website with Wikipedia. It does not
        display a confirmation message. It also does not erase browser history,
        downloads, network logs, screenshots or records held by an employer,
        school, internet provider or device administrator.
      </p>

      <h2>Private browsing and recent history</h2>
      <p>
        Private-browsing mode can reduce records stored on the device after the
        private window closes, but it does not make activity invisible to networks,
        websites or managed-device software. Browser instructions differ by device.
        Use a safer device where checking history or opening a private window could
        itself create danger.
      </p>

      <h2>Professional support</h2>
      <p>
        Depending on the situation, an independent doctor, counsellor, domestic
        abuse service, safeguarding professional, lawyer, debt adviser, police
        service or specialist helpline may be appropriate. Check that the service
        is independent of the organisation involved.
      </p>

      <Link className="button secondary" href="/resources">
        Browse Educational Resources
      </Link>
    </section>
  );
}
