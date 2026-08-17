"use client";

import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light" | "warm";

const options: Array<{ value: ThemeMode; label: string }> = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "warm", label: "Brown" }
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("atc-theme") as ThemeMode | null;
    const next = saved && options.some((option) => option.value === saved) ? saved : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  function choose(next: ThemeMode) {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("atc-theme", next);
  }

  return (
    <div className="themeToggle" aria-label="Website colour theme">
      <span className="themeToggleLabel">Theme</span>
      <div className="themeToggleOptions">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={theme === option.value ? "active" : ""}
            aria-pressed={theme === option.value}
            onClick={() => choose(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
