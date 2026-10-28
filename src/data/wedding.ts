import type { WeddingConfig } from "../types/wedding";

/**
 * CENTRAL WEDDING CONFIGURATION
 * ------------------------------------------------------------------
 * Edit names, family details, times, venue, schedule, gallery and
 * contact information here. Every section of the site reads from this.
 *
 * Replacing assets
 * - Couple illustration: put your file in public/images/ (e.g.
 *   public/images/couple-illustration.png, transparent PNG preferred)
 *   and set images.couple to "/images/couple-illustration.png".
 * - Gallery: add photos to public/images/gallery/ and set each item's
 *   `src` to its path (e.g. "/images/gallery/engagement-01.jpg").
 *   Items with `src: null` render as clearly labelled sample placeholders.
 *   Remove every item to hide the gallery section entirely.
 * - RSVP: set contact.whatsappNumber to the couple's WhatsApp number in
 *   international format, digits only (Sri Lanka: 94 + number without
 *   the leading 0). Leave it empty to hide the RSVP button.
 */
export const wedding: WeddingConfig = {
  bride: {
    name: "Sachini Madushika",
    fullName: { en: "Sachini Madushika", si: "සචිනි මධුශිකා" },
    firstName: { en: "Sachini", si: "සචිනි" }
  },
  groom: {
    name: "Lahiru Marasinghe",
    fullName: { en: "Lahiru Marasinghe", si: "ලහිරු මාරසිංහ" },
    firstName: { en: "Lahiru", si: "ලහිරු" }
  },
  brideParents: {
    father: { en: "Mr. Sunil Lesli", si: "සුනිල් ලෙස්ලි මහතා" },
    mother: { en: "Mrs. Champa Amarasinghe", si: "චම්පා අමරසිංහ මහත්මිය" }
  },
  groomParents: {
    father: { en: "Mr. Richard Marasinghe", si: "රිචඩ් මාරසිංහ මහතා" },
    mother: { en: "Mrs. Wanaja Rani Gamage", si: "වනජා රාණි ගමගේ මහත්මිය" }
  },
  date: { year: 2027, month: 1, day: 15 },
  timezone: "Asia/Colombo",
  utcOffset: "+05:30",
  startTime: "10:00",
  endTime: "16:00",
  poruwaTime: "10:30",
  venue: {
    name: "Royal Chance Palace",
    location: { en: "Kalagedihena, Sri Lanka", si: "කලගෙඩිහේන, ශ්‍රී ලංකාව" },
    mapsQuery: "Royal Chance Palace, Kalagedihena, Sri Lanka"
  },
  contact: {
    whatsappNumber: "+94764991398"
  },
  schedule: [
  { id: "arrival", time: "09:30", title: { en: "Guest arrival", si: "ආරාධිතයින් පැමිණීම" } },
  { id: "welcome", time: "10:00", title: { en: "Welcome and preparations", si: "පිළිගැනීම සහ සූදානම" } },
  {
    id: "poruwa",
    time: "10:30",
    title: { en: "Traditional Poruwa ceremony", si: "සාම්ප්‍රදායික පෝරුව චාරිත්‍රය" },
    highlight: true
  },
  { id: "photos", time: "12:00", title: { en: "Photography and congratulations", si: "ඡායාරූපකරණය සහ සුබපැතුම්" } },
  { id: "reception", time: "12:30", title: { en: "Wedding reception", si: "මංගල සංග්‍රහය" } },
  { id: "lunch", time: "13:00", title: { en: "Lunch and celebrations", si: "දිවා භෝජනය සහ සැමරුම්" } },
  { id: "conclusion", time: "16:00", title: { en: "Conclusion of the event", si: "උත්සවය අවසන් වීම" } }],

  gallery: [
  {
    id: "g1",
      src: "/image%201.jpeg",
    plannedPath: "/images/gallery/engagement-01.jpg",
    alt: { en: "Engagement portrait", si: "විවාහ ගිවිසුම් ඡායාරූපය" },
    orientation: "landscape"
  },
  {
    id: "g2",
      src: "/image%202.jpeg",
    plannedPath: "/images/gallery/pre-wedding-01.jpg",
    alt: { en: "Pre-wedding portrait", si: "පූර්ව මංගල ඡායාරූපය" },
    orientation: "portrait"
  },
  {
    id: "g3",
      src: "/image%203.jpeg",
    plannedPath: "/images/gallery/engagement-02.jpg",
    alt: { en: "Ring ceremony", si: "මුදු මාරු කිරීම" },
    orientation: "landscape"
  },
  {
    id: "g4",
      src: "/image%204.jpeg",
    plannedPath: "/images/gallery/pre-wedding-02.jpg",
    alt: { en: "Together outdoors", si: "එක්ව සොබාදහම මැද" },
    orientation: "portrait"
  },
  {
    id: "g5",
      src: "/image%205.jpeg",
    plannedPath: "/images/gallery/engagement-03.jpg",
    alt: { en: "With family", si: "පවුලේ අය සමඟ" },
    orientation: "portrait"
  },
  {
    id: "g6",
      src: "/image%206.jpeg",
    plannedPath: "/images/gallery/pre-wedding-03.jpg",
    alt: { en: "Candid moment", si: "සොඳුරු මොහොතක්" },
    orientation: "landscape"
  }],

  images: {
    couple: "/152e4fac-ab78-4f03-ac3a-f90e41307d37.jpg",
    floralBackground: "/eaaa5f72-b033-4fd1-be85-81eaf58b5e8c.jpg",
    floralCorner: "/8525d2f0-e287-4df5-a9b4-dc552590ae02.jpg",
    coverMandala: "/beae6062-c5a3-4772-bd56-aa4345bf65c2.jpg",
    coverLotus: "/81bbc33a-a3a4-43e9-994c-66a2cf7c0cac.jpg",
    coverBackground: "/2ebd0ad8-ebb3-49ac-bf60-4f2b6ca8191e.jpg"
  }
};
