"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, LockKeyhole, MessageCircle, RefreshCw, Send, Trash2 } from "lucide-react";

type Message = { id: string; sender: "visitor" | "team"; body: string; created_at: string };
type ChatData = { active: boolean; status?: "open" | "closed"; displayName?: string; messages: Message[]; error?: string };

export default function ContactChat() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [closed, setClosed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const startedAt = useRef(Date.now());
  const conversationEnd = useRef<HTMLDivElement>(null);

  async function refresh(silent = false) {
    try {
      const response = await fetch("/api/contact", { credentials: "same-origin", cache: "no-store" });
      const data: ChatData = await response.json();
      if (!response.ok) {
        if (!silent) setError(data.error || "The conversation cannot be loaded right now.");
        return;
      }
      setActive(data.active);
      setClosed(data.status === "closed");
      setMessages(data.messages || []);
      if (data.active) setName(data.displayName || "");
      if (!silent) setError("");
    } catch {
      if (!silent) setError("The connection is unavailable. Please try again.");
    } finally {
      if (!silent) setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") void refresh(true);
    }, 20000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (active) conversationEnd.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages.length, active]);

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !body.trim()) return;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body.trim(), displayName: name.trim(), website: "", startedAt: startedAt.current })
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "The message could not be sent.");
        return;
      }
      setBody("");
      startedAt.current = Date.now();
      setNotice("Message sent. Your conversation stays here for your next visit from this device.");
      await refresh();
    } catch {
      setError("Your message could not be sent. Please check your connection.");
    } finally {
      setBusy(false);
    }
  }

  async function deleteConversation() {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/contact", { method: "DELETE", credentials: "same-origin" });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "The conversation could not be deleted.");
        return;
      }
      setActive(false);
      setClosed(false);
      setMessages([]);
      setName("");
      setBody("");
      setConfirmDelete(false);
      startedAt.current = Date.now();
      setNotice("Your conversation and its messages have been deleted.");
    } catch {
      setError("Deletion could not be completed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="contactChat">
      <section className="contactIntro" aria-labelledby="contact-title">
        <Link className="contactBack" href="/">← Back to home</Link>
        <p className="eyebrow">Private conversations</p>
        <h1 id="contact-title">Contact us.</h1>
        <p className="contactLead">
          Have a question, need to talk something through, or want to reach the AfterTheChurch team?
          Send a message here. You do not need an account or have to share your full name.
        </p>
        <div className="contactPrivacy">
          <LockKeyhole size={22} aria-hidden="true"/>
          <p><strong>Not a public conversation.</strong> Only you on this browser and authorised AfterTheChurch team members can read the messages. Chats are stored securely on our server, but are not end-to-end encrypted. Your browser keeps access for 30 days; anyone with access to this device and browser may also be able to see the chat. You can delete it at any time.</p>
        </div>
        <p className="contactCrisis"><strong>This is not a live helpline.</strong> Replies may take time, and the team is not online continuously. If you are in danger or need immediate help, use <Link href="/safety">independent safety and emergency resources</Link>.</p>
      </section>

      <section className="contactWorkspace" aria-label="Private chat with AfterTheChurch">
        <div className="contactChatHeader">
          <span className="contactChatIcon"><MessageCircle aria-hidden="true" size={23} /></span>
          <div>
            <h2>AfterTheChurch team</h2>
            <p>Private messages · Replies when available</p>
          </div>
          <button type="button" onClick={() => void refresh()} className="contactRefresh" aria-label="Check for replies" title="Check for replies"><RefreshCw size={18}/></button>
        </div>
        {loading ? (
          <div className="contactMessages contactEmpty" aria-live="polite"><p>Loading your private conversation…</p></div>
        ) : active ? (
          <div className="contactMessages" aria-label="Conversation history" role="log" aria-live="polite" aria-relevant="additions">
            <div className="contactChatWelcome">
              <strong>Your conversation is private.</strong>
              <p>Messages here are visible only to you on this browser and authorised team members. Please avoid sharing passwords or unnecessary personal details.</p>
            </div>
            {messages.map(message => (
              <div key={message.id} className={message.sender === "visitor" ? "contactBubble contactBubbleYou" : "contactBubble contactBubbleTeam"}>
                <span>{message.sender === "visitor" ? "You" : "AfterTheChurch"}</span>
                <p>{message.body}</p>
                <time dateTime={message.created_at}>{new Date(message.created_at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</time>
              </div>
            ))}
            <div ref={conversationEnd}/>
          </div>
        ) : (
          <div className="contactMessages contactEmpty">
            <MessageCircle size={35} strokeWidth={1.2} aria-hidden="true"/>
            <h3>Start a private conversation.</h3>
            <p>Say what is on your mind. A member of the team can read and reply from the restricted inbox. You can return here later using this same browser.</p>
          </div>
        )}

        <div className="contactComposer">
          {!active && !loading && (
            <label className="contactName">What should we call you? <span>(optional)</span>
              <input type="text" value={name} maxLength={70} onChange={e => setName(e.target.value)} placeholder="A first name or nickname is enough"/>
            </label>
          )}
          {closed ? (
            <p className="contactClosed">This conversation has been closed by the team. You can delete it and begin a new conversation if you wish to contact us again.</p>
          ) : (
            <form onSubmit={send}>
              <label htmlFor="private-contact-text" className="srOnly">Your private message</label>
              <textarea id="private-contact-text" rows={3} minLength={2} maxLength={3000} required placeholder={active ? "Write your next message…" : "Write your first message…"} value={body} onChange={e => setBody(e.target.value)} disabled={busy || loading}/>
              <div className="contactComposerBottom">
                <span>{body.length} / 3000 characters</span>
                <button type="submit" className="button primary" disabled={busy || loading || body.trim().length < 2}>
                  <Send size={17} aria-hidden="true"/> {busy ? "Sending…" : "Send privately"}
                </button>
              </div>
            </form>
          )}
          {error && <p className="contactError" role="alert">{error}</p>}
          {notice && <p className="contactSuccess" role="status">{notice}</p>}
        </div>
      </section>
      <div className="contactBottom">
        <div>
          <h2>Your conversation belongs to you.</h2>
          <p>Use the button below to permanently delete all messages in this conversation, including team replies. This cannot be undone.</p>
        </div>
        {active && (
          confirmDelete ? (
            <div className="contactDeleteActions">
              <button className="button secondary" type="button" onClick={() => setConfirmDelete(false)} disabled={busy}>Keep conversation</button>
              <button className="contactDeleteConfirm" type="button" onClick={() => void deleteConversation()} disabled={busy}>{busy ? "Deleting…" : "Yes, delete all messages"}</button>
            </div>
          ) : (
            <button className="contactDelete" type="button" onClick={() => setConfirmDelete(true)}><Trash2 size={17} aria-hidden="true"/> Delete my conversation</button>
          )
        )}
      </div>
      <div className="contactExplore"><Link href="/stories">Read survivor stories <ArrowRight size={16}/></Link><Link href="/recover">Explore RECOVER <ArrowRight size={16}/></Link><Link href="/safety">Safety information <ArrowRight size={16}/></Link></div>
    </div>
  );
}
