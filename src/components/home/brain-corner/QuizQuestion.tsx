"use client";

import { motion } from "motion/react";
import type { BrainCopy } from "@/components/home/brain-corner/copy";

const optionStyle = (i: number, picked: number | null, answer: number) =>
  picked === null
    ? "border-white/10 hover:border-brand-gold/50 hover:bg-white/5"
    : i === answer
      ? "border-brand-gold bg-brand-gold/15 text-brand-gold"
      : i === picked
        ? "border-brand-red bg-brand-red/15 text-brand-ivory/70"
        : "border-white/5 text-brand-ivory/40";

export default function QuizQuestion({
  item,
  picked,
  isLast,
  onPick,
  onNext,
  t,
}: {
  item: BrainCopy["quiz"][number];
  picked: number | null;
  isLast: boolean;
  onPick: (i: number) => void;
  onNext: () => void;
  t: BrainCopy;
}) {
  const correct = picked === item.answer;
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.25 }}
      className="flex flex-1 flex-col pt-6"
    >
      <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">{item.q}</p>
      <div className="mt-5 grid gap-2.5">
        {item.options.map((opt, i) => (
          <button
            key={opt}
            type="button"
            onClick={() => onPick(i)}
            disabled={picked !== null}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium text-brand-ivory transition-colors ${optionStyle(i, picked, item.answer)}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-bold">
              {"ABC"[i]}
            </span>
            {opt}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="mt-auto">
        {picked !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="text-sm leading-relaxed text-brand-ivory/70">
              <strong className={correct ? "text-brand-gold" : "text-brand-red"}>
                {correct ? t.right : t.wrong}
              </strong>
              {item.why}
            </p>
            <button
              type="button"
              onClick={onNext}
              className="shrink-0 rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
            >
              {isLast ? t.score : t.next}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
