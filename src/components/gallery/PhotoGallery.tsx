import React, { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { wedding } from "../../data/wedding";
import { SectionHeading } from "../ui/SectionHeading";
import { GalleryLightbox } from "./GalleryLightbox";
import { GalleryPlaceholder } from "./GalleryPlaceholder";
import { LotusEmblem } from "../ornaments/LotusEmblem";
import { EASE_OUT } from "../../utils/motion";

export function PhotoGallery() {
  const { t, locale } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const photos = wedding.gallery;
  const [active, setActive] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const lastIndex = useRef(0);

  const navigate = useCallback((i: number) => {
    lastIndex.current = i;
    setActive(i);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    window.requestAnimationFrame(() => triggers.current[lastIndex.current]?.focus());
  }, []);

  if (photos.length === 0) return null;

  return (
    <section aria-labelledby="gallery-title" className="relative isolate overflow-hidden bg-[#FDF6EC] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img src={wedding.images.floralCorner} alt="" className="absolute -left-16 top-8 w-44 opacity-25 mix-blend-multiply sm:w-60" />
        <img src={wedding.images.floralCorner} alt="" className="absolute -bottom-8 -right-16 w-44 rotate-180 opacity-25 mix-blend-multiply sm:w-60" />
        <motion.div
          className="absolute left-[5%] top-[42%] text-lotus/50 sm:left-[9%]"
          animate={prefersReducedMotion ? undefined : { scale: [0.9, 1.06, 0.9], opacity: [0.22, 0.5, 0.22], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
          <LotusEmblem className="h-20 w-28" />
        </motion.div>
        <motion.div
          className="absolute right-[5%] top-[28%] text-foil/45 sm:right-[10%]"
          animate={prefersReducedMotion ? undefined : { scale: [0.92, 1.08, 0.92], opacity: [0.18, 0.42, 0.18], rotate: [0, -3, 0] }}
          transition={{ duration: 8, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}>
          <LotusEmblem className="h-24 w-32" />
        </motion.div>
      </div>
      <div className="relative">
      <SectionHeading id="gallery-title" title={t.gallery.title} intro={t.gallery.intro} />

      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {photos.map((photo, i) =>
        <motion.li
          key={photo.id}
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.07, ease: EASE_OUT }}
          className="aspect-[4/3] min-w-0">
            <motion.button
            ref={(el) => {
              triggers.current[i] = el;
            }}
            type="button"
            onClick={() => navigate(i)}
            whileHover={{ y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            aria-label={`${t.gallery.openPhoto(i + 1)}: ${photo.alt[locale]}`}
            className="group relative block h-full w-full overflow-hidden rounded-2xl border border-gold/40 bg-ivory shadow-[0_8px_24px_rgba(78,20,32,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory">
            
              <span className="block h-full w-full transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] group-active:scale-[0.99]">
                {photo.src ?
              <img src={photo.src} alt="" className="h-full w-full object-cover" loading="lazy" /> :

              <GalleryPlaceholder photo={photo} className="rounded-2xl" />
              }
              </span>
            </motion.button>
        </motion.li>
        )}
      </ul>

      <GalleryLightbox photos={photos} index={active} onClose={close} onNavigate={navigate} />
      </div>
    </section>);

}
