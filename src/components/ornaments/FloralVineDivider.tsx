import React from "react";

/** A quiet gold vine with blush buds for invitation copy dividers. */
export function FloralVineDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 36"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <g stroke="#B08D3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
        <path d="M10 19C42 19 51 11 77 11c24 0 35 8 57 8 12 0 18-3 26-8 8 5 14 8 26 8 22 0 33-8 57-8 26 0 35 8 67 8" />
        <path d="M42 18c5-8 12-10 20-10-2 8-8 12-17 12M75 12c3 8 9 11 17 12 0-8-5-13-14-14M107 16c-2-7 1-12 7-16 4 7 3 13-4 18M137 18c-4-7-3-12 2-18 6 6 7 12 1 19" />
        <path d="M278 18c-5-8-12-10-20-10 2 8 8 12 17 12M245 12c-3 8-9 11-17 12 0-8 5-13 14-14M213 16c2-7-1-12-7-16-4 7-3 13 4 18M183 18c4-7 3-12-2-18-6 6-7 12-1 19" />
        <path d="M160 28c-7-6-8-13 0-22 8 9 7 16 0 22Zm-1-1c-9 1-14-3-16-11 9 0 14 3 16 11Zm2 0c9 1 14-3 16-11-9 0-14 3-16 11ZM147 29h26" />
        <path d="M10 19h5m290 0h5" />
      </g>
      <g fill="#E7B7BE" stroke="#B08D3E" strokeWidth=".7">
        <circle cx="30" cy="18" r="2.4" />
        <circle cx="290" cy="18" r="2.4" />
        <circle cx="115" cy="8" r="2" />
        <circle cx="205" cy="8" r="2" />
      </g>
      <circle cx="160" cy="20" r="1.7" fill="#D9C08A" />
    </svg>
  );
}
