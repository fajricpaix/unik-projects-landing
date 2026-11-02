import * as motion from "motion/react-client";
import AppShelf from "@/components/app-shelf/AppShelf";
import type { HomeCopy } from "@/components/home/copy";
import { Accent, Kicker } from "@/components/shared/Heading";
import type { App } from "@/data/apps";
import type { Locale } from "@/data/i18n";
import { reveal } from "@/lib/motion";

export default function ShelfSection({ t, apps, locale }: { t: HomeCopy; apps: App[]; locale: Locale }) {
  return (
    <section id="apps" className="relative isolate overflow-hidden bg-brand-surface py-24">
      <div className="absolute -top-40 left-1/2 -z-10 h-80 w-160 -translate-x-1/2 rounded-full bg-brand-red/15 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...reveal()} className="text-center">
          <Kicker centered>{t.shelf}</Kicker>
          <p className="mt-4 text-3xl font-display font-extrabold text-white sm:text-5xl">
            {t.shelfTitle} <Accent>{t.shelfAccent}</Accent>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-brand-ivory/70">{t.shelfBody}</p>
        </motion.div>
        <motion.div {...reveal()} className="mt-10">
          <AppShelf apps={apps} locale={locale} />
        </motion.div>
      </div>
    </section>
  );
}
