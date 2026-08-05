"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type PublishedComment = {
  id: string;
  displayName: string;
  body: string;
  createdAt: string;
};

export default function StoryComments({ storyId }: { storyId: string }) {
  const [comments, setComments] = useState<PublishedComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadComments() {
      try {
        const response = await fetch(`/api/stories/${storyId}/comments`, {
          cache: "no-store",
          signal: controller.signal
        });

        if (!response.ok) return;
        const result = await response.json();
        setComments(Array.isArray(result.comments) ? result.comments : []);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Comments could not be loaded:", error);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadComments();
    return () => controller.abort();
  }, [storyId]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setBusy(true);
    setStatus("");

    try {
      const response = await fetch(`/api/stories/${storyId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: data.get("displayName"),
          body: data.get("body"),
          website: data.get("website")
        })
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus(result.error || "The comment could not be submitted.");
        return;
      }

      form.reset();
      setStatus(
        "Your comment was submitted privately. It will appear only after a moderator approves it."
      );
    } catch {
      setStatus("The comment could not be submitted. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="storyComments" aria-labelledby={`comments-heading-${storyId}`}>
      <p className="eyebrow">Community responses</p>
      <h2 id={`comments-heading-${storyId}`}>Leave a supportive comment</h2>
      <p>
        Every comment is reviewed before publication. Do not identify, diagnose,
        pressure, preach at or investigate the author.
      </p>

      <div className="accountStoryList" aria-live="polite">
        {loading ? (
          <p>Loading approved comments…</p>
        ) : comments.length ? (
          comments.map((comment) => (
            <article key={comment.id}>
              <strong>{comment.displayName}</strong>
              <p>{comment.body}</p>
              <small>{new Date(comment.createdAt).toLocaleDateString()}</small>
            </article>
          ))
        ) : (
          <p>No approved comments yet. You can submit the first supportive response below.</p>
        )}
      </div>

      <form className="commentForm" onSubmit={submit}>
        <input
          className="honeypot"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <label>
          Display name or pseudonym
          <input name="displayName" required maxLength={80} />
        </label>
        <label>
          Your comment
          <textarea
            name="body"
            required
            minLength={10}
            maxLength={2000}
            rows={6}
            placeholder="Offer respectful support, relevant experience or a thoughtful response."
          />
        </label>
        <button className="button primary" type="submit" disabled={busy}>
          {busy ? "Submitting…" : "Submit Comment for Moderation"}
        </button>
        <p className="formStatus" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
