import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // 👈 important

import translationFR from "./locales/fr.json";
import translationEN from "./locales/en.json";
import translationES from "./locales/es.json";

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  es: { translation: translationES }
};

i18n
  .use(LanguageDetector) // 👈 ajouter ici
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'], // ordre des sources
      caches: ['localStorage'] // où sauvegarder la langue
    }
  });

export default i18n;
