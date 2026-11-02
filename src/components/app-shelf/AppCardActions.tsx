import Link from "next/link";
import type { ShelfCopy } from "@/components/app-shelf/copy";
import type { App } from "@/data/apps";
import { localePath, type Locale } from "@/data/i18n";

// Simple Icons: Google Play (24x24 viewBox).
const PLAY_ICON =
  "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z";

export default function AppCardActions({
  app,
  locale,
  t,
}: {
  app: App;
  locale: Locale;
  t: ShelfCopy;
}) {
  return (
    <div className="mt-6 flex gap-2">
      {app.playUrl ? (
        <a
          href={app.playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gold px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-brand-black transition-transform hover:scale-[1.03]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d={PLAY_ICON} />
          </svg>
          Google Play
        </a>
      ) : (
        <span className="flex-1 rounded-full border border-dashed border-brand-gold/40 px-4 py-2.5 text-center text-sm font-semibold whitespace-nowrap text-brand-gold">
          {t.soon}
        </span>
      )}
      <Link
        href={localePath(locale, `/apps/${app.slug}`)}
        className="group/detail inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white sm:px-5 transition-colors hover:border-brand-red hover:bg-brand-red/15"
      >
        {t.detail}
        <span
          aria-hidden="true"
          className="transition-transform group-hover/detail:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
}
