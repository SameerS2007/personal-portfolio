# personal-portfolio

Tennis-themed personal portfolio for [Sameer Sahai](https://github.com/SameerS2007) — React + Vite, content driven by `content/site.json`.

## Develop

```bash
npm install
npm run dev
```

## Content

Edit copy, projects, and experience in [`content/site.json`](content/site.json). See [`content/EDITING.txt`](content/EDITING.txt) for rules.

```bash
npm run content:check
```

## Resume (not in git)

The resume PDF is **gitignored** so it is not on GitHub. For local dev, place your file at:

`public/Sameer-Resume.pdf`

For production, either upload that file with your host (without committing it) or set an external URL in `content/site.json` → `links.resume`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Static output is in `dist/` after `npm run build`. Works on Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.
