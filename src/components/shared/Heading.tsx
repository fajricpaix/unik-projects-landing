const line = <span className="h-px w-8 bg-brand-red" />;

// Small red section label, with a rule on the left (and right when centered).
export function Kicker({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <h2 className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-red">
      {line}
      {children}
      {centered && line}
    </h2>
  );
}

// Gold-to-red gradient text for the highlighted half of a title.
export function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-linear-to-r from-brand-gold to-brand-red bg-clip-text text-transparent">
      {children}
    </span>
  );
}
