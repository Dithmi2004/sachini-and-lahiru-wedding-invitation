import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { EASE_OUT } from "../../utils/motion";
import { OilLamp } from "../ornaments/OilLamp";

/**
 * Kandyan bride & groom at the Poruwa, framed in a gold double arch with a
 * mandala halo, brass lamps and a lotus bed at its foot.
 * To replace, update `images.couple` in data/wedding.ts.
 */
export function CoupleIllustration() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.35, ease: EASE_OUT }}
      className="relative mx-auto w-full max-w-[380px] pb-14 lg:max-w-[440px]">
      
      {/* Faint mandala halo behind the arch */}
      <motion.img
        src={wedding.images.coverMandala}
        alt=""
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: 174, x: "-50%" }}
        animate={{ opacity: 0.4, scale: 1, rotate: 180, x: "-50%" }}
        transition={{ duration: 1.2, delay: reduceMotion ? 0 : 0.25, ease: EASE_OUT }}
        className="pointer-events-none absolute left-1/2 top-[-6%] w-[150%] max-w-none opacity-40 mix-blend-multiply" />
      

      <motion.div
        className="relative rounded-b-[18px] rounded-t-[999px] border border-foil/70 bg-white/60 p-2 sm:p-2.5"
        animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 5.5, delay: 1.1, repeat: Infinity, ease: "easeInOut" }}>
        <div className="rounded-b-[14px] rounded-t-[999px] border border-foil/40 p-1.5">
          <div className="overflow-hidden rounded-b-[10px] rounded-t-[999px]">
            <motion.img
              src={wedding.images.couple}
              alt={t.hero.illustrationAlt}
              initial={reduceMotion ? false : { opacity: 0.5, scale: 1.06, clipPath: "inset(18% 0 0 0)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, delay: reduceMotion ? 0 : 0.55, ease: EASE_OUT }}
              className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-6 bottom-12 hidden sm:block lg:-left-12"
        animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
        <OilLamp className="h-32 w-12 lg:h-36" />
      </motion.div>
      <motion.div
        className="absolute -right-6 bottom-12 hidden sm:block lg:-right-12"
        animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
        transition={{ duration: 3.8, delay: 0.45, repeat: Infinity, ease: "easeInOut" }}>
        <OilLamp className="h-32 w-12 lg:h-36" />
      </motion.div>

      {/* Lotus bed at the foot of the arch */}
      <motion.img
        src={wedding.images.coverLotus}
        alt=""
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96, x: "-50%" }}
        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
        transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.8, ease: EASE_OUT }}
        className="pointer-events-none absolute -bottom-2 left-1/2 w-[125%] max-w-none mix-blend-multiply" />
      
    </motion.figure>);

}
