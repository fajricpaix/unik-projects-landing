import * as motion from "motion/react-client";
import type { App } from "@/data/apps";
import { reveal } from "@/lib/motion";

export default function FeatureList({ title, features }: { title: string; features: App["features"] }) {
  return (
    <section className="bg-brand-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">{title}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.li
              key={feature.title}
              {...reveal(i * 0.09)}
              className="rounded-2xl border border-white/10 bg-brand-black/60 p-6 transition-colors hover:border-brand-gold/30"
            >
              <span className="mb-3 block text-xl text-brand-gold">✦</span>
              <h3 className="font-bold text-white">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-ivory/65">{feature.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
