// Single source of truth for business details. Update here and the whole site follows.
export const site = {
  name: 'Rodriguez Landscaping',
  url: 'https://www.rodriguezlandscapingservice.com',
  phone: '(909) 709-2990',
  phoneE164: '+19097092990',
  email: 'inlandempire.rodriguezlandscape@gmail.com',
  license: '1001106',
  years: 25,
  region: 'Inland Empire',
  cslbUrl: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1001106',

  // Trust badges that are shown site-wide. Set to false if they don't apply.
  familyOwned: true,
  spanishSpoken: true,

  // Fill these in when available — sections that use them stay hidden while empty.
  hours: null as null | { en: string; es: string }, // e.g. { en: 'Mon–Sat 7am–6pm', es: 'Lun–Sáb 7am–6pm' }
  googleReviewUrl: '', // "Write a review" link from your Google Business Profile
  googleRating: null as null | { rating: number; count: number }, // only real numbers from Google
  social: {
    facebook: '',
    instagram: '',
    yelp: '',
  },

  // Analytics: paste your GA4 measurement ID (G-XXXXXXX) to enable tracking.
  ga4Id: '',
};

export const telHref = `tel:${site.phoneE164}`;
export const smsHref = `sms:${site.phoneE164}`;
export const mailHref = `mailto:${site.email}`;
