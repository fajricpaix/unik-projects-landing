import type { Metadata } from "next";
import { COPY } from "@/components/app-detail/copy";
import { getApp } from "@/data/apps";
import { localePath, type Locale } from "@/data/i18n";
import { SITE_NAME } from "@/data/site";

export function appMetadata(slug: string, locale: Locale): Metadata {
  const app = getApp(slug, locale);
  if (!app) return {};
  const t = COPY[locale];
  const title = `${app.title} — ${t.kind(app.category)}`;
  const path = `/apps/${app.slug}`;
  return {
    title,
    description: `${app.tagline} ${app.description}`.slice(0, 160),
    keywords: app.keywords,
    alternates: {
      canonical: localePath(locale, path),
      languages: { id: path, en: localePath("en", path), "x-default": path },
    },
    openGraph: {
      title,
      description: app.tagline,
      url: localePath(locale, path),
      siteName: SITE_NAME,
      locale: t.ogLocale,
      images: [{ url: app.logo.src, width: app.logo.width, height: app.logo.height }],
    },
    twitter: { card: "summary", title, description: app.tagline },
  };
}
