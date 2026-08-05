"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { FormEvent, useState } from "react";
import { getBrowserSupabase, setRememberSession } from "@/lib/supabase-browser";

type Mode = "signin" | "signup" | "forgot";

export default function AuthPanel() {
  const [mode, setMode] = useState<Mode>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setBusy(true);

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const supabase = getBrowserSupabase();

    try {
      if (mode === "signin") {
        const remember = form.get("remember") === "on";
        setRememberSession(remember);

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          setStatus("We could not sign you in with those details.");
          return;
        }
        window.location.href = "/account";
      }

      if (mode === "signup") {
        const displayName = String(form.get("displayName") || "").trim();
        const confirmation = String(form.get("confirmation") || "");

        if (password.length < 10) {
          setStatus("Use a password containing at least 10 characters.");
          return;
        }
        if (password !== confirmation) {
          setStatus("The password confirmation does not match.");
          return;
        }
        if (form.get("terms") !== "on") {
          setStatus("Please review and accept the Terms and Privacy Policy.");
          return;
        }

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${siteUrl}/auth/callback?next=/account`,
            data: {
              display_name: displayName,
              communications: form.get("communications") === "on"
            }
          }
        });

       if (error) {
  console.error("Signup error:", error);
  setStatus(`Signup failed: ${error.message}`);
  return;
             }
        setStatus(
          "Check your email for the confirmation link. For privacy, this message is the same whether or not the address was previously used."
        );
      }

      if (mode === "forgot") {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${siteUrl}/auth/reset`
        });
        setStatus(
          "If an account exists for that address, a password-reset email will arrive shortly."
        );
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="authPanel">
      <div className="authTabs" role="tablist" aria-label="Account options">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "signin"}
          className={mode === "signin" ? "active" : ""}
          onClick={() => { setMode("signin"); setStatus(""); }}
        >
          Sign In
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "signup"}
          className={mode === "signup" ? "active" : ""}
          onClick={() => { setMode("signup"); setStatus(""); }}
        >
          Create Account
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <label>
            Display name or pseudonym
            <input name="displayName" required maxLength={80} autoComplete="nickname" />
            <small>Your legal name is not required for public participation.</small>
          </label>
        )}

        <label>
          Email address
          <input name="email" type="email" required autoComplete="email" maxLength={160} />
        </label>

        {mode !== "forgot" && (
          <>
            <label>
              Password
              <span className="passwordField">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={10}
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                </button>
              </span>
            </label>

            {mode === "signup" && (
              <label>
                Confirm password
                <input
                  name="confirmation"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={10}
                  autoComplete="new-password"
                />
              </label>
            )}
          </>
        )}

        {mode === "signin" && (
          <div className="authOptions">
            <label className="checkboxRow">
              <input type="checkbox" name="remember" />
              Remember me on this device
            </label>
            <button
              type="button"
              className="linkButton"
              onClick={() => { setMode("forgot"); setStatus(""); }}
            >
              Forgotten password?
            </button>
          </div>
        )}

        {mode === "signup" && (
          <>
            <label className="checkboxRow">
              <input type="checkbox" name="terms" required />
              <span>
                I confirm that I am 18 or older and agree to the{" "}
                <Link href="/terms">Terms of Use</Link> and{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </span>
            </label>
            <label className="checkboxRow">
              <input type="checkbox" name="communications" />
              Receive occasional service updates. This is optional.
            </label>
          </>
        )}

        <button className="button primary authSubmit" type="submit" disabled={busy}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign In" : mode === "signup" ? "Create Account" : "Request Reset Link"}
        </button>

        {mode === "forgot" && (
          <button
            type="button"
            className="linkButton backToSignIn"
            onClick={() => { setMode("signin"); setStatus(""); }}
          >
            Return to Sign In
          </button>
        )}

        <p className="formStatus" role="status" aria-live="polite">{status}</p>
      </form>
    </div>
  );
}
