import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatTime, formatWeddingMonthYear, weddingWeekday } from "../../utils/datetime";
import { EASE_OUT } from "../../utils/motion";
import { GoldDivider } from "../ornaments/GoldDivider";
import { CoupleIllustration } from "./CoupleIllustration";

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 45%, #FBE6EC 100%)" }}>
      
      {/* Gold mandala crown */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden">
        <img
          src={wedding.images.coverMandala}
          alt=""
          className="block w-[130%] max-w-[760px] shrink-0 mix-blend-multiply sm:w-[90%]"
          style={{ marginTop: "-9%" }} />
        
      </div>

      {/* Watercolor floral corners */}
      <img
        src={wedding.images.floralCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-32 mix-blend-multiply sm:w-52 lg:w-72" />
      
      <img
        src={wedding.images.floralCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-32 -scale-x-100 mix-blend-multiply sm:w-52 lg:w-72" />
      

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-[clamp(14rem,32vw,16rem)] sm:px-8 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pt-[clamp(11rem,26vw,16rem)] lg:gap-16 lg:pb-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.35, ease: EASE_OUT }}>
          
          <p className="caps text-sm font-semibold text-rosewood">{t.hero.eyebrow}</p>

          <h1
            id="hero-title"
            className={`mt-5 text-maroon ${locale === "si" ? "font-serif text-[clamp(1.9rem,5vw,3rem)] font-semibold leading-[1.5]" : "font-script text-[clamp(2.6rem,5.4vw,4.4rem)] font-normal leading-[1.12]"}`}>
            
            <span className="block">{wedding.bride.fullName[locale]}</span>
            <span className="my-1 block text-[0.62em] text-foil">&amp;</span>
            <span className="block">{wedding.groom.fullName[locale]}</span>
          </h1>

          <GoldDivider className="mt-7 text-foil" />

          {/* Classic invitation date block: weekday | day | time */}
          <div className="mx-auto mt-7 grid max-w-md grid-cols-[1fr_auto_1fr] items-center text-rosewood">
            <p className="border-y border-foil/50 py-2.5 text-base font-semibold sm:text-lg">{weddingWeekday(locale)}</p>
            <div className="px-5 text-center">
              <p className="font-serif text-6xl font-medium leading-none text-maroon lining-nums sm:text-7xl">
                {wedding.date.day}
              </p>
              <p className="mt-1 whitespace-nowrap text-base font-semibold sm:text-lg">
                {formatWeddingMonthYear(locale)}
              </p>
            </div>
            <p className="whitespace-nowrap border-y border-foil/50 py-2.5 text-base font-semibold lining-nums sm:text-lg">
              {formatTime(wedding.startTime, locale)}
            </p>
          </div>

          <p className="mt-7 text-2xl font-medium text-cocoa">{wedding.venue.name}</p>
          <p className="mt-1 text-lg text-cocoa-soft">{wedding.venue.location[locale]}</p>
        </motion.div>

        <CoupleIllustration />
      </div>
    </section>);

}
