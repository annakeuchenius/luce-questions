"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();

  return (
    <nav
      style={{
        borderBottom: "1px solid rgba(26,26,46,0.1)",
        padding: "0 24px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "#ffffff",
        zIndex: 50,
        boxShadow: "0 1px 4px rgba(26,26,46,0.06)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          border: "1px solid rgba(180,140,0,0.35)",
          borderRadius: "3px",
          padding: "5px 12px",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: "11px",
            color: "rgba(26,26,46,0.85)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {t("nav.orgName")}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span
          className="lang-hint"
          style={{
            fontFamily: "'Segoe Script', 'Brush Script MT', 'Comic Sans MS', cursive",
            fontSize: "26px",
            color: "#8a6800",
            whiteSpace: "nowrap",
            lineHeight: 1,
            transform: "rotate(-4deg)",
            display: "inline-block",
            opacity: 0.85,
          }}
        >
          pick your language
        </span>
        <svg className="lang-hint" width="36" height="24" viewBox="0 0 36 24" fill="none" style={{ opacity: 0.85 }}>
          <path
            d="M2 18 Q18 2 32 12"
            stroke="#8a6800"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M25.4 10.9 L32 12 L28.8 6.1"
            stroke="#8a6800"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
