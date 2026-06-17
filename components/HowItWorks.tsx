"use client";

import { useTranslation } from "react-i18next";

const STEPS = [
  { titleKey: "howItWorks.step1Title", descKey: "howItWorks.step1Desc" },
  { titleKey: "howItWorks.step2Title", descKey: "howItWorks.step2Desc" },
  { titleKey: "howItWorks.step3Title", descKey: "howItWorks.step3Desc" },
  { titleKey: "howItWorks.step4Title", descKey: "howItWorks.step4Desc" },
];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        borderTop: "1px solid rgba(26,26,46,0.08)",
        padding: "80px 24px",
        background: "#f2f0ea",
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
            {t("howItWorks.tag")}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#1a1a2e",
            margin: "0 0 48px",
            lineHeight: 1.3,
          }}
        >
          {t("howItWorks.heading")}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
              }}
            >
              {/* Amber circle number */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(180,140,0,0.1)",
                  border: "1px solid rgba(180,140,0,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#8a6800",
                  fontSize: "14px",
                  fontFamily: "Georgia, serif",
                }}
              >
                {i + 1}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1a1a2e",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {t(step.titleKey)}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(26,26,46,0.6)",
                  }}
                >
                  {t(step.descKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
