// Server-only: VERCEL_PROJECT_PRODUCTION_URL is not exposed to the browser.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "Unik Projects";
export const SITE_DESCRIPTION =
  "Etalase aplikasi dan game Android buatan Unik Projects — studio indie Indonesia. Main TekaTekiYuk!, game teka-teki silang seru, dan kelola toko pakai Catetin.";
export const SITE_DESCRIPTION_EN =
  "A showcase of Android apps and games by Unik Projects, an indie studio from Indonesia. Play TekaTekiYuk!, a fun crossword puzzle game, and run your shop with Catetin.";
export const CONTACT_EMAIL = "unik.projects.id@gmail.com";
// Legal pages (each also has an English version at `${path}/en`) and their last-updated date.
export const LEGAL_UPDATED = {
  "/privacy-policy": "2026-07-30",
  "/terms": "2026-10-01",
} as const;
