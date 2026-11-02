"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Hero card sinks back and fades as the page scrolls past it.
export default function HeroExit({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, y }}>
      {children}
    </motion.div>
  );
}
