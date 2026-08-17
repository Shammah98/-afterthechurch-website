import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerMain">
        <div className="footerIdentity">
          <Image
            src="/images/afterthechurch-logo.jpg"
            width={62}
            height={62}
            alt=""
            className="footerLogo"
          />
          <div>
            <strong>AfterTheChurch</strong>
            <p>Practical support, survivor stories and evidence-informed resources after religious harm.</p>
          </div>
        </div>

        <div className="footerLinks">
          <div>
            <h2>Explore</h2>
            <Link href="/stories">Stories</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/share">Share your story</Link>
          </div>
          <div>
            <h2>Information</h2>
            <Link href="/safety">Safety</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>

        <div className="footerSocials">
          <span className="footerSocialLabel">Follow</span>
          <SocialLinks />
        </div>
      </div>

      <div className="footerFinePrint">
        <span>AfterTheChurch does not replace medical, legal or emergency services.</span>
        <span>© {new Date().getFullYear()} AfterTheChurch</span>
      </div>
    </footer>
  );
}
