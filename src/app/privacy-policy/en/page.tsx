import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Unik Projects",
  description: "Privacy Policy for Unik Projects apps and games.",
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

export default function PrivacyPolicyEn() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <p className="text-sm">
          <Link
            href="/privacy-policy"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            Baca dalam Bahasa Indonesia
          </Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-brand-ivory/50">
          This Privacy Policy was created to meet the requirements of the
          Google Play Console submission. It applies to apps and games
          developed by Unik Projects.
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-red">
          Last updated: July 30, 2026
        </p>
      </header>

      <Section title="Introduction">
        <p>
          Unik Projects (&ldquo;we&rdquo;) values the privacy of the users of
          our apps and games (the &ldquo;Service&rdquo;). This Privacy
          Policy explains how we collect, use, and protect information when
          you use our Service. By using our apps, you agree to the practices
          described in this policy.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          Depending on the app you use, we may collect the following
          information:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Device Data</strong> — Device model, operating system
            version, application identifiers (such as Advertising ID), and
            other technical information required for the app to run
            properly.
          </li>
          <li>
            <strong>Usage Data</strong> — How you interact with the app,
            such as features used, session duration, and app performance
            statistics (crash reports).
          </li>
          <li>
            <strong>Voluntarily Provided Data</strong> — If you contact us by
            email or fill out a form, we will receive the information you
            provide (such as your name and email address).
          </li>
        </ul>
        <p>
          We do <strong>not</strong> request or store sensitive data such as
          third-party account passwords, financial data, or official
          identity documents.
        </p>
      </Section>

      <Section title="Advertising and Analytics">
        <p>
          Our apps may use the following third-party services to support
          operations and development:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Google AdMob</strong> — to display ads within the app.
            AdMob may collect the Advertising ID and related data to display
            relevant ads.
          </li>
          <li>
            <strong>Google Analytics / Firebase</strong> — to understand how
            users use our apps, so we can continuously improve the user
            experience, as well as for crash reporting.
          </li>
        </ul>
        <p>These third-party services have their own privacy policies:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Google Privacy Policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>
            How Google uses data from apps that use Google services:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/technologies/partner-sites
            </a>
          </li>
        </ul>
        <p>
          You can reset or disable the Advertising ID through your Android
          device settings (Settings &gt; Google &gt; Ads).
        </p>
      </Section>

      <Section title="App Permissions">
        <p>
          Some of our apps/games may request certain permissions (such as
          internet access, storage, or notifications) that are required for
          app features to work. We only request permissions that are
          genuinely needed, and these permissions will be explained when
          requested within the app.
        </p>
      </Section>

      <Section title="How We Use Information">
        <p>The information collected is used to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Operate and maintain app functionality</li>
          <li>Display relevant ads (if any)</li>
          <li>Analyze and improve app performance and user experience</li>
          <li>Fix bugs and technical issues</li>
          <li>Respond to user questions or feedback</li>
        </ul>
        <p>
          We do <strong>not sell</strong> users&rsquo; personal data to third
          parties.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          Our Service is intended for a general audience, including teens
          (age 13 and up). We do not knowingly collect personal data from
          children under 13 without parental/guardian consent, in accordance
          with Google Play Families policy and applicable child data
          protection regulations. If you are a parent/guardian and become
          aware that your child has provided personal data to us without
          permission, please contact us so that the data can be deleted.
        </p>
      </Section>

      <Section title="Data Security">
        <p>
          We implement reasonable security measures to protect the
          information we collect. However, no method of data transmission
          over the internet is 100% secure, so we cannot guarantee absolute
          security.
        </p>
      </Section>

      <Section title="Data Storage and Retention">
        <p>
          Collected data is stored for as long as necessary for the purposes
          described in this policy, or as required by applicable law.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Request information about the data we hold about you</li>
          <li>Request deletion of your personal data</li>
          <li>
            Opt out of the use of data for personalized advertising (via the
            Advertising ID settings on your device)
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us via the email below.
        </p>
      </Section>

      <Section title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will
          be communicated by updating the &ldquo;Last updated&rdquo; date on
          this page. We recommend that you review this page periodically.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have any questions or feedback regarding this Privacy
          Policy, please contact:
        </p>
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
