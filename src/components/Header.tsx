import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo Unik Projects"
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="text-lg font-bold tracking-wide text-white">
            UNIK <span className="text-brand-gold">PROJECTS</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-white/85">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
