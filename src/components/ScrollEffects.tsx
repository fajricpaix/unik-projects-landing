"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

// Inertia scrolling for the whole site, plus a thin gold progress bar.
export default function ScrollEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.085 });

    // Glide to same-page sections ourselves; Next's Link would jump instantly
    // and fight Lenis. Links to other pages fall through to Next.
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as Element).closest?.("a[href*='#']");
      if (!(a instanceof HTMLAnchorElement)) return;
      const url = new URL(a.href);
      const target = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (url.pathname !== location.pathname || !target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
      history.pushState(history.state, "", url.hash);
    };
    window.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("click", onClick, true);
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-linear-to-r from-brand-gold via-brand-gold to-brand-red"
    />
  );
}

// Hero card sinks back and fades as the page scrolls past it.
export function HeroExit({ children }: { children: React.ReactNode }) {
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
