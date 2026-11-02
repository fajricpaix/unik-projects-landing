import LottiePlayer from "@/components/shared/LottiePlayer";
import type { App } from "@/data/apps";

export default function AppCardBanner({
  app,
  status,
}: {
  app: App;
  status: string;
}) {
  return (
    <div className="relative flex h-52 items-center justify-center overflow-hidden bg-linear-to-br from-brand-red-deep via-brand-surface to-brand-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,239,228,0.08)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)] bg-size-[18px_18px]" />
      <div className="absolute h-40 w-40 rounded-full bg-brand-gold/10 blur-3xl transition-all duration-500 group-hover:h-56 group-hover:w-56 group-hover:bg-brand-gold/20" />
      <LottiePlayer
        src={app.lottie}
        className="relative h-36 w-36 transition-transform duration-500 group-hover:scale-110"
      />
      <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-brand-black/70 px-3 py-1 text-[11px] font-semibold text-brand-ivory backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          {app.playUrl && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              app.playUrl ? "bg-emerald-400" : "bg-brand-gold"
            }`}
          />
        </span>
        {status}
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-black">
        {app.category}
      </span>
    </div>
  );
}
