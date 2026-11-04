"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AppCardActions from "@/components/app-shelf/AppCardActions";
import AppCardBanner from "@/components/app-shelf/AppCardBanner";
import type { ShelfCopy } from "@/components/app-shelf/copy";
import type { App } from "@/data/apps";
import type { Locale } from "@/data/i18n";
import { pop } from "@/lib/motion";

// `ref` comes from AnimatePresence's popLayout, which measures the card.
export default function AppCard({
  app,
  locale,
  t,
  ref,
}: {
  app: App;
  locale: Locale;
  t: ShelfCopy;
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <motion.article
      ref={ref}
      {...pop}
      whileHover={{ y: -6 }}
      className="group relative flex w-[85%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-white/10 bg-brand-black/70 transition-colors duration-300 hover:border-brand-gold/40 sm:w-96"
    >
      <AppCardBanner app={app} status={app.playUrl ? t.available : t.soon} />

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
            <h3 className="text-xl font-display font-extrabold text-white">{app.title}</h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
              {t.kind(app.category)}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-brand-ivory/75">{app.tagline}</p>
        <dl className="mt-5 grid grid-cols-3 gap-2">
          {app.stats.slice(0, 3).map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/5 bg-white/5 px-2 py-2.5 text-center"
            >
              <dd className="text-base font-display font-extrabold text-white">{stat.value}</dd>
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
        <AppCardActions app={app} locale={locale} t={t} />
      </div>
    </motion.article>
  );
}
