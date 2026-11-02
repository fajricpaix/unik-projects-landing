import * as motion from "motion/react-client";
import type { HomeCopy } from "@/components/home/copy";
import { Kicker } from "@/components/shared/Heading";
import { reveal } from "@/lib/motion";

export default function FaqSection({ t }: { t: HomeCopy }) {
  return (
    <section id="faq" className="relative isolate overflow-hidden bg-brand-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div {...reveal()} className="text-center">
          <Kicker centered>{t.faq}</Kicker>
          <p className="mt-4 text-3xl font-display font-extrabold text-white sm:text-4xl">
            {t.faqTitle}
          </p>
        </motion.div>
        <div className="mt-10 space-y-3">
          {t.faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-white/10 bg-brand-black/40 px-6 py-4 open:border-brand-gold/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white [&::-webkit-details-marker]:hidden">
                <h3>{faq.q}</h3>
                <span
                  className="text-xl text-brand-gold transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-brand-ivory/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
