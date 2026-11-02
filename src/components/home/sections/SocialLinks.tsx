import * as motion from "motion/react-client";
import { SOCIALS } from "@/data/socials";
import { reveal } from "@/lib/motion";

export default function SocialLinks({ label }: { label: string }) {
  return (
    <>
      <p className="mt-14 text-xs font-bold uppercase tracking-widest text-brand-ivory/50">
        {label}
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-4 *:w-[calc(50%-0.5rem)] sm:*:w-[calc(33.333%-0.7rem)] lg:*:w-[calc(20%-0.8rem)]">
        {SOCIALS.map((social, i) => (
          <motion.a
            key={social.name}
            {...reveal(i * 0.1)}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-brand-black/40 px-4 py-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-gold/50 hover:bg-brand-black/60"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-6 ${social.iconBg}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white" aria-hidden="true">
                <path d={social.icon} />
              </svg>
            </span>
            <span className="font-bold">{social.name}</span>
            <span className="max-w-full truncate text-xs text-brand-ivory/60 group-hover:text-brand-gold">
              {social.handle}
            </span>
          </motion.a>
        ))}
      </div>
    </>
  );
}
