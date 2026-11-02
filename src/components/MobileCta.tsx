"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

export default function MobileCta({ href, label }: { href: string; label: string }) {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 600));

  return (
    <>
      {/* Keeps the footer clear of the fixed bar. */}
      <div className="h-20 sm:hidden" />
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-gold/15 bg-brand-black/95 p-3 backdrop-blur sm:hidden"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-brand-gold py-3 text-center text-sm font-semibold text-brand-black"
            >
              {label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
