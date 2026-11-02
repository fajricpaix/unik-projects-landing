import type { Locale } from "@/data/i18n";
import { SITE_NAME, SITE_URL } from "@/data/site";

export function legalJsonLd({
  url,
  title,
  description,
  updated,
  locale,
  homeLabel,
}: {
  url: string;
  title: string;
  description: string;
  updated: string;
  locale: Locale;
  homeLabel: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: locale === "en" ? "en" : "id-ID",
        dateModified: updated,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeLabel, item: SITE_URL },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };
}
