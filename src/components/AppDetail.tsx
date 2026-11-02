import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as motion from "motion/react-client";
import { codeToHtml } from "shiki";
import AppShelf from "@/components/AppShelf";
import CodeEditor from "@/components/CodeEditor";
import LottiePlayer from "@/components/LottiePlayer";
import MobileCta from "@/components/MobileCta";
import { localePath, type Locale } from "@/data/i18n";
import { SITE_NAME, SITE_URL, getApp, getApps } from "@/data/site";

const COPY = {
  id: {
    kind: (category: string) => `${category} Android`,
    logo: (title: string) => `Logo ${title}`,
    home: "Beranda",
    showcase: "Etalase",
    download: "Download di Google Play",
    soon: "Segera hadir di Google Play",
    features: "Fitur",
    behind: "Di balik layar",
    peek: (title: string) => `Intip kode asli ${title}`,
    peekBody: (title: string) =>
      `Potongan kode langsung dari repo ${title}. Pilih tab untuk melihat bagian lain.`,
    lines: "baris",
    others: "App lainnya",
    inLanguage: "id-ID",
    ogLocale: "id_ID",
  },
  en: {
    kind: (category: string) => `Android ${category}`,
    logo: (title: string) => `${title} logo`,
    home: "Home",
    showcase: "Showcase",
    download: "Get it on Google Play",
    soon: "Coming soon to Google Play",
    features: "Features",
    behind: "Behind the scenes",
    peek: (title: string) => `A peek at ${title}'s real code`,
    peekBody: (title: string) =>
      `Code excerpts straight from the ${title} repo. Pick a tab to see other parts.`,
    lines: "lines",
    others: "More apps",
    inLanguage: "en",
    ogLocale: "en_US",
  },
};

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

export default async function AppDetail({ slug, locale }: { slug: string; locale: Locale }) {
  const app = getApp(slug, locale);
  if (!app) notFound();
  const t = COPY[locale];

  // Highlighted at build time (static params), so no highlighter ships to the browser.
  const files = await Promise.all(
    app.snippets.map(async (snippet) => {
      const code = (
        await readFile(
          path.join(process.cwd(), "src/data/snippets", app.slug, snippet.file),
          "utf8",
        )
      ).trimEnd();
      return {
        ...snippet,
        lines: code.split("\n").length,
        html: await codeToHtml(code, { lang: snippet.lang, theme: "vesper" }),
      };
    }),
  );

  const jsonLd = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative isolate overflow-hidden">
        <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:py-20 md:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="text-sm text-brand-ivory/50" aria-label="Breadcrumb">
              <Link href={localePath(locale, "/")} className="hover:text-brand-gold">
                {t.home}
              </Link>{" "}
              /{" "}
              <Link href={localePath(locale, "/#apps")} className="hover:text-brand-gold">
                {t.showcase}
              </Link>{" "}
              / <span className="text-brand-ivory/80">{app.title}</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src={app.logo}
                alt={t.logo(app.title)}
                width={88}
                height={88}
                priority
                className="h-22 w-22 rounded-2xl shadow-lg shadow-brand-red/20"
              />
              <div>
                <h1 className="text-3xl font-display font-extrabold text-white sm:text-5xl">
                  {app.title}
                </h1>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {t.kind(app.category)} · {SITE_NAME}
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg font-medium text-white">{app.tagline}</p>
            <p className="mt-3 leading-relaxed text-brand-ivory/75">
              {app.description}
            </p>
            <div className="mt-8">
              {app.playUrl ? (
                <a
                  href={app.playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
                >
                  {t.download}
                </a>
              ) : (
                <span className="inline-block rounded-full border border-brand-gold/30 px-8 py-3 text-sm font-semibold text-brand-gold">
                  {t.soon}
                </span>
              )}
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-y-4 divide-white/10 sm:grid-cols-4 sm:divide-x rounded-2xl border border-white/10 bg-brand-black/40 py-4 backdrop-blur-sm">
              {app.stats.map((stat) => (
                <div key={stat.label} className="px-2 text-center">
                  <dd className="text-lg font-display font-extrabold text-white sm:text-2xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-ivory/50 sm:text-xs">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-xs"
          >
            <div className="absolute inset-6 rounded-full bg-brand-gold/10 blur-2xl" />
            <LottiePlayer src={app.lottie} className="relative h-full w-full" />
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
            {t.features}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {app.features.map((feature, i) => (
              <motion.li
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-brand-black/60 p-6 transition-colors hover:border-brand-gold/30"
              >
                <span className="mb-3 block text-xl text-brand-gold">✦</span>
                <h3 className="font-bold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-ivory/65">
                  {feature.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        <div className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.6fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
              {t.behind}
            </h2>
            <p className="mt-4 text-2xl font-display font-extrabold text-white sm:text-3xl">
              {t.peek(app.title)}
            </p>
            <p className="mt-3 leading-relaxed text-brand-ivory/70">
              {t.peekBody(app.title)}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {app.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 font-mono text-xs text-brand-gold"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0"
          >
            <CodeEditor project={app.slug} files={files} linesLabel={t.lines} />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
          {t.others}
        </h2>
        <div className="mt-6">
          <AppShelf
            apps={getApps(locale).filter((other) => other.slug !== app.slug)}
            locale={locale}
          />
        </div>
      </section>

      {app.playUrl && (
        <MobileCta href={app.playUrl} label={`Download ${app.title}`} />
      )}
    </>
  );
}
