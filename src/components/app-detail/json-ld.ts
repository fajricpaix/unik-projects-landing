import type { DetailCopy } from "@/components/app-detail/copy";
import type { App } from "@/data/apps";
import { localePath, type Locale } from "@/data/i18n";
import { SITE_NAME, SITE_URL } from "@/data/site";

export function appJsonLd(app: App, locale: Locale, t: DetailCopy) {
  return {
    "@context": "https://schema.org",
    "@type": app.category === "Game" ? "VideoGame" : "MobileApplication",
    name: app.title,
    description: app.description,
    image: `${SITE_URL}${app.logo.src}`,
    url: `${SITE_URL}${localePath(locale, `/apps/${app.slug}`)}`,
    operatingSystem: "ANDROID",
    applicationCategory:
      app.category === "Game" ? "GameApplication" : "BusinessApplication",
    inLanguage: t.inLanguage,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    ...(app.playUrl && { installUrl: app.playUrl, sameAs: app.playUrl }),
  };
}
