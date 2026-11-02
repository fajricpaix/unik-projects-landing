import { COPY, TITLES, type LegalPath } from "@/components/legal/copy";
import { legalJsonLd } from "@/components/legal/json-ld";
import LegalBody from "@/components/legal/LegalBody";
import LegalContact from "@/components/legal/LegalContact";
import LegalHeader from "@/components/legal/LegalHeader";
import LegalToc from "@/components/legal/LegalToc";
import JsonLd from "@/components/shared/JsonLd";
import { localePath, type Locale } from "@/data/i18n";
import { LEGAL_UPDATED, SITE_URL } from "@/data/site";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

export default function LegalPage({
  path,
  locale,
  description,
  intro,
  highlights,
  sections,
}: {
  path: LegalPath;
  locale: Locale;
  description: string;
  intro: string;
  highlights: string[];
  sections: LegalSection[];
}) {
  const t = COPY[locale];
  const title = TITLES[path][locale];
  const url = `${SITE_URL}${localePath(locale, path)}`;
  const updated = LEGAL_UPDATED[path];
  const toc = [...sections, { id: "kontak", title: t.contact }];

  return (
    <article lang={locale}>
      <JsonLd
        data={legalJsonLd({ url, title, description, updated, locale, homeLabel: t.home })}
      />
      <LegalHeader path={path} locale={locale} title={title} intro={intro} updated={updated} t={t} />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-[240px_1fr] lg:gap-16">
        <LegalToc label={t.toc} items={toc} />
        <div className="min-w-0">
          <LegalBody summaryLabel={t.summary} highlights={highlights} sections={sections} />
          <LegalContact path={path} locale={locale} title={title} t={t} />
        </div>
      </div>
    </article>
  );
}
