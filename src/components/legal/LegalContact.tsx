import Link from "next/link";
import { TITLES, type LegalCopy, type LegalPath } from "@/components/legal/copy";
import { localePath, type Locale } from "@/data/i18n";
import { CONTACT_EMAIL } from "@/data/site";

export default function LegalContact({
  path,
  locale,
  title,
  t,
}: {
  path: LegalPath;
  locale: Locale;
  title: string;
  t: LegalCopy;
}) {
  const other = (Object.keys(TITLES) as LegalPath[]).find((p) => p !== path)!;
  return (
    <section
      id="kontak"
      className="relative isolate mt-12 scroll-mt-28 overflow-hidden rounded-3xl border border-brand-gold/20 bg-linear-to-br from-brand-red-deep to-brand-surface p-8 sm:p-10"
    >
      <div className="absolute -right-16 -bottom-24 -z-10 h-64 w-64 rounded-full bg-brand-red/25 blur-3xl" />
      <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{t.contact}</h2>
      <p className="mt-3 max-w-lg leading-relaxed text-brand-ivory/70">{t.contactBody(title)}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-block rounded-full bg-brand-gold px-7 py-3 text-center text-sm font-semibold text-brand-black transition-transform hover:scale-105"
        >
          {CONTACT_EMAIL}
        </a>
        <Link
          href={localePath(locale, other)}
          className="rounded-full border border-brand-red/60 px-7 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-brand-red hover:bg-brand-red/15"
        >
          {t.alsoRead}: {TITLES[other][locale]}
        </Link>
      </div>
    </section>
  );
}
