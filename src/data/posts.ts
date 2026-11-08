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
    title: "Cara Deploy Fullstack App React + Go Fiber ke AWS EC2 dengan Docker & GitHub Actions",
    desc: "Panduan lengkap dari nol: setup EC2, Docker Compose, Nginx reverse proxy, SSL, sampai CI/CD pipeline otomatis yang jalan tiap push ke main.",
    date: "28 April 2026",
    tags: ["Docker","AWS EC2","Go Fiber","GitHub Actions","CI/CD"],
    accent: "from-sky-500 to-blue-600",
    border: "border-sky-200",
    published: true,
    file: "src/pages/blog/cara-deploy-react-go-docker-aws.astro",
  },
  {
    slug: "/blog/devsecops-pipeline-github-actions/",
    title: "Membangun DevSecOps Pipeline di GitHub Actions: GitLeaks, Semgrep, Trivy, OWASP ZAP",
    desc: "Panduan langkah demi langkah memasang 4 alat pengecekan keamanan di pipeline GitHub Actions.",
    date: "Segera hadir",
    tags: ["DevSecOps","GitLeaks","Semgrep","Trivy","OWASP ZAP"],
    accent: "from-violet-500 to-purple-600",
    border: "border-violet-200",
    published: false,
  },
  {
    slug: "/blog/go-fiber-vs-nodejs-performa/",
    title: "Go Fiber vs Node.js Express: Benchmark Performa untuk Backend REST API",
    desc: "Benchmark langsung antara Go Fiber dan Node.js Express — latency, throughput, memory usage, dan kapan harus pilih masing-masing.",
    date: "Segera hadir",
    tags: ["Go Fiber","Node.js","Backend","Performance","Benchmark"],
    accent: "from-emerald-500 to-teal-600",
    border: "border-emerald-200",
    published: false,
  },
  {
    slug: "/blog/random-forest-sales-prediction-python/",
    title: "Prediksi Penjualan dengan Random Forest di Python: End-to-End ML Pipeline",
    desc: "Langkah demi langkah memprediksi penjualan: membersihkan data, membuat fitur, melatih Random Forest, evaluasi, lalu menampilkannya di Streamlit.",
    date: "Segera hadir",
    tags: ["Python","Scikit-learn","Random Forest","Streamlit","Data Science"],
    accent: "from-amber-500 to-orange-500",
    border: "border-amber-200",
    published: false,
  },
];

export const POSTS: Post[] = RAW.map(p => ({
  ...p,
  readTime: p.published && p.file ? readingTimeLabel(p.file) : undefined,
}));
