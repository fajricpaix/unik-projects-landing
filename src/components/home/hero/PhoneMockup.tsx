"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import LottiePlayer from "@/components/shared/LottiePlayer";
import type { App } from "@/data/apps";
import type { Locale } from "@/data/i18n";

const COPY = {
  id: { logo: "Logo", soon: "Segera Hadir", show: "Tampilkan" },
  en: { logo: "Logo of", soon: "Coming Soon", show: "Show" },
};

export default function PhoneMockup({ apps, locale }: { apps: App[]; locale: Locale }) {
  const t = COPY[locale];
  const [index, setIndex] = useState(0);
  const app = apps[index];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % apps.length), 4000);
    return () => clearInterval(id);
  }, [apps.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative mx-auto w-52 sm:w-64"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[9/19] rounded-[2.75rem] border-[10px] border-brand-surface bg-brand-black shadow-2xl shadow-brand-red/30 ring-1 ring-brand-gold/30"
      >
        <div className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-brand-surface" />
        <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-brand-red-deep to-brand-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={app.slug}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col items-center px-5 pt-12 text-center"
            >
              <Image
                src={app.logo}
                alt={`${t.logo} ${app.title}`}
                width={72}
                height={72}
                className="h-18 w-18 rounded-2xl shadow-lg"
              />
              <p className="mt-3 text-lg font-bold text-white">{app.title}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
                {app.category}
              </p>
              <LottiePlayer src={app.lottie} className="my-2 h-28 w-28" />
              <p className="text-xs leading-relaxed text-brand-ivory/70">
                {app.tagline}
              </p>
              <span className="mt-auto mb-8 w-full rounded-full bg-brand-gold py-2 text-xs font-semibold text-brand-black">
                {app.playUrl ? "Install" : t.soon}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="mt-6 flex justify-center gap-2">
        {apps.map((a, i) => (
          <button
            key={a.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${t.show} ${a.title}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-gold" : "w-2 bg-white/25"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
