import type { HomeCopy } from "@/components/home/copy";
import type { App } from "@/data/apps";
import { localePath, type Locale } from "@/data/i18n";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/data/site";
import { SOCIALS } from "@/data/socials";

export function homeJsonLd(locale: Locale, t: HomeCopy, apps: App[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: CONTACT_EMAIL,
        // GitHub is the founder's personal profile, not the org's.
        sameAs: SOCIALS.filter((s) => s.name !== "GitHub").map((s) => s.href),
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: t.description,
        inLanguage: t.inLanguage,
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "ItemList",
        name: t.listName,
        itemListElement: apps.map((app, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}${localePath(locale, `/apps/${app.slug}`)}`,
          name: app.title,
        })),
      },
      {
        "@type": "FAQPage",
        inLanguage: t.inLanguage,
        mainEntity: t.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}
