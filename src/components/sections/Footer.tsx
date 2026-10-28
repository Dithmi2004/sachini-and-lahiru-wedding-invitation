import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatWeddingDate } from "../../utils/datetime";
import { LotusEmblem } from "../ornaments/LotusEmblem";

export function Footer() {
  const { locale } = useLanguage();
  return (
    <footer className="relative">
      <div className="relative h-44 overflow-hidden sm:h-60">
        <img
          src={wedding.images.floralCorner}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -left-6 w-44 -scale-y-100 opacity-90 mix-blend-multiply sm:w-64" />
        
        <img
          src={wedding.images.floralCorner}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 w-44 rotate-180 opacity-90 mix-blend-multiply sm:w-64" />
        
        <LotusEmblem className="absolute bottom-6 left-1/2 h-10 w-16 -translate-x-1/2 text-gold" />
      </div>
      <div className="kandyan-band h-4" aria-hidden="true" />
      <div className="bg-maroon-deep px-5 py-7 text-center">
        <p className="font-script text-3xl text-champagne">S &amp; L</p>
        <p className="caps mt-2 text-xs font-semibold text-ivory/85">
          {formatWeddingDate(locale)} · {wedding.venue.name}
        </p>
      </div>
    </footer>);

}