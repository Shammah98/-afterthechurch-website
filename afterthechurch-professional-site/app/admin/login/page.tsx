"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      if (!response.ok || !result.authenticated) {
        setMessage(result.error || "Login failed.");
        return;
      }
      window.location.assign("/admin");
    } catch {
      setMessage("Cannot sign in right now. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="adminPage">
      <div className="authPanel adminLogin">
        <p className="eyebrow">AfterTheChurch · Restricted access</p>
        <h1>Administrator login</h1>
        <p>Sign in to manage stories, moderation, support requests and private conversations.</p>
        <form onSubmit={signIn}>
          <label>
            Username
            <input type="text" autoComplete="username" required
              value={username} onChange={(event) => setUsername(event.target.value)}
              maxLength={128} />
          </label>
          <label>
            Password
            <input type="password" autoComplete="current-password" required
              value={password} onChange={(event) => setPassword(event.target.value)}
              maxLength={256} />
          </label>
          <button className="button primary authSubmit" type="submit" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <p className="formStatus" role="status" aria-live="polite">{message}</p>
      </div>
    </section>
  );
}
