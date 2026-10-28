import React from "react";
import { BoxIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
interface ActionLinkProps {
  href: string;
  icon: BoxIcon;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  newTabLabel: string;
  className?: string;
}
const base = "inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 text-[1.08rem] font-semibold transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";
const variants = {
  primary: "bg-maroon text-ivory ring-1 ring-inset ring-champagne/50 hover:bg-maroon-deep",
  secondary: "border border-gold text-maroon hover:bg-cream"
};

/** External action that opens safely in a new tab. */
export function ActionLink({
  href,
  icon: Icon,
  children,
  variant = "primary",
  newTabLabel,
  className
}: ActionLinkProps) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={twMerge(base, variants[variant], className)}>
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.6} aria-hidden="true" />
      <span>{children}</span>
      <span className="sr-only"> ({newTabLabel})</span>
    </a>;
}
