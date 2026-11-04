"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AppCard from "@/components/app-shelf/AppCard";
import CategoryTabs, { ALL } from "@/components/app-shelf/CategoryTabs";
import ComingSoonCard from "@/components/app-shelf/ComingSoonCard";
import { COPY } from "@/components/app-shelf/copy";
import type { App } from "@/data/apps";
import type { Locale } from "@/data/i18n";

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
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * 404, behavior: "smooth" });
  const visible =
    active === ALL ? apps : apps.filter((app) => app.category === active);
  const count = (category: string) =>
    category === ALL
      ? apps.length
      : apps.filter((app) => app.category === category).length;

  return (
    <div>
      {categories.length > 2 && (
        <CategoryTabs
          categories={categories}
          active={active}
          onChange={setActive}
          count={count}
          allLabel={t.all}
        />
      )}

      {/* One swipeable row on every screen; arrows for mouse users. */}
      <div className="relative">
        <div className="mb-3 hidden justify-end gap-2 sm:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              aria-label={dir < 0 ? t.prev : t.next}
              onClick={() => scroll(dir)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-brand-gold/40 hover:text-brand-gold"
            >
              {dir < 0 ? "←" : "→"}
            </button>
          ))}
        </div>
        <motion.div
          ref={track}
          layout
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 pt-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((app) => (
              <AppCard key={app.slug} app={app} locale={locale} t={t} />
            ))}
            {showComingSoon && active === ALL && (
              <ComingSoonCard key="coming-soon" locale={locale} t={t} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
