import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { formatWeddingDate } from "../../utils/datetime";
import { WaxSealButton } from "./WaxSealButton";

interface InvitationCardProps {
  opening: boolean;
  onOpen: () => void;
}

/** White-to-blush invitation card with a gold mandala crown and watercolor lotus border. */
export function InvitationCard({ opening, onOpen }: InvitationCardProps) {
  const { t, locale } = useLanguage();
  const joiner = locale === "en" ? " & " : " සහ ";
  const brideParents = `${wedding.brideParents.father[locale]}${joiner}${wedding.brideParents.mother[locale]}`;
  const groomParents = `${wedding.groomParents.father[locale]}${joiner}${wedding.groomParents.mother[locale]}`;

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

        <p className="mt-3 text-[17px] font-medium leading-snug text-rosewood">{brideParents}</p>

        <div aria-hidden="true" className="mx-auto mt-4 border-t-2 border-dotted border-rosewood/70" />

        <p className="mt-2 text-[15px] leading-snug text-rosewood">{t.cover.requestDaughter}</p>
        <p className="mt-2 font-script text-[clamp(2.1rem,9.5vw,2.75rem)] leading-tight text-foil">
          {wedding.bride.name}
        </p>

        <p className="my-1 text-lg text-rosewood" aria-hidden="true">
          {t.cover.and}
        </p>

        <p className="text-[15px] font-medium leading-snug text-rosewood">{groomParents}</p>
        <p className="italic-en mt-1 text-[14px] leading-snug text-rosewood/90">{t.cover.requestSon}</p>
        <p className="mt-2 font-script text-[clamp(2.1rem,9.5vw,2.75rem)] leading-tight text-foil">
          {wedding.groom.name}
        </p>

        <p className="mt-4 text-[19px] font-semibold text-rosewood">{formatWeddingDate(locale)}</p>

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