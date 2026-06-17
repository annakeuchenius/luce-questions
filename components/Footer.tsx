"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(26,26,46,0.08)",
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        background: "#f2f0ea",
      }}
    >
      <span style={{ fontSize: "13px", color: "rgba(26,26,46,0.4)" }}>
        {t("footer.copyright")}
      </span>
      <a
        href="#"
        style={{
          fontSize: "13px",
          color: "rgba(26,26,46,0.4)",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(26,26,46,0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(26,26,46,0.4)";
        }}
      >
        {t("footer.privacyPolicy")}
      </a>
    </footer>
  );
}
