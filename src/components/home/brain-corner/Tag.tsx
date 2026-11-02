export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-brand-gold/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-gold">
      {children}
    </span>
  );
}
