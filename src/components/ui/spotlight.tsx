"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, type SpringOptions } from "motion/react";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

// Glow that follows the cursor inside its parent element.
export function Spotlight({
  className = "",
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);
  const left = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const top = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;
    parent.style.position = "relative";
    parent.style.overflow = "hidden";

    const move = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    };
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);

    parent.addEventListener("mousemove", move);
    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mousemove", move);
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] from-brand-gold/40 via-brand-red/25 to-transparent blur-xl transition-opacity duration-200 ${
        isHovered ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ width: size, height: size, left, top }}
    />
  );
}
