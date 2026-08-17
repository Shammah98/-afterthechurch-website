export default function SocialLinks() {
  return (
    <div className="socialLinks" aria-label="AfterTheChurch social media">
      <a
        className="socialIconLink"
        href="https://www.instagram.com/afterthechurch_/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="AfterTheChurch on Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
          <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.9" />
          <circle cx="17.6" cy="6.7" r="1.15" fill="currentColor" />
        </svg>
        <span className="srOnly">Instagram</span>
      </a>
      <a
        className="socialIconLink"
        href="https://www.tiktok.com/@afterthechurch"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="AfterTheChurch on TikTok"
        title="TikTok"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.2 3.2v10.5a4.7 4.7 0 1 1-4-4.64v2.58a2.25 2.25 0 1 0 1.45 2.1V3.2h2.55Zm0 0c.35 2.5 1.8 4.03 4.32 4.52v2.54a7.35 7.35 0 0 1-4.32-1.72" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="srOnly">TikTok</span>
      </a>
    </div>
  );
}
