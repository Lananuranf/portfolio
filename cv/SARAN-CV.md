# Saran CV: Backend Engineer (Junior / Magang)

Catatan untuk Maulana. CV di `cv/cv.html` sudah ditulis ulang (1 halaman A4, satu kolom, ATS-friendly).
Bangun ulang PDF dengan `npm run cv`, lalu pastikan hasilnya tetap 1 halaman.

## Struktur yang dipakai (dan alasannya)

1. **Header kontak**: nama paling atas, satu baris kontak berupa teks biasa (tanpa ikon) supaya ATS bisa membacanya.
2. **Profil (3-4 kalimat)**: siapa kamu, bagian backend yang kamu sukai, cara kerjamu, dan posisi yang dicari.
   Panduan kampus menyarankan menghindari klaim kosong seperti "pekerja keras" atau "team player".
3. **Hard skills dikelompokkan**: Bahasa, Framework, Database, Konsep Backend, Infrastruktur/DevOps, Tools.
   Kata kuncinya ditulis persis (mis. "PostgreSQL", "Docker Compose") karena ATS mencocokkan istilah dari lowongan.
4. **Soft skills dengan bukti**: setiap soft skill disertai contoh nyata (Rust dipelajari sendiri, 250+ test,
   kontrak API ditulis dulu, prioritas dengan anggaran kecil, artikel blog). Ini menggantikan daftar sifat tanpa bukti.
5. **Proyek backend saja**: Ruang Rasa, Letta School, Toko Online. Proyek frontend (portfolio) dibuang supaya fokus.
   Bullet diawali kata kerja aktif dan menyebut hasil/mekanisme, bukan sekadar daftar teknologi.
6. **Pendidikan** dan **Lainnya** (bahasa).

## Yang perlu kamu isi (cari `TODO` di cv/cv.html)

- [ ] **Tahun masuk dan perkiraan lulus** (mis. 2022 - 2026). Rekruter memakai ini untuk menilai kecocokan magang/full-time.
- [ ] **IPK**: cantumkan bila >= 3,00 (banyak lowongan di Indonesia memakai batas ini). Kalau di bawahnya, biarkan kosong.
- [ ] **Tingkat bahasa Inggris**: tulis jujur (mis. "membaca dokumentasi teknis dengan lancar") atau skor TOEFL/IELTS bila ada.
- [ ] **Soft skill kerja tim/kepemimpinan**: semua bukti sekarang berasal dari proyek solo. Tambahkan satu bukti dari
      organisasi kampus, proyek kelompok kuliah, kepanitiaan, atau asisten lab bila ada.
- [ ] **Pengalaman kerja/magang/freelance**: bila pernah, buat bagian "Pengalaman" di atas "Proyek".
- [ ] **Mata kuliah relevan** (opsional): Basis Data, Rekayasa Perangkat Lunak, Jaringan Komputer.

## Cara memperkuat CV dalam 1-3 bulan

- **Sertifikasi ringan**: AWS Certified Cloud Practitioner (cocok karena kamu sudah deploy di EC2), atau
  Dicoding "Belajar Membuat Aplikasi Back-End" yang dikenal rekruter lokal. Taruh di bagian "Sertifikasi".
- **Angka hasil yang terukur**: ukur sesuatu di Ruang Rasa, mis. p95 latency endpoint feed/nearby dengan `oha` atau `k6`,
  atau waktu query sebelum/sesudah index. Satu angka nyata lebih kuat dari tiga kata sifat.
- **Bukti produksi**: bila Ruang Rasa sudah live, cantumkan URL API/landing; bila belum, sebut "siap deploy".
- **CI di repo Ruang Rasa**: tambahkan GitHub Actions yang menjalankan `cargo fmt --check`, `clippy -D warnings`, dan `cargo test`
  lalu sematkan badge di README. Rekruter teknis sering membuka GitHub.
- **README yang menjual**: diagram arsitektur singkat, cara menjalankan lokal, dan penjelasan anti-overbooking.
- **Kontribusi open source**: satu PR kecil (dokumentasi atau perbaikan bug) ke crate/library yang kamu pakai (Axum, SQLx, Fiber).
- **Versi bahasa Inggris**: buat `cv/cv-en.html` untuk startup, perusahaan asing, dan lowongan remote. Isi sama, bahasa beda.
- **Sesuaikan per lowongan**: urutan hard skill dan bullet proyek boleh digeser sesuai kata kunci di deskripsi pekerjaan.
- **Uji ATS**: salin isi PDF ke Notepad. Kalau urutan teksnya masih rapi, ATS juga bisa membacanya.

## Yang sengaja tidak dicantumkan

- Foto, tanggal lahir, alamat lengkap, status: tidak dibutuhkan untuk posisi teknis dan tidak dibaca ATS.
- Bar/persentase skill: tidak bermakna bagi rekruter dan tidak terbaca ATS.
- Angka yang belum ada sumbernya (IPK, jumlah pengguna, latency): lebih baik kosong daripada dikarang.

## Sumber riset

- Harvard FAS Office of Career Services, *Resumes & Cover Letters* (undergrad):
  https://cdn-careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2022/04/undergrad_resumes_and_cover_letters-1.pdf
- Harvard T.H. Chan SPH, *Resume Guide* (kata kerja aktif, hindari "responsible for"):
  https://content.sph.harvard.edu/wwwhsph/sites/36/2016/06/Resume-Guide-June-2016.pdf
- MIT CAPD, *Resumes* dan *Interphase 2026 resume resources* (1 halaman, uji keterbacaan ATS):
  https://capd.mit.edu/resources/resumes/ · https://capd.mit.edu/blog/2026/06/23/interphase-2026-resume-resources/
- Tech Interview Handbook, *Resume* (ATS, skill dikelompokkan, bullet = pencapaian + aksi + hasil terukur):
  https://techinterviewhandbook.org/resume
- Dealls, *Contoh CV Software Engineer (ATS-Friendly)*: https://dealls.com/pengembangan-karir/contoh-cv-software-engineer
- Canva Indonesia, *Contoh CV ATS* (satu kolom, judul bagian standar, tanpa tabel/ikon): https://www.canva.com/id_id/resume/contoh/cv-ats/
- CNN Indonesia, *Contoh CV ATS untuk fresh graduate*:
  https://www.cnnindonesia.com/edukasi/20250113134918-561-1186592/contoh-cv-ats-untuk-lulusan-smk-fresh-graduate-hingga-berpengalaman
