"use client";

import { useEffect, useState } from "react";
import { getAdminAccessToken } from "@/lib/supabase-browser";

type PendingComment = {
  id: string;
  story_id: string;
  display_name: string;
  body: string;
  created_at: string;
  stories: { title?: string } | { title?: string }[] | null;
};

export default function AdminCommentModeration() {
  const [comments, setComments] = useState<PendingComment[]>([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function token() {
    return getAdminAccessToken();
  }

  async function load() {
    setLoading(true);
    try {
      const accessToken = await token();
      if (!accessToken) {
        setComments([]);
        setStatus("Sign in as an administrator above to review comments.");
        return;
      }

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);
      let response: Response;

      try {
        response = await fetch("/api/admin/comments", {
          headers: { Authorization: `Bearer ${accessToken}` },
          cache: "no-store",
          signal: controller.signal
        });
      } finally {
        window.clearTimeout(timeout);
      }

      const result = await response.json();
      if (response.ok) {
        setComments(result.comments || []);
        setStatus(result.comments?.length ? "" : "There are no comments awaiting review.");
      } else {
        setComments([]);
        setStatus(result.error || "Comment queue could not be loaded.");
      }
    } catch {
      setComments([]);
      setStatus("Comment moderation could not be loaded. Please refresh or sign in again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(load, 300);
    return () => window.clearTimeout(timer);
  }, []);

  async function review(id: string, decision: "approve" | "reject") {
    const accessToken = await token();
    if (!accessToken) {
      setStatus("Sign in as an administrator first.");
      return;
    }

    try {
      const response = await fetch(`/api/admin/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ decision })
      });
      const result = await response.json();
      setStatus(response.ok ? `Comment ${decision === "approve" ? "approved" : "rejected"}.` : result.error);
      if (response.ok) await load();
    } catch {
      setStatus("The moderation decision could not be saved. Please try again.");
    }
  }

  return (
    <section className="adminDashboard" aria-labelledby="comment-moderation-heading">
      <div className="adminToolbar">
        <div>
          <p className="eyebrow">Comment moderation</p>
          <h2 id="comment-moderation-heading">Review community responses</h2>
        </div>
        <button className="button secondary" type="button" onClick={load} disabled={loading}>
          {loading ? "Checking…" : "Refresh Comment Queue"}
        </button>
      </div>
      <p className="formStatus" role="status">{status}</p>
      {comments.map((comment) => {
        const relation = Array.isArray(comment.stories) ? comment.stories[0] : comment.stories;
        return (
          <article key={comment.id}>
            <div className="adminMeta">
              <span>Comment</span>
              <span>{new Date(comment.created_at).toLocaleString()}</span>
            </div>
            <h3>{relation?.title || "Story comment"}</h3>
            <p><strong>Display name:</strong> {comment.display_name}</p>
            <p>{comment.body}</p>
            <div className="accountButtons">
              <button className="button primary" type="button" onClick={() => review(comment.id, "approve")}>Approve Comment</button>
              <button className="dangerButton" type="button" onClick={() => review(comment.id, "reject")}>Reject Comment</button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
