"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

// lottie-web needs the DOM, and loading it lazily keeps it off the critical path.
const LottieLight = dynamic(
  () => import("lottie-react").then((m) => m.LottieLight),
  { ssr: false },
);

export default function LottiePlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={className} aria-hidden="true">
      <LottieLight src={src} autoplay loop={!reduce} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
