import type { Metadata } from "next";
import AuthPanel from "@/components/AuthPanel";
import QuoteCarousel from "@/components/QuoteCarousel";

export const metadata: Metadata = { title: "Sign In or Create Account" };

export default function AuthPage() {
  return (
    <section className="authPage">
      <div className="authIntro">
        <p className="eyebrow">Your account</p>
        <h1>We value your privacy!!.</h1>
        <p>
          An account is only needed to post your survival story,
          and participate in future mod features. Public information remains
          available to anyone without signing in. So please take that into account when creating a display name and posting your stories.
        </p>
        <QuoteCarousel />
      </div>
      <AuthPanel />
    </section>
  );
}
