import type { Translation } from "../types/i18n";
import type { Locale } from "../types/wedding";

const en: Translation = {
  languageName: "English",
  language: { label: "Language" },
  dateTime: {
    months: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"],

    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    formatDate: (day, month, year) => `${day} ${month} ${year}`,
    formatMonthYear: (month, year) => `${month} ${year}`
  },
  cover: {
    dialogLabel: "Wedding invitation of Sachini and Lahiru",
    blessing: "With the blessings of their beloved parents",
    requestDaughter: "request the pleasure of your company at the wedding of their daughter",
    requestSon: "request the pleasure of your company at the wedding of their son",
    and: "&",
    tapToOpen: "Tap to open",
    openLabel: "Open the wedding invitation"
  },
  hero: {
    eyebrow: "The wedding of",
    illustrationAlt:
    "Illustration of a Kandyan bride in an Osariya saree and a groom in Nilame attire on a decorated Poruwa, with brass oil lamps and lotus flowers."
  },
  family: {
    title: "Our families",
    message: (bride, groom) =>
    `With the blessings of their beloved parents, ${bride} and ${groom} joyfully invite you to celebrate their wedding and the beginning of their new journey together.`,
    bridesFamily: "The Bride's Family",
    groomsFamily: "The Groom's Family",
    daughterOf: "Daughter of",
    sonOf: "Son of"
  },
  countdown: {
    title: "Counting down to our wedding day",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    sriLankaTime: "Sri Lanka time",
    inProgress: "Our celebration is happening today. Thank you for being with us.",
    passed: "Our wedding day has passed. Thank you for your love and blessings."
  },
  details: {
    title: "Wedding Details",
    date: "Wedding date",
    time: "Event time",
    poruwa: "Poruwa ceremony",
    venue: "Venue",
    location: "Location"
  },
  schedule: { title: "Order of the Day" },
  venue: {
    title: "The Venue",
    directions: "Get Directions",
    calendar: "Add to Google Calendar",
    opensNewTab: "opens in a new tab"
  },
  calendar: {
    eventTitle: (bride, groom) => `Wedding of ${bride} & ${groom}`,
    details: (poruwa, location) =>
    `Traditional Kandyan wedding of Sachini Madushika & Lahiru Marasinghe.\nPoruwa ceremony: ${poruwa}\nVenue: ${location}`
  },
  gallery: {
    title: "Cherished Moments",
    intro: "Memories from our engagement and pre-wedding days.",
    dialogLabel: "Photo viewer",
    previous: "Previous photo",
    next: "Next photo",
    close: "Close photo viewer",
    openPhoto: (n) => `Open photo ${n}`,
    position: (n, total) => `${n} / ${total}`,
    samplePlaceholder: "Sample placeholder",
    replaceHint: "Replace with"
  },
  rsvp: {
    title: "Kindly Reply",
    text: "Please let us know whether you can join us. The button below opens WhatsApp with a message ready for you to review and send.",
    button: "RSVP via WhatsApp",
    note: "Nothing is sent until you tap send in WhatsApp.",
    placeholderTitle: "Configuration placeholder",
    placeholderText: "Add a WhatsApp number to contact.whatsappNumber in data/wedding.ts to enable the RSVP button.",
    message: ({ bride, groom, date, venue }) =>
    `Hello ${bride} & ${groom},\n\nThank you for inviting me to your wedding on ${date} at ${venue}.\n\nName: \nAttending: Yes / No\nNumber of guests: `
  },
  closing: {
    title: "Thank you",
    message: "Your presence and blessings will make our special day even more memorable.",
    withLove: "With love and gratitude"
  }
};

const si: Translation = {
  languageName: "සිංහල",
  language: { label: "භාෂාව" },
  dateTime: {
    months: [
    "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි",
    "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"],

    weekdays: ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"],
    formatDate: (day, month, year) => `${year} ${month} ${day}`,
    formatMonthYear: (month, year) => `${year} ${month}`
  },
  cover: {
    dialogLabel: "සචිනි සහ ලහිරුගේ මංගල ආරාධනාව",
    blessing: "ආදරණීය දෙමාපියන්ගේ ආශීර්වාදයෙන්",
    requestDaughter: "තම දියණියගේ විවාහ මංගලෝත්සවයට ඔබගේ පැමිණීම ගෞරවයෙන් අපේක්ෂා කරති",
    requestSon: "තම පුත්‍රයාගේ විවාහ මංගලෝත්සවයට ඔබගේ පැමිණීම ගෞරවයෙන් අපේක්ෂා කරති",
    and: "&",
    tapToOpen: "විවෘත කිරීමට තට්ටු කරන්න",
    openLabel: "මංගල ආරාධනාව විවෘත කරන්න"
  },
  hero: {
    eyebrow: "විවාහ මංගල්‍යය",
    illustrationAlt:
    "අලංකාර පෝරුවක් මත ඔසරියෙන් සැරසුණු උඩරට මනාලියක් සහ නිලමේ ඇඳුමින් සැරසුණු මනාලයෙකු, පිත්තල පහන් සහ නෙළුම් මල් සමඟ."
  },
  family: {
    title: "අපගේ පවුල්",
    message: (bride, groom) =>
    `ආදරණීය දෙමාපියන්ගේ ආශීර්වාදය ඇතිව, ${bride} සහ ${groom} තම විවාහ මංගල්‍යය සහ එක්ව ආරම්භ කරන නව ජීවන ගමන සැමරීමට ඔබට සතුටින් ආරාධනා කරති.`,
    bridesFamily: "මනාලියගේ පවුල",
    groomsFamily: "මනාලයාගේ පවුල",
    daughterOf: "ආදරණීය දෙමාපියන්",
    sonOf: "ආදරණීය දෙමාපියන්"
  },
  countdown: {
    title: "අපගේ මංගල දිනයට තව",
    days: "දින",
    hours: "පැය",
    minutes: "මිනිත්තු",
    seconds: "තත්පර",
    sriLankaTime: "ශ්‍රී ලංකා වේලාව",
    inProgress: "අපගේ මංගල උත්සවය අද පැවැත්වේ. අප සමඟ සිටීම ගැන ස්තූතියි.",
    passed: "අපගේ මංගල දිනය නිමා විය. ඔබගේ ආදරයට හා ආශීර්වාදයට ස්තූතියි."
  },
  details: {
    title: "මංගල තොරතුරු",
    date: "මංගල දිනය",
    time: "උත්සව වේලාව",
    poruwa: "පෝරුව චාරිත්‍රය",
    venue: "ස්ථානය",
    location: "පිහිටීම"
  },
  schedule: { title: "දවසේ වැඩසටහන" },
  venue: {
    title: "මංගල ස්ථානය",
    directions: "මඟ පෙන්වීම",
    calendar: "Google දින දර්ශනයට එක් කරන්න",
    opensNewTab: "නව පටිත්තක විවෘත වේ"
  },
  calendar: {
    eventTitle: (bride, groom) => `${bride} සහ ${groom}ගේ මංගල උත්සවය`,
    details: (poruwa, location) =>
    `සචිනි මධුශිකා සහ ලහිරු මාරසිංහගේ සාම්ප්‍රදායික උඩරට මංගල උත්සවය.\nපෝරුව චාරිත්‍රය: ${poruwa}\nස්ථානය: ${location}`
  },
  gallery: {
    title: "ආදරණීය මතකයන්",
    intro: "විවාහ ගිවිසුම් සහ පූර්ව මංගල දිනවල මතකයන්.",
    dialogLabel: "ඡායාරූප දර්ශකය",
    previous: "පෙර ඡායාරූපය",
    next: "ඊළඟ ඡායාරූපය",
    close: "ඡායාරූප දර්ශකය වසන්න",
    openPhoto: (n) => `ඡායාරූපය ${n} විවෘත කරන්න`,
    position: (n, total) => `${n} / ${total}`,
    samplePlaceholder: "නියැදි ඡායාරූපය",
    replaceHint: "ප්‍රතිස්ථාපනය කරන්න:"
  },
  rsvp: {
    title: "ඔබගේ පැමිණීම දන්වන්න",
    text: "ඔබට අප හා එක්විය හැකිදැයි කරුණාකර දන්වන්න. පහත බොත්තම සූදානම් කළ පණිවිඩයක් සමඟ WhatsApp විවෘත කරයි; එය පරීක්ෂා කර ඔබම යවන්න.",
    button: "WhatsApp හරහා දන්වන්න",
    note: "ඔබ WhatsApp හි යවන්න ඔබන තුරු කිසිවක් නොයැවේ.",
    placeholderTitle: "සැකසීම අවශ්‍යයි",
    placeholderText: "RSVP බොත්තම සක්‍රිය කිරීමට data/wedding.ts හි contact.whatsappNumber වෙත WhatsApp අංකයක් එක් කරන්න.",
    message: ({ bride, groom, date, venue }) =>
    `ආයුබෝවන් ${bride} සහ ${groom},\n\n${date} දින ${venue} හි පැවැත්වෙන ඔබගේ මංගල උත්සවයට ආරාධනා කිරීම ගැන ස්තූතියි.\n\nනම: \nපැමිණීම: ඔව් / නැත\nආරාධිතයින් ගණන: `
  },
  closing: {
    title: "ස්තූතියි",
    message: "ඔබගේ පැමිණීම සහ ආශීර්වාදය අපගේ විශේෂ දිනය තවත් අමතක නොවන එකක් කරනු ඇත.",
    withLove: "ආදරයෙන් හා කෘතඥතාවෙන්"
  }
};

export const translations: Record<Locale, Translation> = { en, si };