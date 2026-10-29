import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { LanguageProvider } from "./contexts/LanguageContext";
import { InvitationCover } from "./components/cover/InvitationCover";
import { WeddingPage } from "./components/WeddingPage";
import { LanguageSwitch } from "./components/ui/LanguageSwitch";
import { FloatingPetals } from "./components/ui/FloatingPetals";
import { LotusBloom } from "./components/ui/LotusBloom";
import { FlowerShower } from "./components/ui/FlowerShower";

interface AppProps {
  /** Skip the tap-to-open cover and land directly on the wedding page. */
  startOpened?: boolean;
  /** Show labelled developer placeholders (e.g. missing WhatsApp number). */
  showConfigPlaceholders?: boolean;
}

export function App({ startOpened = false, showConfigPlaceholders = true }: AppProps) {
  const reduce = useReducedMotion();
  const [opened, setOpened] = useState(startOpened);
  const [blooming, setBlooming] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [flowerShower, setFlowerShower] = useState(false);

  useEffect(() => {
    setOpened(startOpened);
  }, [startOpened]);

  useEffect(() => {
    if (opened && !blooming) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [opened, blooming]);

  const reveal = useCallback(() => {
    window.scrollTo({ top: 0 });
    setOpened(true);
  }, []);

  const finishBloom = useCallback(() => {
    setBlooming(false);
    setCelebrate(true);
  }, []);

  const handleOpen = () => {
    // Mount the invitation immediately so the body is available as soon as
    // the user opens the cover. The bloom remains a short visual transition.
    reveal();
    if (!reduce) {
      setBlooming(true);
      setFlowerShower(true);
    }
  };

  const finishFlowerShower = useCallback(() => setFlowerShower(false), []);

  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <div className="paper lotus-pattern min-h-screen w-full font-serif text-cocoa">
          <LanguageSwitch />
          {opened && <WeddingPage showConfigPlaceholders={showConfigPlaceholders} />}
          {celebrate && <FloatingPetals />}
          {flowerShower && <FlowerShower onComplete={finishFlowerShower} />}
          <AnimatePresence>{!opened && <InvitationCover key="cover" onOpen={handleOpen} />}</AnimatePresence>
          <AnimatePresence>
            {blooming && <LotusBloom key="bloom" onRevealed={reveal} onDone={finishBloom} />}
          </AnimatePresence>
        </div>
      </LanguageProvider>
    </MotionConfig>);

}
