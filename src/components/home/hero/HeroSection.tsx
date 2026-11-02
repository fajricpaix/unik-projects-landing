import Image from "next/image";
import * as motion from "motion/react-client";
import header from "@public/header.jpg";
import type { HomeCopy } from "@/components/home/copy";
import HeroCopy from "@/components/home/hero/HeroCopy";
import HeroExit from "@/components/home/hero/HeroExit";
import HeroVisual from "@/components/home/hero/HeroVisual";
import { Spotlight } from "@/components/ui/spotlight";
import type { App } from "@/data/apps";
import type { Locale } from "@/data/i18n";

export default function HeroSection({
  t,
  apps,
  featured,
  locale,
}: {
  t: HomeCopy;
  apps: App[];
  featured: App;
  locale: Locale;
}) {
  return (
    <section className="relative isolate -mt-20 overflow-hidden px-4 pt-24 pb-10 sm:-mt-24 sm:px-6 sm:pt-32">
      <Image
        src={header}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/80 via-black/85 to-brand-black" />

      <HeroExit>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand-gold/15 bg-brand-black/96 shadow-2xl shadow-brand-red/10 lg:h-130"
        >
          <Spotlight size={420} />
          <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-40 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />

          <div className="relative grid h-full lg:grid-cols-[1.15fr_1fr]">
            <HeroCopy t={t} featured={featured} />
            <div className="relative flex items-center justify-center lg:h-full lg:px-10">
              <HeroVisual apps={apps} locale={locale} />
            </div>
          </div>
        </motion.div>
      </HeroExit>
    </section>
  );
}
