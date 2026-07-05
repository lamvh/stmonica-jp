/**
 * Central map of design-file names → Next.js routes.
 * The Claude Design source links pages as "About.dc.html" etc.; every ported
 * page and component must use these clean routes instead.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  facilities: "/facilities",
  dailylife: "/daily-life",
  team: "/team",
  gallery: "/gallery",
  voices: "/voices",
  blog: "/blog",
  careers: "/careers",
  faq: "/faq",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Primary items shown in the top navigation, in order. */
export const NAV_ITEMS: { key: RouteKey; label: string }[] = [
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "facilities", label: "Facilities" },
  { key: "dailylife", label: "Daily Life" },
  { key: "team", label: "Team" },
  { key: "gallery", label: "Gallery" },
  { key: "blog", label: "Blog" },
  { key: "careers", label: "Careers" },
];
