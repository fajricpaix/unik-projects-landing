import type { HomeCopy } from "@/components/home/copy/id";
import { CONTACT_EMAIL, SITE_DESCRIPTION_EN, SITE_NAME } from "@/data/site";

export const en: HomeCopy = {
  title: `${SITE_NAME} — Android Apps & Games from Indonesia`,
  description: SITE_DESCRIPTION_EN,
  heroTitle: "Mobile Apps and Games",
  heroAccent: "Made by Unik Projects",
  heroBody:
    "A small studio with playful ideas, taken seriously. Pick your favorite — from a crossword game that sharpens your mind to an app that keeps your shop's books.",
  explore: "Explore the Showcase",
  play: (title: string) => `Play ${title}`,
  shelf: "Showcase",
  shelfTitle: "All Our Apps &",
  shelfAccent: "Games",
  shelfBody:
    "Pick, install, and enjoy. Everything is built light so it runs smoothly on any phone.",
  about: "About Us",
  aboutTitle: "Born from Spare Time,",
  aboutAccent: "Made with Heart.",
  aboutBody:
    "is an independent developer studio. Every project starts from curiosity, not just business targets — the result is products that are unique, honest, and made with attention to detail.",
  stats: ["Apps & games released", "Indie studio", "Curiosity"],
  values: [
    {
      title: "Mobile Apps",
      description:
        "Simple, lightweight Android apps focused on what people need every day.",
    },
    {
      title: "Android Games",
      description: "Casual games that are fun to play anytime, no hassle.",
    },
    {
      title: "Experiments & Side Projects",
      description:
        "Where we try new tech and ideas before they grow into more mature products.",
    },
  ],
  faq: "FAQ",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What is Unik Projects?",
      a: "Unik Projects is an indie studio from Indonesia that makes Android apps and games, such as the crossword game TekaTekiYuk! and the shop bookkeeping app Catetin.",
    },
    {
      q: "Is TekaTekiYuk! free?",
      a: "Yes, TekaTekiYuk! is free to download on Google Play. It shows ads and offers optional in-app purchases.",
    },
    {
      q: "Can I play TekaTekiYuk! offline?",
      a: "Yes. Your progress is saved on your phone and can sync through your Google account, so it stays safe when you switch devices.",
    },
    {
      q: "When will Catetin be available?",
      a: "Catetin is coming soon to Google Play. It's free with ads, needs no login, and works without internet because all data stays on your phone.",
    },
    {
      q: "Is there an iPhone (iOS) version?",
      a: "Not yet. All Unik Projects apps and games are Android-only for now.",
    },
    {
      q: "How can I contact Unik Projects?",
      a: `Email ${CONTACT_EMAIL} for questions, feedback, or collaboration.`,
    },
  ],
  logoAlt: "Unik Projects logo",
  contact: "Contact",
  contactTitle: "Let's Talk!",
  contactBody:
    "Have a question, feedback, or want to collaborate? We'd love to hear from you.",
  follow: "Follow our journey",
  listName: "Unik Projects apps and games",
  inLanguage: "en",
  ogLocale: "en_US",
};
