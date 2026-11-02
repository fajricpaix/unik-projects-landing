"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import logo from "../../public/logo.png";
import flagId from "../../public/flags/id.svg";
import flagGb from "../../public/flags/gb.svg";
import { basePath, localeFromPath, localePath, type Locale } from "@/data/i18n";

const NAV_LINKS = [
  { id: "apps", label: { id: "Etalase", en: "Showcase" } },
  { id: "tentang", label: { id: "Tentang", en: "About" } },
  { id: "kontak", label: { id: "Kontak", en: "Contact" } },
];

const LOCALES = [
  { code: "id", short: "ID", name: "Bahasa Indonesia", flag: flagId },
  { code: "en", short: "EN", name: "English", flag: flagGb },
] as const;

function glass(scrolled: boolean) {
  return {
    backgroundColor: scrolled ? "rgba(10, 9, 8, 0.85)" : "rgba(10, 9, 8, 0.5)",
    boxShadow: scrolled
      ? "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 12px 40px -12px rgba(217, 45, 58, 0.45)"
      : "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 0 0 0 rgba(217, 45, 58, 0)",
  };
}

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  const locale = localeFromPath(pathname);
  const base = basePath(pathname);
  const isHome = base === "/";

  // The root layout is shared, so keep <html lang> in sync on the client.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    const hide = y > 300 && y > (scrollY.getPrevious() ?? 0);
    setHidden(hide);
    if (hide) setLangOpen(false);
  });

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of NAV_LINKS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  const highlight = hovered ?? (isHome ? active : null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center gap-2 px-4 sm:top-5 sm:gap-3"
    >
      <motion.nav
        animate={glass(scrolled)}
        transition={{ duration: 0.3 }}
        onMouseLeave={() => setHovered(null)}
        className="flex h-13 items-center gap-0.5 rounded-full border border-brand-gold/20 p-1.5 backdrop-blur-xl sm:h-15 sm:gap-1 sm:p-2"
      >
        <Link
          href={localePath(locale, "/")}
          aria-label={locale === "en" ? "Unik Projects home" : "Beranda Unik Projects"}
          className="group mr-1 flex shrink-0 items-center gap-2.5 rounded-full sm:mr-2"
        >
          <Image
            src={logo}
            alt={locale === "en" ? "Unik Projects logo" : "Logo Unik Projects"}
            width={44}
            height={44}
            className="h-10 w-10 rounded-full ring-1 ring-brand-gold/30 transition-transform group-hover:rotate-6 group-hover:scale-105 sm:h-11 sm:w-11"
            priority
          />
          <span className="hidden pr-2 text-[15px] font-semibold tracking-tight text-brand-ivory md:block">
            Unik <span className="text-brand-gold">Projects</span>
          </span>
        </Link>
        <span aria-hidden className="mr-1 hidden h-6 w-px bg-white/10 md:block" />
        {NAV_LINKS.map((link) => (
          <Link
            key={link.id}
            href={localePath(locale, `/#${link.id}`)}
            onMouseEnter={() => setHovered(link.id)}
            className={`relative isolate rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-[15px] ${
              highlight === link.id ? "text-brand-black" : "text-white/75 hover:text-white"
            }`}
          >
            {highlight === link.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-brand-gold shadow-[0_4px_16px_-4px_rgba(240,180,41,0.6)]"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            {link.label[locale]}
          </Link>
        ))}
      </motion.nav>

      <LanguageMenu
        base={base}
        locale={locale}
        scrolled={scrolled}
        open={langOpen}
        setOpen={setLangOpen}
      />
    </motion.header>
  );
}

function LanguageMenu({
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
            {LOCALES.map((l) => {
              const selected = l.code === locale;
              const body = (
                <>
                  <Image
                    src={l.flag}
                    alt=""
                    width={24}
                    height={16}
                    className="h-4 w-6 rounded-[3px] object-cover ring-1 ring-white/15"
                  />
                  <span className="flex-1">{l.name}</span>
                  {selected ? (
                    <span className="text-xs font-semibold text-brand-gold">{l.short} ✓</span>
                  ) : (
                    <span className="text-xs text-white/40">{l.short}</span>
                  )}
                </>
              );
              const cls = "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm";
              return !selected ? (
                <Link
                  key={l.code}
                  href={localePath(l.code, base)}
                  role="menuitem"
                  hrefLang={l.code}
                  onClick={() => setOpen(false)}
                  className={`${cls} text-white/80 transition-colors hover:bg-white/5 hover:text-white`}
                >
                  {body}
                </Link>
              ) : (
                <div
                  key={l.code}
                  role="menuitem"
                  aria-current="true"
                  className={`${cls} bg-brand-gold/10 text-brand-ivory`}
                >
                  {body}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
