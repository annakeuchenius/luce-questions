#!/usr/bin/env node
/**
 * generate-translations.js
 *
 * Uses the Anthropic API to translate public/locales/en/common.json into all
 * target European languages. Generated files are committed as static assets —
 * no API calls happen at runtime.
 *
 * Usage:
 *   node scripts/generate-translations.js           # skips existing files
 *   node scripts/generate-translations.js --force   # overwrites existing files
 *
 * Requires ANTHROPIC_API_KEY in .env.local (or the process environment).
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// Load .env.local if ANTHROPIC_API_KEY is not already in the environment
if (!process.env.ANTHROPIC_API_KEY) {
  const envPath = path.resolve(__dirname, "../.env.local");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf8").split("\n");
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim();
    }
  }
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("❌  ANTHROPIC_API_KEY not found. Add it to .env.local or the environment.");
  process.exit(1);
}

const TARGET_LANGS = [
  { code: "de", name: "German" },
  { code: "fr", name: "French" },
  { code: "it", name: "Italian" },
  { code: "es", name: "Spanish" },
  { code: "pt", name: "Portuguese" },
  { code: "nl", name: "Dutch" },
  { code: "sv", name: "Swedish" },
  { code: "da", name: "Danish" },
  { code: "no", name: "Norwegian" },
  { code: "fi", name: "Finnish" },
  { code: "pl", name: "Polish" },
  { code: "cs", name: "Czech" },
  { code: "sk", name: "Slovak" },
  { code: "hu", name: "Hungarian" },
  { code: "ro", name: "Romanian" },
  { code: "bg", name: "Bulgarian" },
  { code: "hr", name: "Croatian" },
  { code: "sl", name: "Slovenian" },
  { code: "lt", name: "Lithuanian" },
  { code: "lv", name: "Latvian" },
  { code: "et", name: "Estonian" },
  { code: "el", name: "Greek" },
  { code: "mt", name: "Maltese" },
];

const LOCALES_DIR = path.resolve(__dirname, "../public/locales");
const FORCE = process.argv.includes("--force");

const enPath = path.join(LOCALES_DIR, "en", "common.json");
if (!fs.existsSync(enPath)) {
  console.error(`❌  English base file not found at ${enPath}`);
  process.exit(1);
}

const enContent = fs.readFileSync(enPath, "utf8");

function callAnthropic(body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = https.request(
      {
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
      },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const data = Buffer.concat(chunks).toString("utf8");
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              reject(new Error(parsed.error.message || JSON.stringify(parsed.error)));
            } else {
              resolve(parsed);
            }
          } catch (e) {
            reject(new Error("Failed to parse API response: " + data.slice(0, 200)));
          }
        });
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function translateLanguage(lang) {
  const outPath = path.join(LOCALES_DIR, lang.code, "common.json");

  if (!FORCE && fs.existsSync(outPath)) {
    console.log(`⏭   ${lang.code} (${lang.name}): already exists, skipping (--force to overwrite)`);
    return;
  }

  console.log(`🔄  ${lang.code} (${lang.name}): translating…`);

  const response = await callAnthropic({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 16000,
    system: [
      "You are a professional translator. You will receive a JSON object containing UI strings for a medical website.",
      "Translate all string VALUES into the requested target language.",
      "Rules:",
      "- Return ONLY valid JSON. No markdown, no code fences, no backticks, no preamble, no explanation.",
      "- Preserve all JSON keys exactly as-is.",
      "- Do NOT translate content inside {curly braces} — these are interpolation variables.",
      "- Do NOT translate HTML tags (e.g. <strong>, <a href=...>).",
      "- Translate arrays element by element (e.g. country names).",
      "- Medical terminology should be accurate and natural for the target language.",
    ].join("\n"),
    messages: [
      {
        role: "user",
        content: `Translate the following JSON into ${lang.name}:\n\n${enContent}`,
      },
    ],
  });

  const raw = response.content[0].text.trim();

  // Strip accidental markdown fences if the model added them despite instructions
  const cleaned = raw.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim();

  // Validate JSON before writing
  try {
    JSON.parse(cleaned);
  } catch (e) {
    console.error(`❌  ${lang.code}: received invalid JSON. Skipping. Error: ${e.message}`);
    console.error("Raw response (first 500 chars):", raw.slice(0, 500));
    return;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, cleaned + "\n", "utf8");
  console.log(`✅  ${lang.code} (${lang.name}): written to ${outPath}`);
}

async function main() {
  console.log(`\nGenerating translations for ${TARGET_LANGS.length} languages…\n`);

  for (const lang of TARGET_LANGS) {
    await translateLanguage(lang);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
