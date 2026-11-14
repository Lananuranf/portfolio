// src/data/posts.ts — Satu sumber data untuk daftar artikel blog.
// Waktu baca TIDAK ditulis manual: artikel yang sudah terbit dihitung dari isi file-nya,
// artikel draf tidak diberi waktu baca karena isinya belum ada.
import { readingTimeLabel } from "../lib/readingTime";

export interface Post {
  slug: string;
  title: string;
  desc: string;
  /** 1-2 kalimat untuk daftar blog (desc dipakai untuk meta description). */
  excerpt: string;
  date: string;
  tags: string[];
  published: boolean;
  /** Path file halaman artikel, wajib untuk artikel yang sudah terbit. */
  file?: string;
  readTime?: string;
}

const RAW: Post[] = [
  {
    slug: "/blog/checkout-stok-aman-go-postgresql/",
    excerpt: "Dua pembeli checkout varian yang sama di detik yang sama, dan stok tidak boleh minus. Begini cara Hii Stranger mengunci baris varian dengan FOR UPDATE di Go dan PostgreSQL.",
    title: "Checkout Tanpa Stok Minus: Mengunci Keranjang dengan FOR UPDATE di Go dan PostgreSQL",
    desc: "Checkout Hii Stranger (Go, pgx, PostgreSQL) yang menjaga stok tidak minus saat dua orang membeli bersamaan, plus pembatalan yang mengembalikan stok.",
    // TODO(tanggal): tanggal asli artikel ini belum diisi. Ubah juga datePublished/dateLabel di file artikel dan lastmod di public/sitemap.xml.
    date: "12 November 2026",
    tags: ["Go","PostgreSQL","pgx","Backend","E-commerce"],
    published: true,
    file: "src/pages/blog/checkout-stok-aman-go-postgresql.astro",
  },
  {
    slug: "/blog/alur-order-laundry-laravel-12/",
    excerpt: "Satu form publik membuat order, harga dihitung per kg, dan pembayaran bisa dicicil. Catatan backend Laravel 12 untuk Laundry Lastri.",
    title: "Membangun Alur Order Laundry di Laravel 12: Form Publik, Harga per Kg, Riwayat Status, dan Pembayaran Bertahap",
    desc: "Backend Laundry Lastri (Laravel 12) untuk Penulisan Ilmiah: order dari form publik dalam satu transaksi, harga per kg, riwayat status, dan cicilan.",
    // TODO(tanggal): tanggal asli artikel ini belum diisi. Ubah juga datePublished/dateLabel di file artikel dan lastmod di public/sitemap.xml.
    date: "12 November 2026",
    tags: ["Laravel","PHP","REST API","Backend","Penulisan Ilmiah"],
    published: true,
    file: "src/pages/blog/alur-order-laundry-laravel-12.astro",
  },
  {
    slug: "/blog/mencegah-double-booking-reservasi-rust/",
    excerpt: "Bagaimana kursi Ruang Rasa tidak terpesan dua kali saat 50 request datang bersamaan, dengan SELECT FOR UPDATE dan Idempotency-Key.",
    title: "Mencegah Double Booking di Backend Reservasi Rust dengan SELECT FOR UPDATE dan Idempotency-Key",
    desc: "Cara saya menjaga kapasitas kursi di backend Ruang Rasa (Rust, Axum, PostgreSQL) tetap benar saat banyak orang memesan bersamaan, diuji 50 request paralel.",
    // TODO(tanggal): tanggal asli artikel ini belum diisi. Ubah juga datePublished/dateLabel di file artikel dan lastmod di public/sitemap.xml.
    date: "12 November 2026",
    tags: ["Rust","Axum","PostgreSQL","Backend","Concurrency"],
    published: true,
    file: "src/pages/blog/mencegah-double-booking-reservasi-rust.astro",
  },
  {
    slug: "/blog/go-fiber-vs-nodejs-performa/",
    excerpt: "Throughput, latency, dan memori Go Fiber dibanding Express.js di laptop yang sama, plus cara mengulang ujinya.",
    title: "Go Fiber vs Express.js: Benchmark Performa REST API Secara Langsung",
    desc: "Saya mengukur throughput, latency, dan memori Go Fiber dan Express.js di laptop yang sama, lengkap dengan cara mengulanginya dan kapan memilih yang mana.",
    date: "8 November 2026",
    tags: ["Go Fiber","Express.js","Node.js","Backend","Benchmark"],
    published: true,
    file: "src/pages/blog/go-fiber-vs-nodejs-performa.astro",
  },
];

// Urutan tampil: terbaru di atas.
export const POSTS: Post[] = RAW.map(p => ({
  ...p,
  readTime: p.published && p.file ? readingTimeLabel(p.file) : undefined,
}));
