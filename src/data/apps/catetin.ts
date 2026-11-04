import catetinLogo from "@public/apps/catetin.png";
import type { App } from "@/data/apps/types";

export const catetin: App = {
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
  playUrl:
    "https://play.google.com/store/apps/details?id=com.catetin.unikprojects",
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
};
