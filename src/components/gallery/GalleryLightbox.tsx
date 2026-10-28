import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { GalleryPhoto } from "../../types/wedding";
import { EASE_OUT } from "../../utils/motion";
import { GalleryPlaceholder } from "./GalleryPlaceholder";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const placeholderAspect = { portrait: "aspect-[3/4] max-w-md", landscape: "aspect-[4/3]", square: "aspect-square max-w-xl" };

const navButton =
"absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-champagne/50 bg-maroon-deep/70 text-ivory transition-colors duration-150 ease-out hover:bg-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne";

export function GalleryLightbox({ photos, index, onClose, onNavigate }: GalleryLightboxProps) {
  const { t, locale } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const total = photos.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onNavigate((index + dir + total) % total);
    },
    [index, total, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        go(1);
      } else if (e.key === "ArrowLeft") {
        go(-1);
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])");
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, go, onClose]);

  const photo = index !== null ? photos[index] : null;

  return (
    <AnimatePresence>
      {photo && index !== null &&
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.gallery.dialogLabel}
        className="fixed inset-0 z-[60] flex flex-col bg-maroon-deep/95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
        onClick={onClose}>
        
          <div className="flex items-center justify-between px-4 py-3 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg text-champagne lining-nums" aria-live="polite">
              {t.gallery.position(index + 1, total)}
            </p>
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.gallery.close}
            className="grid h-12 w-12 place-items-center rounded-full border border-champagne/50 text-ivory transition-colors duration-150 ease-out hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne">
            
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-8 sm:px-24">
            <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            drag={total > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);else
              if (info.offset.x > 60) go(-1);
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-3xl justify-center">
            
              {photo.src ?
            <img
              src={photo.src}
              alt={photo.alt[locale]}
              className="max-h-[78vh] w-auto rounded-xl object-contain"
              draggable={false} /> :


            <GalleryPlaceholder
              photo={photo}
              large
              className={`max-h-[75vh] w-full rounded-2xl ${placeholderAspect[photo.orientation]}`} />

            }
            </motion.div>

            {total > 1 &&
          <>
                <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label={t.gallery.previous}
              className={`${navButton} left-2 sm:left-6`}>
              
                  <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label={t.gallery.next}
              className={`${navButton} right-2 sm:right-6`}>
              
                  <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
          }
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}