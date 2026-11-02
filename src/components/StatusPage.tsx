import Logo3D from "@/components/ui/logo-3d";

// Full-screen 3D logo + message, shared by the 404 and error pages.
export default function StatusPage({
  code,
  title,
  body,
  children,
}: {
  code: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[calc(100svh-10rem)] items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-40 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        <div className="relative aspect-square w-64 sm:w-80">
          <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle,rgba(240,180,41,0.22),rgba(217,45,58,0.14)_45%,transparent_70%)] blur-2xl" />
          <div className="absolute inset-[4%] rounded-full border border-dashed border-brand-gold/20" />
          <div className="absolute bottom-[9%] left-1/2 h-5 w-1/2 -translate-x-1/2 rounded-[50%] bg-brand-gold/25 blur-xl" />
          <Logo3D className="absolute inset-[7%]" />
        </div>

        <p className="mt-4 font-mono text-sm font-semibold tracking-widest text-brand-gold">{code}</p>
        <h1 className="mt-3 bg-linear-to-b from-brand-ivory to-brand-ivory/50 bg-clip-text pb-1 font-display text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-brand-ivory/70">{body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>
      </div>
    </section>
  );
}
