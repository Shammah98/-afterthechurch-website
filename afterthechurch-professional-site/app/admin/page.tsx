import type { Metadata } from "next";
import AdminCommentModeration from "@/components/AdminCommentModeration";
import AdminDashboard from "@/components/AdminDashboard";
import AdminPublishedStories from "@/components/AdminPublishedStories";
import AdminSupportRequests from "@/components/AdminSupportRequests";

export const metadata: Metadata = {
  title: "Story, Comment and Support Moderation",
  robots: { index: false, follow: false }
};

export default function AdminPage() {
  return (
    <section className="adminPage">
      <div className="pageIntro">
        <p className="eyebrow">Restricted moderation</p>
        <h1>Review submissions, support requests and comments without exposing private information.</h1>
        <p className="lead">
          Check privacy exposure, consent, safeguarding, professional claims and
          publication risk. Support requests and comments remain private and are available only to authorised administrators.
        </p>
      </div>
      <AdminDashboard />
      <AdminSupportRequests />
      <AdminPublishedStories />
      <AdminCommentModeration />
    </section>
  );
}
