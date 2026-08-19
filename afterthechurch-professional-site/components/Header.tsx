"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  ["Understand", "/resources"],
  ["Stories", "/stories"],
  ["Practical support", "/safety"],
  ["About", "/about"],
  ["Share your story", "/share"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <Link href="/" className="brand" aria-label="AfterTheChurch home">
        <Image
          src="/images/afterthechurch-logo-new.svg"
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

      </div>
    </header>
  );
}
