"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type EditorFile = {
  file: string;
  lang: string;
  note: string;
  lines: number;
  html: string;
};

const LANG_LABEL: Record<string, string> = { dart: "Dart", jsonc: "JSON" };

export default function CodeEditor({
  project,
  files,
  linesLabel,
}: {
  project: string;
  files: EditorFile[];
  linesLabel: string;
}) {
  const [active, setActive] = useState(0);
  const current = files[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0b0a] shadow-2xl shadow-brand-red/10">
      {/* Title bar */}
      <div className="relative flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="pointer-events-none absolute inset-x-0 truncate px-20 text-center font-mono text-xs text-brand-ivory/40">
          {project} — {current.file}
        </span>
      </div>

      {/* Tabs */}
      <div
        className="flex overflow-x-auto border-b border-white/5 bg-brand-black/60"
        role="tablist"
      >
        {files.map((f, i) => (
          <button
            key={f.file}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`relative shrink-0 border-r border-white/5 px-4 py-2.5 font-mono text-xs transition-colors ${
              active === i
                ? "bg-[#0d0b0a] text-white"
                : "text-brand-ivory/45 hover:text-brand-ivory/80"
            }`}
          >
            {active === i && (
              <motion.span
                layoutId={`${project}-tab`}
                className="absolute inset-x-0 top-0 h-0.5 bg-brand-gold"
              />
            )}
            <span className="mr-1.5 text-brand-gold/80">
              {f.lang === "dart" ? "◆" : "{}"}
            </span>
            {f.file}
          </button>
        ))}
      </div>

      {/* What this snippet does */}
      <p
        key={current.file}
        className="border-b border-white/5 bg-brand-gold/5 px-4 py-3 text-sm leading-relaxed text-brand-ivory/75"
      >
        <span className="mr-2 font-mono text-brand-gold">{"//"}</span>
        {current.note}
      </p>

      {/* Code */}
      <div className="code-editor relative h-96 overflow-auto py-4 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.file}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            dangerouslySetInnerHTML={{ __html: current.html }}
          />
        </AnimatePresence>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between gap-4 bg-brand-red-dark px-4 py-1.5 font-mono text-[11px] text-brand-ivory/80">
        <span>✦ main</span>
        <span className="flex gap-4">
          <span>{current.lines} {linesLabel}</span>
          <span>{LANG_LABEL[current.lang] ?? current.lang}</span>
          <span className="hidden sm:inline">UTF-8</span>
        </span>
      </div>
    </div>
  );
}
