"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getBrowserSupabase } from "@/lib/supabase-browser";

const navigation = [
  ["Understand", "/resources"],
  ["Stories", "/stories"],
  ["Practical support", "/safety"],
  ["About", "/about"],
  ["Share your story", "/share"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const supabase = getBrowserSupabase();

    supabase.auth.getSession().then(({ data }) => {
      setSignedIn(Boolean(data.session));
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(Boolean(session));
    });

    return () => data.subscription.unsubscribe();
  }, []);

  async function signOut() {
    await getBrowserSupabase().auth.signOut();
    setOpen(false);
    window.location.href = "/";
  }

  return (
    <header className="siteHeader">
      <Link href="/" className="brand" aria-label="AfterTheChurch home">
        <Image
          src="/images/afterthechurch-logo.jpg"
          width={54}
          height={54}
          alt=""
          className="brandLogo"
          priority
        />
        <span className="brandWords">
          <strong>AfterTheChurch</strong>
          <small>Practical support after religious harm</small>
        </span>
      </Link>

      <button
        type="button"
        className="menuButton"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        <span className="srOnly">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <div className={open ? "navShell open" : "navShell"}>
        <nav id="main-navigation" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="accountActions">
          {signedIn ? (
            <>
              <Link className="textButton" href="/account" onClick={() => setOpen(false)}>
                Account
              </Link>
              <button type="button" className="textButton" onClick={signOut}>
                Sign out
              </button>
            </>
          ) : (
            <Link className="signInButton" href="/auth" onClick={() => setOpen(false)}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
