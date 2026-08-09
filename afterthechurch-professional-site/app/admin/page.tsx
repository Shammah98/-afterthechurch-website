import type { Metadata } from "next";
import AdminCommentModeration from "@/components/AdminCommentModeration";
import AdminDashboard from "@/components/AdminDashboard";
import AdminPublishedStories from "@/components/AdminPublishedStories";

export const metadata: Metadata = {
  title: "Story and Comment Moderation",
  robots: { index: false, follow: false }
};

export default function AdminPage() {
  return (
    <section className="adminPage">
      <div className="pageIntro">
        <p className="eyebrow">Restricted moderation</p>
        <h1>Review submissions and comments without rewriting a survivor’s meaning.</h1>
        <p className="lead">
          Check privacy exposure, consent, safeguarding, professional claims and
          publication risk. Comments remain private until an administrator approves them.
        </p>
      </div>
      <AdminDashboard />
      <AdminPublishedStories />
      <AdminCommentModeration />
    </section>
  );
}
