import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME } from "@/data/site";

export const id = {
  title: `${SITE_NAME} — Aplikasi & Game Android Indonesia`,
  description: SITE_DESCRIPTION,
  heroTitle: "Aplikasi Dan Game Handphone",
  heroAccent: "Buatan Unik Projects",
  heroBody:
    "Studio kecil, karya iseng yang serius. Pilih app favoritmu — dari game teka-teki silang buat asah otak sampai aplikasi pencatat toko.",
  explore: "Jelajahi Etalase",
  play: (title: string) => `Main ${title}`,
  shelf: "Etalase",
  shelfTitle: "Semua Aplikasi &",
  shelfAccent: "Game Kami",
  shelfBody:
    "Pilih, pasang, dan nikmati. Semua dibuat ringan supaya lancar di HP apa aja.",
  about: "Tentang Kami",
  aboutTitle: "Lahir dari Waktu Luang,",
  aboutAccent: "Dibuat Sepenuh Hati.",
  aboutBody:
    "adalah developer studio independen. Setiap project lahir dari rasa penasaran, bukan sekadar target bisnis — hasilnya produk yang unik, jujur, dan dibuat dengan perhatian ke detail.",
  stats: ["App & game dirilis", "Studio indie", "Rasa penasaran"],
  values: [
    {
      title: "Aplikasi Mobile",
      description:
        "Aplikasi Android yang simpel, ringan, dan fokus pada kebutuhan pengguna sehari-hari.",
    },
    {
      title: "Game Android",
      description: "Game kasual yang seru dimainkan kapan aja, tanpa ribet.",
    },
    {
      title: "Eksperimen & Side Project",
      description:
        "Tempat kami coba teknologi dan ide baru sebelum jadi produk yang lebih matang.",
    },
  ],
  faq: "FAQ",
  faqTitle: "Pertanyaan yang Sering Ditanyakan",
  faqs: [
    {
      q: "Apa itu Unik Projects?",
      a: "Unik Projects adalah studio indie asal Indonesia yang membuat aplikasi dan game Android, seperti game teka-teki silang TekaTekiYuk! dan aplikasi pencatat toko Catetin.",
    },
    {
      q: "Apakah TekaTekiYuk! gratis?",
      a: "Ya, TekaTekiYuk! gratis diunduh di Google Play. Game ini menampilkan iklan dan menyediakan pembelian dalam aplikasi yang sifatnya opsional.",
    },
    {
      q: "Apakah TekaTekiYuk! bisa dimainkan offline?",
      a: "Bisa. Progres tersimpan di HP dan bisa disinkronkan lewat akun Google supaya aman saat ganti perangkat.",
    },
    {
      q: "Di mana saya bisa dapat Catetin?",
      a: "Catetin sudah tersedia di Google Play. Aplikasinya gratis dengan iklan, tanpa login, dan bisa dipakai tanpa internet karena semua data tersimpan di HP.",
    },
    {
      q: "Apakah ada versi iPhone (iOS)?",
      a: "Belum. Saat ini semua aplikasi dan game Unik Projects khusus untuk Android.",
    },
    {
      q: "Bagaimana cara menghubungi Unik Projects?",
      a: `Kirim email ke ${CONTACT_EMAIL} untuk pertanyaan, masukan, atau kolaborasi.`,
    },
  ],
  logoAlt: "Logo Unik Projects",
  contact: "Kontak",
  contactTitle: "Yuk, Ngobrol Bareng Kami!",
  contactBody:
    "Punya pertanyaan, masukan, atau mau kolaborasi? Kami senang mendengar dari kamu.",
  follow: "Ikuti keseruan kami",
  listName: "Aplikasi dan game Unik Projects",
  inLanguage: "id-ID",
  ogLocale: "id_ID",
};

export type HomeCopy = typeof id;
