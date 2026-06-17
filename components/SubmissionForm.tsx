"use client";

import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import PrivacyNotice from "./PrivacyNotice";
import QuestionInput from "./QuestionInput";

const EUROPEAN_COUNTRIES = [
  "Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina",
  "Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia",
  "Finland","France","Germany","Greece","Hungary","Iceland","Ireland",
  "Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg",
  "Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia",
  "Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia",
  "Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine",
  "United Kingdom","Vatican City","Outside Europe",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#ffffff",
  border: "1px solid rgba(26,26,46,0.18)",
  borderRadius: "3px",
  padding: "10px 14px",
  fontSize: "14px",
  color: "#1a1a2e",
  outline: "none",
  appearance: "none" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  color: "rgba(26,26,46,0.75)",
  marginBottom: "6px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

export default function SubmissionForm() {
  const { t, i18n } = useTranslation();

  const [questions, setQuestions] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [role, setRole] = useState("");
  const [roleCustom, setRoleCustom] = useState("");
  const [country, setCountry] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  const [mailingList, setMailingList] = useState(false);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);

  const emailMissing = mailingList && !email.trim();
  const canSubmit = (questions.length > 0 || draft.trim().length > 0) && consent && !submitting;

  function focusEmail() {
    emailRef.current?.focus();
    emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (emailRef.current) {
      emailRef.current.style.borderColor = "rgba(180,140,0,0.6)";
      emailRef.current.style.boxShadow = "0 0 0 2px rgba(180,140,0,0.12)";
      setTimeout(() => {
        if (emailRef.current) {
          emailRef.current.style.borderColor = "rgba(26,26,46,0.18)";
          emailRef.current.style.boxShadow = "none";
        }
      }, 2000);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    if (mailingList && !email.trim()) {
      setError(t("form.validationEmailRequired"));
      focusEmail();
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("form.validationEmail"));
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questions: draft.trim() ? [...questions, draft.trim()] : questions,
          role,
          roleCustom,
          country,
          preferredLanguage,
          firstName,
          lastName,
          email,
          honeypot,
          anythingElse,
          mailingListOptIn: mailingList,
          uiLanguage: i18n.language,
          consentGiven: consent,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setDraft("");
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section
        id="form-section"
        style={{
          borderTop: "1px solid rgba(26,26,46,0.08)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(180,140,0,0.1)",
              border: "1px solid rgba(180,140,0,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
              fontSize: "22px",
              color: "#8a6800",
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(20px, 3vw, 28px)",
              color: "#1a1a2e",
              margin: "0 0 20px",
            }}
          >
            {t("success.heading")}
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(26,26,46,0.82)", margin: "0 0 12px" }}>
            {t("success.p1")}
          </p>
          {mailingList && email && (
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(26,26,46,0.5)", margin: 0 }}>
              {t("success.p2")}
            </p>
          )}
        </div>
      </section>
    );
  }

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(26,26,46,0.4)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    paddingRight: "36px",
  };

  const focusStyle = () => ({ borderColor: "rgba(180,140,0,0.55)" });
  const blurStyle = () => ({ borderColor: "rgba(26,26,46,0.18)" });

  return (
    <section
      id="form-section"
      style={{
        borderTop: "1px solid rgba(26,26,46,0.08)",
        padding: "80px 24px",
        background: "#f2f0ea",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8a6800",
            }}
          >
            {t("form.tag")}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#1a1a2e",
            margin: "0 0 16px",
            lineHeight: 1.3,
          }}
        >
          {t("form.heading")}
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(26,26,46,0.82)",
            margin: "0 0 36px",
          }}
        >
          {t("form.intro")}
        </p>

        {/* Privacy notice */}
        <div style={{ marginBottom: "32px" }}>
          <PrivacyNotice />
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot */}
          <input
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
          />

          {/* Row 1: Role + Country */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Field label={t("form.roleLabel")}>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={selectStyle}
                onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
              >
                <option value="" disabled>{t("form.rolePlaceholder")}</option>
                <option value="Patient">{t("form.roleOptions.patient")}</option>
                <option value="Caregiver / family member">{t("form.roleOptions.caregiver")}</option>
                <option value="Nurse">{t("form.roleOptions.nurse")}</option>
                <option value="Clinician">{t("form.roleOptions.clinician")}</option>
                <option value="Researcher">{t("form.roleOptions.researcher")}</option>
                <option value="Policy maker">{t("form.roleOptions.policyMaker")}</option>
                <option value="Other">{t("form.roleOptions.other")}</option>
              </select>
              {role === "Other" && (
                <input
                  type="text"
                  value={roleCustom}
                  onChange={(e) => setRoleCustom(e.target.value)}
                  placeholder={t("form.roleCustomPlaceholder")}
                  style={{ ...inputStyle, marginTop: "8px" }}
                  onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                  onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
                />
              )}
            </Field>

            <Field label={t("form.countryLabel")}>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={selectStyle}
                onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
              >
                <option value="" disabled>{t("form.countryPlaceholder")}</option>
                {EUROPEAN_COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Row 2: Preferred language */}
          <div style={{ marginBottom: "16px" }}>
            <Field label={t("form.languageLabel")}>
              <select
                value={preferredLanguage}
                onChange={(e) => {
                  const val = e.target.value;
                  setPreferredLanguage(val);
                  // Switch UI language to match, same as the top-right switcher
                  const langMap: Record<string, string> = {
                    English: "en", German: "de", French: "fr", Italian: "it",
                    Spanish: "es", Dutch: "nl", Polish: "pl", Swedish: "sv",
                  };
                  const code = langMap[val];
                  if (code) {
                    i18n.changeLanguage(code);
                    if (typeof localStorage !== "undefined") {
                      localStorage.setItem("luce_language", code);
                    }
                  }
                }}
                style={selectStyle}
                onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
              >
                <option value="" disabled>{t("form.languagePlaceholder")}</option>
                <option value="English">{t("form.languageOptions.en")}</option>
                <option value="German">{t("form.languageOptions.de")}</option>
                <option value="French">{t("form.languageOptions.fr")}</option>
                <option value="Italian">{t("form.languageOptions.it")}</option>
                <option value="Spanish">{t("form.languageOptions.es")}</option>
                <option value="Dutch">{t("form.languageOptions.nl")}</option>
                <option value="Polish">{t("form.languageOptions.pl")}</option>
                <option value="Swedish">{t("form.languageOptions.sv")}</option>
                <option value="Other">{t("form.languageOptions.other")}</option>
              </select>
            </Field>
          </div>

          {/* Row 3: First name + Last name */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Field label={t("form.firstNameLabel")}>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={t("form.firstNamePlaceholder")}
                style={inputStyle}
                onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
              />
            </Field>
            <Field label={t("form.lastNameLabel")}>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={t("form.lastNamePlaceholder")}
                style={inputStyle}
                onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
              />
            </Field>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "28px" }}>
            <Field label={t("form.emailLabel")}>
              <input
                ref={emailRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("form.emailPlaceholder")}
                style={inputStyle}
                onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
              />
            </Field>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid rgba(26,26,46,0.1)",
              marginBottom: "28px",
            }}
          />

          {/* Questions */}
          <div style={{ marginBottom: "28px" }}>
            <QuestionInput questions={questions} onChange={setQuestions} draft={draft} onDraftChange={setDraft} />
          </div>

          {/* Anything else */}
          <div style={{ marginBottom: "28px" }}>
            <Field label={t("form.anythingElseLabel")}>
              <textarea
                value={anythingElse}
                onChange={(e) => setAnythingElse(e.target.value)}
                placeholder={t("form.anythingElsePlaceholder")}
                rows={3}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                }}
                onFocus={(e) => { Object.assign(e.currentTarget.style, focusStyle()); }}
                onBlur={(e) => { Object.assign(e.currentTarget.style, blurStyle()); }}
              />
            </Field>
          </div>

          {/* Mailing list */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={mailingList}
                onChange={(e) => setMailingList(e.target.checked)}
                style={{
                  marginTop: "2px",
                  accentColor: "#f0c040",
                  width: "16px",
                  height: "16px",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "14px", lineHeight: 1.55, color: "rgba(26,26,46,0.82)" }}>
                {t("form.mailingListLabel")}
              </span>
            </label>

            {emailMissing && (
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "28px",
                  fontSize: "13px",
                  color: "#8a6800",
                  background: "rgba(180,140,0,0.06)",
                  border: "1px solid rgba(180,140,0,0.2)",
                  borderRadius: "3px",
                  padding: "8px 12px",
                }}
              >
                ✉️ {t("form.mailingListEmailReminder").split(t("form.mailingListEmailReminderLink"))[0]}
                <button
                  type="button"
                  onClick={focusEmail}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#8a6800",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  {t("form.mailingListEmailReminderLink")}
                </button>
                {t("form.mailingListEmailReminder").split(t("form.mailingListEmailReminderLink"))[1]}
              </div>
            )}
          </div>

          {/* Consent */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{
                  marginTop: "2px",
                  accentColor: "#f0c040",
                  width: "16px",
                  height: "16px",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(26,26,46,0.6)" }}>
                {t("form.consentLabel")}{" "}
                <a
                  href="#"
                  style={{ color: "#8a6800", textDecoration: "underline" }}
                >
                  {t("form.consentPrivacyLink")}
                </a>
              </span>
            </label>
          </div>

          {/* Error message */}
          {error && (
            <div
              style={{
                marginBottom: "16px",
                padding: "10px 14px",
                background: "rgba(200,60,40,0.06)",
                border: "1px solid rgba(200,60,40,0.25)",
                borderRadius: "3px",
                fontSize: "13px",
                color: "rgba(180,40,20,0.9)",
              }}
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            style={{
              width: "100%",
              padding: "15px",
              background: canSubmit ? "#f0c040" : "rgba(26,26,46,0.08)",
              color: canSubmit ? "#1a1a2e" : "rgba(26,26,46,0.25)",
              border: "none",
              borderRadius: "3px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              cursor: canSubmit ? "pointer" : "not-allowed",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (canSubmit) (e.currentTarget as HTMLElement).style.background = "#e8b830";
            }}
            onMouseLeave={(e) => {
              if (canSubmit) (e.currentTarget as HTMLElement).style.background = "#f0c040";
            }}
          >
            {submitting ? t("form.submitting") : t("form.submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
