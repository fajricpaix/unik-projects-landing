import { notFound } from "next/navigation";
import * as motion from "motion/react-client";
import AppHero from "@/components/app-detail/AppHero";
import BehindTheScenes from "@/components/app-detail/BehindTheScenes";
import { COPY } from "@/components/app-detail/copy";
import FeatureList from "@/components/app-detail/FeatureList";
import { appJsonLd } from "@/components/app-detail/json-ld";
import { loadSnippets } from "@/components/app-detail/snippets";
import AppShelf from "@/components/app-shelf/AppShelf";
import JsonLd from "@/components/shared/JsonLd";
import MobileCta from "@/components/shared/MobileCta";
import { getApp, getApps } from "@/data/apps";
import type { Locale } from "@/data/i18n";
import { reveal } from "@/lib/motion";

export default async function AppDetail({ slug, locale }: { slug: string; locale: Locale }) {
  const app = getApp(slug, locale);
  if (!app) notFound();
  const t = COPY[locale];
  const files = await loadSnippets(app);

  return (
    <div lang={locale}>
      <JsonLd data={appJsonLd(app, locale, t)} />
      <AppHero app={app} locale={locale} t={t} />
      <FeatureList title={t.features} features={app.features} />
      {files.length > 0 && <BehindTheScenes app={app} files={files} t={t} />}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">{t.others}</h2>
        <motion.div {...reveal()} className="mt-6">
          <AppShelf
            apps={getApps(locale).filter((other) => other.slug !== app.slug)}
            locale={locale}
          />
        </motion.div>
      </section>

      {app.playUrl && <MobileCta href={app.playUrl} label={`Download ${app.title}`} />}
    </div>
  );
}
