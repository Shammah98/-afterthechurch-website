"use client";

import { LogOut } from "lucide-react";

export default function QuickExit() {
  function exitNow() {
    window.location.replace("https://www.wikipedia.org/");
  }

  return (
    <button
      type="button"
      className="quickExit"
      onClick={exitNow}
      aria-label="Quick Exit: immediately leave this website for Wikipedia"
    >
      <LogOut size={18} aria-hidden="true" />
      Quick Exit
    </button>
  );
}
