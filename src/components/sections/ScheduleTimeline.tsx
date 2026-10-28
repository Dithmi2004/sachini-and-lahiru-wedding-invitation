import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatTime } from "../../utils/datetime";
import { EASE_OUT } from "../../utils/motion";
import { SectionHeading } from "../ui/SectionHeading";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { wedding as weddingConfig } from "../../data/wedding";

export function ScheduleTimeline() {
  const { t, locale } = useLanguage();
  return (
    <section aria-labelledby="schedule-title" className="relative overflow-hidden bg-[#FDF6F8] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img src={weddingConfig.images.floralCorner} alt="" className="absolute -left-12 top-0 w-40 opacity-35 mix-blend-multiply sm:w-56" />
        <img src={weddingConfig.images.floralCorner} alt="" className="absolute -bottom-3 -right-12 w-40 rotate-180 opacity-35 mix-blend-multiply sm:w-56" />
        <span className="absolute -right-28 top-1/3 h-72 w-72 rounded-full border border-foil/15" />
        <span className="absolute -right-20 top-[38%] h-56 w-56 rounded-full border border-foil/10" />
      </div>

      <div className="relative mx-auto max-w-4xl rounded-[30px] border border-foil/70 bg-[#FBF7EF] p-1.5 sm:p-2">
        <div className="paper lotus-pattern relative overflow-hidden rounded-[23px] border border-foil/35 px-4 py-10 sm:px-10 sm:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[#FBF7EF]/[0.82]" />
            <img
              src={weddingConfig.images.coverMandala}
              alt=""
              className="absolute left-1/2 top-0 w-[min(90%,46rem)] -translate-x-1/2 opacity-[0.16] mix-blend-multiply sm:w-[min(82%,52rem)]"
            />
            <img
              src={weddingConfig.images.floralCorner}
              alt=""
              className="absolute -left-8 top-0 w-32 opacity-25 mix-blend-multiply sm:w-44"
            />
            <img
              src={weddingConfig.images.floralCorner}
              alt=""
              className="absolute -bottom-5 -right-8 w-32 rotate-180 opacity-25 mix-blend-multiply sm:w-44"
            />
            <span className="absolute -right-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-foil/20" />
            <span className="absolute -right-8 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-foil/15" />
            <span className="absolute bottom-10 left-[18%] h-1.5 w-1.5 rounded-full bg-foil/30" />
          </div>
          <div className="relative">
            <SectionHeading id="schedule-title" title={t.schedule.title} />

            <ol className="relative mx-auto mt-9 max-w-2xl sm:mt-11">
              <span aria-hidden="true" className="absolute bottom-6 top-6 left-[6.75rem] w-px bg-foil/60 sm:left-[8.5rem]" />

              {wedding.schedule.map((item, i) =>
        <motion.li
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.25, delay: Math.min(i, 6) * 0.05, ease: EASE_OUT }}
          className="relative grid grid-cols-[5.75rem_2rem_1fr] items-center rounded-xl py-3 transition-colors sm:grid-cols-[7.5rem_2rem_1fr] sm:py-3.5">
          
            <time className="whitespace-nowrap text-right text-sm font-semibold text-gold-deep lining-nums sm:text-base">
              {formatTime(item.time, locale)}
            </time>
            <span className="z-10 flex justify-center" aria-hidden="true">
              {item.highlight ?
            <span className="grid h-9 w-9 place-items-center rounded-full bg-maroon text-champagne ring-4 ring-cream">
                  <LotusEmblem filled={false} className="h-4 w-6" />
                </span> :

            <span className="h-3 w-3 rotate-45 border border-gold bg-ivory" />
            }
            </span>
            <p
            className={`pl-3 ${
            item.highlight ? "font-serif text-xl font-semibold text-maroon sm:text-2xl" : "text-lg font-medium text-cocoa sm:text-xl"}`
            }>
            
              {item.title[locale]}
            </p>
          </motion.li>
        )}
            </ol>
          </div>
        </div>
      </div>
    </section>);

}
