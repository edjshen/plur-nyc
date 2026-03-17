# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository reality (important)
- This branch is a **built static export** of a Next.js App Router site, not the editable source tree.
- Only `gh-pages` exists in git history here (no separate source branch in this clone).
- There is no root `package.json`, no app source (`app/`, `src/`), and no configured lint/test scripts in this checkout.

## Commands used in this repo
Because this is static output, development commands are focused on previewing and validating exported files.

- Serve the site locally from repository root:
  - `python3 -m http.server 4173`
  - Then open `http://localhost:4173/`
- Quick sanity check of exported route entrypoints:
  - `ls -la index.html 404.html team/index.html events/index.html community/index.html matchmaker/index.html`
- Inspect structured event data used by the site:
  - `cat data/events.json`
- Inspect Next.js export/build metadata:
  - `cat .next/diagnostics/framework.json`
  - `cat .next/routes-manifest.json`
  - `cat .next/required-server-files.json`

## Build / lint / test status
- No build/lint/test commands are runnable from this branch because source configs and package scripts are not present.
- If a future commit adds editable source files (for example, `package.json` plus `app/`), prefer documented npm/pnpm scripts from that source tree and update this file accordingly.

## High-level architecture
- Framework/runtime: Next.js App Router static export (`output: "export"`; trailing slash enabled), evidenced by `.next/required-server-files.json` and `.next/diagnostics/framework.json`.
- Public site is pre-rendered into static HTML route folders:
  - `/` -> `index.html`
  - `/team/` -> `team/index.html`
  - `/events/` -> `events/index.html`
  - `/community/` -> `community/index.html`
  - `/matchmaker/` -> `matchmaker/index.html`
  - 404 variants at `404.html`, `404/index.html`, and `_not-found/index.html`
- Shared client assets and CSS are under `_next/static/...`; page-specific behavior is chunked JavaScript referenced from each route HTML.
- Build artifacts and manifests live under `.next/`:
  - Route and prerender topology: `.next/routes-manifest.json`, `.next/prerender-manifest.json`
  - App route mapping metadata: `.next/app-path-routes-manifest.json`, `.next/server/app-paths-manifest.json`
  - Export bookkeeping: `.next/export-detail.json`
- Content/data:
  - `data/events.json` stores structured event records (IDs + `fields` payloads) and is a key non-HTML data source in this branch.
- Static media and branding assets are checked in at repository root and subfolders (for example `hero/`, `motifs.svg`, `favicon.ico`).

## Working guidance for future agents
- Treat files in this branch as generated output unless explicitly told to patch static HTML/data directly.
- For product/content edits, ask whether the user wants:
  1) a direct patch to exported artifacts in this branch, or  
  2) changes in the original source repository/branch followed by a fresh export.
