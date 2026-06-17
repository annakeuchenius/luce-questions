"use client";

import { useTranslation } from "react-i18next";

export default function PrivacyNotice() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        background: "rgba(180,140,0,0.06)",
        border: "1px solid rgba(180,140,0,0.25)",
        borderRadius: "4px",
        padding: "16px 20px",
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
      }}
    >
      <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>🔒</span>
      <div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#8a6800",
            marginBottom: "6px",
          }}
        >
          {t("form.privacyTitle")}
        </div>
        <div
          style={{
            fontSize: "13px",
            lineHeight: 1.6,
            color: "rgba(26,26,46,0.65)",
          }}
        >
          {t("form.privacyBody")}
        </div>
      </div>
    </div>
  );
}
