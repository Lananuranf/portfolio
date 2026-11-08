// src/lib/github.ts — Ambil data repo asli dari GitHub API saat build,
// dipakai sebagai bukti kepemilikan proyek (siapa pembuatnya, kapan, berapa commit).

export const GITHUB_USER = "Lananuranf";

export interface RepoProof {
  repo: string;
  url: string;
  commitsUrl: string;
  createdAt: string | null;   // tanggal repo dibuat (ISO)
  pushedAt: string | null;    // push terakhir (ISO)
  myCommits: number | null;   // jumlah commit oleh GITHUB_USER
  sharePct: number | null;    // persentase commit oleh GITHUB_USER dari semua kontributor
}

const cache = new Map<string, Promise<RepoProof>>();

async function gh(path: string) {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "portfolio-build" };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub ${res.status} ${path}`);
  return res.json();
}

async function load(repo: string): Promise<RepoProof> {
  const proof: RepoProof = {
    repo,
    url: `https://github.com/${GITHUB_USER}/${repo}`,
    commitsUrl: `https://github.com/${GITHUB_USER}/${repo}/commits?author=${GITHUB_USER}`,
    createdAt: null,
    pushedAt: null,
    myCommits: null,
    sharePct: null,
  };
  try {
    const [info, contributors] = await Promise.all([
      gh(`/repos/${GITHUB_USER}/${repo}`),
      gh(`/repos/${GITHUB_USER}/${repo}/contributors?per_page=100`),
    ]);
    proof.createdAt = info.created_at ?? null;
    proof.pushedAt = info.pushed_at ?? null;
    if (Array.isArray(contributors)) {
      const total = contributors.reduce((s: number, c: any) => s + (c.contributions ?? 0), 0);
      const mine = contributors.find((c: any) => c.login?.toLowerCase() === GITHUB_USER.toLowerCase());
      proof.myCommits = mine?.contributions ?? 0;
      proof.sharePct = total > 0 ? Math.round((proof.myCommits / total) * 100) : null;
    }
  } catch (err) {
    // Build tetap jalan walau GitHub API gagal / kena rate limit; bukti tampil tanpa angka.
    console.warn(`[github] gagal ambil data ${repo}:`, (err as Error).message);
  }
  return proof;
}

export function getRepoProof(repo: string): Promise<RepoProof> {
  if (!cache.has(repo)) cache.set(repo, load(repo));
  return cache.get(repo)!;
}

export function formatBulanTahun(iso: string | null): string | null {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("id-ID", { month: "long", year: "numeric" });
}
