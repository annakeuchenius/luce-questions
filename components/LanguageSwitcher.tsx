"use client";

import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language)
    ?? SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function switchLang(code: string) {
    i18n.changeLanguage(code);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("luce_language", code);
    }
    setOpen(false);
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "none",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.72)",
          padding: "6px 14px",
          fontSize: "13px",
          borderRadius: "3px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.label}
        <span style={{ fontSize: "10px", opacity: 0.6 }}>▼</span>
      </button>
      {open && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 4px)",
            background: "#0f1f3a",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "3px",
            minWidth: "130px",
            margin: 0,
            padding: "4px 0",
            listStyle: "none",
            zIndex: 100,
          }}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === i18n.language}
              onClick={() => switchLang(lang.code)}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                cursor: "pointer",
                color: lang.code === i18n.language
                  ? "#f0c040"
                  : "rgba(255,255,255,0.72)",
                background: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "none";
              }}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
