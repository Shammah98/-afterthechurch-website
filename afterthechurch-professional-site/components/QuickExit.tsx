"use client";

import { LogOut } from "lucide-react";

export default function QuickExit() {
  function exitNow() {
    window.location.replace("https://www.google.com/");
  }

  return (
    <button
      type="button"
      className="quickExit"
      onClick={exitNow}
      aria-label="Quick Exit: If you feel overwhelmed"
    >
      <LogOut size={18} aria-hidden="true" />
       Exit
    </button>
  );
}
