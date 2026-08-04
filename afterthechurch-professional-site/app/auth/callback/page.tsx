"use client";

import { useEffect, useState } from "react";
import type { EmailOtpType } from "@supabase/supabase-js";
import { getBrowserSupabase } from "@/lib/supabase-browser";

const SUCCESS_REDIRECT = "/login?confirmed=true";
const FAILURE_REDIRECT = "/login?confirmation=failed";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Confirming your account…");

  useEffect(() => {
    let cancelled = false;

    async function complete() {
      const supabase = getBrowserSupabase();
      const parameters = new URLSearchParams(window.location.search);
      const hashParameters = new URLSearchParams(
        window.location.hash.replace(/^#/, "")
      );

      const code = parameters.get("code");
      const tokenHash = parameters.get("token_hash");
      const type = parameters.get("type") as EmailOtpType | null;
      const accessToken = hashParameters.get("access_token");
      const refreshToken = hashParameters.get("refresh_token");

      try {
        if (code) {
          const { error } =
            await supabase.auth.exchangeCodeForSession(code);

          if (error) throw error;
        } else if (tokenHash && type) {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type
          });

          if (error) throw error;
        } else if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (error) throw error;
        } else {
          const { data, error } = await supabase.auth.getSession();

          if (error || !data.session) {
            throw error || new Error(
              "No confirmation credentials were provided."
            );
          }
        }

        await supabase.auth.signOut();

        if (!cancelled) {
          window.location.replace(SUCCESS_REDIRECT);
        }
      } catch (error) {
        console.error("Account confirmation failed:", error);

        if (!cancelled) {
          setMessage(
            "This confirmation link is invalid or has expired. Redirecting to sign in…"
          );

          window.setTimeout(() => {
            window.location.replace(FAILURE_REDIRECT);
          }, 1400);
        }
      }
    }

    complete();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="narrowPage">
      <p className="eyebrow">Account confirmation</p>
      <h1>{message}</h1>
    </section>
  );
}
