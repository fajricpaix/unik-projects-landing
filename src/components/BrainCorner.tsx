"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { localePath, type Locale } from "@/data/i18n";

const COPY = {
  id: {
    quiz: [
      {
        q: "Bahasa Indonesia diikrarkan sebagai bahasa persatuan pada Sumpah Pemuda tahun…",
        options: ["1908", "1928", "1945"],
        answer: 1,
        why: "28 Oktober 1928, di Kongres Pemuda II. Tanggal ini diperingati sebagai Hari Sumpah Pemuda.",
      },
      {
        q: "Kata “sepatu” yang kita pakai sehari-hari berasal dari bahasa…",
        options: ["Belanda", "Arab", "Portugis"],
        answer: 2,
        why: "Dari kata Portugis “sapato”, dibawa pedagang Portugis ke Nusantara sejak abad ke-16.",
      },
      {
        q: "Atap runcing melengkung pada rumah gadang Minangkabau disebut…",
        options: ["Gonjong", "Joglo", "Limasan"],
        answer: 0,
        why: "Gonjong, bentuknya sering dikaitkan dengan tanduk kerbau. Ada juga di logo kami!",
      },
      {
        q: "Teka-teki silang (TTS) pertama di dunia terbit tahun…",
        options: ["1913", "1950", "1889"],
        answer: 0,
        why: "Dibuat Arthur Wynne dan terbit di koran New York World pada 21 Desember 1913.",
      },
    ],
    facts: [
      {
        tag: "Bahasa",
        big: "718",
        text: "bahasa daerah tercatat di Indonesia oleh Badan Bahasa, salah satu yang terbanyak di dunia.",
      },
      {
        tag: "Alam",
        big: "91 cm",
        text: "Pertumbuhan bambu dalam sehari. Beberapa spesiesnya termasuk tanaman tercepat di bumi.",
      },
      {
        tag: "Budaya",
        big: "2009",
        text: "Batik diakui UNESCO sebagai Warisan Budaya Takbenda pada 2 Oktober, kini Hari Batik Nasional.",
        wide: true,
      },
    ],
    loanwords: [
      { word: "kursi", from: "Arab" },
      { word: "sepatu", from: "Portugis" },
      { word: "kantor", from: "Belanda" },
      { word: "teh", from: "Hokkien" },
      { word: "jendela", from: "Portugis" },
    ],
    quizTag: "Kuis Kilat",
    done: "Selesai",
    perfect: "Sempurna! Otakmu lagi panas-panasnya.",
    good: "Lumayan! Sekarang kamu tahu jawaban yang tadi meleset.",
    restart: "Ulangi",
    more: "Asah lagi dengan TTS",
    right: "Benar! ",
    wrong: "Kurang tepat. ",
    score: "Lihat skor",
    next: "Lanjut →",
    kicker: "Pojok Cerdas",
    title: "Main Sebentar,",
    accent: "Pulang Lebih Pintar",
    body: "Fakta seru tentang bahasa, sejarah, dan budaya Indonesia. Coba kuis kilatnya, berapa yang bisa kamu jawab?",
    loanTag: "Kata Serapan",
    loanBody: "Banyak kata yang terasa “asli” ternyata pendatang:",
  },
  en: {
    quiz: [
      {
        q: "Indonesian was pledged as the language of unity in the Youth Pledge (Sumpah Pemuda) of…",
        options: ["1908", "1928", "1945"],
        answer: 1,
        why: "October 28, 1928, at the Second Youth Congress. The date is celebrated as Youth Pledge Day.",
      },
      {
        q: "The everyday Indonesian word “sepatu” (shoe) comes from…",
        options: ["Dutch", "Arabic", "Portuguese"],
        answer: 2,
        why: "From the Portuguese “sapato”, brought to the archipelago by Portuguese traders from the 16th century.",
      },
      {
        q: "The pointed, curved roof of a Minangkabau rumah gadang is called…",
        options: ["Gonjong", "Joglo", "Limasan"],
        answer: 0,
        why: "Gonjong. Its shape is often linked to buffalo horns, and you can spot it in our logo too!",
      },
      {
        q: "The world's first crossword puzzle was published in…",
        options: ["1913", "1950", "1889"],
        answer: 0,
        why: "Created by Arthur Wynne and published in the New York World newspaper on December 21, 1913.",
      },
    ],
    facts: [
      {
        tag: "Language",
        big: "718",
        text: "regional languages recorded in Indonesia by the Language Agency, one of the highest counts in the world.",
      },
      {
        tag: "Nature",
        big: "91 cm",
        text: "How much bamboo can grow in a single day. Some species are among the fastest-growing plants on earth.",
      },
      {
        tag: "Culture",
        big: "2009",
        text: "Batik was recognized by UNESCO as Intangible Cultural Heritage on October 2, now National Batik Day.",
        wide: true,
      },
    ],
    loanwords: [
      { word: "kursi", from: "Arabic" },
      { word: "sepatu", from: "Portuguese" },
      { word: "kantor", from: "Dutch" },
      { word: "teh", from: "Hokkien" },
      { word: "jendela", from: "Portuguese" },
    ],
    quizTag: "Quick Quiz",
    done: "Done",
    perfect: "Perfect! Your brain is on fire.",
    good: "Not bad! Now you know the ones you missed.",
    restart: "Try again",
    more: "Keep sharp with crosswords",
    right: "Correct! ",
    wrong: "Not quite. ",
    score: "See score",
    next: "Next →",
    kicker: "Brain Corner",
    title: "Play for a Minute,",
    accent: "Leave a Little Smarter",
    body: "Fun facts about Indonesian language, history, and culture. Try the quick quiz: how many can you get right?",
    loanTag: "Loanwords",
    loanBody: "Plenty of Indonesian words that feel “native” are actually borrowed:",
  },
};

type Copy = (typeof COPY)[Locale];

const tile =
  "relative overflow-hidden rounded-3xl border border-brand-gold/15 bg-brand-surface/80 p-6 sm:p-7";
// Faint dotted texture, a nod to batik without an image.
const dots =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(240,180,41,0.08)_1px,transparent_1px)] bg-size-[14px_14px]";

const reveal = (i: number) => ({
  initial: { opacity: 0, y: 40, scale: 0.97, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-brand-gold/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-gold">
      {children}
    </span>
  );
}

function Quiz({ t, locale }: { t: Copy; locale: Locale }) {
  const QUIZ = t.quiz;
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = step === QUIZ.length;
  const item = QUIZ[step];

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
          {done ? t.done : `${step + 1} / ${QUIZ.length}`}
        </span>
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-brand-gold to-brand-red"
          animate={{
            width: `${((done ? QUIZ.length : step) / QUIZ.length) * 100}%`,
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-1 flex-col justify-center py-8 text-center"
          >
            <p className="font-display text-6xl font-extrabold text-brand-gold">
              {score}/{QUIZ.length}
            </p>
            <p className="mt-3 text-brand-ivory/75">
              {score === QUIZ.length
                ? t.perfect
                : t.good}
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={restart}
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
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
            className="flex flex-1 flex-col pt-6"
          >
            <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              {item.q}
            </p>
            <div className="mt-5 grid gap-2.5">
              {item.options.map((opt, i) => {
                const state =
                  picked === null
                    ? "border-white/10 hover:border-brand-gold/50 hover:bg-white/5"
                    : i === item.answer
                      ? "border-brand-gold bg-brand-gold/15 text-brand-gold"
                      : i === picked
                        ? "border-brand-red bg-brand-red/15 text-brand-ivory/70"
                        : "border-white/5 text-brand-ivory/40";
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => pick(i)}
                    disabled={picked !== null}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium text-brand-ivory transition-colors ${state}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-bold">
                      {"ABC"[i]}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>
            <div aria-live="polite" className="mt-auto">
              {picked !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
                >
                  <p className="text-sm leading-relaxed text-brand-ivory/70">
                    <strong
                      className={
                        picked === item.answer
                          ? "text-brand-gold"
                          : "text-brand-red"
                      }
                    >
                      {picked === item.answer ? t.right : t.wrong}
                    </strong>
                    {item.why}
                  </p>
                  <button
                    type="button"
                    onClick={next}
                    className="shrink-0 rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
                  >
                    {step === QUIZ.length - 1 ? t.score : t.next}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BrainCorner({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        {...reveal(0)}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h2 className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-red">
            <span className="h-px w-8 bg-brand-red" />
            {t.kicker}
          </h2>
          <p className="mt-4 max-w-xl font-display text-3xl font-extrabold text-balance text-white sm:text-4xl">
            {t.title}{" "}
            <span className="bg-linear-to-r from-brand-gold to-brand-red bg-clip-text text-transparent">
              {t.accent}
            </span>
          </p>
        </div>
        <p className="max-w-sm text-brand-ivory/65 md:text-right">
          {t.body}
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          {...reveal(1)}
          className={`${tile} sm:col-span-2 lg:row-span-2`}
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="relative h-full">
            <Quiz t={t} locale={locale} />
          </div>
        </motion.div>

        {t.facts.map((fact, i) => (
          <motion.div
            key={fact.big}
            {...reveal(i + 2)}
            className={`${tile} ${fact.wide ? "sm:col-span-2" : ""} group`}
          >
            <div className={dots} />
            <div className="relative">
              <Tag>{fact.tag}</Tag>
              <p className="mt-4 bg-linear-to-br from-brand-gold to-brand-red bg-clip-text font-display text-5xl font-extrabold text-transparent transition-transform duration-300 group-hover:translate-x-1">
                {fact.big}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ivory/70">
                {fact.text}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          {...reveal(5)}
          className={`${tile} sm:col-span-2 lg:col-span-4`}
        >
          <div className={dots} />
          <div className="relative lg:flex lg:items-center lg:gap-8">
            <div className="lg:w-64 lg:shrink-0">
              <Tag>{t.loanTag}</Tag>
              <p className="mt-4 text-sm text-brand-ivory/70">
                {t.loanBody}
              </p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 lg:mt-0">
              {t.loanwords.map((w) => (
                <li
                  key={w.word}
                  className="rounded-xl border border-white/10 bg-brand-black/60 px-3 py-2 text-sm transition-colors hover:border-brand-gold/40"
                >
                  <span className="font-semibold text-white">{w.word}</span>
                  <span className="ml-2 text-xs text-brand-gold/80">
                    ← {w.from}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
