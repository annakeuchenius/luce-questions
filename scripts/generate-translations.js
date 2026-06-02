#!/usr/bin/env node
/**
 * generate-translations.js
 *
 * Copies the English base translation file to each target language folder
 * as a starting point. Edit each file manually to add proper translations,
 * or replace this script with a translation service of your choice.
 *
 * Usage:
 *   node scripts/generate-translations.js           # skips existing files
 *   node scripts/generate-translations.js --force   # overwrites existing files
 */

const fs = require("fs");
const path = require("path");

const TARGET_LANGS = ["de", "fr", "it", "es", "nl", "pl", "sv"];
const LOCALES_DIR = path.resolve(__dirname, "../public/locales");
const FORCE = process.argv.includes("--force");

const enPath = path.join(LOCALES_DIR, "en", "common.json");
if (!fs.existsSync(enPath)) {
  console.error(`❌  English base file not found at ${enPath}`);
  process.exit(1);
}

const enContent = fs.readFileSync(enPath, "utf8");

for (const lang of TARGET_LANGS) {
  const outPath = path.join(LOCALES_DIR, lang, "common.json");

  if (!FORCE && fs.existsSync(outPath)) {
    console.log(`⏭   ${lang}: file already exists, skipping (use --force to overwrite)`);
    continue;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, enContent, "utf8");
  console.log(`✅  ${lang}: copied from English — translate manually or connect a translation service`);
}

console.log("\nDone. Edit each public/locales/{lang}/common.json to add translations.");
