import * as motion from "motion/react-client";
import type { VALUES } from "@/components/home/values";
import { reveal } from "@/lib/motion";

export default function ValueCard({
  value,
  index,
  title,
  description,
}: {
  value: (typeof VALUES)[number];
  index: number;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      {...reveal(index * 0.12)}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-brand-surface to-brand-black p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 ${index === 0 ? "sm:col-span-2" : ""}`}
    >
      <div
        className={`absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${value.glow}`}
      />
      <span className="absolute top-4 right-6 text-6xl font-display font-black text-white/5 transition-colors group-hover:text-brand-gold/15">
        0{index + 1}
      </span>
      <span
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${value.iconBg}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {value.icon.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </span>
      <h3 className="relative mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="relative mt-2 max-w-md text-sm leading-relaxed text-brand-ivory/70">
        {description}
      </p>
    </motion.div>
  );
}
