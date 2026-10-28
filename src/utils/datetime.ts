import { wedding } from "../data/wedding";
import { translations } from "../data/translations";
import type { Locale } from "../types/wedding";

const pad = (n: number) => String(n).padStart(2, "0");

/** Builds an absolute Date for a wedding-day time in Sri Lanka (Asia/Colombo, UTC+05:30, no DST). */
export function weddingDateTime(time: string): Date {
  const { year, month, day } = wedding.date;
  return new Date(`${year}-${pad(month)}-${pad(day)}T${time}:00${wedding.utcOffset}`);
}

export const WEDDING_START_MS = weddingDateTime(wedding.startTime).getTime();
export const WEDDING_END_MS = weddingDateTime(wedding.endTime).getTime();

export function formatTime(time: string, locale: Locale): string {
  const [h, m] = time.split(":").map(Number);
  const isPm = h >= 12;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const mm = pad(m);
  return locale === "en" ? `${h12}:${mm} ${isPm ? "PM" : "AM"}` : `${isPm ? "ප.ව." : "පෙ.ව."} ${h12}:${mm}`;
}

export function formatWeddingDate(locale: Locale): string {
  const { year, month, day } = wedding.date;
  const t = translations[locale].dateTime;
  return t.formatDate(day, t.months[month - 1], year);
}

export function formatWeddingMonthYear(locale: Locale): string {
  const { year, month } = wedding.date;
  const t = translations[locale].dateTime;
  return t.formatMonthYear(t.months[month - 1], year);
}

export function weddingWeekday(locale: Locale): string {
  const { year, month, day } = wedding.date;
  const index = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return translations[locale].dateTime.weekdays[index];
}

/** YYYYMMDD of the wedding day. */
export function compactWeddingDate(): string {
  const { year, month, day } = wedding.date;
  return `${year}${pad(month)}${pad(day)}`;
}