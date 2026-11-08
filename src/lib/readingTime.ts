// src/lib/readingTime.ts — Hitung waktu baca dari isi artikel yang sebenarnya.
// Dijalankan saat build, jadi angkanya selalu ikut berubah kalau artikelnya diedit.
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const WORDS_PER_MINUTE = 200;

/** Hitung jumlah kata dari file halaman blog (.astro): teks yang tampil + isi code snippet. */
export function countWords(pageFile: string): number {
  const src = readFileSync(join(process.cwd(), pageFile), "utf8");
  const parts = src.split(/^---\s*$/m);
  const frontmatter = parts[1] ?? "";
  const template = parts.slice(2).join("---");

  // Code snippet ditulis sebagai template literal di frontmatter lalu di-inject via set:html.
  const code = [...frontmatter.matchAll(/=\s*`([\s\S]*?)`;/g)].map(m => m[1]).join(" ");

  const text = template
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")        // tag HTML
    .replace(/\{[^{}]*\}/g, " ")     // ekspresi Astro sederhana
    .replace(/&[a-z]+;/gi, " ");

  const words = `${text} ${code}`.match(/[\p{L}\p{N}][\p{L}\p{N}'’\-_.\/]*/gu);
  return words?.length ?? 0;
}

export function readingMinutes(words: number): number {
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function readingTimeLabel(pageFile: string): string {
  return `${readingMinutes(countWords(pageFile))} menit baca`;
}
