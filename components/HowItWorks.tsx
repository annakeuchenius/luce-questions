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
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "80px 24px",
        background: "rgba(255,255,255,0.02)",
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
            {t("howItWorks.tag")}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#ffffff",
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
              {/* Gold circle number */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(240,192,64,0.12)",
                  border: "1px solid rgba(240,192,64,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#f0c040",
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
                    color: "#ffffff",
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
                    color: "rgba(255,255,255,0.55)",
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
