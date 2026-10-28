import React from "react";
import { twMerge } from "tailwind-merge";

/** Gold filigree corner, drawn for the top-left corner. Rotate via className for other corners. */
export function CornerOrnament({ className }: {className?: string;}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={twMerge("h-12 w-12", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true">
      
      <path d="M2 62 V18 C2 9 9 2 18 2 H62" />
      <path d="M8 62 V22 C8 14 14 8 22 8 H62" opacity="0.5" />
      <path d="M8 40 C18 40 22 34 22 28 C22 24 26 24 26 28 C26 31 29 32 31 30" />
      <path d="M40 8 C40 18 34 22 28 22 C24 22 24 26 28 26" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
      <path d="M2 50 C6 50 8 48 8 46" opacity="0.7" />
      <path d="M50 2 C50 6 48 8 46 8" opacity="0.7" />
    </svg>);

}