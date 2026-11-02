import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import AppStats from "@/components/app-detail/AppStats";
import type { DetailCopy } from "@/components/app-detail/copy";
import LottiePlayer from "@/components/shared/LottiePlayer";
import type { App } from "@/data/apps";
import { localePath, type Locale } from "@/data/i18n";
import { SITE_NAME } from "@/data/site";

export default function AppHero({ app, locale, t }: { app: App; locale: Locale; t: DetailCopy }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:py-20 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="text-sm text-brand-ivory/50" aria-label="Breadcrumb">
            <Link href={localePath(locale, "/")} className="hover:text-brand-gold">
              {t.home}
            </Link>{" "}
            /{" "}
            <Link href={localePath(locale, "/#apps")} className="hover:text-brand-gold">
              {t.showcase}
            </Link>{" "}
            / <span className="text-brand-ivory/80">{app.title}</span>
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <Image
              src={app.logo}
              alt={t.logo(app.title)}
              width={88}
              height={88}
              priority
              className="h-22 w-22 rounded-2xl shadow-lg shadow-brand-red/20"
            />
            <div>
              <h1 className="text-3xl font-display font-extrabold text-white sm:text-5xl">
                {app.title}
              </h1>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {t.kind(app.category)} · {SITE_NAME}
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg font-medium text-white">{app.tagline}</p>
          <p className="mt-3 leading-relaxed text-brand-ivory/75">{app.description}</p>
          <div className="mt-8">
            {app.playUrl ? (
              <a
                href={app.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
              >
                {t.download}
              </a>
            ) : (
              <span className="inline-block rounded-full border border-brand-gold/30 px-8 py-3 text-sm font-semibold text-brand-gold">
                {t.soon}
              </span>
            )}
          </div>
          <AppStats stats={app.stats} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-xs"
        >
          <div className="absolute inset-6 rounded-full bg-brand-gold/10 blur-2xl" />
          <LottiePlayer src={app.lottie} className="relative h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}
