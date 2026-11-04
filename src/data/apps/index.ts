import { catetin } from "@/data/apps/catetin";
import { tekatekiyuk } from "@/data/apps/tekatekiyuk";
import { ularTanggaCerdas } from "@/data/apps/ular-tangga-cerdas";
import type { App } from "@/data/apps/types";
import type { Locale } from "@/data/i18n";

export type { App, Snippet } from "@/data/apps/types";

export const APPS: App[] = [tekatekiyuk, catetin, ularTanggaCerdas];

function localize(app: App, locale: Locale): App {
  if (locale === "id") return app;
  const { notes, ...copy } = app.en;
  return {
    ...app,
    ...copy,
    category: app.category === "Aplikasi" ? "App" : app.category,
    snippets: app.snippets.map((snippet, i) => ({ ...snippet, note: notes[i] })),
  };
}

export const getApps = (locale: Locale) => APPS.map((app) => localize(app, locale));

export const getApp = (slug: string, locale: Locale = "id") => {
  const app = APPS.find((a) => a.slug === slug);
  return app && localize(app, locale);
};
