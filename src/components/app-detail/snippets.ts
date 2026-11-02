import { readFile } from "node:fs/promises";
import path from "node:path";
import { codeToHtml } from "shiki";
import type { EditorFile } from "@/components/shared/CodeEditor";
import type { App } from "@/data/apps";

// Highlighted at build time (static params), so no highlighter ships to the browser.
export function loadSnippets(app: App): Promise<EditorFile[]> {
  return Promise.all(
    app.snippets.map(async (snippet) => {
      const code = (
        await readFile(
          path.join(process.cwd(), "src/data/snippets", app.slug, snippet.file),
          "utf8",
        )
      ).trimEnd();
      return {
        ...snippet,
        lines: code.split("\n").length,
        html: await codeToHtml(code, { lang: snippet.lang, theme: "vesper" }),
      };
    }),
  );
}
