import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { EASE_OUT } from "../../utils/motion";
import { InvitationCard } from "./InvitationCard";

interface InvitationCoverProps {
  onOpen: () => void;
}

export function InvitationCover({ onOpen }: InvitationCoverProps) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleOpen = () => {
    if (opening) return; // guard against repeated taps
    setOpening(true);
    timer.current = window.setTimeout(onOpen, reduce ? 0 : 320);
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={t.cover.dialogLabel}
      className="fixed inset-0 z-40 overflow-y-auto"
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.18, ease: EASE_OUT } }}>
      
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden bg-[#EEF3F5]">
        <img src={wedding.images.coverBackground} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#FDF3F6]/35" />
        {/* Lotus decoration around the card */}
        <img
          src={wedding.images.floralCorner}
          alt=""
          className="absolute left-0 top-0 w-40 mix-blend-multiply sm:w-64 lg:w-80" />
        
        <img
          src={wedding.images.floralCorner}
          alt=""
          className="absolute right-0 top-0 hidden w-64 -scale-x-100 mix-blend-multiply sm:block lg:w-80" />
        
        <img
          src={wedding.images.coverLotus}
          alt=""
          className="absolute bottom-0 left-1/2 w-[160%] max-w-none -translate-x-1/2 mix-blend-multiply sm:w-[110%] lg:w-full" />
        
      </div>

      <div className="relative flex min-h-full items-center justify-center px-4 pb-10 pt-20 sm:py-16">
        <motion.div
          className="flex w-full justify-center"
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 1.02, transition: { duration: 0.3, ease: EASE_OUT } }}
          transition={{ duration: 0.3, ease: EASE_OUT }}>
          
          <InvitationCard opening={opening} onOpen={handleOpen} />
        </motion.div>
      </div>
    </motion.div>);

}