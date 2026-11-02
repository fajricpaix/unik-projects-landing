// Content rises out of a soft blur as it scrolls into view.
export const reveal = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 48, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
  }) as const;

// Cards popping in and out of a filtered grid.
export const pop = {
  layout: true,
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
  transition: { duration: 0.3 },
} as const;
