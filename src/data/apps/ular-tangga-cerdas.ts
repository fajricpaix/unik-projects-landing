import ularTanggaLogo from "@public/apps/ular-tangga-cerdas.png";
import type { App } from "@/data/apps/types";

export const ularTanggaCerdas: App = {
  slug: "ular-tangga-cerdas",
  title: "Ular Tangga Cerdas",
  logo: ularTanggaLogo,
  category: "Game",
  tagline: "Ular tangga rasa kuis: jawab soal, naiki tangga, hindari ular!",
  description:
    "Ular Tangga Cerdas menggabungkan permainan ular tangga klasik dengan kuis pilihan ganda. Lempar dadu, mendarat di kartu, lalu jawab soalnya sebelum waktu habis. Main bareng teman, keluarga, atau lawan komputer.",
  features: [
    {
      title: "Ular tangga + kuis",
      desc: "Mendarat di kartu Portal, Kejutan, atau Tumbal, lalu jawab soal dalam 10 detik. Jawaban benar atau salah menentukan nasibmu.",
    },
    {
      title: "2–8 pemain",
      desc: "Main bergantian di satu HP, atau lawan komputer kalau lagi sendirian.",
    },
    {
      title: "Tag Team",
      desc: "Satu tim 2 orang, giliran selang-seling antar tim, dan podium dihitung per tim.",
    },
    {
      title: "Skill & kartu seru",
      desc: "Kumpulkan skill seperti Perisai, Maju, dan Dadu 2x untuk membalikkan keadaan.",
    },
    {
      title: "Soal makin susah",
      desc: "Semakin dekat ke kotak 100, semakin sulit soalnya.",
    },
    {
      title: "Avatar lucu",
      desc: "Pilih avatar unik untuk setiap pemain, lengkap dengan warna pion masing-masing.",
    },
  ],
  stats: [
    { value: "2–8", label: "Pemain" },
    { value: "3", label: "Jenis kartu" },
    { value: "10 dtk", label: "Waktu jawab" },
    { value: "100", label: "Kotak" },
  ],
  stack: ["Flutter", "Dart", "Riverpod", "Supabase Realtime"],
  snippets: [],
  lottie: "/lottie/puzzle.json",
  keywords: ["ular tangga", "game ular tangga", "game kuis", "game keluarga"],
  en: {
    tagline: "Snakes and ladders meets quiz: answer, climb, and dodge the snakes!",
    description:
      "Ular Tangga Cerdas blends classic snakes and ladders with a multiple-choice quiz. Roll the dice, land on a card, then answer before time runs out. Play with friends, family, or against the computer.",
    features: [
      {
        title: "Snakes & ladders + quiz",
        desc: "Land on a Portal, Surprise, or Sacrifice card, then answer within 10 seconds. Right or wrong decides your fate.",
      },
      {
        title: "2–8 players",
        desc: "Take turns on one phone, or play against the computer when you're on your own.",
      },
      {
        title: "Tag Team",
        desc: "Two players per team, turns alternate between teams, and the podium is ranked by team.",
      },
      {
        title: "Skills & wild cards",
        desc: "Collect skills like Shield, Advance, and Double Dice to turn the game around.",
      },
      {
        title: "Questions get harder",
        desc: "The closer you get to square 100, the tougher the questions.",
      },
      {
        title: "Fun avatars",
        desc: "Pick a unique avatar for every player, each with its own pawn color.",
      },
    ],
    stats: [
      { value: "2–8", label: "Players" },
      { value: "3", label: "Card types" },
      { value: "10 sec", label: "Answer time" },
      { value: "100", label: "Squares" },
    ],
    notes: [],
  },
};
