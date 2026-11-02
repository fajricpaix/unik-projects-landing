import Image from "next/image";
import * as motion from "motion/react-client";
import type { HomeCopy } from "@/components/home/copy";
import SocialLinks from "@/components/home/sections/SocialLinks";
import { CONTACT_EMAIL } from "@/data/site";
import { reveal } from "@/lib/motion";

export default function ContactSection({ t }: { t: HomeCopy }) {
  return (
    <section
      id="kontak"
      className="relative isolate overflow-hidden bg-brand-red-deep py-24 text-white"
    >
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 -z-10 h-80 w-80 rounded-full bg-brand-red/30 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div {...reveal()}>
          <Image
            src="/logo.png"
            alt={t.logoAlt}
            width={80}
            height={80}
            className="mx-auto h-20 w-20 rounded-2xl shadow-lg shadow-brand-gold/20 ring-2 ring-brand-gold/40"
          />
          <h2 className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-gold">
            {t.contact}
          </h2>
          <p className="mt-3 text-3xl font-display font-extrabold sm:text-4xl">{t.contactTitle}</p>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-ivory/85">
            {t.contactBody}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-gold px-8 py-3.5 text-sm font-semibold break-all text-brand-black shadow-lg shadow-brand-gold/25 transition-transform hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            {CONTACT_EMAIL}
          </a>
        </motion.div>

        <SocialLinks label={t.follow} />
      </div>
    </section>
  );
}
