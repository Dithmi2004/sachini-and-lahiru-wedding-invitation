import { wedding } from "../data/wedding";
import { translations } from "../data/translations";
import type { Locale } from "../types/wedding";
import { compactWeddingDate, formatTime, formatWeddingDate } from "./datetime";

const toQuery = (params: Record<string, string>) =>
Object.entries(params).
map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).
join("&");

export function venueAddress(): string {
  return `${wedding.venue.name}, ${wedding.venue.location.en}`;
}

export function buildMapsUrl(): string {
  return `https://www.google.com/maps/search/?${toQuery({ api: "1", query: wedding.venue.mapsQuery })}`;
}

export function buildCalendarUrl(locale: Locale): string {
  const t = translations[locale];
  const day = compactWeddingDate();
  const stamp = (time: string) => `${day}T${time.replace(":", "")}00`;
  const location = venueAddress();
  return `https://calendar.google.com/calendar/render?${toQuery({
    action: "TEMPLATE",
    text: t.calendar.eventTitle(wedding.bride.firstName[locale], wedding.groom.firstName[locale]),
    dates: `${stamp(wedding.startTime)}/${stamp(wedding.endTime)}`,
    ctz: wedding.timezone,
    location,
    details: t.calendar.details(formatTime(wedding.poruwaTime, locale), location)
  })}`;
}

export function normalizeWhatsAppNumber(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15 ? digits : null;
}

export function buildWhatsAppUrl(locale: Locale): string | null {
  const number = normalizeWhatsAppNumber(wedding.contact.whatsappNumber);
  if (!number) return null;
  const message = translations[locale].rsvp.message({
    bride: wedding.bride.firstName[locale],
    groom: wedding.groom.firstName[locale],
    date: formatWeddingDate(locale),
    venue: wedding.venue.name
  });
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}