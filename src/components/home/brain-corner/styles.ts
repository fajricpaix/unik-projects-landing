export const tile =
  "relative overflow-hidden rounded-3xl border border-brand-gold/15 bg-brand-surface/80 p-6 sm:p-7";
// Faint dotted texture, a nod to batik without an image.
export const dots =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(240,180,41,0.08)_1px,transparent_1px)] bg-size-[14px_14px]";

export const tileReveal = (i: number) => ({
  initial: { opacity: 0, y: 40, scale: 0.97, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
});
