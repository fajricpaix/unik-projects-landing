"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { localePath, type Locale } from "@/data/i18n";
import type { App } from "@/data/site";
import LottiePlayer from "./LottiePlayer";
import PhoneMockup from "./PhoneMockup";

const Logo3D = dynamic(() => import("./ui/logo-3d"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-gold/20 border-t-brand-gold" />
    </div>
  ),
});

const QUERY = "(min-width: 1024px)";
const subscribe = (onChange: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

// Where the floating app cards sit around the logo.
const SPOTS = [
  "top-[8%] -left-[6%]",
  "bottom-[10%] -right-[4%]",
  "top-[4%] right-[2%]",
  "bottom-[6%] -left-[2%]",
];

// ponytail: the 3D logo (WebGL) only loads on desktop;
// phones get the light phone mockup that shows the apps instead.
export default function HeroVisual({ apps, locale }: { apps: App[]; locale: Locale }) {
  const isDesktop = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => null,
  );

  if (isDesktop === null) return <div className="h-115 lg:h-full" />;

  if (isDesktop) {
    return (
      <div className="relative mx-auto aspect-square w-full max-w-105">
        <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle,rgba(240,180,41,0.22),rgba(217,45,58,0.14)_45%,transparent_70%)] blur-2xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[4%] rounded-full border border-dashed border-brand-gold/20"
        />
        <div className="absolute inset-[16%] rounded-full border border-brand-gold/10" />
        <div className="absolute bottom-[9%] left-1/2 h-5 w-1/2 -translate-x-1/2 rounded-[50%] bg-brand-gold/25 blur-xl" />
        <Logo3D className="absolute inset-[7%]" />

        {apps.slice(0, SPOTS.length).map((app, i) => (
          <motion.div
            key={app.slug}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 + i * 0.15 },
              scale: { duration: 0.5, delay: 0.8 + i * 0.15 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 },
            }}
            className={`absolute z-10 ${SPOTS[i]}`}
          >
            <Link
              href={localePath(locale, `/apps/${app.slug}`)}
              className="flex items-center gap-3 rounded-2xl border border-brand-gold/20 bg-brand-black/75 py-2 pr-4 pl-2 shadow-lg shadow-black/40 backdrop-blur-md transition-colors hover:border-brand-gold/50"
            >
              <Image
                src={app.logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl"
              />
              <span className="text-left">
                <span className="block text-sm font-semibold text-brand-ivory">{app.title}</span>
                <span className="block text-xs text-brand-gold/80">{app.category}</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative pb-10">
      <LottiePlayer
        src="/lottie/rocket.json"
        className="absolute -top-6 right-0 h-24 w-24 sm:right-8 sm:h-32 sm:w-32"
      />
      <PhoneMockup apps={apps} locale={locale} />
    </div>
  );
}
