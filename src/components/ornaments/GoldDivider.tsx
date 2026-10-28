import React from "react";
import { twMerge } from "tailwind-merge";

export function GoldDivider({ className }: {className?: string;}) {
  return (
    <div className={twMerge("flex items-center justify-center gap-3 text-gold", className)} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-60 sm:w-20" />
      <svg viewBox="0 0 60 16" className="h-4 w-14 shrink-0">
        <path d="M4 8 L8 5 L12 8 L8 11Z" fill="currentColor" opacity="0.7" />
        <path d="M48 8 L52 5 L56 8 L52 11Z" fill="currentColor" opacity="0.7" />
        <line x1="14" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="1" />
        <line x1="41" y1="8" x2="46" y2="8" stroke="currentColor" strokeWidth="1" />
        <path d="M30 1 C27 5 27 10 30 14 C33 10 33 5 30 1Z" fill="currentColor" />
        <path d="M30 14 C25 13 21 10 20 6 C24 7 28 10 30 14Z" fill="currentColor" opacity="0.6" />
        <path d="M30 14 C35 13 39 10 40 6 C36 7 32 10 30 14Z" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="h-px w-12 bg-current opacity-60 sm:w-20" />
    </div>);

}