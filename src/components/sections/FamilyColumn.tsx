import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { wedding } from "../../data/wedding";
import type { Locale, ParentsInfo } from "../../types/wedding";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { GoldDivider } from "../ornaments/GoldDivider";

interface FamilyColumnProps {
  label: string;
  name: string;
  relation: string;
  parents: ParentsInfo;
  locale: Locale;
  side: "left" | "right";
}

/** Arch-topped family panel with double gold border and a watercolor lotus corner. */
export function FamilyColumn({ label, name, relation, parents, locale, side }: FamilyColumnProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, x: side === "left" ? -24 : 24, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="h-full rounded-b-3xl rounded-t-[999px] border border-foil/70 bg-white p-1.5 shadow-[0_20px_40px_-28px_rgba(176,30,85,0.5)]">
      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-b-[20px] rounded-t-[999px] border border-foil/40 px-6 pb-12 pt-14 text-center sm:px-8 sm:pt-16">
        <img
          src={wedding.images.floralCorner}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0 w-28 mix-blend-multiply sm:w-32 ${
          side === "left" ? "left-0 -scale-y-100" : "right-0 rotate-180"}`
          } />
        
        <div className="relative flex flex-col items-center">
          <LotusEmblem className="h-7 w-11 text-foil" />
          <h3 className="caps mt-4 text-xs font-bold text-rosewood">{label}</h3>
          <p className={`mt-3 text-maroon ${locale === "si" ? "font-serif text-[1.45rem] font-semibold leading-relaxed sm:text-[1.65rem] lg:text-[1.8rem]" : "font-script text-[2.6rem] leading-tight lg:text-5xl"}`}>
            {name}
          </p>
          <GoldDivider className="mt-4 text-foil" />
          <p className="italic-en mt-5 text-lg text-cocoa-soft">{relation}</p>
          <p className="mt-2 text-xl font-semibold text-cocoa sm:text-[1.4rem]">{parents.father[locale]}</p>
          <p className="mt-0.5 text-xl font-semibold text-cocoa sm:text-[1.4rem]">{parents.mother[locale]}</p>
        </div>
      </div>
    </motion.article>);

}
