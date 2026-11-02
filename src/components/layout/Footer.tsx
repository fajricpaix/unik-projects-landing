"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localePath } from "@/data/i18n";

const COPY = {
  id: {
    tagline: "Dibuat dengan waktu luang dan secangkir kopi.",
    home: "Beranda",
    privacy: "Kebijakan Privasi",
    terms: "Syarat & Ketentuan",
  },
  en: {
    tagline: "Made with spare time and a cup of coffee.",
    home: "Home",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
};

export default function Footer() {
  const locale = localeFromPath(usePathname());
  const t = COPY[locale];
  const links = [
    { href: "/", label: t.home },
    { href: "/privacy-policy", label: t.privacy },
    { href: "/terms", label: t.terms },
  ];

  return (
    <footer className="border-t border-white/5 bg-brand-black py-8 text-brand-ivory/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm">
        <p>&copy; 2026 Unik Projects. {t.tagline}</p>
        <div className="flex items-center gap-2">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">&middot;</span>}
              <Link
                href={localePath(locale, link.href)}
                className="transition-colors hover:text-brand-gold"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
