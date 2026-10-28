export interface RsvpMessageParams {
  bride: string;
  groom: string;
  date: string;
  venue: string;
}

export interface FamilyInvitationParams {
  bride: string;
  groom: string;
  brideFather: string;
  brideMother: string;
  groomFather: string;
  groomMother: string;
}

export interface FamilyInvitationCopy {
  opening: string;
  brideParents: string;
  brideLead: string;
  connector: string;
  groomParents: string;
  groomLead: string;
  groomSuffix: string;
  closing: string;
}

export interface Translation {
  languageName: string;
  language: {label: string;};
  dateTime: {
    months: string[];
    weekdays: string[];
    formatDate: (day: number, month: string, year: number) => string;
    formatMonthYear: (month: string, year: number) => string;
  };
  cover: {
    dialogLabel: string;
    blessing: string;
    requestDaughter: string;
    requestSon: string;
    and: string;
    tapToOpen: string;
    openLabel: string;
  };
  hero: {
    eyebrow: string;
    illustrationAlt: string;
  };
  family: {
    title: string;
    invitation: (names: FamilyInvitationParams) => FamilyInvitationCopy;
    bridesFamily: string;
    groomsFamily: string;
    daughterOf: string;
    sonOf: string;
  };
  countdown: {
    title: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    sriLankaTime: string;
    inProgress: string;
    passed: string;
  };
  details: {
    title: string;
    date: string;
    time: string;
    poruwa: string;
    venue: string;
    location: string;
  };
  schedule: {title: string;};
  venue: {
    title: string;
    directions: string;
    calendar: string;
    opensNewTab: string;
  };
  calendar: {
    eventTitle: (bride: string, groom: string) => string;
    details: (poruwaTime: string, location: string) => string;
  };
  gallery: {
    title: string;
    intro: string;
    dialogLabel: string;
    previous: string;
    next: string;
    close: string;
    openPhoto: (n: number) => string;
    position: (n: number, total: number) => string;
    samplePlaceholder: string;
    replaceHint: string;
  };
  rsvp: {
    title: string;
    text: string;
    button: string;
    note: string;
    placeholderTitle: string;
    placeholderText: string;
    message: (p: RsvpMessageParams) => string;
  };
  closing: {
    title: string;
    message: string;
    withLove: string;
  };
}
