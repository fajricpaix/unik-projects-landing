export const id = {
  quiz: [
    {
      q: "Bahasa Indonesia diikrarkan sebagai bahasa persatuan pada Sumpah Pemuda tahun…",
      options: ["1908", "1928", "1945"],
      answer: 1,
      why: "28 Oktober 1928, di Kongres Pemuda II. Tanggal ini diperingati sebagai Hari Sumpah Pemuda.",
    },
    {
      q: "Kata “sepatu” yang kita pakai sehari-hari berasal dari bahasa…",
      options: ["Belanda", "Arab", "Portugis"],
      answer: 2,
      why: "Dari kata Portugis “sapato”, dibawa pedagang Portugis ke Nusantara sejak abad ke-16.",
    },
    {
      q: "Atap runcing melengkung pada rumah gadang Minangkabau disebut…",
      options: ["Gonjong", "Joglo", "Limasan"],
      answer: 0,
      why: "Gonjong, bentuknya sering dikaitkan dengan tanduk kerbau. Ada juga di logo kami!",
    },
    {
      q: "Teka-teki silang (TTS) pertama di dunia terbit tahun…",
      options: ["1913", "1950", "1889"],
      answer: 0,
      why: "Dibuat Arthur Wynne dan terbit di koran New York World pada 21 Desember 1913.",
    },
  ],
  facts: [
    {
      tag: "Bahasa",
      big: "718",
      text: "bahasa daerah tercatat di Indonesia oleh Badan Bahasa, salah satu yang terbanyak di dunia.",
    },
    {
      tag: "Alam",
      big: "91 cm",
      text: "Pertumbuhan bambu dalam sehari. Beberapa spesiesnya termasuk tanaman tercepat di bumi.",
    },
    {
      tag: "Budaya",
      big: "2009",
      text: "Batik diakui UNESCO sebagai Warisan Budaya Takbenda pada 2 Oktober, kini Hari Batik Nasional.",
      wide: true,
    },
  ],
  loanwords: [
    { word: "kursi", from: "Arab" },
    { word: "sepatu", from: "Portugis" },
    { word: "kantor", from: "Belanda" },
    { word: "teh", from: "Hokkien" },
    { word: "jendela", from: "Portugis" },
  ],
  quizTag: "Kuis Kilat",
  done: "Selesai",
  perfect: "Sempurna! Otakmu lagi panas-panasnya.",
  good: "Lumayan! Sekarang kamu tahu jawaban yang tadi meleset.",
  restart: "Ulangi",
  more: "Asah lagi dengan TTS",
  right: "Benar! ",
  wrong: "Kurang tepat. ",
  score: "Lihat skor",
  next: "Lanjut →",
  kicker: "Pojok Cerdas",
  title: "Main Sebentar,",
  accent: "Pulang Lebih Pintar",
  body: "Fakta seru tentang bahasa, sejarah, dan budaya Indonesia. Coba kuis kilatnya, berapa yang bisa kamu jawab?",
  loanTag: "Kata Serapan",
  loanBody: "Banyak kata yang terasa “asli” ternyata pendatang:",
};

export type BrainCopy = typeof id;
