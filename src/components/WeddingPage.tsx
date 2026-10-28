import React from "react";
import { motion } from "framer-motion";
import { EASE_OUT } from "../utils/motion";
import { HeroSection } from "./sections/HeroSection";
import { FamilySection } from "./sections/FamilySection";
import { WeddingCountdown } from "./sections/WeddingCountdown";
import { WeddingDetails } from "./sections/WeddingDetails";
import { ScheduleTimeline } from "./sections/ScheduleTimeline";
import { VenueSection } from "./sections/VenueSection";
import { PhotoGallery } from "./gallery/PhotoGallery";
import { RsvpSection } from "./sections/RsvpSection";
import { ClosingSection } from "./sections/ClosingSection";
import { Footer } from "./sections/Footer";

export function WeddingPage({ showConfigPlaceholders }: {showConfigPlaceholders: boolean;}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1, ease: EASE_OUT }}>
      <main>
        <HeroSection />
        <FamilySection />
        <WeddingCountdown />
        <WeddingDetails />
        <ScheduleTimeline />
        <VenueSection />
        <PhotoGallery />
        <RsvpSection showConfigPlaceholder={showConfigPlaceholders} />
        <ClosingSection />
      </main>
      <Footer />
    </motion.div>);

}