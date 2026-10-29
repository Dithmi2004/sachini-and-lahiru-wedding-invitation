import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatWeddingDate } from "../../utils/datetime";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { Facebook, Phone } from "lucide-react";

export function Footer() {
  const { locale } = useLanguage();
  return (
    <footer className="relative">
      <div className="relative h-44 overflow-hidden sm:h-60">
        <img
          src={wedding.images.floralCorner}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -left-6 w-44 -scale-y-100 opacity-90 mix-blend-multiply sm:w-64"
        />
        <img
          src={wedding.images.floralCorner}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 w-44 rotate-180 opacity-90 mix-blend-multiply sm:w-64"
        />
        <LotusEmblem className="absolute bottom-6 left-1/2 h-10 w-16 -translate-x-1/2 text-gold" />
      </div>
      <div className="kandyan-band h-4" aria-hidden="true" />
      <div className="bg-maroon-deep px-5 py-3 text-center">
        <p className="font-script text-2xl leading-tight text-champagne">S &amp; L</p>
        <p className="caps mt-1 text-[10px] font-semibold leading-tight text-ivory/85">
          {formatWeddingDate(locale)} · {wedding.venue.name}
        </p>
        <p className="mt-2 text-sm font-medium leading-tight text-ivory">Developed by Wow &amp; Bloom SL</p>
        <nav aria-label="Wow & Bloom SL contact links" className="mt-2 flex items-center justify-center gap-2">
          <a
            href="tel:+94764991398"
            aria-label="Call Wow & Bloom SL"
            title="Call Wow & Bloom SL"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/75 bg-ivory/10 text-ivory transition-colors hover:bg-champagne hover:text-maroon-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/share/1FmPv3fEUG/"
            target="_blank"
            rel="noreferrer"
            aria-label="Wow & Bloom SL on Facebook"
            title="Wow & Bloom SL on Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/75 bg-ivory/10 text-ivory transition-colors hover:bg-champagne hover:text-maroon-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
          >
            <Facebook className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
