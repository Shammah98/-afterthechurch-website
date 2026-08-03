import type { Metadata } from "next";
import AuthPanel from "@/components/AuthPanel";
import QuoteCarousel from "@/components/QuoteCarousel";

export const metadata: Metadata = { title: "Sign In or Create Account" };

export default function AuthPage() {
  return (
    <section className="authPage">
      <div className="authIntro">
        <p className="eyebrow">Your account</p>
        <h1>Use a pseudonym. Keep reading without an account.</h1>
        <p>
          An account is only needed to save resources, submit or manage a story,
          and participate in future moderated features. Public information remains
          available without signing in.
        </p>
        <QuoteCarousel />
      </div>
      <AuthPanel />
    </section>
  );
}
