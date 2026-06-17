"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Hero() {
  const { t } = useTranslation();
  const [questionCount, setQuestionCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/question-count")
      .then((r) => r.json())
      .then((d) => { if (d.count !== null) setQuestionCount(d.count); })
      .catch(() => {});
  }, []);

  const headline: string = t("hero.headline");
  const emphasis: string = t("hero.headlineEmphasis");
  const parts = headline.split(emphasis);

  function scrollToForm() {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "80px 24px 72px",
      }}
    >
      {/* Tag */}
      <div style={{ marginBottom: "28px" }}>
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8a6800",
            fontWeight: 400,
          }}
        >
          {t("hero.tag")}
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          fontSize: "clamp(28px, 4vw, 44px)",
          lineHeight: 1.25,
          color: "#1a1a2e",
          margin: "0 0 28px",
        }}
      >
        {parts[0]}
        <em style={{ color: "#c8980a", fontStyle: "italic" }}>{emphasis}</em>
        {parts[1]}
      </h1>

      {/* Intro */}
      <p
        style={{
          fontSize: "17px",
          lineHeight: 1.7,
          color: "rgba(26,26,46,0.88)",
          margin: "0 0 36px",
          maxWidth: "640px",
        }}
      >
        {t("hero.intro")}
      </p>

      {/* CTA */}
      <button
        onClick={scrollToForm}
        style={{
          background: "#f0c040",
          color: "#1a1a2e",
          border: "none",
          padding: "14px 32px",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          borderRadius: "3px",
          cursor: "pointer",
          textTransform: "uppercase",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#e8b830";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#f0c040";
        }}
      >
        {t("hero.cta")}
      </button>

      {/* Divider + stats */}
      <div
        style={{
          marginTop: "56px",
          paddingTop: "32px",
          borderTop: "1px solid rgba(26,26,46,0.1)",
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        {[
          { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
          { value: questionCount !== null ? String(questionCount) : "…", label: t("hero.statQuestionsLabel") },
          { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(26,26,46,0.1)",
              borderRadius: "3px",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 1px 3px rgba(26,26,46,0.05)",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontFamily: "Georgia, serif",
                color: "#8a6800",
                fontWeight: 400,
              }}
            >
              {stat.value}
            </span>
            <span style={{ fontSize: "13px", color: "rgba(26,26,46,0.5)" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
