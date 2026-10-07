# Rohan's Web Resources — Dev Setup

## Stack
- **Frontend**: React + Vite + Tailwind CSS (port 5173, mapped to host 3000)
- **Backend**: Express + Prisma + PostgreSQL (port 8000, internal — proxied via Vite)
- **Database**: PostgreSQL 16 (internal, auto-seeded on startup)
- **Content Generator**: Built-in knowledge base — no external API needed

## Running (Dev)
```
docker compose -f docker-compose.base44.yml up -d
```
The backend installs deps, runs `prisma db push` (creates schema), seeds 80+ resources, then starts `node --watch`.

## Running (Production)
```
JWT_SECRET=$(openssl rand -hex 32) docker compose up -d
```
Builds Docker images, serves frontend via nginx, backend serves API + static files.

## Demo Accounts
- Admin: `admin@rohansresources.com` / `admin123`
- Teacher: `teacher@rohansresources.com` / `teacher123`

## Secrets
- `JWT_SECRET` — required at boot, generated dev placeholder (replace for production)
- No external API keys needed — the resource creator and lesson planner use a built-in knowledge base

## Architecture Notes
- Single-origin: Vite dev server proxies `/api` to the backend. No CORS config needed.
- `node:22-slim` needs `openssl` installed for Prisma — handled in the compose command.
- React imports use `import React from 'react'` in all JSX files (classic JSX runtime compatibility).
- Content generator (`backend/src/generator.js`) has a knowledge base of 22 topics, each with labels, banners, displays, flashcards, worksheets, and posters.
- Resource content is stored as JSON in Prisma.
- Download generates a printable HTML file; Print uses `window.print()`.
- Production: `docker-compose.yml` builds from Dockerfiles, frontend served by nginx, backend serves both API and static files in production mode.

## Categories (22)
Spring, Summer, Autumn, Winter, Christmas, Easter, Space, Maths, English, Science, Phonics, Dinosaurs, Animals, Oceans, Weather, History, Geography, Nature, Art, Music, Computing, Classroom
