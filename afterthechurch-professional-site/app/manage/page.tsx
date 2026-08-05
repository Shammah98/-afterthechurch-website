import type { Metadata } from "next";
import AccountDashboard from "@/components/AccountDashboard";

export const metadata: Metadata = { title: "Manage Your Submissions" };

export default function ManageSubmissionsPage() {
  return (
    <section className="accountPage">
      <div className="pageIntro">
        <p className="eyebrow">Private submission controls</p>
        <h1>Your submissions remain manageable without an account.</h1>
        <p className="lead">
          On this device, you can review moderation status, change public
          privacy settings, request a correction, temporarily unpublish or
          permanently delete your story.
        </p>
      </div>
      <AccountDashboard />
    </section>
  );
}
