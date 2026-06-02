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
          background: open ? "rgba(240,192,64,0.12)" : "rgba(255,255,255,0.06)",
          border: "1px solid rgba(240,192,64,0.4)",
          color: "#f0c040",
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
          (e.currentTarget as HTMLElement).style.background = "rgba(240,192,64,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = open ? "rgba(240,192,64,0.12)" : "rgba(255,255,255,0.06)";
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ fontSize: "16px" }}>🌐</span>
        {current.label}
        <span style={{ fontSize: "10px", opacity: 0.7 }}>▼</span>
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
            minWidth: "160px",
            margin: 0,
            padding: "4px 0",
            listStyle: "none",
            zIndex: 100,
            maxHeight: "320px",
            overflowY: "auto",
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
