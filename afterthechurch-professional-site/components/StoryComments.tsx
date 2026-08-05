"use client";

import { FormEvent, useEffect, useState } from "react";

type Comment = {
  id: string;
  displayName: string;
  body: string;
  createdAt: string;
};

export default function StoryComments({ storyId }: { storyId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function load() {
    const response = await fetch(`/api/stories/${storyId}/comments`, { cache: "no-store" });
    const result = await response.json();
    if (response.ok) setComments(result.comments || []);
  }

  useEffect(() => {
    load();
  }, [storyId]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch(`/api/stories/${storyId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        displayName: data.get("displayName"),
        body: data.get("body"),
        website: data.get("website")
      })
    });
    const result = await response.json();
    setStatus(response.ok
      ? "Your comment was submitted privately and will appear only after moderation."
      : result.error || "The comment could not be submitted.");
    if (response.ok) form.reset();
    setBusy(false);
  }

  return (
    <section className="storyComments" aria-labelledby="comments-heading">
      <p className="eyebrow">Community responses</p>
      <h2 id="comments-heading">Comments</h2>
      <p>Comments are reviewed before publication. Do not identify, diagnose, pressure, preach at or investigate the author.</p>

      <div className="accountStoryList">
        {comments.length ? comments.map((comment) => (
          <article key={comment.id}>
            <strong>{comment.displayName}</strong>
            <p>{comment.body}</p>
            <small>{new Date(comment.createdAt).toLocaleDateString()}</small>
          </article>
        )) : <p>No approved comments yet.</p>}
      </div>

      <form onSubmit={submit}>
        <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <label>
          Display name or pseudonym
          <input name="displayName" required maxLength={80} />
        </label>
        <label>
          Comment
          <textarea name="body" required minLength={10} maxLength={2000} rows={6} placeholder="Offer respectful support, relevant experience or a thoughtful response." />
        </label>
        <button className="button primary" type="submit" disabled={busy}>
          {busy ? "Submitting…" : "Submit Comment for Review"}
        </button>
        <p className="formStatus" role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
