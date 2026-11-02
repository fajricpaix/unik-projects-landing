import type { LegalSection } from "@/components/legal/LegalPage";

export default function LegalBody({
  summaryLabel,
  highlights,
  sections,
}: {
  summaryLabel: string;
  highlights: string[];
  sections: LegalSection[];
}) {
  return (
    <>
      <section
        aria-label={summaryLabel}
        className="rounded-2xl border border-brand-gold/15 bg-brand-surface p-6 sm:p-8"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
          {summaryLabel}
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-ivory/80">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold text-[11px] font-bold text-brand-black">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-white/10 py-10">
          <h2 className="flex items-baseline gap-4 text-xl font-bold text-white sm:text-2xl">
            <span className="font-mono text-sm font-medium text-brand-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.title}
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-brand-ivory/75 sm:pl-10 [&_a]:font-medium [&_a]:text-brand-gold [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-brand-gold/80 [&_li]:marker:text-brand-gold [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {s.body}
          </div>
        </section>
      ))}
    </>
  );
}
