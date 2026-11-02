"use client";

import { MotionConfig } from "motion/react";
import ScrollEffects from "@/components/layout/ScrollEffects";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollEffects />
      {children}
    </MotionConfig>
  );
}
