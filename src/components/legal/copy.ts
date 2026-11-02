import flagGb from "@public/flags/gb.svg";
import flagId from "@public/flags/id.svg";
import type { Locale } from "@/data/i18n";
import type { LEGAL_UPDATED } from "@/data/site";

export type LegalPath = keyof typeof LEGAL_UPDATED;

export const TITLES: Record<LegalPath, Record<Locale, string>> = {
  "/privacy-policy": { id: "Kebijakan Privasi", en: "Privacy Policy" },
  "/terms": { id: "Syarat dan Ketentuan", en: "Terms of Service" },
};

export const COPY = {
  id: {
    home: "Beranda",
    legal: "Legal",
    updated: "Terakhir diperbarui",
    toc: "Daftar isi",
    summary: "Intinya",
    contact: "Hubungi Kami",
    contactBody: (title: string) =>
      `Ada pertanyaan atau masukan terkait ${title}? Kirim email ke kami.`,
    alsoRead: "Baca juga",
    switchTo: "Read in English",
    switchFlag: flagGb,
  },
  en: {
    home: "Home",
    legal: "Legal",
    updated: "Last updated",
    toc: "Contents",
    summary: "In short",
    contact: "Contact Us",
    contactBody: (title: string) =>
      `Questions or feedback about this ${title}? Send us an email.`,
    alsoRead: "Also read",
    switchTo: "Baca dalam Bahasa Indonesia",
    switchFlag: flagId,
  },
};

export type LegalCopy = (typeof COPY)["id"];
