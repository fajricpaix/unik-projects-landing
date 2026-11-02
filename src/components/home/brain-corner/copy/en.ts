import type { BrainCopy } from "@/components/home/brain-corner/copy/id";

export const en: BrainCopy = {
  quiz: [
    {
      q: "Indonesian was pledged as the language of unity in the Youth Pledge (Sumpah Pemuda) of…",
      options: ["1908", "1928", "1945"],
      answer: 1,
      why: "October 28, 1928, at the Second Youth Congress. The date is celebrated as Youth Pledge Day.",
    },
    {
      q: "The everyday Indonesian word “sepatu” (shoe) comes from…",
      options: ["Dutch", "Arabic", "Portuguese"],
      answer: 2,
      why: "From the Portuguese “sapato”, brought to the archipelago by Portuguese traders from the 16th century.",
    },
    {
      q: "The pointed, curved roof of a Minangkabau rumah gadang is called…",
      options: ["Gonjong", "Joglo", "Limasan"],
      answer: 0,
      why: "Gonjong. Its shape is often linked to buffalo horns, and you can spot it in our logo too!",
    },
    {
      q: "The world's first crossword puzzle was published in…",
      options: ["1913", "1950", "1889"],
      answer: 0,
      why: "Created by Arthur Wynne and published in the New York World newspaper on December 21, 1913.",
    },
  ],
  facts: [
    {
      tag: "Language",
      big: "718",
      text: "regional languages recorded in Indonesia by the Language Agency, one of the highest counts in the world.",
    },
    {
      tag: "Nature",
      big: "91 cm",
      text: "How much bamboo can grow in a single day. Some species are among the fastest-growing plants on earth.",
    },
    {
      tag: "Culture",
      big: "2009",
      text: "Batik was recognized by UNESCO as Intangible Cultural Heritage on October 2, now National Batik Day.",
      wide: true,
    },
  ],
  loanwords: [
    { word: "kursi", from: "Arabic" },
    { word: "sepatu", from: "Portuguese" },
    { word: "kantor", from: "Dutch" },
    { word: "teh", from: "Hokkien" },
    { word: "jendela", from: "Portuguese" },
  ],
  quizTag: "Quick Quiz",
  done: "Done",
  perfect: "Perfect! Your brain is on fire.",
  good: "Not bad! Now you know the ones you missed.",
  restart: "Try again",
  more: "Keep sharp with crosswords",
  right: "Correct! ",
  wrong: "Not quite. ",
  score: "See score",
  next: "Next →",
  kicker: "Brain Corner",
  title: "Play for a Minute,",
  accent: "Leave a Little Smarter",
  body: "Fun facts about Indonesian language, history, and culture. Try the quick quiz: how many can you get right?",
  loanTag: "Loanwords",
  loanBody: "Plenty of Indonesian words that feel “native” are actually borrowed:",
};
