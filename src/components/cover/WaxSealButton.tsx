import React from "react";
import { motion } from "framer-motion";
import { EASE_OUT } from "../../utils/motion";

interface WaxSealButtonProps {
  opening: boolean;
  onOpen: () => void;
  label: string;
  hint: string;
}

const SEAL_PATH = (() => {
  const n = 30;
  const points: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    const r = 38 + (i % 3 === 0 ? 1.6 : i % 2 ? -0.8 : 0.6);
    points.push(`${(40 + r * Math.cos(a)).toFixed(2)} ${(40 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${points.join(" L")}Z`;
})();

export function WaxSealButton({ opening, onOpen, label, hint }: WaxSealButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative">
        {!opening &&
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-rosewood/40"
          animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }} />

        }
        <motion.button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          disabled={opening}
          aria-label={label}
          whileTap={{ scale: 0.92 }}
          animate={opening ? { scale: 1.12, opacity: 0, rotate: -10 } : { scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.28, ease: EASE_OUT }}
          className="relative block h-[72px] w-[72px] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foil focus-visible:ring-offset-4 focus-visible:ring-offset-white">
          
          <svg viewBox="0 0 80 80" className="h-full w-full drop-shadow-[0_6px_10px_rgba(120,20,60,0.3)]">
            <path d={SEAL_PATH} fill="#B01E55" stroke="#B01E55" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="40" cy="40" r="30" fill="#9A1A4B" />
            <circle cx="40" cy="40" r="27" fill="none" stroke="#D9C08A" strokeOpacity="0.7" strokeWidth="1" />
            <circle cx="40" cy="40" r="24" fill="none" stroke="#D9C08A" strokeOpacity="0.35" strokeWidth="0.6" strokeDasharray="1.5 2" />
            <text
              x="40"
              y="47"
              textAnchor="middle"
              fontFamily="'Great Vibes', cursive"
              fontSize="22"
              fill="#E8D3A2">
              
              S&amp;L
            </text>
          </svg>
        </motion.button>
      </div>
      <span className="caps text-[11px] font-semibold text-rosewood">{hint}</span>
    </div>);

}