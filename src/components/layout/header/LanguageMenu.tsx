"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import LanguageOption from "@/components/layout/header/LanguageOption";
import { LOCALES, glass } from "@/components/layout/header/nav";
import type { Locale } from "@/data/i18n";

export default function LanguageMenu({
  base,
  locale,
  scrolled,
  open,
  setOpen,
}: {
  base: string;
  locale: Locale;
  scrolled: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === locale)!;

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  return (
    <div ref={ref} className="relative">
      <motion.button
        type="button"
        animate={glass(scrolled)}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${locale === "en" ? "Language" : "Bahasa"}: ${current.name}`}
        className="flex h-13 items-center gap-2 rounded-full border border-brand-gold/20 px-3.5 text-sm font-semibold text-brand-ivory backdrop-blur-xl transition-colors hover:border-brand-gold/50 sm:h-15 sm:px-4 sm:text-[15px]"
      >
        <Image
          src={current.flag}
          alt=""
          width={24}
          height={16}
          className="h-4 w-6 rounded-[3px] object-cover ring-1 ring-white/15"
        />
        {current.short}
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`hidden h-4 w-4 text-white/60 transition-transform sm:block ${open ? "rotate-180" : ""}`}
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-2xl border border-brand-gold/20 bg-brand-black/90 p-1.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          >
            {LOCALES.map((l) => (
              <LanguageOption
                key={l.code}
                option={l}
                selected={l.code === locale}
                base={base}
                onPick={() => setOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
