import type { Metadata } from "next";
import AdminDashboard from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Story Moderation",
  robots: { index: false, follow: false }
};

export default function AdminPage() {
  return (
    <section className="adminPage">
      <div className="pageIntro">
        <p className="eyebrow">Restricted moderation</p>
        <h1>Review without rewriting a survivor’s meaning.</h1>
        <p className="lead">
          Check privacy exposure, consent, safeguarding and publication risk.
          Record changes for the author instead of silently altering central claims.
        </p>
      </div>
      <AdminDashboard />
    </section>
  );
}
