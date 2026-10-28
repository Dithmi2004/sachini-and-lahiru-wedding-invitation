import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const PETALS = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: (i * 61 + 7) % 100,
  delay: i % 8 * 0.35,
  duration: 6.5 + i % 5 * 0.8,
  drift: (i % 4 - 1.5) * 40,
  rotate: 160 + i % 3 * 110,
  size: 10 + i % 4 * 3,
  gold: i % 3 === 0
}));

/** A single, restrained shower of lotus petals and gold flecks after the invitation opens. */
export function FloatingPetals() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {PETALS.map((p) =>
      <motion.span
        key={p.id}
        className="absolute -top-8"
        style={{ left: `${p.left}%` }}
        initial={{ y: "-5vh", x: 0, rotate: 0, opacity: 0 }}
        animate={{ y: "110vh", x: p.drift, rotate: p.rotate, opacity: [0, 1, 1, 0] }}
        transition={{ duration: p.duration, delay: 0.4 + p.delay, ease: "linear" }}>
        
          {p.gold ?
        <svg width={p.size / 2} height={p.size / 2} viewBox="0 0 4 4">
              <circle cx="2" cy="2" r="2" fill="#D9C08A" />
            </svg> :

        <svg width={p.size} height={p.size * 1.4} viewBox="0 0 10 14">
              <path d="M5 0 C9 4 9 10 5 14 C1 10 1 4 5 0Z" fill="#E7B7BE" opacity="0.85" />
            </svg>
        }
        </motion.span>
      )}
    </div>);

}