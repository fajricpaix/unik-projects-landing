import type { App } from "@/data/apps";

export default function AppStats({ stats }: { stats: App["stats"] }) {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-y-4 divide-white/10 sm:grid-cols-4 sm:divide-x rounded-2xl border border-white/10 bg-brand-black/40 py-4 backdrop-blur-sm">
      {stats.map((stat) => (
        <div key={stat.label} className="px-2 text-center">
          <dd className="text-lg font-display font-extrabold text-white sm:text-2xl">
            {stat.value}
          </dd>
          <dt className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-ivory/50 sm:text-xs">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
