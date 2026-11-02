export const COPY = {
  id: {
    kind: (category: string) => `${category} Android`,
    logo: (title: string) => `Logo ${title}`,
    home: "Beranda",
    showcase: "Etalase",
    download: "Download di Google Play",
    soon: "Segera hadir di Google Play",
    features: "Fitur",
    behind: "Di balik layar",
    peek: (title: string) => `Intip kode asli ${title}`,
    peekBody: (title: string) =>
      `Potongan kode langsung dari repo ${title}. Pilih tab untuk melihat bagian lain.`,
    lines: "baris",
    others: "App lainnya",
    inLanguage: "id-ID",
    ogLocale: "id_ID",
  },
  en: {
    kind: (category: string) => `Android ${category}`,
    logo: (title: string) => `${title} logo`,
    home: "Home",
    showcase: "Showcase",
    download: "Get it on Google Play",
    soon: "Coming soon to Google Play",
    features: "Features",
    behind: "Behind the scenes",
    peek: (title: string) => `A peek at ${title}'s real code`,
    peekBody: (title: string) =>
      `Code excerpts straight from the ${title} repo. Pick a tab to see other parts.`,
    lines: "lines",
    others: "More apps",
    inLanguage: "en",
    ogLocale: "en_US",
  },
};

export type DetailCopy = (typeof COPY)["id"];
