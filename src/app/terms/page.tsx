import Link from "next/link";
import LegalPage, { legalMetadata } from "@/components/LegalPage";

const description =
  "Syarat dan Ketentuan penggunaan situs, aplikasi, dan game Android Unik Projects: aturan penggunaan, hak kekayaan intelektual, batasan tanggung jawab, dan hukum yang berlaku.";

export const metadata = legalMetadata("/terms", "id", description);

export default function Terms() {
  return (
    <LegalPage
      path="/terms"
      locale="id"
      description={description}
      intro="Berlaku untuk situs, aplikasi, dan game yang dikembangkan oleh Unik Projects."
      highlights={[
        "Gunakan Layanan secara wajar: tanpa cheat, bot, atau eksploitasi bug.",
        "Kode, desain, dan merek Unik Projects dilindungi hak kekayaan intelektual.",
        "Ketentuan ini diatur oleh hukum Republik Indonesia.",
      ]}
      sections={[
        {
          id: "penerimaan",
          title: "Penerimaan Ketentuan",
          body: (
            <p>
              Dengan mengakses situs atau menggunakan aplikasi dan game kami
              (&ldquo;Layanan&rdquo;), kamu menyetujui Syarat dan Ketentuan
              ini. Jika tidak setuju, mohon hentikan penggunaan Layanan.
            </p>
          ),
        },
        {
          id: "penggunaan-layanan",
          title: "Penggunaan Layanan",
          body: (
            <>
              <p>Kamu setuju untuk tidak:</p>
              <ul>
                <li>Menggunakan Layanan untuk tujuan yang melanggar hukum</li>
                <li>
                  Membongkar, menyalin, atau memodifikasi aplikasi tanpa izin
                  tertulis dari kami
                </li>
                <li>
                  Mengganggu atau merusak fungsi Layanan, termasuk lewat
                  cheat, bot, atau eksploitasi bug
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "kekayaan-intelektual",
          title: "Hak Kekayaan Intelektual",
          body: (
            <p>
              Seluruh konten Layanan, termasuk kode, desain, grafis, audio,
              dan merek Unik Projects, adalah milik kami atau pemberi lisensi
              kami dan dilindungi hukum yang berlaku. Kamu mendapat lisensi
              terbatas, non-eksklusif, dan tidak dapat dipindahtangankan
              untuk menggunakan Layanan secara pribadi.
            </p>
          ),
        },
        {
          id: "pihak-ketiga",
          title: "Iklan dan Layanan Pihak Ketiga",
          body: (
            <p>
              Layanan kami dapat menampilkan iklan atau tertaut ke layanan
              pihak ketiga. Kami tidak bertanggung jawab atas konten,
              kebijakan, atau praktik pihak ketiga tersebut. Penggunaan data
              oleh kami dijelaskan di{" "}
              <Link href="/privacy-policy">Kebijakan Privasi</Link>.
            </p>
          ),
        },
        {
          id: "penafian",
          title: "Penafian Jaminan",
          body: (
            <p>
              Layanan disediakan &ldquo;sebagaimana adanya&rdquo; tanpa
              jaminan apa pun, tersurat maupun tersirat. Kami tidak menjamin
              Layanan akan selalu tersedia, bebas error, atau bebas gangguan.
            </p>
          ),
        },
        {
          id: "batasan-tanggung-jawab",
          title: "Batasan Tanggung Jawab",
          body: (
            <p>
              Sejauh diizinkan hukum, Unik Projects tidak bertanggung jawab
              atas kerugian langsung, tidak langsung, atau konsekuensial yang
              timbul dari penggunaan atau ketidakmampuan menggunakan Layanan.
            </p>
          ),
        },
        {
          id: "perubahan",
          title: "Perubahan Layanan dan Ketentuan",
          body: (
            <p>
              Kami dapat mengubah, menangguhkan, atau menghentikan Layanan
              kapan saja, serta memperbarui Syarat dan Ketentuan ini.
              Perubahan diinformasikan lewat tanggal &ldquo;Terakhir
              diperbarui&rdquo; di halaman ini. Melanjutkan penggunaan
              Layanan berarti kamu menerima perubahan tersebut.
            </p>
          ),
        },
        {
          id: "hukum",
          title: "Hukum yang Berlaku",
          body: (
            <p>
              Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia.
            </p>
          ),
        },
      ]}
    />
  );
}
