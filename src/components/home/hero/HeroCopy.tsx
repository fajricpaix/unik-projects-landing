import * as motion from "motion/react-client";
import type { HomeCopy } from "@/components/home/copy";
import { Accent } from "@/components/shared/Heading";
import type { App } from "@/data/apps";

// Each line of the hero fades up a beat after the previous one.
const rise = (delay: number, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay },
});

export default function HeroCopy({ t, featured }: { t: HomeCopy; featured: App }) {
  return (
    <div className="relative z-10 flex flex-col justify-center p-8 text-center sm:p-12 lg:py-0 lg:pr-4 lg:pl-14 lg:text-left">
      <motion.p
        {...rise(0.2, 0.5)}
        className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold lg:mx-0 lg:self-start"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-red" />
        Unik Studio
      </motion.p>
      <motion.h1
        {...rise(0.3)}
        className="mt-5 bg-linear-to-b from-brand-ivory to-brand-ivory/50 bg-clip-text pb-1 text-[2rem] leading-[1.1] font-display font-extrabold text-balance tracking-tight text-transparent sm:text-5xl lg:text-[2.75rem] xl:text-5xl"
      >
        {t.heroTitle} <Accent>{t.heroAccent}</Accent>
      </motion.h1>
      <motion.p
        {...rise(0.4)}
        className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-ivory/70 lg:mx-0"
      >
        {t.heroBody}
      </motion.p>
      <motion.div
        {...rise(0.5)}
        className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
      >
        <a
          href="#apps"
          className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
        >
          {t.explore}
        </a>
        {featured.playUrl && (
          <a
            href={featured.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-red/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-red hover:bg-brand-red/15"
          >
            {t.play(featured.title)}
          </a>
        )}
      </motion.div>
    </div>
  );
}
