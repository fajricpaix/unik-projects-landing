import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/site";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Aplikasi & Game Android Indonesia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Unik Projects",
    "aplikasi android",
    "game android indonesia",
    "game tts",
    "teka teki silang",
    "TekaTekiYuk",
    "Catetin",
    "aplikasi umkm",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "id_ID",
    title: `${SITE_NAME} — Aplikasi & Game Handphone Indonesia`,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: { google: "kvbXStG9aKwiOuRav-P0ifzd9t3ty0n7kdjvWAd-2DM" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakartaSans.variable} ${bricolage.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-black text-brand-ivory">
        <MotionProvider>
          <Header />
          <main className="flex-1 pt-20 sm:pt-24">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
