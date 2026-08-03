import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerMain">
        <div className="footerIdentity">
          <Image
            src="/images/afterthechurch-logo.jpg"
            width={82}
            height={82}
            alt=""
            className="footerLogo"
          />
          <div>
            <strong>AfterTheChurch</strong>
            <p>Practical support for people rebuilding life after religious harm.</p>
          </div>
        </div>

        <div className="footerLinks">
          <div>
            <h2>Use the site</h2>
            <Link href="/resources">Educational resources</Link>
            <Link href="/stories">Survivor stories</Link>
            <Link href="/share">Story submission</Link>
            <Link href="/account">Your account</Link>
          </div>
          <div>
            <h2>Information</h2>
            <Link href="/safety">Safety and urgent help</Link>
            <Link href="/privacy">Privacy and data</Link>
            <Link href="/terms">Terms of use</Link>
            <Link href="/faq">Frequently asked questions</Link>
          </div>
        </div>
      </div>

      <div className="footerFinePrint">
        <p>
          AfterTheChurch does not provide emergency, medical, legal or crisis
          services. Use professional or emergency support where needed.
        </p>
        <p>© {new Date().getFullYear()} AfterTheChurch.</p>
      </div>
    </footer>
  );
}
