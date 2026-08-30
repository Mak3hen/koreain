# KoreaIN Web

Temporary technical baseline for the KoreaIN website, built with Astro and
deployed manually to Cloudflare Workers.

## Requirements

- Node.js 22.12.0 or newer
- npm
- Wrangler authenticated with the intended Cloudflare account for deployment

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local Astro development server |
| `npm run build` | Build the Worker and static assets into `dist/` |
| `npm run preview` | Build and preview with the Cloudflare runtime |
| `npm run generate-types` | Regenerate Cloudflare Worker types |
| `npm run deploy` | Build and deploy `koreain-web` with Wrangler |

## Deployment policy

Production deployment is manual. Pushing to GitHub only versions the source and
must not deploy the website.

The production Worker is named `koreain-web`. The `korea-in.com` Custom Domain
will be attached in Cloudflare separately when the existing Pages project is
retired. No DNS or Custom Domain change is performed by this repository setup.
