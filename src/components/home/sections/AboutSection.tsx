import * as motion from "motion/react-client";
import type { HomeCopy } from "@/components/home/copy";
import ValueCard from "@/components/home/sections/ValueCard";
import { VALUES } from "@/components/home/values";
import { Accent, Kicker } from "@/components/shared/Heading";
import { reveal } from "@/lib/motion";

export default function AboutSection({ t, appCount }: { t: HomeCopy; appCount: number }) {
  const stats = [String(appCount), "100%", "∞"].map((value, i) => ({
    value,
    label: t.stats[i],
  }));

  return (
    <section id="tentang" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(245,239,228,0.07)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-size-[24px_24px]" />
      <div className="absolute top-1/3 -left-40 -z-10 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
      <div className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
        <motion.div {...reveal()} className="text-center lg:text-left">
          <Kicker>{t.about}</Kicker>
          <p className="mt-5 text-3xl leading-tight font-display font-extrabold text-white sm:text-5xl">
            {t.aboutTitle} <Accent>{t.aboutAccent}</Accent>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-ivory/75 lg:mx-0">
            <strong className="text-white">Unik Projects</strong> {t.aboutBody}
          </p>
          <dl className="mt-10 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-brand-surface/60 py-5 backdrop-blur-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-display font-black text-brand-gold">{stat.value}</dd>
                <dd className="mt-1 text-xs text-brand-ivory/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <ValueCard
              key={i}
              value={value}
              index={i}
              title={t.values[i].title}
              description={t.values[i].description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
