import React from "react";
import { twMerge } from "tailwind-merge";

interface LotusEmblemProps {
  className?: string;
  filled?: boolean;
}

export function LotusEmblem({ className, filled = true }: LotusEmblemProps) {
  const fill = filled ? "#E7B7BE" : "none";
  return (
    <svg viewBox="0 0 64 40" className={twMerge("h-8 w-12", className)} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
        <path d="M32 33 C22 33 10 30 4 21 C14 21 24 25 32 33Z" fill={fill} fillOpacity={0.3} />
        <path d="M32 33 C42 33 54 30 60 21 C50 21 40 25 32 33Z" fill={fill} fillOpacity={0.3} />
        <path d="M32 32 C24 28 16 19 15 9 C23 12 30 20 32 32Z" fill={fill} fillOpacity={0.5} />
        <path d="M32 32 C40 28 48 19 49 9 C41 12 34 20 32 32Z" fill={fill} fillOpacity={0.5} />
        <path d="M32 3 C26 11 26 23 32 32 C38 23 38 11 32 3Z" fill={fill} fillOpacity={0.75} />
      </g>
      <path d="M12 37 H52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="8" cy="37" r="1.3" fill="currentColor" />
      <circle cx="56" cy="37" r="1.3" fill="currentColor" />
    </svg>);

}