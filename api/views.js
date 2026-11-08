// api/views.js — Vercel Function: statistik pembaca artikel secara real-time.
//
//   GET  /api/views?slugs=a,b        -> { enabled, stats: { a: { views, live, lastRead }, ... } }
//   POST /api/views  { slug, sid, hit } -> { enabled, views, live, lastRead }
//
// - views    : total kunjungan (dihitung sekali per sesi browser)
// - live     : jumlah orang yang sedang membuka artikel (heartbeat < 45 detik terakhir)
// - lastRead : waktu terakhir artikel dibuka/dibaca (epoch ms)
//
// Penyimpanan: Upstash Redis lewat REST API. Isi env KV_REST_API_URL & KV_REST_API_TOKEN
// (otomatis dari integrasi Upstash di Vercel) atau UPSTASH_REDIS_REST_URL & UPSTASH_REDIS_REST_TOKEN.

// Cari variabel Upstash, termasuk yang memakai awalan custom (mis. "PORTFOLIO_KV_REST_API_URL").
function env(...suffixes) {
  for (const sfx of suffixes) if (process.env[sfx]) return process.env[sfx];
  for (const sfx of suffixes) {
    const key = Object.keys(process.env).find((k) => k.endsWith(`_${sfx}`) && process.env[k]);
    if (key) return process.env[key];
  }
  return undefined;
}
const URL_ = env("KV_REST_API_URL", "UPSTASH_REDIS_REST_URL");
const TOKEN = env("KV_REST_API_TOKEN", "UPSTASH_REDIS_REST_TOKEN");
const LIVE_WINDOW_MS = 45_000;
const SLUG_RE = /^[a-z0-9-]{1,80}$/;
const SID_RE = /^[a-zA-Z0-9-]{8,64}$/;

async function redis(commands) {
  const r = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!r.ok) throw new Error(`Redis ${r.status}`);
  const out = await r.json();
  return out.map((x) => x.result);
}

const k = (slug) => ({ views: `blog:${slug}:views`, last: `blog:${slug}:last`, live: `blog:${slug}:live` });

async function readStats(slugs, now) {
  const cmds = [];
  for (const s of slugs) {
    const key = k(s);
    cmds.push(["ZREMRANGEBYSCORE", key.live, "-inf", String(now - LIVE_WINDOW_MS)]);
    cmds.push(["GET", key.views], ["GET", key.last], ["ZCARD", key.live]);
  }
  const res = await redis(cmds);
  const stats = {};
  slugs.forEach((s, i) => {
    const [, views, last, live] = res.slice(i * 4, i * 4 + 4);
    stats[s] = { views: Number(views) || 0, lastRead: last ? Number(last) : null, live: Number(live) || 0 };
  });
  return stats;
}

function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  try { return JSON.parse(req.body || "{}"); } catch { return {}; }
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!URL_ || !TOKEN) return res.status(200).json({ enabled: false });

  const now = Date.now();
  try {
    if (req.method === "GET") {
      const slugs = String(req.query.slugs || "").split(",").filter((s) => SLUG_RE.test(s)).slice(0, 20);
      if (!slugs.length) return res.status(400).json({ error: "slugs wajib diisi" });
      return res.status(200).json({ enabled: true, stats: await readStats(slugs, now) });
    }

    if (req.method === "POST") {
      const { slug, sid, hit } = readBody(req);
      if (!SLUG_RE.test(slug || "") || !SID_RE.test(sid || "")) return res.status(400).json({ error: "data tidak valid" });
      const key = k(slug);
      const cmds = [["ZADD", key.live, String(now), sid], ["SET", key.last, String(now)]];
      if (hit) cmds.push(["INCR", key.views]);
      await redis(cmds);
      const stats = await readStats([slug], now);
      return res.status(200).json({ enabled: true, ...stats[slug] });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method tidak didukung" });
  } catch (err) {
    console.error(err);
    return res.status(502).json({ enabled: true, error: "penyimpanan tidak bisa dihubungi" });
  }
}
