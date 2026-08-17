import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerMain">
        <div className="footerIdentity">
          <strong>AfterTheChurch</strong>
          <p>Practical support, survivor stories and evidence-informed resources after religious harm.</p>
        </div>

        <div className="footerControls">
          <ThemeToggle />
          <SocialLinks />
        </div>

        <nav className="footerLinks" aria-label="Footer navigation">
          <Link href="/stories">Stories</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/share">Share your story</Link>
          <Link href="/safety">Safety</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>

      <div className="footerFinePrint">
        <span>AfterTheChurch does not replace medical, legal or emergency services.</span>
        <span>© {new Date().getFullYear()} AfterTheChurch</span>
      </div>
    </footer>
  );
}
