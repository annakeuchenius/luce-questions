import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
  { code: "sv", label: "Svenska" },
  { code: "da", label: "Dansk" },
  { code: "no", label: "Norsk" },
  { code: "fi", label: "Suomi" },
  { code: "pl", label: "Polski" },
  { code: "cs", label: "Čeština" },
  { code: "sk", label: "Slovenčina" },
  { code: "hu", label: "Magyar" },
  { code: "ro", label: "Română" },
  { code: "bg", label: "Български" },
  { code: "hr", label: "Hrvatski" },
  { code: "sl", label: "Slovenščina" },
  { code: "lt", label: "Lietuvių" },
  { code: "lv", label: "Latviešu" },
  { code: "et", label: "Eesti" },
  { code: "el", label: "Ελληνικά" },
  { code: "mt", label: "Malti" },
];

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(resourcesToBackend((language: string, namespace: string) =>
      import(`../public/locales/${language}/${namespace}.json`)
        .catch(() => import(`../public/locales/en/${namespace}.json`))
    ))
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
      defaultNS: "common",
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "luce_language",
      },
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
