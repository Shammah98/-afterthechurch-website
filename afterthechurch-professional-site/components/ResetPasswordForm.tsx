"use client";

import { FormEvent, useEffect, useState } from "react";
import { getBrowserSupabase } from "@/lib/supabase-browser";

export default function ResetPasswordForm() {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("Checking the reset link…");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    async function initialise() {
      const code = new URLSearchParams(window.location.search).get("code");
      const supabase = getBrowserSupabase();

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          setStatus("This reset link is invalid or has expired.");
          return;
        }
      }

      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        setStatus("This reset link is invalid or has expired.");
        return;
      }

      setReady(true);
      setStatus("");
    }

    initialise();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");

    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") || "");
    const confirmation = String(form.get("confirmation") || "");

    if (password.length < 10) {
      setStatus("Use a password containing at least 10 characters.");
      setBusy(false);
      return;
    }

    if (password !== confirmation) {
      setStatus("The password confirmation does not match.");
      setBusy(false);
      return;
    }

    const { error } = await getBrowserSupabase().auth.updateUser({ password });
    setStatus(
      error
        ? "The password could not be updated. Request a new reset link."
        : "Your password has been updated. You can now open your account."
    );
    setBusy(false);
  }

  return (
    <form className="resetForm" onSubmit={submit}>
      <label>
        New password
        <input name="password" type="password" minLength={10} required disabled={!ready} />
      </label>
      <label>
        Confirm new password
        <input name="confirmation" type="password" minLength={10} required disabled={!ready} />
      </label>
      <button className="button primary" disabled={!ready || busy}>
        {busy ? "Updating…" : "Update Password"}
      </button>
      <p className="formStatus" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
