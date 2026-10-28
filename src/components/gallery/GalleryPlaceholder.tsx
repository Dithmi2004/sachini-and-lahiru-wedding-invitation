import React from "react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "../../contexts/LanguageContext";
import type { GalleryPhoto } from "../../types/wedding";
import { LotusEmblem } from "../ornaments/LotusEmblem";

interface GalleryPlaceholderProps {
  photo: GalleryPhoto;
  large?: boolean;
  className?: string;
}

/** Clearly labelled stand-in shown until a real photo is configured. */
export function GalleryPlaceholder({ photo, large = false, className }: GalleryPlaceholderProps) {
  const { t, locale } = useLanguage();
  return (
    <div
      role="img"
      aria-label={`${t.gallery.samplePlaceholder}: ${photo.alt[locale]}`}
      className={twMerge(
        "paper relative flex h-full w-full flex-col items-center justify-center gap-1.5 overflow-hidden bg-cream p-4 text-center",
        className
      )}>
      
      <span aria-hidden="true" className="absolute inset-2 rounded-[inherit] border border-dashed border-gold/60" />
      <LotusEmblem className={large ? "h-12 w-20 text-gold" : "h-7 w-11 text-gold"} />
      <p className={`caps font-bold text-maroon ${large ? "text-sm" : "text-[10px] sm:text-[11px]"}`}>
        {t.gallery.samplePlaceholder}
      </p>
      <p className={large ? "text-2xl text-cocoa" : "text-base leading-snug text-cocoa"}>{photo.alt[locale]}</p>
      {large &&
      <p className="mt-2 break-all font-mono text-xs text-cocoa-soft">
          {t.gallery.replaceHint} public{photo.plannedPath}
        </p>
      }
    </div>);

}