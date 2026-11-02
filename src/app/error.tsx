"use client";

import { useEffect } from "react";
import Link from "next/link";
import StatusPage from "@/components/shared/StatusPage";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code="500"
      title="Terjadi kesalahan"
      body="Ada yang tidak beres di sisi kami. Coba muat ulang, atau kembali ke beranda."
    >
      <button
        onClick={() => unstable_retry()}
        className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
      >
        Coba lagi
      </button>
      <Link
        href="/"
        className="rounded-full border border-brand-red/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-red hover:bg-brand-red/15"
      >
        Kembali ke Beranda
      </Link>
    </StatusPage>
  );
}
