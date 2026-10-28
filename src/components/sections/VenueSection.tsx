import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPinIcon, NavigationIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatTime, formatWeddingDate } from "../../utils/datetime";
import { buildMapsUrl } from "../../utils/links";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { GoldDivider } from "../ornaments/GoldDivider";
import { ActionLink } from "../ui/ActionLink";
import { CalendarButton } from "./CalendarButton";

export function VenueSection() {
  const { t, locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  return (
    <section aria-labelledby="venue-title" className="relative isolate overflow-hidden bg-[#F8ECEB] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute -left-32 top-16 h-80 w-80 rounded-full border border-foil/15" />
        <span className="absolute -left-20 top-28 h-56 w-56 rounded-full border border-foil/10" />
        <span className="absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-foil/15" />
        <span className="absolute -right-20 bottom-22 h-56 w-56 rounded-full border border-foil/10" />
      </div>
      <div className="mx-auto max-w-5xl">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        className="rounded-[30px] border border-gold/50 bg-ivory p-2.5">
        <div className="paper relative overflow-hidden rounded-[22px] border border-gold/30 px-6 py-16 text-center sm:px-12">
          <img
            src={wedding.images.floralCorner}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 -top-6 w-28 opacity-90 mix-blend-multiply sm:w-44" />
          
          <img
            src={wedding.images.floralCorner}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -right-6 w-28 rotate-180 opacity-90 mix-blend-multiply sm:w-44" />
          
          <div className="relative">
            <LotusEmblem className="mx-auto h-8 w-12 text-gold" />
            <h2 id="venue-title" className="caps mt-4 text-sm font-bold text-gold-deep">
              {t.venue.title}
            </h2>
            <p className="mt-4 font-serif text-4xl font-medium text-maroon sm:text-6xl">{wedding.venue.name}</p>
            <p className="mt-3 flex items-center justify-center gap-2 text-xl text-cocoa">
              <MapPinIcon className="h-5 w-5 text-gold-deep" strokeWidth={1.6} aria-hidden="true" />
              {wedding.venue.location[locale]}
            </p>
            <GoldDivider className="mt-7" />
            <p className="mt-5 text-lg text-cocoa-soft lining-nums">
              {formatWeddingDate(locale)} · {formatTime(wedding.startTime, locale)} – {formatTime(wedding.endTime, locale)}
            </p>
            <div className="mx-auto mt-9 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <ActionLink href={buildMapsUrl()} icon={NavigationIcon} newTabLabel={t.venue.opensNewTab}>
                {t.venue.directions}
              </ActionLink>
              <CalendarButton />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12, ease: [0.23, 1, 0.32, 1] }}
        className="mt-6 rounded-[28px] border border-gold/50 bg-ivory p-2.5 sm:mt-8">
        <div className="overflow-hidden rounded-[21px] border border-gold/30 bg-[#F7F0E4] p-1.5">
          <iframe
            title="Map to Royal Chance Palace Banquets"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.126814184987!2d80.049775!3d7.1112994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd61f2c07b73%3A0xdfeb7e859a1d2ce0!2sRoyal%20Chance%20Palace%20Banquets!5e0!3m2!1sen!2slk!4v1793182503330!5m2!1sen!2slk"
            className="block aspect-[4/3] w-full rounded-[16px] sm:aspect-[16/7]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </motion.div>
      </div>
    </section>);

}
