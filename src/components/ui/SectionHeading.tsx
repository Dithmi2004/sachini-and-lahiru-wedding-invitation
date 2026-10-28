import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { GoldDivider } from "../ornaments/GoldDivider";

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ id, title, intro }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}>
      <motion.div
        className="mx-auto w-fit"
        animate={reduceMotion ? undefined : { y: [0, -3, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
        <LotusEmblem className="mx-auto h-7 w-11 text-gold" />
      </motion.div>
      <h2 id={id} className="mt-3 font-serif text-4xl font-medium text-maroon sm:text-5xl">
        {title}
      </h2>
      <GoldDivider className="mt-4" />
      {intro && <p className="mx-auto mt-4 max-w-xl text-lg text-cocoa-soft">{intro}</p>}
    </motion.div>);

}
