import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";
import type { Translation } from "../types/i18n";
import type { Locale } from "../types/wedding";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

const STORAGE_KEY = "wedding-locale";
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "si") setLocale(saved);
    } catch {

      /* storage unavailable */}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {

      /* storage unavailable */}
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t: translations[locale] }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}