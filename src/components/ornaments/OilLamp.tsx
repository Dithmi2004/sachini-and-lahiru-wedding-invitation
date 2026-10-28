import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

/** Traditional Sri Lankan brass oil lamp (pahana) with a gently flickering flame. */
export function OilLamp({ className }: {className?: string;}) {
  return (
    <svg viewBox="0 0 40 96" className={twMerge("h-24 w-10", className)} fill="none" aria-hidden="true">
      <motion.path
        d="M20 3 C24 10 25 15 20 20 C15 15 16 10 20 3Z"
        fill="#E9A93B"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
        animate={{ scaleY: [1, 1.1, 0.95, 1], scaleX: [1, 0.94, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
      
      <path d="M20 10 C22 13 22 16 20 18 C18 16 18 13 20 10Z" fill="#FBF6EC" opacity="0.85" />
      <path d="M6 22 H34 C32 29 27 32 20 32 C13 32 8 29 6 22Z" fill="#B08D3E" />
      <path d="M6 22 H34" stroke="#D9C08A" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="18" y="32" width="4" height="44" fill="#B08D3E" />
      <ellipse cx="20" cy="42" rx="6" ry="2.6" fill="#D9C08A" />
      <ellipse cx="20" cy="56" rx="7" ry="3" fill="#B08D3E" />
      <ellipse cx="20" cy="68" rx="5" ry="2.2" fill="#D9C08A" />
      <path d="M8 90 C10 82 15 77 20 76 C25 77 30 82 32 90Z" fill="#B08D3E" />
      <rect x="5" y="89" width="30" height="4" rx="2" fill="#8A6A26" />
    </svg>);

}