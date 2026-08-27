"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAdminAccessToken, getBrowserSupabase } from "@/lib/supabase-browser";

type ManagedStory = {
  id: string;
  title: string;
  displayName: string;
  churchName: string;
  createdAt: string;
};

export default function AdminPublishedStories() {
  const [published, setPublished] = useState<ManagedStory[]>([]);
  const [hidden, setHidden] = useState<ManagedStory[]>([]);
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function token() {
    return getAdminAccessToken();
  }

  async function load() {
    try {
      const accessToken = await token();
      if (!accessToken) {
        setVisible(false);
        setPublished([]);
        setHidden([]);
        return;
      }

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);
      let response: Response;

      try {
        response = await fetch("/api/admin/stories", {
          headers: { Authorization: `Bearer ${accessToken}` },
          cache: "no-store",
          signal: controller.signal
        });
      } finally {
        window.clearTimeout(timeout);
      }

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 403) setVisible(false);
        setStatus(result.error || "Published stories could not be loaded.");
        return;
      }

      setVisible(true);
      setPublished(result.publishedStories || []);
      setHidden(result.hiddenStories || []);
      setStatus("");
    } catch {
      setVisible(false);
      setPublished([]);
      setHidden([]);
      setStatus("Published-story controls could not be loaded. Please refresh or sign in again.");
    }
  }

  useEffect(() => {
    load();
    const supabase = getBrowserSupabase();
    const { data } = supabase.auth.onAuthStateChange(() => {
      window.setTimeout(load, 0);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  async function action(story: ManagedStory, decision: "unpublish" | "delete" | "approve") {
    const accessToken = await token();
    if (!accessToken) {
      setStatus("Administrator sign-in is required.");
      return;
    }

    if (decision === "unpublish") {
      const confirmed = window.confirm(
        `Make “${story.title}” unpublic? It will disappear from the public Stories page but remain stored for the administrator.`
      );
      if (!confirmed) return;
    }

    if (decision === "delete") {
      const confirmed = window.confirm(
        `Permanently delete “${story.title}”? This removes the story, its comments and uploaded media. This cannot be undone.`
      );
      if (!confirmed) return;
    }

    setBusyId(story.id);
    setStatus(
      decision === "delete"
        ? "Deleting story…"
        : decision === "unpublish"
          ? "Removing story from public view…"
          : "Republishing story…"
    );

    try {
      const response = await fetch(`/api/admin/stories/${story.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ decision, moderatorNotes: "" })
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "The story could not be updated.");
        setBusyId(null);
        return;
      }

      await load();
      setStatus(
        decision === "delete"
          ? "Story permanently deleted."
          : decision === "unpublish"
            ? "Story is now private from the public website."
            : "Story republished."
      );
    } catch {
      setStatus("The story could not be updated. Please try again.");
    } finally {
      setBusyId(null);
    }
  }

  if (!visible) return null;

  return (
    <section className="adminDashboard" aria-labelledby="published-story-heading">
      <div className="adminToolbar">
        <div>
          <p className="eyebrow">Published story controls</p>
          <h2 id="published-story-heading">Manage stories already on the website</h2>
          <p>
            Making a story unpublic hides it without deleting it. Permanent deletion also removes
            associated comments and uploaded media.
          </p>
        </div>
        <button className="button secondary" type="button" onClick={load}>
          Refresh Published Stories
        </button>
      </div>

      <p className="formStatus" role="status" aria-live="polite">{status}</p>

      {published.length === 0 ? (
        <p>There are no published stories to manage.</p>
      ) : (
        published.map((story) => (
          <article key={story.id}>
            <div className="adminMeta">
              <span>Public</span>
              <span>{new Date(story.createdAt).toLocaleDateString()}</span>
            </div>
            <h3>{story.title}</h3>
            <p><strong>Submitted as:</strong> {story.displayName} · {story.churchName}</p>
            <div className="accountButtons">
              <Link className="button secondary" href={`/stories/${story.id}`}>
                Open Public Story
              </Link>
              <button
                className="button secondary"
                type="button"
                disabled={busyId === story.id}
                onClick={() => action(story, "unpublish")}
              >
                Make Unpublic
              </button>
              <button
                className="dangerButton"
                type="button"
                disabled={busyId === story.id}
                onClick={() => action(story, "delete")}
              >
                Delete Permanently
              </button>
            </div>
          </article>
        ))
      )}

      {hidden.length > 0 && (
        <div className="moderatorNote">
          <p className="eyebrow">Hidden stories</p>
          <h3>Unpublished by an administrator</h3>
          {hidden.map((story) => (
            <article key={story.id}>
              <h4>{story.title}</h4>
              <p>{story.displayName} · {story.churchName}</p>
              <div className="accountButtons">
                <button
                  className="button primary"
                  type="button"
                  disabled={busyId === story.id}
                  onClick={() => action(story, "approve")}
                >
                  Republish
                </button>
                <button
                  className="dangerButton"
                  type="button"
                  disabled={busyId === story.id}
                  onClick={() => action(story, "delete")}
                >
                  Delete Permanently
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
