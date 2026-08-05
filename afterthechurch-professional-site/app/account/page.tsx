import type { Metadata } from "next";
import AccountDashboard from "@/components/AccountDashboard";

export const metadata: Metadata = { title: "Your Account" };

export default function AccountPage() {
  return (
    <section className="accountPage">
      <div className="pageIntro">
        <p className="eyebrow">Private account</p>
        <h1>Your submissions remain manageable.</h1>
        <p className="lead">
          Review moderation status, change public privacy settings, request a
          correction, temporarily unpublish or permanently delete your story.
        </p>
      </div>
      <AccountDashboard />
    </section>
  );
}
