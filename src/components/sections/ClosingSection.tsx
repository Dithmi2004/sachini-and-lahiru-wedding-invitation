import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { GoldDivider } from "../ornaments/GoldDivider";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { OilLamp } from "../ornaments/OilLamp";

export function ClosingSection() {
  const { t, locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const signature = locale === "si"
    ? `${wedding.bride.firstName.si} සහ ${wedding.groom.firstName.si}`
    : `${wedding.bride.firstName.en} & ${wedding.groom.firstName.en}`;
  return (
    <section aria-labelledby="closing-title" className="px-5 pb-6 pt-20 text-center sm:px-8 lg:pt-28">
      <h2 id="closing-title" className="sr-only">
        {t.closing.title}
      </h2>
      <motion.div
        className="mx-auto max-w-2xl"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}>
        <div className="flex items-end justify-center gap-8 sm:gap-12">
          <motion.div animate={reduceMotion ? undefined : { y: [0, -2, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
            <OilLamp className="h-24 w-10 sm:h-28 sm:w-12" />
          </motion.div>
          <motion.div animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], rotate: [0, 2, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <LotusEmblem className="mb-2 h-12 w-20 text-gold" />
          </motion.div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, -2, 0] }} transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}>
            <OilLamp className="h-24 w-10 sm:h-28 sm:w-12" />
          </motion.div>
        </div>
        <p className="italic-en mt-10 text-2xl leading-relaxed text-cocoa sm:text-3xl">{t.closing.message}</p>
        <GoldDivider className="mt-9" />
        <p className="italic-en mt-7 text-xl text-cocoa-soft">{t.closing.withLove}</p>
        <p className={`mt-2 text-maroon ${locale === "si" ? "font-serif text-2xl font-medium leading-relaxed sm:text-3xl" : "font-script text-5xl sm:text-6xl"}`}>
          {signature}
        </p>
      </motion.div>
    </section>);

}
