# Rodriguez Landscaping — Website

Fast, bilingual (English / Spanish) static website built with [Astro](https://astro.build). It's designed to turn Inland Empire visitors into free-estimate leads.

- **67 pages**: home, services index + 8 service pages, service areas index + 16 city pages, gallery, reviews, about, free estimate, thank-you, privacy and 404. Every page exists in English and Spanish (`/es/...`).
- **Conversion**: sticky header with click-to-call, a Call / Text / Free Estimate bar on mobile, a short estimate form above the fold, and CTAs after each section.
- **SEO**: unique titles and descriptions, `hreflang` EN/ES alternates, sitemap, robots.txt, and LocalBusiness / Service / FAQ / Breadcrumb structured data.
- **Lighthouse (mobile)**: Performance 96, Accessibility 100, Best Practices 100, SEO 100.

## Run it locally

Requires Node 22+.

```sh
npm install
npm run dev       # http://localhost:4321 (live reload)
npm run build     # outputs static site to dist/
npm run preview   # serve the built site
```

## Deploy (Netlify, recommended)

1. Push this folder to a GitHub repo.
2. In Netlify, choose **Add new site → Import from Git** and pick the repo. `netlify.toml` already sets the build command and publish folder.
3. **Forms → enable form detection**, then redeploy. The `estimate` form is detected automatically.
4. **Forms → Notifications → Email notification**: send to `inlandempire.rodriguezlandscape@gmail.com`.
5. **Domain management**: point `rodriguezlandscapingservice.com` at Netlify when you're ready to replace the Squarespace site.

Form submissions only work on Netlify. Locally, the form posts to the thank-you page but nothing is stored.

**Hosting somewhere else?** Create a free [Formspree](https://formspree.io) form. In `src/components/EstimateForm.astro`, change the form's `action` to your Formspree URL and remove `data-netlify` and `netlify-honeypot`.

## Edit business info: `src/data/site.ts`

Change details here and the whole site updates: phone, email, license, years in business, badges, hours, social links, Google review link and rating, and GA4 ID. Sections whose fields are empty stay hidden.

| What | File |
| --- | --- |
| Services (EN + ES copy, FAQs) | `src/data/services.ts` |
| City pages | `src/data/cities.ts` |
| Testimonials | `src/data/reviews.ts` |
| Gallery | `src/data/gallery.ts` |
| Homepage FAQ | `src/data/faqs.ts` |
| Buttons, headings, UI text (EN + ES) | `src/i18n/ui.ts` |
| URLs (EN + ES slugs) | `src/i18n/routes.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` tokens) |

## Replace the stock photos (recommended)

The photos are free Unsplash stock images, and the footer says so. Real before/after project photos build far more trust. To swap them, replace files in `src/assets/photos/` and keep the same filenames, or add new files and update the imports in `src/data/gallery.ts` and `src/data/services.ts`. Astro resizes and compresses them automatically.

Unsplash photo IDs used (all free under the Unsplash License): 1738193830098-2d92352a1856, 1734303023491-db8037a21f09, 1558904541-efa843a96f01, 1770664945615-52203ab54c88, 1541955193702-9ca03b1bb11a, 1779565145536-ccdf57517151, 1714815976162-1393334c75fa, 1759355787286-f1c5fd456a0d, 1781030332057-09f9f3331432, 1760574152812-446463182358, 1779111718177-aa0f7a30fd62, 1754321902809-5c21cbc67228, 1754322449185-31f56117ed87, 1780838446281-9394772d07a8, 1761637823407-ef47925c2714, 1758791768407-dca4c35045b7, 1722881445875-bdd5f4d9e6fa, 1689728318937-17d24bc0a65c, 1590820292118-e256c3ac2676, 1781895975201-4efb1d83a08b, 1759355787118-92cce7fe9e90, 1749803915455-a7642520d0d3.

## Please confirm before launch

These details are on the site but didn't come from the current website:

- **"Family-Owned & Local"** and **"Se Habla Español"** badges. Turn them off with `familyOwned` / `spanishSpoken` in `site.ts`.
- The About page says the company is **"led by Miguel"**, based on the reviews. Add the real story there (`src/views/About.astro`).
- **"We usually reply the same day"** and **"estimate within a few days"** promises. Edit them in `src/i18n/ui.ts` if they're not accurate.
- **Hours**, **social links**, the **Google review link** and the **Google rating** are empty on purpose. Fill them in `site.ts`, and only use real numbers for the rating.
- Testimonials are quoted from the current site's reviews page. The Spanish versions are translations and are labeled that way.
