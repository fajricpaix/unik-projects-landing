import type { StaticImageData } from "next/image";
import ttsLogo from "../../public/apps/tekatekiyuk.png";
import catetinLogo from "../../public/apps/catetin.png";
import type { Locale } from "./i18n";

// Server-only: VERCEL_PROJECT_PRODUCTION_URL is not exposed to the browser.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "Unik Projects";
export const SITE_DESCRIPTION =
  "Etalase aplikasi dan game Android buatan Unik Projects — studio indie Indonesia. Main TekaTekiYuk!, game teka-teki silang seru, dan kelola toko pakai Catetin.";
export const SITE_DESCRIPTION_EN =
  "A showcase of Android apps and games by Unik Projects, an indie studio from Indonesia. Play TekaTekiYuk!, a fun crossword puzzle game, and run your shop with Catetin.";
export const CONTACT_EMAIL = "unik.projects.id@gmail.com";
// Legal pages (each also has an English version at `${path}/en`) and their last-updated date.
export const LEGAL_UPDATED = {
  "/privacy-policy": "2026-07-30",
  "/terms": "2026-10-01",
} as const;
// Icon paths: Simple Icons (24x24 viewBox).
export const SOCIALS = [
  {
    name: "YouTube",
    handle: "@UnikProjectsGameStudio",
    href: "https://www.youtube.com/@UnikProjectsGameStudio",
    iconBg: "bg-[#FF0000]",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Instagram",
    handle: "@unik.projects",
    href: "https://www.instagram.com/unik.projects/",
    iconBg: "bg-gradient-to-tr from-[#FEDA75] via-[#D62976] to-[#4F5BD5]",
    icon: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  },
  {
    name: "Facebook",
    handle: "/UnikProjects",
    href: "https://www.facebook.com/UnikProjects",
    iconBg: "bg-[#0866FF]",
    icon: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    name: "TikTok",
    handle: "@unik.projects.gam",
    href: "https://www.tiktok.com/@unik.projects.gam",
    iconBg: "bg-black ring-1 ring-white/20",
    icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    name: "GitHub",
    handle: "@fajricpaix",
    href: "https://github.com/fajricpaix",
    iconBg: "bg-[#24292F] ring-1 ring-white/20",
    icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
];

export type Snippet = {
  /** File in src/data/snippets/<slug>/ — curated, safe-to-publish excerpts only. */
  file: string;
  lang: "dart" | "jsonc";
  note: string;
};

export type App = {
  slug: string;
  title: string;
  logo: StaticImageData;
  category: "Game" | "Aplikasi" | "App";
  tagline: string;
  description: string;
  features: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  stack: string[];
  snippets: Snippet[];
  lottie: string;
  playUrl?: string;
  keywords: string[];
  /** English copy; snippet notes follow `snippets` order. */
  en: Pick<App, "tagline" | "description" | "features" | "stats"> & { notes: string[] };
};

export const APPS: App[] = [
  {
    slug: "tekatekiyuk",
    title: "TekaTekiYuk!",
    logo: ttsLogo,
    category: "Game",
    tagline: "Game teka-teki silang seru untuk mengasah otak.",
    description:
      "TekaTekiYuk! adalah game teka-teki silang (TTS) berbahasa Indonesia yang seru dimainkan kapan aja — saat santai, nunggu antrean, atau sebelum tidur. Papannya disusun ulang tiap kali main, jadi nggak pernah ketemu TTS yang sama dua kali.",
    features: [
      {
        title: "Papan selalu baru",
        desc: "Generator menyusun ulang kata-kata jadi papan TTS baru setiap kali kamu main.",
      },
      {
        title: "Tantangan harian",
        desc: "Mode Harian dengan hadiah tiap hari, plus streak buat yang rajin main.",
      },
      {
        title: "Leaderboard & teman",
        desc: "Adu skor di leaderboard dan undang teman lewat kode ajakan.",
      },
      {
        title: "2.686 soal, 22 kategori",
        desc: "Dari film & anime, teknologi, antariksa, sampai mitologi Nusantara dan peribahasa.",
      },
      {
        title: "12 achievement",
        desc: "Kumpulkan lencana dari jumlah kata, level, kategori, sampai streak 30 hari.",
      },
      {
        title: "Progres aman di cloud",
        desc: "Main offline, progres tersimpan di HP dan bisa disinkronkan lewat akun Google.",
      },
    ],
    stats: [
      { value: "2.686", label: "Soal" },
      { value: "22", label: "Kategori" },
      { value: "12", label: "Achievement" },
      { value: "ID/EN", label: "Bahasa" },
    ],
    stack: ["Flutter", "Dart", "Provider", "Firebase", "Google Sign-In"],
    snippets: [
      {
        file: "crossword_generator.dart",
        lang: "dart",
        note: "Inti game: kata-kata diacak lalu ditempel di huruf yang cocok. Generator mencoba beberapa kali dan menyimpan papan dengan kata terbanyak.",
      },
      {
        file: "bank_soal.json",
        lang: "jsonc",
        note: "Bank soal berbentuk JSON yang bisa diperbarui tanpa update aplikasi. Setiap soal punya kategori dan tingkat kesulitan.",
      },
    ],
    lottie: "/lottie/puzzle.json",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.tekatekiyuk.tekatekiyuk",
    keywords: ["tts", "teka teki silang", "game tts android", "game asah otak"],
    en: {
      tagline: "A fun crossword puzzle game to sharpen your mind.",
      description:
        "TekaTekiYuk! is an Indonesian-language crossword puzzle game you can play anytime: while relaxing, waiting in line, or before bed. The board is rebuilt every time you play, so you never get the same puzzle twice.",
      features: [
        {
          title: "Always a fresh board",
          desc: "The generator rearranges the words into a brand-new crossword every time you play.",
        },
        {
          title: "Daily challenges",
          desc: "Daily mode with rewards every day, plus streaks for regular players.",
        },
        {
          title: "Leaderboard & friends",
          desc: "Compete on the leaderboard and invite friends with a referral code.",
        },
        {
          title: "2,686 clues, 22 categories",
          desc: "From film & anime, tech, and space to Nusantara mythology and Indonesian proverbs.",
        },
        {
          title: "12 achievements",
          desc: "Collect badges for words solved, levels, categories, all the way to a 30-day streak.",
        },
        {
          title: "Progress safe in the cloud",
          desc: "Play offline. Progress is saved on your phone and can sync through your Google account.",
        },
      ],
      stats: [
        { value: "2,686", label: "Clues" },
        { value: "22", label: "Categories" },
        { value: "12", label: "Achievements" },
        { value: "ID/EN", label: "Languages" },
      ],
      notes: [
        "The heart of the game: words are shuffled and attached where letters match. The generator tries several times and keeps the board with the most words.",
        "The clue bank is a JSON file that can be updated without an app update. Every clue has a category and a difficulty level.",
      ],
    },
  },
  {
    slug: "catetin",
    title: "Catetin",
    logo: catetinLogo,
    category: "Aplikasi",
    tagline: "Catat pesanan, produk, dan laporan toko langsung dari HP.",
    description:
      "Catetin membantu pemilik toko rumahan dan UMKM mencatat pesanan, mengelola produk, dan melihat untung-rugi langsung dari HP. Tanpa login, tanpa sinyal — semua data tersimpan di perangkatmu sendiri.",
    features: [
      {
        title: "Catat pesanan cepat",
        desc: "Satu pesanan bisa banyak item, total dihitung otomatis. Tandai sudah diantar dan sudah lunas.",
      },
      {
        title: "Produk & stok",
        desc: "Simpan foto, harga jual, dan harga modal. Stok berkurang sendiri setiap ada pesanan.",
      },
      {
        title: "Laporan untung bersih",
        desc: "Omzet, laba kotor, pengeluaran, dan untung bersih per hari atau bulan, lengkap dengan pembanding periode lalu.",
      },
      {
        title: "Pantau piutang",
        desc: "Daftar pesanan yang belum dibayar, yang paling lama di atas. Tinggal tap 'Tandai lunas'.",
      },
      {
        title: "Rekening & QRIS",
        desc: "Simpan rekening bank dan foto QRIS toko biar pembeli gampang transfer.",
      },
      {
        title: "Backup satu file",
        desc: "Seluruh data dan foto produk dikemas jadi satu file zip, bisa dipulihkan di HP baru.",
      },
    ],
    stats: [
      { value: "100%", label: "Offline" },
      { value: "Unlimited", label: "Pesanan" },
      { value: "1 zip", label: "Backup" },
      { value: "4", label: "Periode laporan" },
    ],
    stack: ["Flutter", "Dart", "Riverpod", "Drift (SQLite)", "go_router"],
    snippets: [
      {
        file: "report_repository.dart",
        lang: "dart",
        note: "Laporan dihitung dalam satu query SQL yang reaktif. Begitu pesanan ditandai lunas, angka omzet dan laba langsung ikut berubah.",
      },
      {
        file: "tables.dart",
        lang: "dart",
        note: "Skema database lokal. Uang disimpan sebagai bilangan bulat Rupiah, hapus berarti soft delete, dan item pesanan menyimpan snapshot harga.",
      },
      {
        file: "currency_formatter.dart",
        lang: "dart",
        note: "Format Rupiah ringkas untuk kartu laporan: 1500000 jadi \"Rp1,5jt\".",
      },
    ],
    lottie: "/lottie/notes.json",
    keywords: ["aplikasi kasir", "catat pesanan", "aplikasi umkm", "laporan toko"],
    en: {
      tagline: "Track orders, products, and shop reports right from your phone.",
      description:
        "Catetin helps home shop owners and small businesses record orders, manage products, and see their profit and loss right from their phone. No login, no signal needed: all data stays on your own device.",
      features: [
        {
          title: "Quick order entry",
          desc: "One order can hold many items, and the total is calculated for you. Mark orders as delivered and paid.",
        },
        {
          title: "Products & stock",
          desc: "Save photos, selling price, and cost price. Stock goes down on its own with every order.",
        },
        {
          title: "Net profit reports",
          desc: "Revenue, gross profit, expenses, and net profit per day or month, compared with the previous period.",
        },
        {
          title: "Track unpaid orders",
          desc: "A list of orders that haven't been paid yet, oldest first. Just tap 'Mark as paid'.",
        },
        {
          title: "Bank accounts & QRIS",
          desc: "Save your bank accounts and your shop's QRIS photo so buyers can pay easily.",
        },
        {
          title: "One-file backup",
          desc: "All data and product photos are packed into a single zip file you can restore on a new phone.",
        },
      ],
      stats: [
        { value: "100%", label: "Offline" },
        { value: "Unlimited", label: "Orders" },
        { value: "1 zip", label: "Backup" },
        { value: "4", label: "Report periods" },
      ],
      notes: [
        "Reports are computed in a single reactive SQL query. The moment an order is marked as paid, revenue and profit update right away.",
        "The local database schema. Money is stored as whole Rupiah integers, deleting means a soft delete, and order items keep a snapshot of the price.",
        "Compact Rupiah formatting for report cards: 1500000 becomes \"Rp1,5jt\".",
      ],
    },
  },
];

function localize(app: App, locale: Locale): App {
  if (locale === "id") return app;
  const { notes, ...copy } = app.en;
  return {
    ...app,
    ...copy,
    category: app.category === "Aplikasi" ? "App" : app.category,
    snippets: app.snippets.map((snippet, i) => ({ ...snippet, note: notes[i] })),
  };
}

export const getApps = (locale: Locale) => APPS.map((app) => localize(app, locale));

export const getApp = (slug: string, locale: Locale = "id") => {
  const app = APPS.find((a) => a.slug === slug);
  return app && localize(app, locale);
};
