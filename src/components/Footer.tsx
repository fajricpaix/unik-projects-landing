import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-black py-8 text-brand-ivory/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm">
        <p>&copy; 2026 Unik Projects. Dibuat dengan waktu luang dan secangkir kopi.</p>
        <div className="flex items-center gap-2">
          <Link href="/" className="transition-colors hover:text-brand-gold">
            Home
          </Link>
          <span aria-hidden="true">&middot;</span>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-brand-gold"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
