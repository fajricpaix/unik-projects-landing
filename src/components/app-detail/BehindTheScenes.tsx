import * as motion from "motion/react-client";
import type { DetailCopy } from "@/components/app-detail/copy";
import CodeEditor, { type EditorFile } from "@/components/shared/CodeEditor";
import type { App } from "@/data/apps";
import { reveal } from "@/lib/motion";

export default function BehindTheScenes({
  app,
  files,
  t,
}: {
  app: App;
  files: EditorFile[];
  t: DetailCopy;
}) {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      <div className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.6fr]">
        <motion.div {...reveal()}>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">{t.behind}</h2>
          <p className="mt-4 text-2xl font-display font-extrabold text-white sm:text-3xl">
            {t.peek(app.title)}
          </p>
          <p className="mt-3 leading-relaxed text-brand-ivory/70">{t.peekBody(app.title)}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {app.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 font-mono text-xs text-brand-gold"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...reveal(0.12)} className="min-w-0">
          <CodeEditor project={app.slug} files={files} linesLabel={t.lines} />
        </motion.div>
      </div>
    </section>
  );
}
