"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { BrainCopy } from "@/components/home/brain-corner/copy";
import { localePath, type Locale } from "@/data/i18n";

export default function QuizResult({
  score,
  total,
  onRestart,
  t,
  locale,
}: {
  score: number;
  total: number;
  onRestart: () => void;
  t: BrainCopy;
  locale: Locale;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-1 flex-col justify-center py-8 text-center"
    >
      <p className="font-display text-6xl font-extrabold text-brand-gold">
        {score}/{total}
      </p>
      <p className="mt-3 text-brand-ivory/75">{score === total ? t.perfect : t.good}</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-gold/50"
        >
          {t.restart}
        </button>
        <Link
          href={localePath(locale, "/apps/tekatekiyuk")}
          className="rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
        >
          {t.more}
        </Link>
      </div>
    </motion.div>
  );
}
