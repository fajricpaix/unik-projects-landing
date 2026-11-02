"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ShelfCopy } from "@/components/app-shelf/copy";
import LottiePlayer from "@/components/shared/LottiePlayer";
import { localePath, type Locale } from "@/data/i18n";
import { pop } from "@/lib/motion";

// `ref` comes from AnimatePresence's popLayout, which measures the card.
export default function ComingSoonCard({
  locale,
  t,
  ref,
}: {
  locale: Locale;
  t: ShelfCopy;
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <motion.article
      ref={ref}
      {...pop}
      className="relative flex w-[85%] shrink-0 snap-center flex-col items-center gap-4 overflow-hidden rounded-3xl border border-dashed border-brand-gold/30 bg-linear-to-r from-brand-red-deep/60 via-brand-black/40 to-brand-black/40 p-6 text-center sm:col-span-2 sm:w-auto sm:flex-row sm:gap-6 sm:px-8 sm:text-left"
    >
      <div className="absolute -left-10 h-40 w-40 rounded-full bg-brand-gold/10 blur-3xl" />
      <LottiePlayer src="/lottie/rocket.json" className="relative h-24 w-24 shrink-0" />
      <div className="relative flex-1">
        <h3 className="text-lg font-bold text-white">{t.nextTitle}</h3>
        <p className="mt-1 text-sm text-brand-ivory/60">{t.nextBody}</p>
      </div>
      <Link
        href={localePath(locale, "/#kontak")}
        className="relative shrink-0 rounded-full border border-brand-gold/50 px-5 py-2.5 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
      >
        {t.follow}
      </Link>
    </motion.article>
  );
}
