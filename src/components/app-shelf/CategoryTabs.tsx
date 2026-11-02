"use client";

import { motion } from "motion/react";

export const ALL = "all";

export default function CategoryTabs({
  categories,
  active,
  onChange,
  count,
  allLabel,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
  count: (category: string) => number;
  allLabel: string;
}) {
  return (
    <div className="mb-10 flex justify-center">
      <div
        className="inline-flex gap-1 rounded-full border border-white/10 bg-brand-black/60 p-1.5 backdrop-blur-sm"
        role="tablist"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => onChange(category)}
            className={`relative isolate flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === category
                ? "text-brand-black"
                : "text-brand-ivory/70 hover:text-white"
            }`}
          >
            {active === category && (
              <motion.span
                layoutId="shelf-tab"
                className="absolute inset-0 -z-10 rounded-full bg-brand-gold"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            {category === ALL ? allLabel : category}
            <span
              className={`rounded-full px-1.5 text-[10px] font-bold ${
                active === category
                  ? "bg-brand-black/15"
                  : "bg-white/10 text-brand-ivory/60"
              }`}
            >
              {count(category)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
