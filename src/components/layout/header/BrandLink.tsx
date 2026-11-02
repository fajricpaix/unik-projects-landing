import Image from "next/image";
import Link from "next/link";
import logo from "@public/logo.png";
import { localePath, type Locale } from "@/data/i18n";

export default function BrandLink({ locale }: { locale: Locale }) {
  return (
    <Link
      href={localePath(locale, "/")}
      aria-label={locale === "en" ? "Unik Projects home" : "Beranda Unik Projects"}
      className="group mr-1 flex shrink-0 items-center gap-2.5 rounded-full sm:mr-2"
    >
      <Image
        src={logo}
        alt={locale === "en" ? "Unik Projects logo" : "Logo Unik Projects"}
        width={44}
        height={44}
        className="h-10 w-10 rounded-full ring-1 ring-brand-gold/30 transition-transform group-hover:rotate-6 group-hover:scale-105 sm:h-11 sm:w-11"
        priority
      />
      <span className="hidden pr-2 text-[15px] font-semibold tracking-tight text-brand-ivory md:block">
        Unik <span className="text-brand-gold">Projects</span>
      </span>
    </Link>
  );
}
