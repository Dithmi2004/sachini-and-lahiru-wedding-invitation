import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT } from "../../utils/motion";
import { LotusEmblem } from "../ornaments/LotusEmblem";

interface CountdownUnitProps {
  value: string;
  label: string;
}

/** One arch-shaped "temple window" tile with a gently rolling number. */
export function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full rounded-b-xl rounded-t-[999px] border border-foil/70 bg-white/80 p-1 shadow-[0_14px_30px_-18px_rgba(176,30,85,0.45)] sm:p-1.5">
        <div className="flex flex-col items-center rounded-b-lg rounded-t-[999px] border border-foil/40 px-1 pb-4 pt-5 sm:pb-6 sm:pt-8">
          <LotusEmblem className="h-4 w-6 text-foil sm:h-6 sm:w-9" />
          <div className="relative mt-1 h-[2.75rem] w-full overflow-hidden sm:mt-2 sm:h-[4.5rem] lg:h-[5.25rem]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={value}
                className="absolute inset-0 flex items-center justify-center font-serif text-[2.4rem] font-medium leading-none text-maroon lining-nums tabular-nums sm:text-6xl lg:text-7xl"
                initial={{ y: "-45%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "45%", opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}>
                
                {value}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <span className="caps mt-3 text-[11px] font-bold text-rosewood sm:text-sm">{label}</span>
    </div>);

}