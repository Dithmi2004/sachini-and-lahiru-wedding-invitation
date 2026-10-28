import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { buildWhatsAppUrl } from "../../utils/links";
import { wedding } from "../../data/wedding";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { SectionHeading } from "../ui/SectionHeading";
import { RsvpButton } from "./RsvpButton";

export function RsvpSection({ showConfigPlaceholder }: {showConfigPlaceholder: boolean;}) {
  const { t, locale } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const url = buildWhatsAppUrl(locale);
  if (!url && !showConfigPlaceholder) return null;

  return (
    <section aria-labelledby="rsvp-title" className="relative overflow-hidden bg-[#F3E4E2] px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="paper lotus-pattern absolute inset-0 opacity-35" />
        <img src={wedding.images.coverMandala} alt="" className="absolute left-1/2 top-0 w-[min(100%,900px)] -translate-x-1/2 opacity-[0.09] mix-blend-multiply" />
        <img src={wedding.images.floralCorner} alt="" className="absolute -left-8 -top-8 w-36 opacity-45 mix-blend-multiply sm:w-52" />
        <img src={wedding.images.floralCorner} alt="" className="absolute -bottom-8 -right-8 w-36 rotate-180 opacity-45 mix-blend-multiply sm:w-52" />
        <motion.div
          className="absolute left-[10%] top-1/2 hidden -translate-y-1/2 text-lotus/55 sm:block"
          animate={prefersReducedMotion ? undefined : { scale: [0.9, 1.04, 0.9], opacity: [0.3, 0.55, 0.3], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
          <LotusEmblem className="h-24 w-36" />
        </motion.div>
        <motion.div
          className="absolute right-[10%] top-[42%] hidden text-foil/45 sm:block"
          animate={prefersReducedMotion ? undefined : { scale: [0.92, 1.05, 0.92], opacity: [0.25, 0.5, 0.25], rotate: [0, -3, 0] }}
          transition={{ duration: 8, delay: 1, repeat: Infinity, ease: "easeInOut" }}>
          <LotusEmblem className="h-28 w-40" />
        </motion.div>
      </div>
      <div className="paper relative mx-auto max-w-3xl overflow-hidden rounded-[30px] border border-foil/60 bg-[#FBF6EC]/90 px-6 py-9 text-center sm:px-12 sm:py-11">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            src={wedding.images.coverMandala}
            alt=""
            className="absolute left-1/2 top-1/2 w-[min(92%,680px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] mix-blend-multiply"
          />
          <img
            src={wedding.images.floralCorner}
            alt=""
            className="absolute -left-5 -top-5 w-32 opacity-55 mix-blend-multiply sm:w-44"
          />
          <img
            src={wedding.images.floralCorner}
            alt=""
            className="absolute -bottom-5 -right-5 w-32 rotate-180 opacity-55 mix-blend-multiply sm:w-44"
          />
        </div>
        <div className="relative z-10">
          <SectionHeading id="rsvp-title" title={t.rsvp.title} />
          <p className="mt-6 text-xl leading-relaxed text-cocoa">{t.rsvp.text}</p>
          <div className="mt-9">
            <RsvpButton url={url} showConfigPlaceholder={showConfigPlaceholder} />
          </div>
        </div>
      </div>
    </section>);

}
