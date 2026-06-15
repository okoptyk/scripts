# OkOptyk Scripts — guide for editing

Static Astro site. Build: `npm run dev` (local), GitHub Actions → Pages on push to `master`.

> **i18n filename convention:** per-page translations live in `src/pages/<slug>/_i18n.ts`
> (leading underscore — it excludes the file from Astro's routing). Import it as
> `import { t } from './_i18n'`. Never name it `i18n.ts` without the underscore:
> Astro would treat it as an API route and the build would warn/fail.

## To edit the TEXT of a script (e.g. fix Polish wording on "Готовность заказа")
Open ONLY `src/pages/<slug>/_i18n.ts`. Each region has `{ ru, ua, pl }`. Do not
read other pages' files — translations are co-located per page on purpose.
Slug ↔ page map is in `src/config/stages.ts`.

## To add a NEW script/stage
1. Add an entry to `src/config/stages.ts` (slug, navLabel, cardTitle, cardDesc, icon, pathLabel).
2. Add nav/title entries for it in `src/i18n/ui.ts` (ua/pl nav label, titles) and
   `src/i18n/path-labels.ts` (breadcrumb labels).
3. Create `src/pages/<slug>/index.astro` + `src/pages/<slug>/_i18n.ts`
   (copy `gotovnost-zakaza/` as the template).
The navbar, home card, and stage-path breadcrumb update automatically.

## To change the NAVBAR or stage order
Edit `src/config/stages.ts` only. Never hand-edit navigation in pages.

## Layout / chrome (head, navbar, footer, language switcher)
Lives once in `src/layouts/BaseLayout.astro` + `src/components/`. Edit there.

## Styling
All CSS is in `src/styles/global.css` (unchanged from the original). The hero
image URL hard-codes the Pages base path — keep it in sync with `base` in
`astro.config.mjs`.

## Client behavior
- `public/scripts/site-lang.js` — RU/UA/PL site switch (visibility-based).
- `public/scripts/ui.js` — tabs, per-script language switch, manual copy buttons.
- `public/scripts/copy.js` — auto "Copy" buttons on `.msg.consultant` lines
  (enabled per page via the `copy` prop on `<BaseLayout>` → `data-copy`).

## Conventions
- Quotes: guillemets «…». Never add wrapping quotes inside copyable template text.
- Slugs: latin only.
