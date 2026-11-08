// src/lib/liveStats.ts — helper sisi browser untuk statistik pembaca real-time.

const rtf = new Intl.RelativeTimeFormat("id", { numeric: "auto" });

/** "baru saja", "5 menit yang lalu", "kemarin", dst. */
export function relativeTime(ts: number, now = Date.now()): string {
  const sec = Math.round((ts - now) / 1000);
  if (Math.abs(sec) < 60) return "baru saja";
  const min = Math.round(sec / 60);
  if (Math.abs(min) < 60) return rtf.format(min, "minute");
  const hour = Math.round(min / 60);
  if (Math.abs(hour) < 24) return rtf.format(hour, "hour");
  const day = Math.round(hour / 24);
  if (Math.abs(day) < 30) return rtf.format(day, "day");
  return new Date(ts).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

/** ID acak per tab browser, hanya untuk menghitung "sedang membaca". */
export function sessionId(): string {
  const make = () => (crypto.randomUUID?.() ?? Math.random().toString(36).slice(2) + Date.now().toString(36));
  try {
    let id = sessionStorage.getItem("reader-sid");
    if (!id) { id = make(); sessionStorage.setItem("reader-sid", id); }
    return id;
  } catch { return make(); }
}
