import type { Metadata } from "next";
import Image from "next/image";
import * as motion from "motion/react-client";
import header from "../../public/header.jpg";
import AppShelf from "@/components/AppShelf";
import BrainCorner from "@/components/BrainCorner";
import MobileCta from "@/components/MobileCta";
import HeroVisual from "@/components/HeroVisual";
import { Spotlight } from "@/components/ui/spotlight";
import { localePath, type Locale } from "@/data/i18n";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_EN,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
  getApps,
} from "@/data/site";

// Icon paths: Lucide (24x24 viewBox, stroke).
const VALUES = [
  {
    icon: [
      "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
      "M12 18h.01",
    ],
    iconBg: "bg-brand-gold text-brand-black",
    glow: "bg-brand-gold/25",
  },
  {
    icon: [
      "M6 11h4",
      "M8 9v4",
      "M15 12h.01",
      "M18 10h.01",
      "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    ],
    iconBg: "bg-brand-red text-white",
    glow: "bg-brand-red/30",
  },
  {
    icon: [
      "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      "M6.453 15h11.094",
      "M8.5 2h7",
    ],
    iconBg: "bg-brand-ivory text-brand-black",
    glow: "bg-brand-ivory/15",
  },
];

const COPY = {
  id: {
    title: `${SITE_NAME} — Aplikasi & Game Android Indonesia`,
    description: SITE_DESCRIPTION,
    heroTitle: "Aplikasi Dan Game Handphone",
    heroAccent: "Buatan Unik Projects",
    heroBody:
      "Studio kecil, karya iseng yang serius. Pilih app favoritmu — dari game teka-teki silang buat asah otak sampai aplikasi pencatat toko.",
    explore: "Jelajahi Etalase",
    play: (title: string) => `Main ${title}`,
    shelf: "Etalase",
    shelfTitle: "Semua Aplikasi &",
    shelfAccent: "Game Kami",
    shelfBody:
      "Pilih, pasang, dan nikmati. Semua dibuat ringan supaya lancar di HP apa aja.",
    about: "Tentang Kami",
    aboutTitle: "Lahir dari Waktu Luang,",
    aboutAccent: "Dibuat Sepenuh Hati.",
    aboutBody:
      "adalah developer studio independen. Setiap project lahir dari rasa penasaran, bukan sekadar target bisnis — hasilnya produk yang unik, jujur, dan dibuat dengan perhatian ke detail.",
    stats: ["App & game dirilis", "Studio indie", "Rasa penasaran"],
    values: [
      {
        title: "Aplikasi Mobile",
        description:
          "Aplikasi Android yang simpel, ringan, dan fokus pada kebutuhan pengguna sehari-hari.",
      },
      {
        title: "Game Android",
        description: "Game kasual yang seru dimainkan kapan aja, tanpa ribet.",
      },
      {
        title: "Eksperimen & Side Project",
        description:
          "Tempat kami coba teknologi dan ide baru sebelum jadi produk yang lebih matang.",
      },
    ],
    faq: "FAQ",
    faqTitle: "Pertanyaan yang Sering Ditanyakan",
    faqs: [
      {
        q: "Apa itu Unik Projects?",
        a: "Unik Projects adalah studio indie asal Indonesia yang membuat aplikasi dan game Android, seperti game teka-teki silang TekaTekiYuk! dan aplikasi pencatat toko Catetin.",
      },
      {
        q: "Apakah TekaTekiYuk! gratis?",
        a: "Ya, TekaTekiYuk! gratis diunduh di Google Play. Game ini menampilkan iklan dan menyediakan pembelian dalam aplikasi yang sifatnya opsional.",
      },
      {
        q: "Apakah TekaTekiYuk! bisa dimainkan offline?",
        a: "Bisa. Progres tersimpan di HP dan bisa disinkronkan lewat akun Google supaya aman saat ganti perangkat.",
      },
      {
        q: "Kapan Catetin tersedia?",
        a: "Catetin segera hadir di Google Play. Aplikasinya gratis dengan iklan, tanpa login, dan bisa dipakai tanpa internet karena semua data tersimpan di HP.",
      },
      {
        q: "Apakah ada versi iPhone (iOS)?",
        a: "Belum. Saat ini semua aplikasi dan game Unik Projects khusus untuk Android.",
      },
      {
        q: "Bagaimana cara menghubungi Unik Projects?",
        a: `Kirim email ke ${CONTACT_EMAIL} untuk pertanyaan, masukan, atau kolaborasi.`,
      },
    ],
    logoAlt: "Logo Unik Projects",
    contact: "Kontak",
    contactTitle: "Yuk, Ngobrol Bareng Kami!",
    contactBody:
      "Punya pertanyaan, masukan, atau mau kolaborasi? Kami senang mendengar dari kamu.",
    follow: "Ikuti keseruan kami",
    listName: "Aplikasi dan game Unik Projects",
    inLanguage: "id-ID",
    ogLocale: "id_ID",
  },
  en: {
    title: `${SITE_NAME} — Android Apps & Games from Indonesia`,
    description: SITE_DESCRIPTION_EN,
    heroTitle: "Mobile Apps and Games",
    heroAccent: "Made by Unik Projects",
    heroBody:
      "A small studio with playful ideas, taken seriously. Pick your favorite — from a crossword game that sharpens your mind to an app that keeps your shop's books.",
    explore: "Explore the Showcase",
    play: (title: string) => `Play ${title}`,
    shelf: "Showcase",
    shelfTitle: "All Our Apps &",
    shelfAccent: "Games",
    shelfBody:
      "Pick, install, and enjoy. Everything is built light so it runs smoothly on any phone.",
    about: "About Us",
    aboutTitle: "Born from Spare Time,",
    aboutAccent: "Made with Heart.",
    aboutBody:
      "is an independent developer studio. Every project starts from curiosity, not just business targets — the result is products that are unique, honest, and made with attention to detail.",
    stats: ["Apps & games released", "Indie studio", "Curiosity"],
    values: [
      {
        title: "Mobile Apps",
        description:
          "Simple, lightweight Android apps focused on what people need every day.",
      },
      {
        title: "Android Games",
        description: "Casual games that are fun to play anytime, no hassle.",
      },
      {
        title: "Experiments & Side Projects",
        description:
          "Where we try new tech and ideas before they grow into more mature products.",
      },
    ],
    faq: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "What is Unik Projects?",
        a: "Unik Projects is an indie studio from Indonesia that makes Android apps and games, such as the crossword game TekaTekiYuk! and the shop bookkeeping app Catetin.",
      },
      {
        q: "Is TekaTekiYuk! free?",
        a: "Yes, TekaTekiYuk! is free to download on Google Play. It shows ads and offers optional in-app purchases.",
      },
      {
        q: "Can I play TekaTekiYuk! offline?",
        a: "Yes. Your progress is saved on your phone and can sync through your Google account, so it stays safe when you switch devices.",
      },
      {
        q: "When will Catetin be available?",
        a: "Catetin is coming soon to Google Play. It's free with ads, needs no login, and works without internet because all data stays on your phone.",
      },
      {
        q: "Is there an iPhone (iOS) version?",
        a: "Not yet. All Unik Projects apps and games are Android-only for now.",
      },
      {
        q: "How can I contact Unik Projects?",
        a: `Email ${CONTACT_EMAIL} for questions, feedback, or collaboration.`,
      },
    ],
    logoAlt: "Unik Projects logo",
    contact: "Contact",
    contactTitle: "Let's Talk!",
    contactBody:
      "Have a question, feedback, or want to collaborate? We'd love to hear from you.",
    follow: "Follow our journey",
    listName: "Unik Projects apps and games",
    inLanguage: "en",
    ogLocale: "en_US",
  },
};

export function homeMetadata(locale: Locale): Metadata {
  const t = COPY[locale];
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: { id: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: localePath(locale, "/"),
      locale: t.ogLocale,
      alternateLocale: locale === "en" ? "id_ID" : "en_US",
      title: t.title,
      description: t.description,
      // A page-level openGraph replaces the root one, so re-point to app/opengraph-image.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }],
    },
  };
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

export default function HomePage({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const apps = getApps(locale);
  const featured = apps.find((app) => app.playUrl) ?? apps[0];
  const stats = [String(apps.length), "100%", "∞"].map((value, i) => ({
    value,
    label: t.stats[i],
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: CONTACT_EMAIL,
        // GitHub is the founder's personal profile, not the org's.
        sameAs: SOCIALS.filter((s) => s.name !== "GitHub").map((s) => s.href),
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: t.description,
        inLanguage: t.inLanguage,
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "ItemList",
        name: t.listName,
        itemListElement: apps.map((app, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}${localePath(locale, `/apps/${app.slug}`)}`,
          name: app.title,
        })),
      },
      {
        "@type": "FAQPage",
        inLanguage: t.inLanguage,
        mainEntity: t.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <div lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative isolate -mt-20 overflow-hidden px-4 pt-24 pb-10 sm:-mt-24 sm:px-6 sm:pt-32">
        <Image
          src={header}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/80 via-black/85 to-brand-black" />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand-gold/15 bg-brand-black/96 shadow-2xl shadow-brand-red/10 lg:h-130"
        >
          <Spotlight size={420} />
          <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-40 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />

          <div className="relative grid h-full lg:grid-cols-[1.15fr_1fr]">
            <div className="relative z-10 flex flex-col justify-center p-8 text-center sm:p-12 lg:py-0 lg:pr-4 lg:pl-14 lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold lg:mx-0 lg:self-start"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-red" />
                Unik Studio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-5 bg-linear-to-b from-brand-ivory to-brand-ivory/50 bg-clip-text pb-1 text-[2rem] leading-[1.1] font-display font-extrabold text-balance tracking-tight text-transparent sm:text-5xl lg:text-[2.75rem] xl:text-5xl"
              >
                {t.heroTitle}{" "}
                <span className="bg-linear-to-r from-brand-gold to-brand-red bg-clip-text text-transparent">
                  {t.heroAccent}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-ivory/70 lg:mx-0"
              >
                {t.heroBody}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
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

            <div className="relative flex items-center justify-center lg:h-full lg:px-10">
              <HeroVisual apps={apps} locale={locale} />
            </div>
          </div>
        </motion.div>
      </section>

      <BrainCorner locale={locale} />

      {/* Shelf */}
      <section
        id="apps"
        className="relative isolate overflow-hidden bg-brand-surface py-24"
      >
        <div className="absolute -top-40 left-1/2 -z-10 h-80 w-160 -translate-x-1/2 rounded-full bg-brand-red/15 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-red">
              <span className="h-px w-8 bg-brand-red" />
              {t.shelf}
              <span className="h-px w-8 bg-brand-red" />
            </h2>
            <p className="mt-4 text-3xl font-display font-extrabold text-white sm:text-5xl">
              {t.shelfTitle}{" "}
              <span className="bg-linear-to-r from-brand-gold to-brand-red bg-clip-text text-transparent">
                {t.shelfAccent}
              </span>
            </p>
            <p className="mx-auto mt-4 max-w-xl text-brand-ivory/70">
              {t.shelfBody}
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="mt-10">
            <AppShelf apps={apps} locale={locale} />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(245,239,228,0.07)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-size-[24px_24px]" />
        <div className="absolute top-1/3 -left-40 -z-10 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
        <div className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
          <motion.div {...fadeUp} className="text-center lg:text-left">
            <h2 className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-red">
              <span className="h-px w-8 bg-brand-red" />
              {t.about}
            </h2>
            <p className="mt-5 text-3xl leading-tight font-display font-extrabold text-white sm:text-5xl">
              {t.aboutTitle}{" "}
              <span className="bg-linear-to-r from-brand-gold to-brand-red bg-clip-text text-transparent">
                {t.aboutAccent}
              </span>
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-ivory/75 lg:mx-0">
              <strong className="text-white">Unik Projects</strong> {t.aboutBody}
            </p>
            <dl className="mt-10 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-brand-surface/60 py-5 backdrop-blur-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="px-3 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-display font-black text-brand-gold">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-brand-ivory/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-brand-surface to-brand-black p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 ${i === 0 ? "sm:col-span-2" : ""}`}
              >
                <div
                  className={`absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${value.glow}`}
                />
                <span className="absolute top-4 right-6 text-6xl font-display font-black text-white/5 transition-colors group-hover:text-brand-gold/15">
                  0{i + 1}
                </span>
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${value.iconBg}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    {value.icon.map((d) => (
                      <path key={d} d={d} />
                    ))}
                  </svg>
                </span>
                <h3 className="relative mt-5 text-xl font-bold text-white">
                  {t.values[i].title}
                </h3>
                <p className="relative mt-2 max-w-md text-sm leading-relaxed text-brand-ivory/70">
                  {t.values[i].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative isolate overflow-hidden bg-brand-surface py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-red">
              <span className="h-px w-8 bg-brand-red" />
              {t.faq}
              <span className="h-px w-8 bg-brand-red" />
            </h2>
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

      {/* Contact */}
      <section
        id="kontak"
        className="relative isolate overflow-hidden bg-brand-red-deep py-24 text-white"
      >
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 -z-10 h-80 w-80 rounded-full bg-brand-red/30 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div {...fadeUp}>
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
            <p className="mt-3 text-3xl font-display font-extrabold sm:text-4xl">
              {t.contactTitle}
            </p>
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

          <p className="mt-14 text-xs font-bold uppercase tracking-widest text-brand-ivory/50">
            {t.follow}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4 *:w-[calc(50%-0.5rem)] sm:*:w-[calc(33.333%-0.7rem)] lg:*:w-[calc(20%-0.8rem)]">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-brand-black/40 px-4 py-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-gold/50 hover:bg-brand-black/60"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-6 ${social.iconBg}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 text-white"
                    aria-hidden="true"
                  >
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
        </div>
      </section>

      {featured.playUrl && (
        <MobileCta href={featured.playUrl} label={`Download ${featured.title}`} />
      )}
    </div>
  );
}
