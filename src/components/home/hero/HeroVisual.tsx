"use client";

import { useSyncExternalStore } from "react";
import HeroOrbit from "@/components/home/hero/HeroOrbit";
import PhoneMockup from "@/components/home/hero/PhoneMockup";
import LottiePlayer from "@/components/shared/LottiePlayer";
import type { App } from "@/data/apps";
import type { Locale } from "@/data/i18n";

const QUERY = "(min-width: 1024px)";
const subscribe = (onChange: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

// ponytail: the 3D logo (WebGL) only loads on desktop;
// phones get the light phone mockup that shows the apps instead.
export default function HeroVisual({ apps, locale }: { apps: App[]; locale: Locale }) {
  const isDesktop = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => null,
  );

  if (isDesktop === null) return <div className="h-115 lg:h-full" />;
  if (isDesktop) return <HeroOrbit apps={apps} locale={locale} />;

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
