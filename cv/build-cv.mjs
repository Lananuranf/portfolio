// cv/build-cv.mjs — ubah cv/cv.html menjadi public/cv.pdf memakai Edge/Chrome headless.
// Jalankan: npm run cv
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("Edge/Chrome tidak ditemukan. Set CHROME_PATH ke lokasi browser.");
  process.exit(1);
}

const input = pathToFileURL(resolve("cv/cv.html")).href;
const output = resolve("public/cv.pdf");

execFileSync(browser, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${output}`,
  input,
]);
console.log("CV dibuat:", output);
