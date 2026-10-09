"use client";

import { FormEvent, useEffect, useState } from "react";
import { getAdminAccessToken, getBrowserSupabase } from "@/lib/supabase-browser";
import { MessageCircle, RefreshCw, Send } from "lucide-react";

type Thread = {
  id: string;
  display_name: string | null;
  status: "open" | "closed";
  created_at: string;
  last_message_at: string;
};
type Message = { id: string; sender: "visitor" | "team"; body: string; created_at: string };

export default function AdminContactInbox() {
  const [authorised, setAuthorised] = useState<boolean | null>(null);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [selected, setSelected] = useState<Thread | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("Checking private inbox access…");

  async function request(path: string, init: RequestInit = {}) {
    const token = await getAdminAccessToken();
    if (!token) throw new Error("Sign in using the administrator panel above.");
    const response = await fetch(path, {
      ...init,
      cache: "no-store",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token, ...(init.headers || {}) }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Request failed.");
    return data;
  }

  async function loadInbox(silent = false) {
    try {
      const result = await request("/api/admin/contact");
      setThreads(result.threads || []);
      setAuthorised(true);
      if (!silent) setStatus(result.threads?.length ? "" : "No private conversations yet.");
    } catch (error) {
      if (!silent) {
        setAuthorised(false);
        setStatus(error instanceof Error ? error.message : "The private inbox is unavailable.");
      }
    }
  }

  async function loadThread(threadId: string, silent = false) {
    try {
      const result = await request("/api/admin/contact?threadId=" + encodeURIComponent(threadId));
      setSelected(result.thread);
      setMessages(result.messages || []);
      if (!silent) setStatus("");
    } catch (error) {
      if (!silent) setStatus(error instanceof Error ? error.message : "Cannot read the conversation.");
    }
  }

  useEffect(() => {
    void loadInbox();
    const { data } = getBrowserSupabase().auth.onAuthStateChange(() => {
      window.setTimeout(() => {
        setSelected(null);
        setMessages([]);
        void loadInbox();
      }, 0);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible" && authorised) {
        void loadInbox(true);
        if (selected) void loadThread(selected.id, true);
      }
    }, 25000);
    return () => window.clearInterval(interval);
  }, [authorised, selected?.id]);

  async function sendReply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected || busy || reply.trim().length < 2) return;
    setBusy(true);
    try {
      await request("/api/admin/contact", {
        method: "POST",
        body: JSON.stringify({ threadId: selected.id, message: reply.trim() })
      });
      setReply("");
      await Promise.all([loadThread(selected.id), loadInbox(true)]);
      setStatus("Reply sent to the visitor's private conversation.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Reply failed.");
    } finally {
      setBusy(false);
    }
  }

  async function setThreadStatus(value: "open" | "closed") {
    if (!selected || busy) return;
    setBusy(true);
    try {
      await request("/api/admin/contact", { method: "PATCH", body: JSON.stringify({ threadId: selected.id, status: value }) });
      await Promise.all([loadThread(selected.id), loadInbox(true)]);
      setStatus(value === "open" ? "Conversation reopened." : "Conversation closed.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The conversation could not be updated.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="adminDashboard adminContactInbox" aria-labelledby="private-inbox-heading">
      <div className="adminToolbar">
        <div>
          <p className="eyebrow">One-to-one conversations</p>
          <h2 id="private-inbox-heading">Private contact inbox</h2>
          <p className="fieldHelp">Restricted to approved administrators. Messages are not published or sent to public story pages.</p>
        </div>
        {authorised && <button type="button" className="button secondary" onClick={() => void loadInbox()}><RefreshCw size={16} aria-hidden="true"/> Refresh inbox</button>}
      </div>

      {authorised === null ? <p className="formStatus">{status}</p> : !authorised ? (
        <p className="formStatus">{status || "Please sign in above to open the private inbox."}</p>
      ) : (
        <>
          {status && <p className="formStatus" role="status">{status}</p>}
          <div className="adminContactLayout">
            <div className="adminContactList" aria-label="Private conversations">
              {threads.length === 0 ? <p>No chats have been started yet.</p> : threads.map(thread => (
                <button key={thread.id} type="button"
                  className={selected?.id === thread.id ? "adminContactItem active" : "adminContactItem"}
                  onClick={() => { void loadThread(thread.id); }}
                  aria-pressed={selected?.id === thread.id}>
                  <span><MessageCircle size={17} aria-hidden="true"/>{thread.display_name || "Anonymous visitor"}</span>
                  <small>{new Date(thread.last_message_at).toLocaleString()}</small>
                  <small>{thread.status === "open" ? "Open conversation" : "Closed"}</small>
                </button>
              ))}
            </div>
            <div className="adminContactThread">
              {!selected ? (
                <div className="adminContactWaiting">Select a conversation from the left to read and reply privately.</div>
              ) : (
                <>
                  <div className="adminContactThreadHeader">
                    <div><strong>{selected.display_name || "Anonymous visitor"}</strong><span>Started {new Date(selected.created_at).toLocaleDateString()} · {selected.status}</span></div>
                    <button type="button" className="button secondary" disabled={busy} onClick={() => void setThreadStatus(selected.status === "open" ? "closed" : "open")}>
                      {selected.status === "open" ? "Close conversation" : "Reopen"}
                    </button>
                  </div>
                  <div className="adminContactMessages" role="log" aria-label="Private message thread">
                    {messages.map(message => (
                      <div key={message.id} className={message.sender === "team" ? "adminContactMessage team" : "adminContactMessage visitor"}>
                        <strong>{message.sender === "team" ? "AfterTheChurch team" : "Visitor"}</strong>
                        <p>{message.body}</p>
                        <small>{new Date(message.created_at).toLocaleString()}</small>
                      </div>
                    ))}
                  </div>
                  {selected.status === "open" ? (
                    <form onSubmit={sendReply} className="adminContactReply">
                      <label htmlFor="contact-admin-reply">Private reply to visitor</label>
                      <textarea id="contact-admin-reply" rows={3} minLength={2} maxLength={3000} value={reply} onChange={e => setReply(e.target.value)} placeholder="Write a careful reply…" required/>
                      <button type="submit" className="button primary" disabled={busy || reply.trim().length < 2}><Send size={16} aria-hidden="true"/> {busy ? "Sending…" : "Send reply"}</button>
                    </form>
                  ) : <p className="formStatus">This chat is closed. Reopen it to send a reply.</p>}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
