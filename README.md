# Still Relevant

Static website for Still Relevant. Next.js (App Router) with a static export, Tailwind CSS,
and self-hosted Baloo 2 + Poppins. No server, no database, nothing to pay monthly beyond a
domain name.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
```

## Deploy free on Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com, "Add New Project", import the repo.
3. Framework preset: Next.js. Leave everything else as default. Deploy.
4. Add your domain under Project Settings then Domains.

Every push to `main` redeploys automatically.

## The three things to change first

**1. Forms.** They are in safe mode. They validate properly and show real success and error
states, but nothing is sent anywhere until you set an endpoint. Open `lib/site.js` and set
`formEndpoint`. Both the contact form and every email capture use it. Free options:

- Formspree (formspree.io): paste the form URL straight in.
- MailerLite: use the embedded form action URL from your signup form.
- Google Forms: use the `formResponse` URL and rename the field `name` attributes.

**2. Details.** In `lib/site.js`: real email address, real domain in `url`, and the social
links (currently `#`).

**3. Prices and sessions.** Session names and prices live in `app/learn/page.js`. Products in
`app/shop/page.js`. Organisation programmes in `app/organisations/page.js`. Talks in
`app/speaking/page.js`. All plain arrays at the top of each file.

## Structure

The three content worlds are the spine of the site and are defined in `lib/site.js`:

- AI for everyday life
- AI for work and career
- AI for what's next

Three supporting topics sit alongside them: Getting started, Using AI well, Staying relevant.
Add or rename any of them in `lib/site.js` and the topic pages, footer, resources hub and
sitemap all follow automatically.

Pages: Home, Start here, Learn, For Organisations, Speaking, Shop, Resources, Articles,
six topic pages, fourteen articles, the free guide landing page, About, Contact, Privacy, 404.

## Adding an article

Drop a new `.md` file into `content/articles/`. Front matter:

```
---
title: "Your headline"
date: "2026-08-20"
topic: "everyday-life"
excerpt: "One or two lines that appear on the cards."
---
```

`topic` must match a slug from `lib/site.js`. The filename becomes the URL. Rebuild and it
appears on the homepage, the articles page, its topic page, the related links on other
articles and the sitemap, with no manual updating.

## Testimonials

`site.testimonials` in `lib/site.js` is empty on purpose, and the testimonial sections do not
render at all while it is. Add real quotes when you have them:

```js
testimonials: [{ quote: '...', name: 'First name', role: 'Their role' }],
```

Nothing on this site invents social proof, client names or statistics.

## Photographs

Where a photo will eventually go there is a branded panel (`components/BrandPanel.jsx`) rather
than an empty placeholder, so the site looks deliberate until real images replace them. Swap
them for `next/image` when you have photography.

## Brand rules baked in

- Teal `#0d5c6b` primary, gold `#f5c842` accent, white background
- Baloo 2 for headings, Poppins for body, both self-hosted, so no Google Fonts request and
  nothing extra to declare in the privacy policy
- **Gold is never text on white.** It is a block fill with dark text on top, or text on teal.
  Teal does all the interactive work: links, buttons, focus rings.
- 18px base type, high contrast throughout, visible focus states, reduced-motion respected,
  48px minimum tap targets, skip-to-content link

Colours and fonts live in `tailwind.config.js` and `app/globals.css`.

## SEO

Per-page titles, descriptions and canonicals. Open Graph and Twitter cards with a custom
brand social image (`public/og.svg`). Structured data for Organization, Person, WebSite,
Article, BreadcrumbList, FAQPage, Course, Product and Service. Auto-generated `sitemap.xml`
and `robots.txt`. Breadcrumbs on every inner page. Internal linking between articles, topics
and the commercial pages.
