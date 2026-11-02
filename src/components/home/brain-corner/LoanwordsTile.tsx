"use client";

import { motion } from "motion/react";
import type { BrainCopy } from "@/components/home/brain-corner/copy";
import { dots, tile, tileReveal } from "@/components/home/brain-corner/styles";
import Tag from "@/components/home/brain-corner/Tag";

export default function LoanwordsTile({ t, index }: { t: BrainCopy; index: number }) {
  return (
    <motion.div {...tileReveal(index)} className={`${tile} sm:col-span-2 lg:col-span-4`}>
      <div className={dots} />
      <div className="relative lg:flex lg:items-center lg:gap-8">
        <div className="lg:w-64 lg:shrink-0">
          <Tag>{t.loanTag}</Tag>
          <p className="mt-4 text-sm text-brand-ivory/70">{t.loanBody}</p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2 lg:mt-0">
          {t.loanwords.map((w) => (
            <li
              key={w.word}
              className="rounded-xl border border-white/10 bg-brand-black/60 px-3 py-2 text-sm transition-colors hover:border-brand-gold/40"
            >
              <span className="font-semibold text-white">{w.word}</span>
              <span className="ml-2 text-xs text-brand-gold/80">← {w.from}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
