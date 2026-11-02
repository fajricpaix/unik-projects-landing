"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import BrandLink from "@/components/layout/header/BrandLink";
import LanguageMenu from "@/components/layout/header/LanguageMenu";
import { NAV_LINKS, glass } from "@/components/layout/header/nav";
import { useActiveSection } from "@/components/layout/header/useActiveSection";
import { basePath, localeFromPath, localePath } from "@/data/i18n";

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  const locale = localeFromPath(pathname);
  const base = basePath(pathname);
  const isHome = base === "/";
  // Highlight the section currently in view (home page only).
  const active = useActiveSection(isHome);

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
        <BrandLink locale={locale} />
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
