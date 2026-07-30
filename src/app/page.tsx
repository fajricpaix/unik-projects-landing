import Image from "next/image";
import header from "../../public/header.jpg";
import ttsLogo from "../../public/tts.webp";

const WORKS = [
  {
    title: "TekaTekiYuk!",
    logo: ttsLogo,
    category: "Game Android",
    description:
      "Game teka-teki kata seru untuk mengasah otak, dimainkan kapan aja.",
  },
];

const SERVICES = [
  {
    title: "Aplikasi Mobile",
    description:
      "Aplikasi Android yang simpel, ringan, dan fokus pada kebutuhan pengguna sehari-hari.",
  },
  {
    title: "Game Android",
    description: "Game kasual yang seru dimainkan kapan aja, tanpa ribet.",
  },
  {
    title: "Eksperimen & Side Project",
    description:
      "Tempat kami coba teknologi dan ide baru sebelum jadi produk yang lebih matang.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-140 items-center overflow-hidden">
        <Image
          src={header}
          alt="Banner Unik Projects"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/75" />
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Unik Projects
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-gold sm:text-xl">
            Studio kecil, karya iseng yang serius.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-ivory/80 sm:mx-0">
            Kami adalah developer studio independen yang lahir dari waktu
            luang — tempat eksperimen, belajar, dan bikin aplikasi serta game
            yang seru buat dipakai (dan dimainkan) siapa aja.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="#karya"
              className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
            >
              Lihat Karya Kami
            </a>
            <a
              href="#kontak"
              className="rounded-full border border-brand-red/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-red hover:bg-brand-red/15"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
          Tentang Kami
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-brand-ivory/85">
          <strong className="text-white">Unik Projects</strong> adalah
          developer studio yang dibangun untuk mengisi waktu luang dengan hal
          yang produktif dan menyenangkan. Kami percaya ide-ide kecil yang
          dikerjakan dengan niat bisa jadi sesuatu yang unik dan berguna.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-brand-ivory/85">
          Dimulai dari eksplorasi pengembangan aplikasi mobile, Unik Projects
          terus berkembang — mulai dari aplikasi sehari-hari sampai game
          ringan untuk Android yang bisa dinikmati semua kalangan, dari
          remaja sampai dewasa muda.
        </p>
      </section>

      {/* Services */}
      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-brand-red">
            Apa yang Kami Kerjakan
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-brand-black/60 p-8 transition-colors hover:border-brand-gold/40"
              >
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ivory/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Unik Projects */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
          Kenapa &ldquo;Unik Projects&rdquo;?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-brand-ivory/85">
          Karena setiap project yang kami buat lahir dari rasa penasaran,
          bukan sekadar target bisnis. Kami mengerjakan sesuatu karena ingin
          belajar dan berkarya — hasilnya, produk yang unik, jujur, dan
          dibuat dengan perhatian ke detail.
        </p>
      </section>

      {/* Our Work */}
      <section id="karya" className="bg-brand-surface py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Karya Kami
          </h2>
          <p className="mt-4 text-lg text-brand-ivory/70">
            Aplikasi dan game yang sudah kami rilis.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {WORKS.map((work) => (
              <div
                key={work.title}
                className="flex w-72 flex-col items-center rounded-2xl border border-white/10 bg-brand-black/60 p-8 text-center transition-colors hover:border-brand-gold/40"
              >
                <Image
                  src={work.logo}
                  alt={`Logo ${work.title}`}
                  width={88}
                  height={88}
                  className="h-22 w-22 rounded-2xl"
                />
                <h3 className="mt-4 text-lg font-bold text-white">
                  {work.title}
                </h3>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {work.category}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-brand-ivory/70">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-ivory/40">
            Karya lainnya segera menyusul.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="kontak" className="bg-brand-red-deep py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-gold">
            Kontak
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-ivory/85">
            Punya pertanyaan, masukan, atau mau kolaborasi? Kami senang
            mendengar dari kamu.
          </p>
          <a
            href="mailto:panggilsaya.fajri@gmail.com"
            className="mt-6 inline-block rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
          >
            panggilsaya.fajri@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
