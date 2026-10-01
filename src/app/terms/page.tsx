import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Unik Projects",
  description: "Syarat dan Ketentuan penggunaan aplikasi dan game Unik Projects.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-4 text-base leading-relaxed text-brand-ivory/80">
        {children}
      </div>
    </section>
  );
}

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <p className="text-sm">
          <Link
            href="/terms/en"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            Read in English
          </Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Syarat dan Ketentuan
        </h1>
        <p className="mt-3 text-sm text-brand-ivory/50">
          Berlaku untuk situs, aplikasi, dan game yang dikembangkan oleh Unik
          Projects.
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-red">
          Terakhir diperbarui: 1 Oktober 2026
        </p>
      </header>

      <Section title="Penerimaan Ketentuan">
        <p>
          Dengan mengakses situs atau menggunakan aplikasi dan game kami
          (&ldquo;Layanan&rdquo;), kamu menyetujui Syarat dan Ketentuan ini.
          Jika tidak setuju, mohon hentikan penggunaan Layanan.
        </p>
      </Section>

      <Section title="Penggunaan Layanan">
        <p>Kamu setuju untuk tidak:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Menggunakan Layanan untuk tujuan yang melanggar hukum</li>
          <li>
            Membongkar, menyalin, atau memodifikasi aplikasi tanpa izin
            tertulis dari kami
          </li>
          <li>
            Mengganggu atau merusak fungsi Layanan, termasuk lewat cheat, bot,
            atau eksploitasi bug
          </li>
        </ul>
      </Section>

      <Section title="Hak Kekayaan Intelektual">
        <p>
          Seluruh konten Layanan, termasuk kode, desain, grafis, audio, dan
          merek Unik Projects, adalah milik kami atau pemberi lisensi kami dan
          dilindungi hukum yang berlaku. Kamu mendapat lisensi terbatas,
          non-eksklusif, dan tidak dapat dipindahtangankan untuk menggunakan
          Layanan secara pribadi.
        </p>
      </Section>

      <Section title="Iklan dan Layanan Pihak Ketiga">
        <p>
          Layanan kami dapat menampilkan iklan atau tertaut ke layanan pihak
          ketiga. Kami tidak bertanggung jawab atas konten, kebijakan, atau
          praktik pihak ketiga tersebut. Penggunaan data oleh kami dijelaskan
          di{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            Kebijakan Privasi
          </a>
          .
        </p>
      </Section>

      <Section title="Penafian Jaminan">
        <p>
          Layanan disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan
          apa pun, tersurat maupun tersirat. Kami tidak menjamin Layanan akan
          selalu tersedia, bebas error, atau bebas gangguan.
        </p>
      </Section>

      <Section title="Batasan Tanggung Jawab">
        <p>
          Sejauh diizinkan hukum, Unik Projects tidak bertanggung jawab atas
          kerugian langsung, tidak langsung, atau konsekuensial yang timbul
          dari penggunaan atau ketidakmampuan menggunakan Layanan.
        </p>
      </Section>

      <Section title="Perubahan Layanan dan Ketentuan">
        <p>
          Kami dapat mengubah, menangguhkan, atau menghentikan Layanan kapan
          saja, serta memperbarui Syarat dan Ketentuan ini. Perubahan
          diinformasikan lewat tanggal &ldquo;Terakhir diperbarui&rdquo; di
          halaman ini. Melanjutkan penggunaan Layanan berarti kamu menerima
          perubahan tersebut.
        </p>
      </Section>

      <Section title="Hukum yang Berlaku">
        <p>
          Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia.
        </p>
      </Section>

      <Section title="Hubungi Kami">
        <p>
          <strong>Unik Projects</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:panggilsaya.fajri@gmail.com"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            panggilsaya.fajri@gmail.com
          </a>
        </p>
      </Section>
    </article>
  );
}
