"use client";

import { useEffect, useState } from "react";
import { getBrowserSupabase } from "@/lib/supabase-browser";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Confirming your account…");

  useEffect(() => {
    async function complete() {
      const parameters = new URLSearchParams(window.location.search);
      const code = parameters.get("code");
      const next = parameters.get("next") || "/account";

      if (!code) {
        setMessage("The confirmation link is incomplete.");
        return;
      }

      const { error } = await getBrowserSupabase().auth.exchangeCodeForSession(code);

      if (error) {
        setMessage("The confirmation link is invalid or has expired.");
        return;
      }

      window.location.replace(next.startsWith("/") ? next : "/account");
    }

    complete();
  }, []);

  return (
    <section className="narrowPage">
      <p className="eyebrow">Account confirmation</p>
      <h1>{message}</h1>
    </section>
  );
}
