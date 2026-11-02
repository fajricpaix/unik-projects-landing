import type { Metadata } from "next";
import { COPY } from "@/components/home/copy";
import { localePath, type Locale } from "@/data/i18n";
import { SITE_NAME } from "@/data/site";

export function homeMetadata(locale: Locale): Metadata {
  const t = COPY[locale];
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: { id: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: localePath(locale, "/"),
      locale: t.ogLocale,
      alternateLocale: locale === "en" ? "id_ID" : "en_US",
      title: t.title,
      description: t.description,
      // A page-level openGraph replaces the root one, so re-point to app/opengraph-image.
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
  };
}
