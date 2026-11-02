export const COPY = {
  id: {
    all: "Semua",
    available: "Tersedia",
    soon: "Segera Hadir",
    kind: (category: string) => `${category} Android`,
    logo: (title: string) => `Logo ${title}`,
    detail: "Detail",
    nextTitle: "Karya berikutnya sedang diracik",
    nextBody:
      "App & game baru lagi dimasak di workshop. Ikuti sosial media kami biar nggak ketinggalan rilisnya!",
    follow: "Pantau Update",
  },
  en: {
    all: "All",
    available: "Available",
    soon: "Coming Soon",
    kind: (category: string) => `Android ${category}`,
    logo: (title: string) => `${title} logo`,
    detail: "Details",
    nextTitle: "Our next creation is in the works",
    nextBody:
      "New apps & games are cooking in the workshop. Follow our socials so you don't miss the launch!",
    follow: "Stay Updated",
  },
};

export type ShelfCopy = (typeof COPY)["id"];
