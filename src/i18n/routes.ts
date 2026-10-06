export type Lang = 'en' | 'es';
export const langs: Lang[] = ['en', 'es'];

// Static pages and their localized paths.
export const routes = {
  home: { en: '/', es: '/es/' },
  services: { en: '/services/', es: '/es/servicios/' },
  areas: { en: '/service-areas/', es: '/es/areas-de-servicio/' },
  gallery: { en: '/gallery/', es: '/es/galeria/' },
  reviews: { en: '/reviews/', es: '/es/resenas/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  contact: { en: '/free-estimate/', es: '/es/estimado-gratis/' },
  thanks: { en: '/thank-you/', es: '/es/gracias/' },
  privacy: { en: '/privacy/', es: '/es/privacidad/' },
} as const;

export type RouteKey = keyof typeof routes;

export const r = (key: RouteKey, lang: Lang) => routes[key][lang];

export const servicePath = (slug: { en: string; es: string }, lang: Lang) =>
  `${routes.services[lang]}${slug[lang]}/`;

export const cityPath = (slug: string, lang: Lang) => `${routes.areas[lang]}${slug}/`;
