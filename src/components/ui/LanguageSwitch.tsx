import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Locale } from "../../types/wedding";
import { EASE_OUT } from "../../utils/motion";

const OPTIONS: {code: Locale;label: string;className: string;}[] = [
  { code: "en", label: "EN", className: "font-serif tracking-wide" },
  { code: "si", label: "සිං", className: "font-sinhala text-[0.9rem]" }
];


export function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="fixed right-3 top-3 z-50 flex rounded-full border border-gold/50 bg-ivory/90 p-1 shadow-[0_6px_20px_-10px_rgba(59,42,30,0.4)] backdrop-blur sm:right-5 sm:top-5">
      
      {OPTIONS.map((option) => {
        const active = locale === option.code;
        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            aria-pressed={active}
            onClick={() => setLocale(option.code)}
            className={`relative min-h-[38px] whitespace-nowrap rounded-full px-4 text-[0.95rem] font-semibold transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
            active ? "text-ivory" : "text-cocoa hover:text-maroon"} ${
            option.className}`}>
            
            {active &&
            <motion.span
              layoutId="language-pill"
              className="absolute inset-0 rounded-full bg-maroon"
              transition={{ duration: 0.22, ease: EASE_OUT }} />

            }
            <span className="relative">{option.label}</span>
          </button>);

      })}
    </div>);

}
