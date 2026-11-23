# lenouai.com

The LeNou AI public website: Home, About, Guide, Support, Contact, Privacy Policy and Terms of Service. Moved from Replit on 23/11/2026.

- React + Vite, prerendered to plain HTML (`scripts/finalize-static.mjs`), so every page works without JavaScript and search engines can read it.
- No database, no secrets, no sign-in, no trackers.
- Every push to `main` builds the site and publishes it on **GitHub Pages** (`.github/workflows/deploy.yml`). The custom domain is `lenouai.com` (`public/CNAME`); DNS stays at Porkbun.
- Company details and emails: `src/config/site.json`. Page titles: `src/config/page-meta.json`. Policies: `src/pages/privacy.tsx`, `src/pages/terms.tsx`.

Local: `npm install`, then `npm run dev` (or `npm run build` → `dist/public`).
