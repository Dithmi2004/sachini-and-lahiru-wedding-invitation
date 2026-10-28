import React from "react";
import { CalendarPlusIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { buildCalendarUrl } from "../../utils/links";
import { ActionLink } from "../ui/ActionLink";

export function CalendarButton() {
  const { t, locale } = useLanguage();
  return (
    <ActionLink href={buildCalendarUrl(locale)} icon={CalendarPlusIcon} variant="secondary" newTabLabel={t.venue.opensNewTab}>
      {t.venue.calendar}
    </ActionLink>);

}