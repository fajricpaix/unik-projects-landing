import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import flagId from "../../public/flags/id.svg";
import flagGb from "../../public/flags/gb.svg";
import { CONTACT_EMAIL, LEGAL_UPDATED, SITE_NAME, SITE_URL } from "@/data/site";

type LegalPath = keyof typeof LEGAL_UPDATED;
type Locale = "id" | "en";

const TITLES: Record<LegalPath, Record<Locale, string>> = {
  "/privacy-policy": { id: "Kebijakan Privasi", en: "Privacy Policy" },
  "/terms": { id: "Syarat dan Ketentuan", en: "Terms of Service" },
};

const COPY = {
  id: {
    home: "Beranda",
    legal: "Legal",
    updated: "Terakhir diperbarui",
    toc: "Daftar isi",
    summary: "Intinya",
    contact: "Hubungi Kami",
    contactBody: (title: string) =>
      `Ada pertanyaan atau masukan terkait ${title}? Kirim email ke kami.`,
    alsoRead: "Baca juga",
    switchTo: "Read in English",
    switchFlag: flagGb,
  },
  en: {
    home: "Home",
    legal: "Legal",
    updated: "Last updated",
    toc: "Contents",
    summary: "In short",
    contact: "Contact Us",
    contactBody: (title: string) =>
      `Questions or feedback about this ${title}? Send us an email.`,
    alsoRead: "Also read",
    switchTo: "Baca dalam Bahasa Indonesia",
    switchFlag: flagId,
  },
};

const urlFor = (path: LegalPath, locale: Locale) =>
  locale === "en" ? `${path}/en` : path;

export function legalMetadata(
  path: LegalPath,
  locale: Locale,
  description: string,
): Metadata {
  const title = TITLES[path][locale];
  const url = urlFor(path, locale);
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

export type LegalSection = { id: string; title: string; body: React.ReactNode };

export default function LegalPage({
  path,
  locale,
  description,
  intro,
  highlights,
  sections,
}: {
  path: LegalPath;
  locale: Locale;
  description: string;
  intro: string;
  highlights: string[];
  sections: LegalSection[];
}) {
  const t = COPY[locale];
  const title = TITLES[path][locale];
  const url = `${SITE_URL}${urlFor(path, locale)}`;
  const updated = LEGAL_UPDATED[path];
  const other = (Object.keys(TITLES) as LegalPath[]).find((p) => p !== path)!;
  const toc = [...sections, { id: "kontak", title: t.contact }];

  const jsonLd = {
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
          { "@type": "ListItem", position: 1, name: t.home, item: SITE_URL },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };

  const tocList = (
    <ol className="space-y-1 text-sm">
      {toc.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="group flex gap-3 rounded-lg px-3 py-1.5 text-brand-ivory/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="font-mono text-xs leading-5 text-brand-gold/60 group-hover:text-brand-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <article lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="relative isolate overflow-hidden">
        <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="absolute -top-40 -left-40 -z-10 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl px-6 pt-12 pb-12 sm:pt-16 sm:pb-16"
        >
          <nav className="text-sm text-brand-ivory/50" aria-label="Breadcrumb">
            <Link href={locale === "en" ? "/en" : "/"} className="hover:text-brand-gold">
              {t.home}
            </Link>{" "}
            / {t.legal} /{" "}
            <span className="text-brand-ivory/80" aria-current="page">
              {title}
            </span>
          </nav>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            {t.legal} · {SITE_NAME}
          </p>
          <h1 className="mt-5 bg-linear-to-b from-brand-ivory to-brand-ivory/55 bg-clip-text pb-1 text-4xl font-extrabold tracking-tight text-balance text-transparent sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-brand-ivory/70">
            {intro}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-brand-ivory/80">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-brand-red"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {t.updated}:{" "}
              <time dateTime={updated} className="font-semibold text-white">
                {new Intl.DateTimeFormat(locale === "en" ? "en-US" : "id-ID", {
                  dateStyle: "long",
                  timeZone: "UTC",
                }).format(new Date(updated))}
              </time>
            </span>
            <Link
              href={urlFor(path, locale === "en" ? "id" : "en")}
              hrefLang={locale === "en" ? "id" : "en"}
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-4 py-2 font-medium text-brand-gold transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
            >
              <Image
                src={t.switchFlag}
                alt=""
                width={24}
                height={16}
                className="h-4 w-6 rounded-[3px] object-cover ring-1 ring-white/15"
              />
              {t.switchTo}
            </Link>
          </div>
        </motion.div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside>
          <details className="rounded-2xl border border-white/10 bg-brand-surface p-2 lg:hidden">
            <summary className="cursor-pointer px-3 py-2 text-sm font-bold uppercase tracking-widest text-brand-red">
              {t.toc}
            </summary>
            <nav aria-label={t.toc} className="mt-1">
              {tocList}
            </nav>
          </details>
          <nav aria-label={t.toc} className="sticky top-28 hidden lg:block">
            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-brand-red">
              {t.toc}
            </p>
            {tocList}
          </nav>
        </aside>

        <div className="min-w-0">
          <section
            aria-label={t.summary}
            className="rounded-2xl border border-brand-gold/15 bg-brand-surface p-6 sm:p-8"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
              {t.summary}
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-ivory/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold text-[11px] font-bold text-brand-black">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-b border-white/10 py-10"
            >
              <h2 className="flex items-baseline gap-4 text-xl font-bold text-white sm:text-2xl">
                <span className="font-mono text-sm font-medium text-brand-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-brand-ivory/75 sm:pl-10 [&_a]:font-medium [&_a]:text-brand-gold [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-brand-gold/80 [&_li]:marker:text-brand-gold [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                {s.body}
              </div>
            </section>
          ))}

          <section
            id="kontak"
            className="relative isolate mt-12 scroll-mt-28 overflow-hidden rounded-3xl border border-brand-gold/20 bg-linear-to-br from-brand-red-deep to-brand-surface p-8 sm:p-10"
          >
            <div className="absolute -right-16 -bottom-24 -z-10 h-64 w-64 rounded-full bg-brand-red/25 blur-3xl" />
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              {t.contact}
            </h2>
            <p className="mt-3 max-w-lg leading-relaxed text-brand-ivory/70">
              {t.contactBody(title)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block rounded-full bg-brand-gold px-7 py-3 text-center text-sm font-semibold text-brand-black transition-transform hover:scale-105"
              >
                {CONTACT_EMAIL}
              </a>
              <Link
                href={urlFor(other, locale)}
                className="rounded-full border border-brand-red/60 px-7 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-brand-red hover:bg-brand-red/15"
              >
                {t.alsoRead}: {TITLES[other][locale]}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
