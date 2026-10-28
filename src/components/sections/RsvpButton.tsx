import React from "react";
import { MessageCircleIcon, SettingsIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { ActionLink } from "../ui/ActionLink";

interface RsvpButtonProps {
  url: string | null;
  showConfigPlaceholder: boolean;
}

export function RsvpButton({ url, showConfigPlaceholder }: RsvpButtonProps) {
  const { t } = useLanguage();

  if (url) {
    return (
      <div className="flex flex-col items-center gap-3">
        <span className="rsvp-button-frame">
          <ActionLink
            href={url}
            icon={MessageCircleIcon}
            newTabLabel={t.venue.opensNewTab}
            className="bg-maroon text-ivory ring-1 ring-inset ring-champagne/80 hover:bg-maroon-deep">
            {t.rsvp.button}
          </ActionLink>
        </span>
        <p className="text-base text-cocoa-soft">{t.rsvp.note}</p>
      </div>);

  }

  if (!showConfigPlaceholder) return null;

  return (
    <div className="mx-auto flex max-w-md items-start gap-4 rounded-2xl border border-dashed border-gold bg-ivory p-5 text-left">
      <SettingsIcon className="mt-1 h-5 w-5 shrink-0 text-gold-deep" strokeWidth={1.6} aria-hidden="true" />
      <div>
        <p className="caps text-xs font-bold text-maroon">{t.rsvp.placeholderTitle}</p>
        <p className="mt-1 text-base leading-snug text-cocoa">{t.rsvp.placeholderText}</p>
      </div>
    </div>);

}
