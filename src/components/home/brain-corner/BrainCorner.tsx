"use client";

import { motion } from "motion/react";
import { COPY } from "@/components/home/brain-corner/copy";
import LoanwordsTile from "@/components/home/brain-corner/LoanwordsTile";
import Quiz from "@/components/home/brain-corner/Quiz";
import { dots, tile, tileReveal } from "@/components/home/brain-corner/styles";
import Tag from "@/components/home/brain-corner/Tag";
import { Accent, Kicker } from "@/components/shared/Heading";
import type { Locale } from "@/data/i18n";

export default function BrainCorner({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        {...tileReveal(0)}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <Kicker>{t.kicker}</Kicker>
          <p className="mt-4 max-w-xl font-display text-3xl font-extrabold text-balance text-white sm:text-4xl">
            {t.title} <Accent>{t.accent}</Accent>
          </p>
        </div>
        <p className="max-w-sm text-brand-ivory/65 md:text-right">{t.body}</p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div {...tileReveal(1)} className={`${tile} sm:col-span-2 lg:row-span-2`}>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="relative h-full">
            <Quiz t={t} locale={locale} />
          </div>
        </motion.div>

        {t.facts.map((fact, i) => (
          <motion.div
            key={fact.big}
            {...tileReveal(i + 2)}
            className={`${tile} ${fact.wide ? "sm:col-span-2" : ""} group`}
          >
            <div className={dots} />
            <div className="relative">
              <Tag>{fact.tag}</Tag>
              <p className="mt-4 bg-linear-to-br from-brand-gold to-brand-red bg-clip-text font-display text-5xl font-extrabold text-transparent transition-transform duration-300 group-hover:translate-x-1">
                {fact.big}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ivory/70">{fact.text}</p>
            </div>
          </motion.div>
        ))}

        <LoanwordsTile t={t} index={5} />
      </div>
    </section>
  );
}
