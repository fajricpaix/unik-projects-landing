import flagGb from "@public/flags/gb.svg";
import flagId from "@public/flags/id.svg";

export const NAV_LINKS = [
  { id: "apps", label: { id: "Etalase", en: "Showcase" } },
  { id: "tentang", label: { id: "Tentang", en: "About" } },
  { id: "kontak", label: { id: "Kontak", en: "Contact" } },
];

export const LOCALES = [
  { code: "id", short: "ID", name: "Bahasa Indonesia", flag: flagId },
  { code: "en", short: "EN", name: "English", flag: flagGb },
] as const;

export function glass(scrolled: boolean) {
  return {
    backgroundColor: scrolled ? "rgba(10, 9, 8, 0.85)" : "rgba(10, 9, 8, 0.5)",
    boxShadow: scrolled
      ? "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 12px 40px -12px rgba(217, 45, 58, 0.45)"
      : "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 0 0 0 rgba(217, 45, 58, 0)",
  };
}
