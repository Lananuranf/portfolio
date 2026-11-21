// src/lib/icons.ts
// Ikon teknologi untuk dipakai dengan `set:html`. Path brand diambil dari paket
// `simple-icons` saat build (tanpa request/JS tambahan di browser).
// Label tanpa ikon resmi memakai ikon terdekat yang jujur (mis. Axum/SQLx -> Rust).
import {
  siRust, siTokio, siPostgresql, siGo, siGin, siDocker, siNginx, siCaddy,
  siGithubactions, siRedis, siJsonwebtokens, siLinux, siUbuntu, siGit,
  siPostman, siFirebase, siCloudflare, siMinio, siOpenapiinitiative,
  siLaravel, siPhp, siNextdotjs, siPrometheus, siSqlite, siMysql, siCloudinary,
} from "simple-icons";

export interface TechIcon { svg: string; hex: string }

interface SimpleIcon { path: string; hex: string }

const fromSimple = (icon: SimpleIcon): TechIcon => ({
  hex: icon.hex,
  svg: `<svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="#${icon.hex}" xmlns="http://www.w3.org/2000/svg"><path d="${icon.path}"/></svg>`,
});

// WebSocket tidak punya logo resmi di simple-icons: ikon colokan sederhana.
const WEBSOCKET: TechIcon = {
  hex: "7B5FA6",
  svg: `<svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="none" stroke="#7B5FA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v5M15 2v5"/><path d="M6 7h12v4a6 6 0 0 1-12 0V7z" fill="#7B5FA6" fill-opacity="0.15"/><path d="M12 17v5"/></svg>`,
};

const rust = fromSimple(siRust);
const go = fromSimple(siGo);
const postgres = fromSimple(siPostgresql);
const docker = fromSimple(siDocker);

const ICONS: Record<string, TechIcon> = {
  "Rust": rust,
  "Axum": rust,
  "Tokio": fromSimple(siTokio),
  "SQLx": rust,
  "PostgreSQL": postgres,
  "PostGIS": postgres,
  "Go": go,
  "Go Fiber": go,
  "Go Gin": fromSimple(siGin),
  "GORM": go,
  "Docker": docker,
  "Docker Compose": docker,
  "Nginx": fromSimple(siNginx),
  "Caddy": fromSimple(siCaddy),
  "GitHub Actions": fromSimple(siGithubactions),
  "Redis": fromSimple(siRedis),
  "WebSocket": WEBSOCKET,
  "JWT": fromSimple(siJsonwebtokens),
  "Linux": fromSimple(siLinux),
  "Ubuntu": fromSimple(siUbuntu),
  "Git": fromSimple(siGit),
  "Postman": fromSimple(siPostman),
  "Firebase Cloud Messaging": fromSimple(siFirebase),
  "Cloudflare R2": fromSimple(siCloudflare),
  "MinIO": fromSimple(siMinio),
  "OpenAPI": fromSimple(siOpenapiinitiative),
  "Laravel": fromSimple(siLaravel),
  "Laravel Sanctum": fromSimple(siLaravel),
  "PHP": fromSimple(siPhp),
  "Next.js": fromSimple(siNextdotjs),
  "Prometheus": fromSimple(siPrometheus),
  "SQLite": fromSimple(siSqlite),
  "MySQL": fromSimple(siMysql),
  "Cloudinary": fromSimple(siCloudinary),
  "pgx": postgres,
};

const LOOKUP = new Map(
  Object.entries(ICONS).map(([k, v]) => [k.toLowerCase(), v] as const),
);

/** Daftar label yang punya ikon. */
export const techIconList: string[] = Object.keys(ICONS);

/** Ikon untuk label teknologi (tidak peka huruf besar/kecil), atau null. */
export function techIcon(label: string): TechIcon | null {
  return LOOKUP.get(label.trim().toLowerCase()) ?? null;
}
