"use client";

import { useState } from "react";
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

      {/* Mobile: swipeable shelf. Desktop: grid. */}
      <motion.div
        layout
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0"
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
  );
}
