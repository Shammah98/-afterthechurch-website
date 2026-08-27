"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { getAdminAccessToken, getBrowserSupabase } from "@/lib/supabase-browser";

type ReviewStory = {
  id: string;
  title: string;
  displayName: string;
  churchName: string;
  privacyLevel: string;
  mediaType: string;
  mediaUrl: string | null;
  imageUrl: string | null;
  storyText: string | null;
  shortSummary: string;
  categories: string[];
  contentWarnings: string[];
  contentIntensity: string;
  createdAt: string;
  authorChangeRequest: string | null;
};

export default function AdminDashboard() {
  const [stories, setStories] = useState<ReviewStory[]>([]);
  const [status, setStatus] = useState("Checking administrator access…");
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [approvedStoryId, setApprovedStoryId] = useState<string | null>(null);
  const [authorised, setAuthorised] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function getAdminToken() {
    return getAdminAccessToken();
  }

  async function load() {
    try {
      const token = await getAdminToken();

      if (!token) {
        setAuthorised(false);
        setStories([]);
        setStatus("");
        return;
      }

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);
      let response: Response;

      try {
        response = await fetch("/api/admin/stories", {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
          signal: controller.signal
        });
      } finally {
        window.clearTimeout(timeout);
      }

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 403) {
          await getBrowserSupabase().auth.signOut();
          setAuthorised(false);
          setStories([]);
          setStatus("That email is not authorised for moderation.");
        } else {
          setAuthorised(true);
          setStories([]);
          setStatus(result.error || "The moderation queue could not be loaded.");
        }
        return;
      }

      setAuthorised(true);
      setStories(result.stories);
      setStatus(
        result.stories.length ? "" : "There are no submissions awaiting review."
      );
    } catch {
      setAuthorised(false);
      setStories([]);
      setStatus("Administrator access could not be checked. Please sign in again or refresh the page.");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("Checking administrator access…");

    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") || "");
    const normalisedEmail = email.trim();

    try {
      const { error } = await getBrowserSupabase().auth.signInWithPassword({
        email: normalisedEmail,
        password
      });

      if (error) {
        setAuthorised(false);
        setStatus("The administrator email or password was not accepted.");
        setBusy(false);
        return;
      }

      await load();
    } catch {
      setAuthorised(false);
      setStatus("Administrator sign-in could not be completed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function requestReset() {
    const normalisedEmail = email.trim();
    if (!normalisedEmail) {
      setStatus("Enter the administrator email address first.");
      return;
    }

    setBusy(true);
    try {
      const siteUrl = (
        process.env.NEXT_PUBLIC_SITE_URL || window.location.origin
      ).replace(/\/+$/, "");
      const { error } = await getBrowserSupabase().auth.resetPasswordForEmail(
        normalisedEmail,
        { redirectTo: `${siteUrl}/auth/reset` }
      );

      setStatus(
        error
          ? "A reset email could not be sent. Please try again."
          : "If that administrator account exists, a password-reset email will arrive shortly."
      );
    } catch {
      setStatus("A reset email could not be sent. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    try {
      await getBrowserSupabase().auth.signOut();
    } finally {
      setAuthorised(false);
      setStories([]);
      setStatus("Administrator signed out.");
    }
  }

  async function review(id: string, decision: "approve" | "reject") {
    const token = await getAdminToken();
    if (!token) {
      setAuthorised(false);
      setStatus("Administrator sign-in is required.");
      return;
    }

    setStatus("Saving the moderation decision…");

    try {
      const response = await fetch(`/api/admin/stories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          decision,
          moderatorNotes: notes[id] || ""
        })
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "The decision was not saved.");
        return;
      }

      await load();
      setStatus(
        `Submission ${decision === "approve" ? "approved and published" : "rejected"}.`
      );
      setApprovedStoryId(decision === "approve" ? id : null);
    } catch {
      setStatus("The decision could not be saved. Please try again.");
    }
  }

  if (authorised === null) {
    return <p className="loadingState">{status}</p>;
  }

  if (!authorised) {
    return (
      <div className="authPanel adminLogin">
        <p className="eyebrow">Administrator sign in</p>
        <h2>Moderation access only</h2>
        <p>
          Public visitors never need an account. This sign-in is restricted to
          approved moderators whose email is listed in the private admin allowlist.
        </p>

        <form onSubmit={signIn}>
          <label>
            Administrator email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </label>
          <button className="button primary authSubmit" type="submit" disabled={busy}>
            {busy ? "Please wait…" : "Open Moderation"}
          </button>
          <button
            className="linkButton backToSignIn"
            type="button"
            onClick={requestReset}
            disabled={busy}
          >
            Forgotten administrator password?
          </button>
        </form>

        <p className="formStatus" role="status" aria-live="polite">{status}</p>
      </div>
    );
  }

  return (
    <div className="adminDashboard">
      <div className="adminToolbar">
        <button className="button secondary" type="button" onClick={load}>
          Refresh Moderation Queue
        </button>
        <Link className="textLink" href="/stories">
          Open Public Stories
        </Link>
        <button className="textButton" type="button" onClick={signOut}>
          Sign Out
        </button>
      </div>

      <p className="formStatus" role="status" aria-live="polite">{status}</p>

      {approvedStoryId && (
        <div className="moderatorNote">
          <strong>The story is now public.</strong>
          <p>
            <Link className="textLink" href={`/stories/${approvedStoryId}`}>
              Open the published story
            </Link>
          </p>
        </div>
      )}

      {stories.map((story) => (
        <article key={story.id}>
          <div className="adminMeta">
            <span>{story.mediaType}</span>
            <span>{story.contentIntensity} intensity</span>
            <span>{new Date(story.createdAt).toLocaleString()}</span>
          </div>
          <h2>{story.title}</h2>
          <p><strong>Submitted as:</strong> {story.displayName} · {story.churchName}</p>
          <p><strong>Privacy:</strong> {story.privacyLevel.replace("_", " ")}</p>
          <p><strong>Short summary:</strong> {story.shortSummary}</p>

          <div className="tagList">
            {story.categories.map((item) => <span key={item}>{item}</span>)}
          </div>

          {story.contentWarnings.length > 0 && (
            <p className="reviewWarning">
              Content notices: {story.contentWarnings.join(", ")}
            </p>
          )}

          {story.imageUrl && (
            <img
              className="storyImage"
              src={story.imageUrl}
              alt={`Submitted picture for ${story.title}`}
            />
          )}

          {story.mediaType === "video" && story.mediaUrl && (
            <video className="storyMedia" controls preload="metadata">
              <source src={story.mediaUrl} />
            </video>
          )}

          {story.mediaType === "audio" && story.mediaUrl && (
            <div className="audioStory">
              <audio controls preload="metadata">
                <source src={story.mediaUrl} />
              </audio>
            </div>
          )}

          <details className="adminFullText">
            <summary>Open full story or transcript</summary>
            <div>
              {story.storyText
                ? story.storyText.split("\n").map((paragraph, index) =>
                    paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                  )
                : <p>No written text was supplied.</p>}
            </div>
          </details>

          {story.authorChangeRequest && (
            <div className="moderatorNote">
              <strong>Author change request</strong>
              <p>{story.authorChangeRequest}</p>
            </div>
          )}

          <label>
            Reviewer notes visible to the author
            <textarea
              rows={4}
              value={notes[story.id] || ""}
              onChange={(event) =>
                setNotes((current) => ({ ...current, [story.id]: event.target.value }))
              }
            />
          </label>

          <div className="accountButtons">
            <button
              className="button primary"
              type="button"
              onClick={() => review(story.id, "approve")}
            >
              Approve for Publication
            </button>
            <button
              className="dangerButton"
              type="button"
              onClick={() => review(story.id, "reject")}
            >
              Reject and Retain for 30 Days
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
