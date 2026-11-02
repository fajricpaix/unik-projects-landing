import ttsLogo from "@public/apps/tekatekiyuk.png";
import type { App } from "@/data/apps/types";

export const tekatekiyuk: App = {
  slug: "tekatekiyuk",
  title: "TekaTekiYuk!",
  logo: ttsLogo,
  category: "Game",
  tagline: "Game teka-teki silang seru untuk mengasah otak.",
  description:
    "TekaTekiYuk! adalah game teka-teki silang (TTS) berbahasa Indonesia yang seru dimainkan kapan aja — saat santai, nunggu antrean, atau sebelum tidur. Papannya disusun ulang tiap kali main, jadi nggak pernah ketemu TTS yang sama dua kali.",
  features: [
    {
      title: "Papan selalu baru",
      desc: "Generator menyusun ulang kata-kata jadi papan TTS baru setiap kali kamu main.",
    },
    {
      title: "Tantangan harian",
      desc: "Mode Harian dengan hadiah tiap hari, plus streak buat yang rajin main.",
    },
    {
      title: "Leaderboard & teman",
      desc: "Adu skor di leaderboard dan undang teman lewat kode ajakan.",
    },
    {
      title: "2.686 soal, 22 kategori",
      desc: "Dari film & anime, teknologi, antariksa, sampai mitologi Nusantara dan peribahasa.",
    },
    {
      title: "12 achievement",
      desc: "Kumpulkan lencana dari jumlah kata, level, kategori, sampai streak 30 hari.",
    },
    {
      title: "Progres aman di cloud",
      desc: "Main offline, progres tersimpan di HP dan bisa disinkronkan lewat akun Google.",
    },
  ],
  stats: [
    { value: "2.686", label: "Soal" },
    { value: "22", label: "Kategori" },
    { value: "12", label: "Achievement" },
    { value: "ID/EN", label: "Bahasa" },
  ],
  stack: ["Flutter", "Dart", "Provider", "Firebase", "Google Sign-In"],
  snippets: [
    {
      file: "crossword_generator.dart",
      lang: "dart",
      note: "Inti game: kata-kata diacak lalu ditempel di huruf yang cocok. Generator mencoba beberapa kali dan menyimpan papan dengan kata terbanyak.",
    },
    {
      file: "bank_soal.json",
      lang: "jsonc",
      note: "Bank soal berbentuk JSON yang bisa diperbarui tanpa update aplikasi. Setiap soal punya kategori dan tingkat kesulitan.",
    },
  ],
  lottie: "/lottie/puzzle.json",
  playUrl:
    "https://play.google.com/store/apps/details?id=com.tekatekiyuk.tekatekiyuk",
  keywords: ["tts", "teka teki silang", "game tts android", "game asah otak"],
  en: {
    tagline: "A fun crossword puzzle game to sharpen your mind.",
    description:
      "TekaTekiYuk! is an Indonesian-language crossword puzzle game you can play anytime: while relaxing, waiting in line, or before bed. The board is rebuilt every time you play, so you never get the same puzzle twice.",
    features: [
      {
        title: "Always a fresh board",
        desc: "The generator rearranges the words into a brand-new crossword every time you play.",
      },
      {
        title: "Daily challenges",
        desc: "Daily mode with rewards every day, plus streaks for regular players.",
      },
      {
        title: "Leaderboard & friends",
        desc: "Compete on the leaderboard and invite friends with a referral code.",
      },
      {
        title: "2,686 clues, 22 categories",
        desc: "From film & anime, tech, and space to Nusantara mythology and Indonesian proverbs.",
      },
      {
        title: "12 achievements",
        desc: "Collect badges for words solved, levels, categories, all the way to a 30-day streak.",
      },
      {
        title: "Progress safe in the cloud",
        desc: "Play offline. Progress is saved on your phone and can sync through your Google account.",
      },
    ],
    stats: [
      { value: "2,686", label: "Clues" },
      { value: "22", label: "Categories" },
      { value: "12", label: "Achievements" },
      { value: "ID/EN", label: "Languages" },
    ],
    notes: [
      "The heart of the game: words are shuffled and attached where letters match. The generator tries several times and keeps the board with the most words.",
      "The clue bank is a JSON file that can be updated without an app update. Every clue has a category and a difficulty level.",
    ],
  },
};
