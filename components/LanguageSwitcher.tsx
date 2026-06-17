"use client";

import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

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
          background: open ? "rgba(180,140,0,0.1)" : "rgba(180,140,0,0.06)",
          border: "1px solid rgba(180,140,0,0.35)",
          color: "#8a6800",
          padding: "8px 18px",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          letterSpacing: "0.02em",
          transition: "background 0.15s, border-color 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(180,140,0,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = open ? "rgba(180,140,0,0.1)" : "rgba(180,140,0,0.06)";
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ fontSize: "16px" }}>🌐</span>
        <span suppressHydrationWarning>{mounted ? current.label : SUPPORTED_LANGUAGES[0].label}</span>
        <span style={{ fontSize: "10px", opacity: 0.7 }}>▼</span>
      </button>
      {open && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 4px)",
            background: "#ffffff",
            border: "1px solid rgba(26,26,46,0.12)",
            borderRadius: "3px",
            minWidth: "160px",
            margin: 0,
            padding: "4px 0",
            listStyle: "none",
            zIndex: 100,
            maxHeight: "320px",
            overflowY: "auto",
            boxShadow: "0 4px 16px rgba(26,26,46,0.1)",
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
                  ? "#8a6800"
                  : "rgba(26,26,46,0.72)",
                background: "none",
                fontWeight: lang.code === i18n.language ? 600 : 400,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(26,26,46,0.04)";
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
