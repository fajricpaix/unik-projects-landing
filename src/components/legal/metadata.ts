import type { Metadata } from "next";
import { TITLES, type LegalPath } from "@/components/legal/copy";
import { localePath, type Locale } from "@/data/i18n";
import { LEGAL_UPDATED, SITE_NAME } from "@/data/site";

export function legalMetadata(
  path: LegalPath,
  locale: Locale,
  description: string,
): Metadata {
  const title = TITLES[path][locale];
  const url = localePath(locale, path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { id: path, en: `${path}/en`, "x-default": path },
    },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_US" : "id_ID",
      alternateLocale: locale === "en" ? "id_ID" : "en_US",
      title: `${title} | ${SITE_NAME}`,
      description,
      modifiedTime: LEGAL_UPDATED[path],
      // A page-level openGraph replaces the root one, so re-point to app/opengraph-image.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
