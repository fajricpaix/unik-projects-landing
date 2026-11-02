import type { MetadataRoute } from "next";
import { APPS } from "@/data/apps";
import { localePath } from "@/data/i18n";
import { LEGAL_UPDATED, SITE_URL } from "@/data/site";

type Entry = Omit<MetadataRoute.Sitemap[number], "url" | "alternates">;

// One entry per language, each pointing at its twin.
function bothLanguages(path: string, entry: Entry): MetadataRoute.Sitemap {
  const languages = {
    id: `${SITE_URL}${path}`,
    en: `${SITE_URL}${localePath("en", path)}`,
  };
  return Object.values(languages).map((url) => ({
    url,
    ...entry,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...bothLanguages("/", { changeFrequency: "weekly", priority: 1 }),
    ...APPS.flatMap((app) =>
      bothLanguages(`/apps/${app.slug}`, { changeFrequency: "monthly", priority: 0.9 }),
    ),
    ...Object.entries(LEGAL_UPDATED).flatMap(([path, updated]) =>
      bothLanguages(path, {
        lastModified: updated,
        changeFrequency: "yearly",
        priority: 0.3,
      }),
    ),
  ];
}
