import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { EASE_OUT } from "../../utils/motion";

interface LotusBloomProps {
  /** Called once the lotus is fully open — the page is mounted behind the overlay. */
  onRevealed: () => void;
  /** Called when the overlay should leave. */
  onDone: () => void;
}

const PETAL = "M100 140 C78 110 80 62 100 28 C120 62 122 110 100 140Z";
const PETAL_WIDE = "M100 140 C70 112 72 66 100 40 C128 66 130 112 100 140Z";

const PETALS = [
{ angle: -72, d: PETAL_WIDE, fill: "#F2AFC3", delay: 0.42 },
{ angle: 72, d: PETAL_WIDE, fill: "#F2AFC3", delay: 0.42 },
{ angle: -48, d: PETAL_WIDE, fill: "#F5BCCD", delay: 0.34 },
{ angle: 48, d: PETAL_WIDE, fill: "#F5BCCD", delay: 0.34 },
{ angle: -24, d: PETAL, fill: "#F8CAD7", delay: 0.26 },
{ angle: 24, d: PETAL, fill: "#F8CAD7", delay: 0.26 },
{ angle: 0, d: PETAL, fill: "#FBD9E2", delay: 0.18 }];


/** Full-screen "awakening lotus" transition between the cover and the wedding page. */
export function LotusBloom({ onRevealed, onDone }: LotusBloomProps) {
  const { locale } = useLanguage();
  const signature = locale === "si"
    ? `${wedding.bride.firstName.si} සහ ${wedding.groom.firstName.si}`
    : `${wedding.bride.firstName.en} & ${wedding.groom.firstName.en}`;
  useEffect(() => {
    const reveal = window.setTimeout(onRevealed, 1050);
    const done = window.setTimeout(onDone, 1250);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(done);
    };
  }, [onRevealed, onDone]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[45] flex flex-col items-center justify-center bg-[#FDF3F6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1, ease: EASE_OUT } }}
      transition={{ duration: 0.22, ease: EASE_OUT }}>
      
      <motion.div
        className="flex flex-col items-center"
        exit={{ scale: 1.15, opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}>
        
        <svg viewBox="0 0 200 170" className="h-auto w-56 sm:w-72" fill="none">
          {/* Gold halo drawing itself */}
          <motion.circle
            cx="100"
            cy="92"
            r="78"
            stroke="#B08D3E"
            strokeWidth="0.8"
            strokeOpacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT }} />
          

          {/* Petals unfolding from the base */}
          {PETALS.map((p, i) =>
          <motion.path
            key={i}
            d={p.d}
            fill={p.fill}
            stroke="#D46F91"
            strokeWidth="0.8"
            style={{ originX: 0.5, originY: 1 }}
            initial={{ rotate: 0, scaleY: 0.55, opacity: 0 }}
            animate={{ rotate: p.angle, scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: p.delay, ease: EASE_OUT }} />

          )}

          {/* Gold seed pod and water line */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.6, ease: EASE_OUT }}>
            
            <ellipse cx="100" cy="128" rx="9" ry="5" fill="#D9B45A" />
            <path d="M52 148 C70 142 130 142 148 148" stroke="#B08D3E" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M68 156 C84 152 116 152 132 156" stroke="#B08D3E" strokeWidth="0.9" strokeOpacity="0.6" strokeLinecap="round" />
          </motion.g>
        </svg>

        <motion.p
          className={`mt-4 text-foil ${locale === "si" ? "font-serif text-2xl sm:text-3xl" : "font-script text-4xl sm:text-5xl"}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6, ease: EASE_OUT }}>
          
          {signature}
        </motion.p>
      </motion.div>
    </motion.div>);

}
