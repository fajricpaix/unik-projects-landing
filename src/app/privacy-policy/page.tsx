import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Unik Projects",
  description: "Kebijakan Privasi untuk aplikasi dan game Unik Projects.",
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

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <p className="text-sm">
          <Link
            href="/privacy-policy/en"
            className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
          >
            Read in English
          </Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Kebijakan Privasi
        </h1>
        <p className="mt-3 text-sm text-brand-ivory/50">
          Kebijakan Privasi ini dibuat untuk memenuhi kebutuhan submission
          Google Play Console. Berlaku untuk aplikasi dan game yang
          dikembangkan oleh Unik Projects.
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-red">
          Terakhir diperbarui: 30 Juli 2026
        </p>
      </header>

      <Section title="Pendahuluan">
        <p>
          Unik Projects (&ldquo;kami&rdquo;) menghargai privasi pengguna
          aplikasi dan game kami (&ldquo;Layanan&rdquo;). Kebijakan Privasi
          ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
          melindungi informasi saat kamu menggunakan Layanan kami. Dengan
          menggunakan aplikasi kami, kamu menyetujui praktik yang dijelaskan
          dalam kebijakan ini.
        </p>
      </Section>

      <Section title="Informasi yang Kami Kumpulkan">
        <p>
          Tergantung pada aplikasi yang kamu gunakan, kami dapat mengumpulkan
          informasi berikut:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Data Perangkat</strong> — Model perangkat, versi sistem
            operasi, identifier aplikasi (seperti Advertising ID), dan
            informasi teknis lain yang diperlukan untuk menjalankan aplikasi
            dengan baik.
          </li>
          <li>
            <strong>Data Penggunaan</strong> — Cara kamu berinteraksi dengan
            aplikasi, seperti fitur yang digunakan, durasi sesi, dan
            statistik performa aplikasi (crash report).
          </li>
          <li>
            <strong>Data yang Diberikan Secara Sukarela</strong> — Jika kamu
            menghubungi kami lewat email atau mengisi formulir, kami akan
            menerima informasi yang kamu berikan (misalnya nama dan alamat
            email).
          </li>
        </ul>
        <p>
          Kami <strong>tidak</strong> meminta atau menyimpan data sensitif
          seperti kata sandi akun pihak ketiga, data finansial, atau dokumen
          identitas resmi.
        </p>
      </Section>

      <Section title="Iklan dan Analitik">
        <p>
          Aplikasi kami dapat menggunakan layanan pihak ketiga berikut untuk
          mendukung operasional dan pengembangan:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Google AdMob</strong> — untuk menampilkan iklan dalam
            aplikasi. AdMob dapat mengumpulkan Advertising ID dan data
            terkait untuk menampilkan iklan yang relevan.
          </li>
          <li>
            <strong>Google Analytics / Firebase</strong> — untuk memahami
            cara pengguna menggunakan aplikasi kami, sehingga kami bisa terus
            memperbaiki pengalaman pengguna, serta untuk crash reporting.
          </li>
        </ul>
        <p>Layanan pihak ketiga ini memiliki kebijakan privasi mereka sendiri:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Kebijakan Privasi Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>
            Cara Google menggunakan data dari aplikasi yang memakai layanan
            Google:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="font-medium text-brand-gold underline underline-offset-2 hover:text-brand-gold/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/technologies/partner-sites
            </a>
          </li>
        </ul>
        <p>
          Kamu dapat mengatur ulang atau menonaktifkan Advertising ID melalui
          pengaturan perangkat Android kamu (Setelan &gt; Google &gt; Iklan).
        </p>
      </Section>

      <Section title="Izin Aplikasi (Permissions)">
        <p>
          Beberapa aplikasi/game kami mungkin meminta izin tertentu (misalnya
          akses internet, penyimpanan, atau notifikasi) yang diperlukan agar
          fitur aplikasi dapat berfungsi. Kami hanya meminta izin yang
          benar-benar dibutuhkan, dan izin tersebut akan dijelaskan saat
          diminta di aplikasi.
        </p>
      </Section>

      <Section title="Bagaimana Kami Menggunakan Informasi">
        <p>Informasi yang dikumpulkan digunakan untuk:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Menjalankan dan memelihara fungsi aplikasi</li>
          <li>Menampilkan iklan yang relevan (jika ada)</li>
          <li>Menganalisis dan meningkatkan performa serta pengalaman pengguna</li>
          <li>Memperbaiki bug dan masalah teknis</li>
          <li>Merespons pertanyaan atau masukan dari pengguna</li>
        </ul>
        <p>
          Kami <strong>tidak menjual</strong> data pribadi pengguna kepada
          pihak ketiga.
        </p>
      </Section>

      <Section title="Privasi Anak-Anak">
        <p>
          Layanan kami ditujukan untuk pengguna umum termasuk remaja (13
          tahun ke atas). Kami tidak dengan sengaja mengumpulkan data pribadi
          dari anak di bawah 13 tahun tanpa persetujuan orang tua/wali,
          sesuai dengan kebijakan Google Play Families dan peraturan
          perlindungan data anak yang berlaku. Jika kamu adalah orang
          tua/wali dan mengetahui anak kamu memberikan data pribadi kepada
          kami tanpa izin, silakan hubungi kami agar data tersebut dapat
          dihapus.
        </p>
      </Section>

      <Section title="Keamanan Data">
        <p>
          Kami menerapkan langkah-langkah keamanan yang wajar untuk
          melindungi informasi yang kami kumpulkan. Namun, tidak ada metode
          transmisi data melalui internet yang 100% aman, sehingga kami tidak
          dapat menjamin keamanan mutlak.
        </p>
      </Section>

      <Section title="Penyimpanan dan Retensi Data">
        <p>
          Data yang dikumpulkan disimpan selama diperlukan untuk tujuan yang
          dijelaskan dalam kebijakan ini, atau sesuai kebutuhan hukum yang
          berlaku.
        </p>
      </Section>

      <Section title="Hak Pengguna">
        <p>Kamu berhak untuk:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Meminta informasi mengenai data yang kami simpan tentang kamu</li>
          <li>Meminta penghapusan data pribadi kamu</li>
          <li>
            Menolak penggunaan data untuk iklan yang dipersonalisasi (melalui
            pengaturan Advertising ID di perangkat)
          </li>
        </ul>
        <p>
          Untuk menggunakan hak-hak ini, silakan hubungi kami melalui email
          di bawah.
        </p>
      </Section>

      <Section title="Perubahan Kebijakan Privasi">
        <p>
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
          Perubahan akan diinformasikan dengan memperbarui tanggal
          &ldquo;Terakhir diperbarui&rdquo; di halaman ini. Kami menyarankan
          kamu meninjau halaman ini secara berkala.
        </p>
      </Section>

      <Section title="Hubungi Kami">
        <p>
          Jika ada pertanyaan atau masukan terkait Kebijakan Privasi ini,
          silakan hubungi:
        </p>
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
