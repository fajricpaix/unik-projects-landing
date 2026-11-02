import LegalPage from "@/components/legal/LegalPage";
import { legalMetadata } from "@/components/legal/metadata";

const description =
  "Kebijakan Privasi aplikasi dan game Android Unik Projects: data yang dikumpulkan, penggunaan iklan (AdMob) dan analitik (Firebase), serta hak kamu atas data pribadi.";

export const metadata = legalMetadata("/privacy-policy", "id", description);

export default function PrivacyPolicy() {
  return (
    <LegalPage
      path="/privacy-policy"
      locale="id"
      description={description}
      intro="Kebijakan Privasi ini dibuat untuk memenuhi kebutuhan submission Google Play Console. Berlaku untuk aplikasi dan game yang dikembangkan oleh Unik Projects."
      highlights={[
        "Kami tidak menjual data pribadi pengguna kepada pihak ketiga.",
        "Iklan dan analitik memakai layanan Google: AdMob dan Firebase.",
        "Kamu bisa meminta data pribadi kamu dihapus lewat email.",
      ]}
      sections={[
        {
          id: "pendahuluan",
          title: "Pendahuluan",
          body: <p>Unik Projects (&ldquo;kami&rdquo;) menghargai privasi pengguna aplikasi dan game kami (&ldquo;Layanan&rdquo;). Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi saat kamu menggunakan Layanan kami. Dengan menggunakan aplikasi kami, kamu menyetujui praktik yang dijelaskan dalam kebijakan ini.</p>,
        },
        {
          id: "informasi-dikumpulkan",
          title: "Informasi yang Kami Kumpulkan",
          body: <>
            <p>Tergantung pada aplikasi yang kamu gunakan, kami dapat mengumpulkan informasi berikut:</p>
            <ul>
              <li><strong>Data Perangkat</strong> — Model perangkat, versi sistem operasi, identifier aplikasi (seperti Advertising ID), dan informasi teknis lain yang diperlukan untuk menjalankan aplikasi dengan baik.</li>
              <li><strong>Data Penggunaan</strong> — Cara kamu berinteraksi dengan aplikasi, seperti fitur yang digunakan, durasi sesi, dan statistik performa aplikasi (crash report).</li>
              <li><strong>Data yang Diberikan Secara Sukarela</strong> — Jika kamu menghubungi kami lewat email atau mengisi formulir, kami akan menerima informasi yang kamu berikan (misalnya nama dan alamat email).</li>
            </ul>
            <p>Kami <strong>tidak</strong> meminta atau menyimpan data sensitif seperti kata sandi akun pihak ketiga, data finansial, atau dokumen identitas resmi.</p>
          </>,
        },
        {
          id: "iklan-analitik",
          title: "Iklan dan Analitik",
          body: <>
            <p>Aplikasi kami dapat menggunakan layanan pihak ketiga berikut untuk mendukung operasional dan pengembangan:</p>
            <ul>
              <li><strong>Google AdMob</strong> — untuk menampilkan iklan dalam aplikasi. AdMob dapat mengumpulkan Advertising ID dan data terkait untuk menampilkan iklan yang relevan.</li>
              <li><strong>Google Analytics / Firebase</strong> — untuk memahami cara pengguna menggunakan aplikasi kami, sehingga kami bisa terus memperbaiki pengalaman pengguna, serta untuk crash reporting.</li>
            </ul>
            <p>Layanan pihak ketiga ini memiliki kebijakan privasi mereka sendiri:</p>
            <ul>
              <li>Kebijakan Privasi Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
              <li>Cara Google menggunakan data dari aplikasi yang memakai layanan Google: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a></li>
            </ul>
            <p>Kamu dapat mengatur ulang atau menonaktifkan Advertising ID melalui pengaturan perangkat Android kamu (Setelan &gt; Google &gt; Iklan).</p>
          </>,
        },
        {
          id: "izin-aplikasi",
          title: "Izin Aplikasi (Permissions)",
          body: <p>Beberapa aplikasi/game kami mungkin meminta izin tertentu (misalnya akses internet, penyimpanan, atau notifikasi) yang diperlukan agar fitur aplikasi dapat berfungsi. Kami hanya meminta izin yang benar-benar dibutuhkan, dan izin tersebut akan dijelaskan saat diminta di aplikasi.</p>,
        },
        {
          id: "penggunaan-informasi",
          title: "Bagaimana Kami Menggunakan Informasi",
          body: <>
            <p>Informasi yang dikumpulkan digunakan untuk:</p>
            <ul>
              <li>Menjalankan dan memelihara fungsi aplikasi</li>
              <li>Menampilkan iklan yang relevan (jika ada)</li>
              <li>Menganalisis dan meningkatkan performa serta pengalaman pengguna</li>
              <li>Memperbaiki bug dan masalah teknis</li>
              <li>Merespons pertanyaan atau masukan dari pengguna</li>
            </ul>
            <p>Kami <strong>tidak menjual</strong> data pribadi pengguna kepada pihak ketiga.</p>
          </>,
        },
        {
          id: "privasi-anak",
          title: "Privasi Anak-Anak",
          body: <p>Layanan kami ditujukan untuk pengguna umum termasuk remaja (13 tahun ke atas). Kami tidak dengan sengaja mengumpulkan data pribadi dari anak di bawah 13 tahun tanpa persetujuan orang tua/wali, sesuai dengan kebijakan Google Play Families dan peraturan perlindungan data anak yang berlaku. Jika kamu adalah orang tua/wali dan mengetahui anak kamu memberikan data pribadi kepada kami tanpa izin, silakan hubungi kami agar data tersebut dapat dihapus.</p>,
        },
        {
          id: "keamanan-data",
          title: "Keamanan Data",
          body: <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi yang kami kumpulkan. Namun, tidak ada metode transmisi data melalui internet yang 100% aman, sehingga kami tidak dapat menjamin keamanan mutlak.</p>,
        },
        {
          id: "retensi-data",
          title: "Penyimpanan dan Retensi Data",
          body: <p>Data yang dikumpulkan disimpan selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, atau sesuai kebutuhan hukum yang berlaku.</p>,
        },
        {
          id: "hak-pengguna",
          title: "Hak Pengguna",
          body: <>
            <p>Kamu berhak untuk:</p>
            <ul>
              <li>Meminta informasi mengenai data yang kami simpan tentang kamu</li>
              <li>Meminta penghapusan data pribadi kamu</li>
              <li>Menolak penggunaan data untuk iklan yang dipersonalisasi (melalui pengaturan Advertising ID di perangkat)</li>
            </ul>
            <p>Untuk menggunakan hak-hak ini, silakan hubungi kami melalui email di bawah.</p>
          </>,
        },
        {
          id: "perubahan",
          title: "Perubahan Kebijakan Privasi",
          body: <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diinformasikan dengan memperbarui tanggal &ldquo;Terakhir diperbarui&rdquo; di halaman ini. Kami menyarankan kamu meninjau halaman ini secara berkala.</p>,
        },
      ]}
    />
  );
}
