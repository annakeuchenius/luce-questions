"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function About() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      style={{
        borderTop: "1px solid rgba(26,26,46,0.08)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Tag */}
        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8a6800",
            }}
          >
            {t("about.tag")}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: expanded ? "28px" : 0 }}>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: "clamp(22px, 3vw, 32px)",
              color: "#1a1a2e",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {t("about.heading")}
          </h2>

          <button
            onClick={() => setExpanded((v) => !v)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#8a6800",
              flexShrink: 0,
            }}
          >
            {expanded ? t("about.readLess") : t("about.readMore")}
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.25s ease",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                lineHeight: 1,
              }}
            >
              ↓
            </span>
          </button>
        </div>

        {expanded && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "640px",
            }}
          >
            {["about.p1", "about.p2", "about.p3"].map((key) => (
              <p
                key={key}
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "#1a1a2e",
                  margin: 0,
                }}
              >
                {t(key)}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
