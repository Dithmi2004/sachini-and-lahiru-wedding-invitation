import React from "react";
import { CalendarPlusIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { buildCalendarUrl } from "../../utils/links";
import { ActionLink } from "../ui/ActionLink";

export function CalendarButton() {
  const { t, locale } = useLanguage();
  return (
    <ActionLink
      href={buildCalendarUrl(locale)}
      icon={CalendarPlusIcon}
      variant="secondary"
      newTabLabel={t.venue.opensNewTab}
      className={locale === "si" ? "mx-auto w-full max-w-[320px] whitespace-normal px-4 py-2 text-center text-base leading-snug sm:w-auto" : undefined}>
      {t.venue.calendar}
    </ActionLink>);

}
