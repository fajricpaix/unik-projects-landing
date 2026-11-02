"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { BrainCopy } from "@/components/home/brain-corner/copy";
import QuizQuestion from "@/components/home/brain-corner/QuizQuestion";
import QuizResult from "@/components/home/brain-corner/QuizResult";
import Tag from "@/components/home/brain-corner/Tag";
import type { Locale } from "@/data/i18n";

export default function Quiz({ t, locale }: { t: BrainCopy; locale: Locale }) {
  const quiz = t.quiz;
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = step === quiz.length;
  const item = quiz[step];

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === item.answer) setScore((s) => s + 1);
  };
  const next = () => {
    setPicked(null);
    setStep((s) => s + 1);
  };
  const restart = () => {
    setStep(0);
    setPicked(null);
    setScore(0);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <Tag>{t.quizTag}</Tag>
        <span className="text-xs font-semibold text-brand-ivory/50">
          {done ? t.done : `${step + 1} / ${quiz.length}`}
        </span>
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-brand-gold to-brand-red"
          animate={{ width: `${((done ? quiz.length : step) / quiz.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          <QuizResult
            key="done"
            score={score}
            total={quiz.length}
            onRestart={restart}
            t={t}
            locale={locale}
          />
        ) : (
          <QuizQuestion
            key={step}
            item={item}
            picked={picked}
            isLast={step === quiz.length - 1}
            onPick={pick}
            onNext={next}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
