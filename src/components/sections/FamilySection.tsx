import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { FamilyColumn } from "./FamilyColumn";

export function FamilySection() {
  const { t, locale } = useLanguage();
  return (
    <section
      id="invitation"
      aria-labelledby="family-title"
      className="relative overflow-hidden bg-[#FDF6F8] px-5 pb-24 pt-12 sm:px-8 lg:pb-28 lg:pt-16">
      
      <h2 id="family-title" className="sr-only">
        {t.family.title}
      </h2>

      {/* Invitation message panel */}
      <div className="relative mx-auto max-w-3xl pt-7">
        <span className="absolute left-1/2 top-0 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-foil/70 bg-white">
          <LotusEmblem className="h-7 w-10 text-foil" />
        </span>
        <div className="rounded-3xl border border-foil/70 bg-white p-1.5">
          <div className="rounded-[20px] border border-foil/40 px-6 pb-10 pt-12 text-center sm:px-14">
            <p className="italic-en text-[1.4rem] leading-relaxed text-cocoa sm:text-[1.75rem]">
              {t.family.message(wedding.bride.fullName[locale], wedding.groom.fullName[locale])}
            </p>
          </div>
        </div>
      </div>

      {/* Families */}
      <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <FamilyColumn
          label={t.family.bridesFamily}
          name={wedding.bride.name}
          relation={t.family.daughterOf}
          parents={wedding.brideParents}
          locale={locale}
          side="left" />
        

        <div aria-hidden="true" className="flex items-center justify-center gap-4 md:flex-col">
          <span className="h-px w-14 bg-foil/50 md:h-24 md:w-px" />
          <span className="grid h-20 w-20 place-items-center rounded-full border border-foil/70 bg-white p-1">
            <span className="grid h-full w-full place-items-center rounded-full border border-foil/40 font-script text-4xl leading-none text-foil">
              &amp;
            </span>
          </span>
          <span className="h-px w-14 bg-foil/50 md:h-24 md:w-px" />
        </div>

        <FamilyColumn
          label={t.family.groomsFamily}
          name={wedding.groom.name}
          relation={t.family.sonOf}
          parents={wedding.groomParents}
          locale={locale}
          side="right" />
        
      </div>
    </section>);

}