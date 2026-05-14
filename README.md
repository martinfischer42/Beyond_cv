# Beyond CV

Executive Portfolio Website von Martin Fischer. Das Projekt ist als statische React-Anwendung aufgebaut und fokussiert Marketing Leadership, AI Enablement und skalierbare B2B-Marketing-Transformation.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Deployment: statisch auf Vercel

## Lokales Setup

```bash
npm install
npm run dev
```

Build prüfen:

```bash
npm run build
```

## Routing

Folgende Routen sind implementiert:

- `/`
- `/profil`
- `/cases`
- `/cases/ai-marketing-scaling`
- `/cases/marketing-automation`
- `/cases/cms-migration`
- `/kontakt`
- `/impressum`

## Deployment auf Vercel

- Projekt als Framework `Vite` importieren
- Build Command: `npm run build`
- Output Directory: `dist`
- `vercel.json` enthält einen SPA-Rewrite, damit Deep Links funktionieren.

## Hinweise

- Kein Backend, kein CMS, keine Supabase-Integration.
- Fokus liegt auf einer klaren, wartbaren und statisch deploybaren Frontend-Struktur.
