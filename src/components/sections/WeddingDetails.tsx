import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ClockIcon, Flower2Icon, LandmarkIcon, MapPinIcon, type LucideIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatTime, formatWeddingMonthYear, weddingWeekday } from "../../utils/datetime";
import { CornerOrnament } from "../ornaments/CornerOrnament";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { GoldDivider } from "../ornaments/GoldDivider";

interface DetailRow {
  icon: LucideIcon;
  label: string;
  value: string;
  emphasis?: boolean;
}

export function WeddingDetails() {
  const { t, locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const rows: DetailRow[] = [
    {
      icon: ClockIcon,
      label: t.details.time,
      value: `${formatTime(wedding.startTime, locale)} – ${formatTime(wedding.endTime, locale)}`
    },
    {
      icon: Flower2Icon,
      label: t.details.poruwa,
      value: formatTime(wedding.poruwaTime, locale),
      emphasis: true
    },
    { icon: LandmarkIcon, label: t.details.venue, value: wedding.venue.name },
    { icon: MapPinIcon, label: t.details.location, value: wedding.venue.location[locale] }
  ];

  return (
    <section aria-labelledby="details-title" className="relative overflow-hidden bg-[#FDF6F8] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -left-28 top-1/3 h-72 w-72 rounded-full border border-foil/15" />
        <span className="absolute -left-20 top-[38%] h-56 w-56 rounded-full border border-foil/10" />
        <span className="absolute -right-28 top-1/4 h-72 w-72 rounded-full border border-foil/15" />
        <span className="absolute -right-20 top-[31%] h-56 w-56 rounded-full border border-foil/10" />
        <span className="absolute left-[13%] top-[68%] h-1.5 w-1.5 rounded-full bg-foil/25" />
        <span className="absolute right-[13%] top-[62%] h-2 w-2 rounded-full bg-lotus/50" />
      </div>
      <img
        src={wedding.images.floralCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-8 w-28 opacity-40 mix-blend-multiply sm:w-40"
      />
      <img
        src={wedding.images.floralCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-8 w-28 rotate-180 opacity-40 mix-blend-multiply sm:w-40"
      />

      <div className="relative">
        <div className="text-center">
          <LotusEmblem className="mx-auto h-7 w-11 text-gold" />
          <h2 id="details-title" className="mt-3 font-serif text-4xl font-medium text-maroon sm:text-5xl">
            {t.details.title}
          </h2>
          <GoldDivider className="mt-4" />
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-[28px] border border-foil/70 bg-[#FBF7EF] p-1.5 sm:mt-9 sm:p-2">
          <div className="relative grid overflow-hidden rounded-[22px] border border-foil/35 bg-[#FBF7EF] md:grid-cols-[0.78fr_1.22fr]">
            <div className="relative flex flex-col items-center justify-center border-b border-foil/40 px-6 py-8 text-center md:border-b-0 md:border-r sm:py-10">
              <CornerOrnament className="absolute left-3 top-3 h-10 w-10 text-foil/70" />
              <CornerOrnament className="absolute right-3 top-3 h-10 w-10 rotate-90 text-foil/70" />
              <CornerOrnament className="absolute bottom-3 right-3 h-10 w-10 rotate-180 text-foil/70" />
              <CornerOrnament className="absolute bottom-3 left-3 h-10 w-10 -rotate-90 text-foil/70" />
              <LotusEmblem className="mb-2 h-7 w-11 text-foil" />
              <p className="caps text-xs font-semibold text-gold-deep">{weddingWeekday(locale)}</p>
              <p className="mt-1 font-serif text-[6.5rem] font-medium leading-[0.9] tracking-[-0.05em] text-maroon lining-nums sm:text-[7.5rem]">
                {wedding.date.day}
              </p>
              <p className="caps mt-3 text-sm font-semibold text-cocoa">{formatWeddingMonthYear(locale)}</p>
              <GoldDivider className="mt-4 w-40" />
            </div>

            <dl className="grid content-center px-3 py-2 sm:grid-cols-2 sm:px-4 sm:py-3">
              {rows.map(({ icon: Icon, label, value, emphasis }, index) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.07, ease: [0.23, 1, 0.32, 1] }}
                  className="flex min-w-0 items-start gap-3 border-b border-foil/30 px-3 py-4 last:border-b-0 sm:gap-4 sm:px-4 sm:py-5 [&:nth-child(odd)]:sm:border-r [&:nth-child(odd)]:sm:border-foil/25">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foil/70 bg-white/60 text-gold-deep sm:h-11 sm:w-11">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="caps text-[0.65rem] font-bold leading-relaxed text-gold-deep">{label}</dt>
                    <dd className={`mt-1 break-words font-serif text-lg font-medium leading-snug sm:text-xl ${emphasis ? "text-maroon" : "text-cocoa"}`}>
                      {value}
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
