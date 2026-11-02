import type { Metadata } from "next";
import Link from "next/link";
import StatusPage from "@/components/StatusPage";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="Halaman tidak ditemukan"
      body="Halaman yang kamu cari mungkin sudah dipindahkan atau tidak pernah ada."
    >
      <Link
        href="/"
        className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
      >
        Kembali ke Beranda
      </Link>
    </StatusPage>
  );
}
