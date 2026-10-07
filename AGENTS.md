# Rohan's Web Resources — Dev Setup

## Stack
- **Frontend**: React + Vite + Tailwind CSS (port 5173, mapped to host 3000)
- **Backend**: Express + Prisma + PostgreSQL (port 8000, internal only — proxied via Vite)
- **Database**: PostgreSQL 16 (internal, auto-seeded on startup)

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
The backend installs deps, runs `prisma db push` (creates schema), seeds sample data, then starts `node --watch`.

## Demo Accounts
- Admin: `admin@rohansresources.com` / `admin123` (AI resource creator, manage resources)
- Teacher: `teacher@rohansresources.com` / `teacher123` (lesson planner, save resources)

## Secrets
- `JWT_SECRET` — required at boot, generated dev placeholder (replace for production)
- `OPENAI_API_KEY` — required for AI features (resource creator, lesson planner); app boots without it but AI endpoints return 503

## Architecture Notes
- Single-origin: Vite dev server proxies `/api` to the backend. No CORS config needed.
- `node:22-slim` needs `openssl` installed for Prisma — handled in the compose command.
- React imports use `import React from 'react'` in all JSX files (classic JSX runtime compatibility).
- Resource content is stored as JSON in Prisma (items arrays or banner objects).
- Download generates a printable HTML file client-side; Print uses `window.print()`.

## Categories
COMPUTING_LABELS, AUTUMN, SPACE, DISPLAY_RESOURCES
