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
  accent: string;
  border: string;
  published: boolean;
  /** Path file halaman artikel, wajib untuk artikel yang sudah terbit. */
  file?: string;
  readTime?: string;
}

const RAW: Post[] = [
  {
    slug: "/blog/cara-deploy-react-go-docker-aws/",
    title: "Cara Deploy Aplikasi React + Go Fiber ke AWS EC2 dengan Docker",
    desc: "Panduan langkah demi langkah untuk pemula: menyiapkan server EC2, Docker Compose, HTTPS, sampai deploy otomatis setiap push ke GitHub.",
    date: "28 April 2026",
    tags: ["Docker","AWS EC2","Go Fiber","React","Tutorial"],
    accent: "from-sky-500 to-blue-600",
    border: "border-sky-200",
    published: true,
    file: "src/pages/blog/cara-deploy-react-go-docker-aws.astro",
  },
  {
    slug: "/blog/go-fiber-vs-nodejs-performa/",
    title: "Go Fiber vs Express.js: Benchmark Performa REST API Secara Langsung",
    desc: "Saya mengukur sendiri throughput, latency, dan pemakaian memori Go Fiber dan Express.js di laptop yang sama, lengkap dengan cara mengulanginya dan kapan sebaiknya memilih masing-masing.",
    date: "8 November 2026",
    tags: ["Go Fiber","Express.js","Node.js","Backend","Benchmark"],
    accent: "from-emerald-500 to-teal-600",
    border: "border-emerald-200",
    published: true,
    file: "src/pages/blog/go-fiber-vs-nodejs-performa.astro",
  },
];

export const POSTS: Post[] = [RAW[1], RAW[0], ...RAW.slice(2)].map(p => ({
  ...p,
  readTime: p.published && p.file ? readingTimeLabel(p.file) : undefined,
}));
