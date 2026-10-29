import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatWeddingDate } from "../../utils/datetime";
import { WaxSealButton } from "./WaxSealButton";
import { FloralVineDivider } from "../ornaments/FloralVineDivider";

interface InvitationCardProps {
  opening: boolean;
  onOpen: () => void;
}

/** White-to-blush invitation card with a gold mandala crown and watercolor lotus border. */
export function InvitationCard({ opening, onOpen }: InvitationCardProps) {
  const { t, locale } = useLanguage();

  return (
    <article
      onClick={onOpen}
      className="relative w-full max-w-[420px] cursor-pointer overflow-hidden rounded-md shadow-[0_30px_60px_-20px_rgba(40,50,60,0.45)]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 48%, #F7D3DE 100%)" }}>
      
      {/* Gold mandala crown hanging from the top edge */}
      <div aria-hidden="true" className="overflow-hidden">
        <img
          src={wedding.images.coverMandala}
          alt=""
          className="pointer-events-none block max-w-none mix-blend-multiply"
          style={{ width: "112%", marginLeft: "-6%", marginTop: "-10.5%", marginBottom: "-10%" }} />
        
      </div>

      <div className="relative px-7 pt-4 text-center sm:px-9">
        <p className="caps text-[10px] font-semibold leading-relaxed text-rosewood/80">{t.cover.blessing}</p>


        <FloralVineDivider className="mx-auto mt-3 h-7 w-full max-w-[340px]" />

        <p className={`mt-2 text-foil ${locale === "si" ? "font-serif text-[1.55rem] font-semibold leading-relaxed sm:text-[1.75rem]" : "font-script text-[clamp(2.1rem,9.5vw,2.75rem)] leading-tight"}`}>
          {wedding.bride.fullName[locale]}
        </p>

        <p className="my-1 text-lg text-rosewood" aria-hidden="true">
          {t.cover.and}
        </p>

        <p className={`mt-2 text-foil ${locale === "si" ? "font-serif text-[1.55rem] font-semibold leading-relaxed sm:text-[1.75rem]" : "font-script text-[clamp(2.1rem,9.5vw,2.75rem)] leading-tight"}`}>
          {wedding.groom.fullName[locale]}
        </p>

        <p className="mt-4 text-[19px] font-semibold text-rosewood">{formatWeddingDate(locale)}</p>

        <div className="mx-auto mt-3 flex h-[170px] w-full items-center justify-center">
          <img
            src={wedding.images.coverCouple}
            alt={t.cover.coupleImageAlt}
            className="block h-full max-w-full object-contain drop-shadow-[0_5px_3px_rgba(60,30,20,0.18)]"
          />
        </div>

        <div className="mt-5">
          <WaxSealButton opening={opening} onOpen={onOpen} label={t.cover.openLabel} hint={t.cover.tapToOpen} />
        </div>
      </div>

      {/* Watercolor lotus border */}
      <img
        src={wedding.images.coverLotus}
        alt=""
        aria-hidden="true"
        className="pointer-events-none relative -mt-2 block w-full mix-blend-multiply" />
      
    </article>);

}
