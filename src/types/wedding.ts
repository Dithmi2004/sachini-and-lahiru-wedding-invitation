export type Locale = "en" | "si";

export type Localized = Record<Locale, string>;

export interface CouplePerson {
  /** Display name in script typography (kept identical in both languages). */
  name: string;
  /** Localized full name used inside translated sentences. */
  fullName: Localized;
  /** Localized first name used in short phrases (RSVP, calendar). */
  firstName: Localized;
}

export interface ParentsInfo {
  father: Localized;
  mother: Localized;
}

export interface ScheduleItem {
  id: string;
  /** 24-hour time in Sri Lanka local time, e.g. "09:30". */
  time: string;
  title: Localized;
  highlight?: boolean;
}

export type PhotoOrientation = "portrait" | "landscape" | "square";

export interface GalleryPhoto {
  id: string;
  /** Path to the real photo, e.g. "/images/gallery/engagement-01.jpg". Use null to show a labelled sample placeholder. */
  src: string | null;
  /** Where the real photo is expected to live inside public/. */
  plannedPath: string;
  alt: Localized;
  orientation: PhotoOrientation;
}

export interface WeddingConfig {
  bride: CouplePerson;
  groom: CouplePerson;
  brideParents: ParentsInfo;
  groomParents: ParentsInfo;
  date: {year: number;month: number;day: number;};
  timezone: string;
  utcOffset: string;
  startTime: string;
  endTime: string;
  poruwaTime: string;
  venue: {
    name: string;
    location: Localized;
    mapsQuery: string;
  };
  contact: {
    /** WhatsApp number in international format, digits only (e.g. "94XXXXXXXXX"). Leave empty to hide RSVP. */
    whatsappNumber: string;
  };
  schedule: ScheduleItem[];
  gallery: GalleryPhoto[];
  images: {
    couple: string;
    coverCouple: string;
    floralBackground: string;
    floralCorner: string;
    coverMandala: string;
    coverLotus: string;
    coverBackground: string;
  };
}
