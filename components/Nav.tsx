"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();

  return (
    <nav
      style={{
        borderBottom: "1px solid rgba(240,192,64,0.2)",
        padding: "0 24px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "#0a1628",
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div
        style={{
          border: "1px solid rgba(240,192,64,0.3)",
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
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {t("nav.orgName")}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span
          style={{
            fontFamily: "'Segoe Script', 'Brush Script MT', 'Comic Sans MS', cursive",
            fontSize: "26px",
            color: "#f0c040",
            whiteSpace: "nowrap",
            lineHeight: 1,
            transform: "rotate(-4deg)",
            display: "inline-block",
            opacity: 0.9,
          }}
        >
          pick your language
        </span>
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" style={{ opacity: 0.9 }}>
          <path
            d="M2 18 Q18 2 32 12"
            stroke="#f0c040"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M25.4 10.9 L32 12 L28.8 6.1"
            stroke="#f0c040"
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
