import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Unik Projects",
  description: "Terms of Service for Unik Projects apps and games.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-4 text-base leading-relaxed text-brand-ivory/80">
        {children}
      </div>
    </section>
  );
}

export default function TermsEn() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <p className="text-sm">
          <Link
            href="/terms"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            Baca dalam Bahasa Indonesia
          </Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-brand-ivory/50">
          Applies to the website, apps, and games developed by Unik Projects.
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-red">
          Last updated: October 1, 2026
        </p>
      </header>

      <Section title="Acceptance of Terms">
        <p>
          By accessing our website or using our apps and games (the
          &ldquo;Service&rdquo;), you agree to these Terms of Service. If you
          do not agree, please stop using the Service.
        </p>
      </Section>

      <Section title="Use of the Service">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Use the Service for any unlawful purpose</li>
          <li>
            Decompile, copy, or modify our apps without written permission
          </li>
          <li>
            Interfere with or damage the Service, including through cheats,
            bots, or bug exploitation
          </li>
        </ul>
      </Section>

      <Section title="Intellectual Property">
        <p>
          All content in the Service, including code, design, graphics,
          audio, and the Unik Projects brand, belongs to us or our licensors
          and is protected by applicable law. You receive a limited,
          non-exclusive, non-transferable license to use the Service for
          personal use.
        </p>
      </Section>

      <Section title="Ads and Third-Party Services">
        <p>
          Our Service may display ads or link to third-party services. We are
          not responsible for the content, policies, or practices of those
          third parties. How we use data is described in our{" "}
          <Link
            href="/privacy-policy/en"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p>
          The Service is provided &ldquo;as is&rdquo; without warranties of
          any kind, express or implied. We do not guarantee that the Service
          will always be available, error-free, or uninterrupted.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          To the extent permitted by law, Unik Projects is not liable for any
          direct, indirect, or consequential damages arising from your use of,
          or inability to use, the Service.
        </p>
      </Section>

      <Section title="Changes to the Service and Terms">
        <p>
          We may modify, suspend, or discontinue the Service at any time, and
          may update these Terms of Service. Changes are announced by updating
          the &ldquo;Last updated&rdquo; date on this page. Continued use of
          the Service means you accept the changes.
        </p>
      </Section>

      <Section title="Governing Law">
        <p>
          These Terms of Service are governed by the laws of the Republic of
          Indonesia.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          <strong>Unik Projects</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:panggilsaya.fajri@gmail.com"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            panggilsaya.fajri@gmail.com
          </a>
        </p>
      </Section>
    </article>
  );
}
