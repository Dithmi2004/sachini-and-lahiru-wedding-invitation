import React, { useEffect } from "react";
import { motion } from "framer-motion";

const FLOWERS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: (i * 47 + 9) % 100,
  delay: (i % 6) * 0.07,
  duration: 2.05 + (i % 5) * 0.16,
  drift: ((i * 19) % 110) - 55,
  rotation: (i % 2 ? 1 : -1) * (220 + (i % 4) * 95),
  size: i % 5 === 0 ? 34 : 20 + (i % 3) * 5,
  gold: i % 4 === 0,
}));

function LotusFlower({ gold }: { gold: boolean }) {
  const fill = gold ? "#D9B45A" : "#E7A6B9";
  const stroke = gold ? "#A47B32" : "#BD657F";

  return (
    <svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" aria-hidden="true">
      <path d="M20 31C13 25 14 16 20 8C26 16 27 25 20 31Z" fill={fill} stroke={stroke} strokeWidth="1" />
      <path d="M18 30C9 27 6 20 8 13C16 16 20 22 20 30Z" fill={fill} fillOpacity=".86" stroke={stroke} strokeWidth="1" />
      <path d="M22 30C31 27 34 20 32 13C24 16 20 22 20 30Z" fill={fill} fillOpacity=".86" stroke={stroke} strokeWidth="1" />
      <path d="M13 31C8 30 5 27 4 23C10 23 15 26 18 31Z" fill={fill} fillOpacity=".7" stroke={stroke} strokeWidth=".8" />
      <path d="M27 31C32 30 35 27 36 23C30 23 25 26 22 31Z" fill={fill} fillOpacity=".7" stroke={stroke} strokeWidth=".8" />
      <path d="M10 33H30" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="20" cy="28" r="1.6" fill="#F4D892" />
    </svg>
  );
}

/** A short floral shower layered over the existing lotus opening transition. */
export function FlowerShower({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 3000);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[55] overflow-hidden">
      {FLOWERS.map((flower) => (
        <motion.span
          key={flower.id}
          className="absolute -top-12 block drop-shadow-[0_2px_3px_rgba(100,35,55,0.18)]"
          style={{ left: `${flower.left}%`, width: flower.size, height: flower.size }}
          initial={{ y: -48, x: 0, rotate: 0, scale: 0.6, opacity: 0 }}
          animate={{
            y: "110vh",
            x: flower.drift,
            rotate: flower.rotation,
            scale: [0.6, 1, 0.85],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: flower.duration, delay: flower.delay, ease: "easeIn" }}
        >
          <LotusFlower gold={flower.gold} />
        </motion.span>
      ))}
    </div>
  );
}
