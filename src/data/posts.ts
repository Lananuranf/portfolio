// src/data/posts.ts — Satu sumber data untuk daftar artikel blog.
// Waktu baca TIDAK ditulis manual: artikel yang sudah terbit dihitung dari isi file-nya,
// artikel draf tidak diberi waktu baca karena isinya belum ada.
import { readingTimeLabel } from "../lib/readingTime";

export interface Post {
  slug: string;
  title: string;
  desc: string;
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
    title: "Checkout Tanpa Stok Minus: Mengunci Keranjang dengan FOR UPDATE di Go dan PostgreSQL",
    desc: "Checkout Hii Stranger (Go, pgx, PostgreSQL) yang menjaga stok tidak minus saat dua orang membeli bersamaan, plus pembatalan yang mengembalikan stok.",
    date: "12 November 2026",
    tags: ["Go","PostgreSQL","pgx","Backend","E-commerce"],
    published: true,
    file: "src/pages/blog/checkout-stok-aman-go-postgresql.astro",
  },
  {
    slug: "/blog/alur-order-laundry-laravel-12/",
    title: "Membangun Alur Order Laundry di Laravel 12: Form Publik, Harga per Kg, Riwayat Status, dan Pembayaran Bertahap",
    desc: "Backend Laundry Lastri (Laravel 12) untuk Penulisan Ilmiah: order dari form publik dalam satu transaksi, harga per kg, riwayat status, dan cicilan.",
    date: "12 November 2026",
    tags: ["Laravel","PHP","REST API","Backend","Penulisan Ilmiah"],
    published: true,
    file: "src/pages/blog/alur-order-laundry-laravel-12.astro",
  },
  {
    slug: "/blog/mencegah-double-booking-reservasi-rust/",
    title: "Mencegah Double Booking di Backend Reservasi Rust dengan SELECT FOR UPDATE dan Idempotency-Key",
    desc: "Cara saya menjaga kapasitas kursi di backend Ruang Rasa (Rust, Axum, PostgreSQL) tetap benar saat banyak orang memesan bersamaan, diuji 50 request paralel.",
    date: "12 November 2026",
    tags: ["Rust","Axum","PostgreSQL","Backend","Concurrency"],
    published: true,
    file: "src/pages/blog/mencegah-double-booking-reservasi-rust.astro",
  },
  {
    slug: "/blog/go-fiber-vs-nodejs-performa/",
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
