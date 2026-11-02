export default function LegalToc({
  label,
  items,
}: {
  label: string;
  items: { id: string; title: string }[];
}) {
  const list = (
    <ol className="space-y-1 text-sm">
      {items.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="group flex gap-3 rounded-lg px-3 py-1.5 text-brand-ivory/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="font-mono text-xs leading-5 text-brand-gold/60 group-hover:text-brand-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <aside>
      <details className="rounded-2xl border border-white/10 bg-brand-surface p-2 lg:hidden">
        <summary className="cursor-pointer px-3 py-2 text-sm font-bold uppercase tracking-widest text-brand-red">
          {label}
        </summary>
        <nav aria-label={label} className="mt-1">
          {list}
        </nav>
      </details>
      <nav aria-label={label} className="sticky top-28 hidden lg:block">
        <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-brand-red">
          {label}
        </p>
        {list}
      </nav>
    </aside>
  );
}
