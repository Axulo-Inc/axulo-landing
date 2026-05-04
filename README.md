# Axulo Landing (Next.js App Router)

Production-ready landing page for **Axulo Technologies** built with:
- Next.js (App Router) + TypeScript
- Tailwind CSS
- SEO metadata + robots + sitemap
- Lead capture API endpoint (`/api/waitlist`)
- GA4 + Hotjar integration via environment variables

## 1) Local Development

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## 2) Required Environment Variables

Copy `.env.example` and set production values:

```bash
cp .env.example .env.local
```

Key values:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_HOTJAR_ID`
- `WAITLIST_ENDPOINT_URL` (Formspree or your own ingestion endpoint)

## 3) Waitlist Conversion Endpoint

The waitlist form submits to `POST /api/waitlist`, which validates payloads and forwards them to `WAITLIST_ENDPOINT_URL`.

Expected lead payload:

```json
{
  "fullName": "Jane Doe",
  "email": "jane@company.com",
  "company": "Acme AI",
  "source": "axulo-landing",
  "capturedAt": "2026-05-01T00:00:00.000Z"
}
```

If `WAITLIST_ENDPOINT_URL` is not set, the route returns `503`.

## 4) Build & Production Checks

```bash
npm run build
npm run start
```

## 5) Lighthouse (local)

Run while `npm run start` is serving on port `3000`:

```bash
npx lighthouse http://localhost:3000 \
  --chrome-flags='--headless --no-sandbox' \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html --output-path=./lighthouse-report.html
```

## 6) Deploy to Vercel

Recommended import settings:
- Framework: **Next.js**
- Root Directory: `./`
- Build Command: auto
- Output Directory: auto

After deploy, confirm:
- Hero animations and SystemVisual render
- CTA buttons navigate correctly (`#features`, `#waitlist`, `#contact`)
- Waitlist POST succeeds in production
- GA4 + Hotjar scripts load when IDs are present
- `https://<domain>/robots.txt` and `https://<domain>/sitemap.xml` resolve

## Repository

- GitHub: `https://github.com/Axulo-Inc/axulo-landing`
