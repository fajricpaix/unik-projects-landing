import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import type { LegalCopy, LegalPath } from "@/components/legal/copy";
import { localePath, type Locale } from "@/data/i18n";
import { SITE_NAME } from "@/data/site";

export default function LegalHeader({
  path,
  locale,
  title,
  intro,
  updated,
  t,
}: {
  path: LegalPath;
  locale: Locale;
  title: string;
  intro: string;
  updated: string;
  t: LegalCopy;
}) {
  const other = locale === "en" ? "id" : "en";
  return (
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
          <Link href={localePath(locale, "/")} className="hover:text-brand-gold">
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
        <p className="mt-5 max-w-2xl leading-relaxed text-brand-ivory/70">{intro}</p>
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
            href={localePath(other, path)}
            hrefLang={other}
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
  );
}
