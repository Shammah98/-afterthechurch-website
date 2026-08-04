import type { Metadata } from "next";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export const metadata: Metadata = { title: "Reset Password" };

export default function ResetPage() {
  return (
    <section className="narrowPage">
      <p className="eyebrow">Password reset</p>
      <h1>Choose a new password.</h1>
      <p className="lead">Use a password you do not use on another website.</p>
      <ResetPasswordForm />
    </section>
  );
}
