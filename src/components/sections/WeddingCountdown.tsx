import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { useCountdown } from "../../hooks/useCountdown";
import { WEDDING_END_MS, WEDDING_START_MS, formatTime, formatWeddingDate } from "../../utils/datetime";
import { GoldDivider } from "../ornaments/GoldDivider";
import { OilLamp } from "../ornaments/OilLamp";
import { CountdownUnit } from "./CountdownUnit";

const pad = (n: number) => String(n).padStart(2, "0");

export function WeddingCountdown() {
  const { t, locale } = useLanguage();
  const state = useCountdown(WEDDING_START_MS, WEDDING_END_MS);

  const values =
  state.status === "upcoming" ?
  [state.days, state.hours, state.minutes, state.seconds].map(pad) :
  ["--", "--", "--", "--"];
  const labels = [t.countdown.days, t.countdown.hours, t.countdown.minutes, t.countdown.seconds];
  const showTimer = state.status === "upcoming" || state.status === "pending";

  return (
    <section aria-labelledby="countdown-title" className="relative overflow-hidden bg-[#FBE7ED]">
      <div className="kandyan-band h-4" aria-hidden="true" />

      {/* Mandala crown and base */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-4 flex justify-center overflow-hidden">
        <img
          src={wedding.images.coverMandala}
          alt=""
          className="block w-[150%] max-w-[640px] shrink-0 opacity-60 mix-blend-multiply sm:w-[70%]"
          style={{ marginTop: "-7%" }} />
        
      </div>
      <img
        src={wedding.images.floralCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-0 w-28 -scale-y-100 mix-blend-multiply sm:w-48 lg:w-60" />
      
      <img
        src={wedding.images.floralCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-0 w-28 rotate-180 mix-blend-multiply sm:w-48 lg:w-60" />
      

      <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-[clamp(9rem,20vw,12rem)] text-center sm:px-8 sm:pb-28">
        <h2 id="countdown-title" className="font-serif text-[2rem] font-medium leading-tight text-maroon sm:text-5xl">
          {t.countdown.title}
        </h2>
        <GoldDivider className="mt-5 text-foil" />
        <p className="mt-4 text-lg font-semibold text-rosewood lining-nums sm:text-xl">
          {formatWeddingDate(locale)} · {formatTime(wedding.startTime, locale)}
        </p>
        <p className="mt-1 text-base text-cocoa-soft">({t.countdown.sriLankaTime})</p>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <OilLamp className="absolute -left-20 bottom-8 hidden h-40 w-14 lg:block" />
          <OilLamp className="absolute -right-20 bottom-8 hidden h-40 w-14 lg:block" />

          {showTimer ?
          <div role="timer" aria-live="off" className="grid grid-cols-4 gap-2.5 sm:gap-6">
              {values.map((value, i) =>
            <CountdownUnit key={labels[i]} value={value} label={labels[i]} />
            )}
            </div> :

          <div className="mx-auto max-w-xl rounded-b-2xl rounded-t-[999px] border border-foil/70 bg-white/80 p-1.5">
              <p className="italic-en rounded-b-xl rounded-t-[999px] border border-foil/40 px-8 pb-10 pt-16 text-2xl leading-relaxed text-maroon">
                {state.status === "inProgress" ? t.countdown.inProgress : t.countdown.passed}
              </p>
            </div>
          }
        </div>
      </div>

      <div className="kandyan-band h-4" aria-hidden="true" />
    </section>);

}