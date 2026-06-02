"use client";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
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
              color: "#f0c040",
            }}
          >
            {t("about.tag")}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#ffffff",
            margin: "0 0 36px",
            lineHeight: 1.3,
          }}
        >
          {t("about.heading")}
        </h2>

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
                color: "rgba(255,255,255,0.72)",
                margin: 0,
              }}
            >
              {t(key)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
