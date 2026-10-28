import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { GoldDivider } from "../ornaments/GoldDivider";
import { FamilyColumn } from "./FamilyColumn";

export function FamilySection() {
  const { t, locale } = useLanguage();
  const invitation = t.family.invitation({
    bride: wedding.bride.fullName[locale],
    groom: wedding.groom.fullName[locale],
    brideFather: wedding.brideParents.father[locale],
    brideMother: wedding.brideParents.mother[locale],
    groomFather: wedding.groomParents.father[locale],
    groomMother: wedding.groomParents.mother[locale]
  });
  return (
    <section
      id="invitation"
      aria-labelledby="family-title"
      className="relative overflow-hidden bg-[#FDF6F8] px-5 pb-24 pt-12 sm:px-8 lg:pb-28 lg:pt-16">
      
      <h2 id="family-title" className="sr-only">
        {t.family.title}
      </h2>

      {/* Invitation message panel */}
      <div className="relative mx-auto max-w-4xl pt-7">
        <span className="absolute left-1/2 top-0 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-foil/70 bg-white">
          <LotusEmblem className="h-7 w-10 text-foil" />
        </span>
        <div className="paper rounded-[28px] border border-foil/65 p-1.5">
          <div className="rounded-[22px] border border-foil/30 px-5 pb-8 pt-12 text-center sm:px-10 sm:pb-10 sm:pt-14">
            {invitation.opening && (
              <p className="italic-en mx-auto max-w-2xl text-base font-medium leading-relaxed text-cocoa sm:text-lg">
                {invitation.opening}
              </p>
            )}

            <div className="mt-5 grid grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-7">
              <div className="mx-auto max-w-sm px-2">
                <p className="font-serif text-base leading-relaxed text-cocoa sm:text-lg">{invitation.brideParents}</p>
                {invitation.brideLead && (
                  <p className="italic-en mt-2 text-sm leading-relaxed text-cocoa-soft sm:text-base">{invitation.brideLead}</p>
                )}
                <p className={`mt-2 text-maroon ${locale === "si" ? "font-serif text-[1.45rem] font-semibold leading-relaxed sm:text-[1.7rem]" : "font-serif text-3xl font-medium leading-tight sm:text-4xl"}`}>
                  {wedding.bride.fullName[locale]}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 text-foil md:flex-col md:gap-2" aria-label={invitation.connector}>
                <span aria-hidden="true" className="h-px w-10 bg-foil/50 md:h-8 md:w-px" />
                <span className="font-serif text-lg italic">{invitation.connector}</span>
                <span aria-hidden="true" className="h-px w-10 bg-foil/50 md:h-8 md:w-px" />
              </div>

              <div className="mx-auto max-w-sm px-2">
                <p className="font-serif text-base leading-relaxed text-cocoa sm:text-lg">{invitation.groomParents}</p>
                {invitation.groomLead && (
                  <p className="italic-en mt-2 text-sm leading-relaxed text-cocoa-soft sm:text-base">{invitation.groomLead}</p>
                )}
                <p className={`mt-2 text-maroon ${locale === "si" ? "font-serif text-[1.45rem] font-semibold leading-relaxed sm:text-[1.7rem]" : "font-serif text-3xl font-medium leading-tight sm:text-4xl"}`}>
                  {wedding.groom.fullName[locale]}{invitation.groomSuffix}
                </p>
              </div>
            </div>

            <GoldDivider className="mx-auto mt-5 max-w-xs" />
            <p className="family-invitation-message mx-auto mt-4 max-w-3xl text-base leading-relaxed text-cocoa sm:text-lg">
              {invitation.closing}
            </p>
          </div>
        </div>
      </div>

      {/* Families */}
      <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <FamilyColumn
          label={t.family.bridesFamily}
          name={wedding.bride.fullName[locale]}
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
          name={wedding.groom.fullName[locale]}
          relation={t.family.sonOf}
          parents={wedding.groomParents}
          locale={locale}
          side="right" />
        
      </div>
    </section>);

}
