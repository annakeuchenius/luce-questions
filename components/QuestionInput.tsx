"use client";

import { useTranslation } from "react-i18next";
import { useState, KeyboardEvent } from "react";

interface Props {
  questions: string[];
  onChange: (questions: string[]) => void;
}

export default function QuestionInput({ questions, onChange }: Props) {
  const { t } = useTranslation();
  const [draft, setDraft] = useState("");

  function addQuestion() {
    const trimmed = draft.trim();
    if (!trimmed) return;
    onChange([...questions, trimmed]);
    setDraft("");
  }

  function removeQuestion(index: number) {
    onChange(questions.filter((_, i) => i !== index));
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addQuestion();
    }
  }

  return (
    <div>
      {/* Label + hint */}
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            display: "block",
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "4px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {t("form.questionsLabel")}
        </label>
        <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.5 }}>
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{t("form.questionsHint")} </span>
          <span style={{ color: "rgba(220,100,80,0.85)" }}>{t("form.questionsHintWarning")}</span>
        </p>
      </div>

      {/* Input row */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("form.questionPlaceholder")}
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "3px",
            padding: "10px 14px",
            fontSize: "14px",
            color: "#ffffff",
            outline: "none",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,192,64,0.5)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          }}
        />
        <button
          type="button"
          onClick={addQuestion}
          disabled={!draft.trim()}
          style={{
            background: draft.trim() ? "#f0c040" : "rgba(255,255,255,0.08)",
            color: draft.trim() ? "#0a1628" : "rgba(255,255,255,0.3)",
            border: "none",
            borderRadius: "3px",
            padding: "10px 18px",
            fontSize: "18px",
            fontWeight: 600,
            cursor: draft.trim() ? "pointer" : "not-allowed",
            transition: "background 0.15s, color 0.15s",
            lineHeight: 1,
          }}
          aria-label={t("form.addButton")}
        >
          +
        </button>
      </div>

      {/* Question list */}
      {questions.length > 0 && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
          {questions.map((q, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "3px",
                padding: "10px 12px",
              }}
            >
              <span
                style={{
                  flex: 1,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.5,
                }}
              >
                {q}
              </span>
              <button
                type="button"
                onClick={() => removeQuestion(i)}
                aria-label={t("form.removeQuestion")}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.35)",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "0 2px",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(220,100,80,0.8)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
