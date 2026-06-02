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
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Gold square logomark */}
        <div
          style={{
            width: "32px",
            height: "32px",
            background: "#f0c040",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#0a1628",
              letterSpacing: "-0.5px",
            }}
          >
            LuCE
          </span>
        </div>
        <span
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          {t("nav.orgName")}
        </span>
      </div>

      <LanguageSwitcher />
    </nav>
  );
}
