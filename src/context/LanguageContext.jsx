import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "selectedLanguage";
const supportedLanguages = ["en", "sr"];

function getInitialLanguage() {
  const storedLanguage = window.sessionStorage.getItem(STORAGE_KEY);
  return supportedLanguages.includes(storedLanguage) ? storedLanguage : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "sr" ? "sr-Cyrl" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (supportedLanguages.includes(nextLanguage)) {
          setLanguageState(nextLanguage);
        }
      },
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}
