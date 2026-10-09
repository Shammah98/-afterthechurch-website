"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, LockKeyhole, MessageCircle, RefreshCw, Send, X } from "lucide-react";

type ChatMessage = {
  id: string;
  sender: "visitor" | "team";
  body: string;
  created_at: string;
};

type ChatResponse = {
  active?: boolean;
  status?: "open" | "closed";
  displayName?: string;
  messages?: ChatMessage[];
  error?: string;
};

export default function FloatingContactChat() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [closed, setClosed] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [name, setName] = useState("");
  const [draft, setDraft] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const startedAt = useRef(Date.now());
  const closeRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const onContactPage = pathname === "/contact" || pathname.startsWith("/admin");

  async function refresh(showLoading = false) {
    if (showLoading) setLoading(true);
    try {
      const result = await fetch("/api/contact", { credentials: "same-origin", cache: "no-store" });
      const data: ChatResponse = await result.json();
      if (!result.ok) {
        if (showLoading) setError(data.error || "We couldn't load the conversation.");
        return;
      }
      setActive(Boolean(data.active));
      setClosed(data.status === "closed");
      setMessages(data.messages || []);
      if (data.active) setName(data.displayName || "");
      if (showLoading) setError("");
    } catch {
      if (showLoading) setError("Connection unavailable. Please try again.");
    } finally {
      if (showLoading) setLoading(false);
    }
  }

  useEffect(() => {
    if (!open || onContactPage) return;
    void refresh(true);
    const poll = window.setInterval(() => {
      if (document.visibilityState === "visible") void refresh();
    }, 25000);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      window.clearInterval(poll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onContactPage]);

  useEffect(() => {
    if (open && messages.length > 0) endRef.current?.scrollIntoView({ block: "nearest" });
  }, [open, messages.length]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || loading || draft.trim().length < 2 || (!active && !consent)) return;
    setSending(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: draft.trim(),
          displayName: name.trim(),
          website: "",
          startedAt: startedAt.current,
          privacyConfirmed: consent
        })
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Your message wasn't sent. Please try again.");
        return;
      }
      setDraft("");
      startedAt.current = Date.now();
      setNotice("Message sent. Come back here to read the team's reply.");
      await refresh();
    } catch {
      setError("Connection unavailable. Your message was not sent.");
    } finally {
      setSending(false);
    }
  }

  if (onContactPage) return null;

  return (
    <aside className="atcChat" aria-label="Contact AfterTheChurch">
      {open && (
        <section
          id="atc-floating-chat-panel"
          className="atcChatPanel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="atc-chat-heading"
        >
          <header className="atcChatPanelHeader">
            <span className="atcChatPanelMark" aria-hidden="true"><LockKeyhole size={19} /></span>
            <div className="atcChatPanelHeading">
              <h2 id="atc-chat-heading">Talk to us privately</h2>
              <p>AfterTheChurch team · replies when available</p>
            </div>
            <button ref={closeRef} className="atcChatClose" type="button" onClick={() => { setOpen(false); launcherRef.current?.focus(); }} aria-label="Close private chat">
              <X size={21} aria-hidden="true" />
            </button>
          </header>

          <div className="atcChatMessages" role="log" aria-live="polite" aria-relevant="additions text" aria-label="Private conversation">
            {loading ? (
              <p className="atcChatHint">Opening your private conversation…</p>
            ) : active ? (
              <>
                <p className="atcChatSystemNote">Only you on this browser and authorised team members can view this conversation.</p>
                {messages.map((message) => (
                  <article key={message.id} className={message.sender === "visitor" ? "atcChatMessage atcChatMessageMine" : "atcChatMessage atcChatMessageTeam"}>
                    <span>{message.sender === "visitor" ? "You" : "AfterTheChurch"}</span>
                    <p>{message.body}</p>
                    <time dateTime={message.created_at}>{new Date(message.created_at).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })}</time>
                  </article>
                ))}
                <div ref={endRef} />
              </>
            ) : (
              <div className="atcChatWelcome">
                <MessageCircle size={28} strokeWidth={1.6} aria-hidden="true" />
                <h3>We're here to listen.</h3>
                <p>Ask a question or leave a message. No account required, and you can use a nickname.</p>
                <p className="atcChatFinePrint">This isn't a live or emergency helpline. Replies may take time.</p>
              </div>
            )}
          </div>

          <div className="atcChatComposer">
            {!loading && !active && (
              <>
                <label className="atcChatField">
                  Name or nickname <span>(optional)</span>
                  <input type="text" autoComplete="nickname" maxLength={70} value={name} onChange={(e) => setName(e.target.value)} placeholder="What should we call you?" disabled={sending} />
                </label>
                <label className="atcChatConsent">
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} disabled={sending} />
                  <span>I agree to private storage and staff review of the information I choose to share. <Link href="/privacy" onClick={() => setOpen(false)}>Privacy policy</Link>.</span>
                </label>
              </>
            )}

            {closed ? (
              <p className="atcChatClosed">This conversation is closed. <Link href="/contact" onClick={() => setOpen(false)}>Open your full chat</Link> to delete it and start a new one.</p>
            ) : (
              <form onSubmit={send}>
                <label className="srOnly" htmlFor="atc-chat-message-field">Your private message</label>
                <textarea
                  id="atc-chat-message-field"
                  rows={2}
                  minLength={2}
                  maxLength={3000}
                  required
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={active ? "Write a message…" : "How can we help?"}
                  disabled={loading || sending}
                />
                <div className="atcChatSendRow">
                  <span>{draft.length}/3000</span>
                  <button type="submit" disabled={loading || sending || draft.trim().length < 2 || (!active && !consent)}>
                    <Send size={15} aria-hidden="true" />
                    {sending ? "Sending…" : "Send"}
                  </button>
                </div>
              </form>
            )}

            {error && <p className="atcChatError" role="alert">{error}</p>}
            {notice && <p className="atcChatSent" role="status">{notice}</p>}
            <footer className="atcChatPanelFooter">
              <Link href="/contact" onClick={() => setOpen(false)}>Full conversation <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <button type="button" onClick={() => void refresh(true)} disabled={loading} aria-label="Check for new replies">
                <RefreshCw size={14} aria-hidden="true" /> Refresh
              </button>
            </footer>
          </div>
        </section>
      )}
      <button
        ref={launcherRef}
        type="button"
        className="atcChatLauncher"
        aria-expanded={open}
        aria-controls="atc-floating-chat-panel"
        aria-label={open ? "Close private chat" : "Open private chat with AfterTheChurch"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} aria-hidden="true" /> : <MessageCircle size={21} aria-hidden="true" />}
        <span>{open ? "Close chat" : "Chat with us"}</span>
      </button>
    </aside>
  );
}
