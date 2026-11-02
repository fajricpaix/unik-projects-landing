import type { StaticImageData } from "next/image";

export type Snippet = {
  /** File in src/data/snippets/<slug>/ — curated, safe-to-publish excerpts only. */
  file: string;
  lang: "dart" | "jsonc";
  note: string;
};

export type App = {
  slug: string;
  title: string;
  logo: StaticImageData;
  category: "Game" | "Aplikasi" | "App";
  tagline: string;
  description: string;
  features: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  stack: string[];
  snippets: Snippet[];
  lottie: string;
  playUrl?: string;
  keywords: string[];
  /** English copy; snippet notes follow `snippets` order. */
  en: Pick<App, "tagline" | "description" | "features" | "stats"> & { notes: string[] };
};
