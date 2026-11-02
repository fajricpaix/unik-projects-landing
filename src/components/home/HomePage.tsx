import BrainCorner from "@/components/home/brain-corner/BrainCorner";
import { COPY } from "@/components/home/copy";
import HeroSection from "@/components/home/hero/HeroSection";
import { homeJsonLd } from "@/components/home/json-ld";
import AboutSection from "@/components/home/sections/AboutSection";
import ContactSection from "@/components/home/sections/ContactSection";
import FaqSection from "@/components/home/sections/FaqSection";
import ShelfSection from "@/components/home/sections/ShelfSection";
import JsonLd from "@/components/shared/JsonLd";
import MobileCta from "@/components/shared/MobileCta";
import { getApps } from "@/data/apps";
import type { Locale } from "@/data/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const apps = getApps(locale);
  const featured = apps.find((app) => app.playUrl) ?? apps[0];

  return (
    <div lang={locale}>
      <JsonLd data={homeJsonLd(locale, t, apps)} />
      <HeroSection t={t} apps={apps} featured={featured} locale={locale} />
      <BrainCorner locale={locale} />
      <ShelfSection t={t} apps={apps} locale={locale} />
      <AboutSection t={t} appCount={apps.length} />
      <FaqSection t={t} />
      <ContactSection t={t} />
      {featured.playUrl && (
        <MobileCta href={featured.playUrl} label={`Download ${featured.title}`} />
      )}
    </div>
  );
}
