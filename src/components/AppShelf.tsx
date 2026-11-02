"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { localePath, type Locale } from "@/data/i18n";
import type { App } from "@/data/site";
import LottiePlayer from "./LottiePlayer";

const ALL = "all";

const COPY = {
  id: {
    all: "Semua",
    available: "Tersedia",
    soon: "Segera Hadir",
    kind: (category: string) => `${category} Android`,
    logo: (title: string) => `Logo ${title}`,
    detail: "Detail",
    nextTitle: "Karya berikutnya sedang diracik",
    nextBody:
      "App & game baru lagi dimasak di workshop. Ikuti sosial media kami biar nggak ketinggalan rilisnya!",
    follow: "Pantau Update",
  },
  en: {
    all: "All",
    available: "Available",
    soon: "Coming Soon",
    kind: (category: string) => `Android ${category}`,
    logo: (title: string) => `${title} logo`,
    detail: "Details",
    nextTitle: "Our next creation is in the works",
    nextBody:
      "New apps & games are cooking in the workshop. Follow our socials so you don't miss the launch!",
    follow: "Stay Updated",
  },
};

// Simple Icons: Google Play (24x24 viewBox).
const PLAY_ICON =
  "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z";

const pop = {
  layout: true,
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
  transition: { duration: 0.3 },
} as const;

export default function AppShelf({
  apps,
  locale,
  showComingSoon = true,
}: {
  apps: App[];
  locale: Locale;
  showComingSoon?: boolean;
}) {
  const t = COPY[locale];
  const categories = [ALL, ...new Set(apps.map((app) => app.category))];
  const [active, setActive] = useState(ALL);
  const visible =
    active === ALL ? apps : apps.filter((app) => app.category === active);
  const count = (category: string) =>
    category === ALL
      ? apps.length
      : apps.filter((app) => app.category === category).length;

  return (
    <div>
      {categories.length > 2 && (
        <div className="mb-10 flex justify-center">
          <div
            className="inline-flex gap-1 rounded-full border border-white/10 bg-brand-black/60 p-1.5 backdrop-blur-sm"
            role="tablist"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={`relative isolate flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === category
                    ? "text-brand-black"
                    : "text-brand-ivory/70 hover:text-white"
                }`}
              >
                {active === category && (
                  <motion.span
                    layoutId="shelf-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-gold"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {category === ALL ? t.all : category}
                <span
                  className={`rounded-full px-1.5 text-[10px] font-bold ${
                    active === category
                      ? "bg-brand-black/15"
                      : "bg-white/10 text-brand-ivory/60"
                  }`}
                >
                  {count(category)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile: swipeable shelf. Desktop: grid. */}
      <motion.div
        layout
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((app) => (
            <motion.article
              key={app.slug}
              {...pop}
              whileHover={{ y: -6 }}
              className="group relative flex w-[85%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-white/10 bg-brand-black/70 transition-colors duration-300 hover:border-brand-gold/40 sm:w-auto"
            >
              {/* Banner */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-linear-to-br from-brand-red-deep via-brand-surface to-brand-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,239,228,0.08)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)] bg-size-[18px_18px]" />
                <div className="absolute h-40 w-40 rounded-full bg-brand-gold/10 blur-3xl transition-all duration-500 group-hover:h-56 group-hover:w-56 group-hover:bg-brand-gold/20" />
                <LottiePlayer
                  src={app.lottie}
                  className="relative h-36 w-36 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-brand-black/70 px-3 py-1 text-[11px] font-semibold text-brand-ivory backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    {app.playUrl && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex h-2 w-2 rounded-full ${
                        app.playUrl ? "bg-emerald-400" : "bg-brand-gold"
                      }`}
                    />
                  </span>
                  {app.playUrl ? t.available : t.soon}
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-black">
                  {app.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-end gap-4">
                  <Image
                    src={app.logo}
                    alt={t.logo(app.title)}
                    width={80}
                    height={80}
                    className="relative -mt-16 h-20 w-20 rounded-2xl shadow-xl shadow-black/50 ring-4 ring-brand-black transition-transform duration-300 group-hover:-rotate-3"
                  />
                  <div className="pb-1">
                    <h3 className="text-xl font-display font-extrabold text-white">
                      {app.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      {t.kind(app.category)}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-ivory/75">
                  {app.tagline}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-2">
                  {app.stats.slice(0, 3).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 bg-white/5 px-2 py-2.5 text-center"
                    >
                      <dd className="text-base font-display font-extrabold text-white">
                        {stat.value}
                      </dd>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-brand-ivory/50">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
                <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                  {app.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature.title}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-brand-ivory/70"
                    >
                      {feature.title}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-[11px] text-brand-gold/70">
                  {"</>"} {app.stack.slice(0, 3).join(" · ")}
                </p>
                <div className="mt-6 flex gap-2">
                  {app.playUrl ? (
                    <a
                      href={app.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gold px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-brand-black transition-transform hover:scale-[1.03]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d={PLAY_ICON} />
                      </svg>
                      Google Play
                    </a>
                  ) : (
                    <span className="flex-1 rounded-full border border-dashed border-brand-gold/40 px-4 py-2.5 text-center text-sm font-semibold whitespace-nowrap text-brand-gold">
                      {t.soon}
                    </span>
                  )}
                  <Link
                    href={localePath(locale, `/apps/${app.slug}`)}
                    className="group/detail inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white sm:px-5 transition-colors hover:border-brand-red hover:bg-brand-red/15"
                  >
                    {t.detail}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover/detail:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}

          {showComingSoon && active === ALL && (
            <motion.article
              key="coming-soon"
              {...pop}
              className="relative flex w-[85%] shrink-0 snap-center flex-col items-center gap-4 overflow-hidden rounded-3xl border border-dashed border-brand-gold/30 bg-linear-to-r from-brand-red-deep/60 via-brand-black/40 to-brand-black/40 p-6 text-center sm:col-span-2 sm:w-auto sm:flex-row sm:gap-6 sm:px-8 sm:text-left"
            >
              <div className="absolute -left-10 h-40 w-40 rounded-full bg-brand-gold/10 blur-3xl" />
              <LottiePlayer
                src="/lottie/rocket.json"
                className="relative h-24 w-24 shrink-0"
              />
              <div className="relative flex-1">
                <h3 className="text-lg font-bold text-white">
                  {t.nextTitle}
                </h3>
                <p className="mt-1 text-sm text-brand-ivory/60">
                  {t.nextBody}
                </p>
              </div>
              <Link
                href={localePath(locale, "/#kontak")}
                className="relative shrink-0 rounded-full border border-brand-gold/50 px-5 py-2.5 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                {t.follow}
              </Link>
            </motion.article>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
