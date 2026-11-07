// src/components/CVDownloadButton.tsx
// Tombol unduh CV — file ada di /public/cv.pdf
import { type ReactElement } from "react";

export default function CVDownloadButton(): ReactElement {
  return (
    <a
      href="/cv.pdf"
      download="CV_Maulana_Nur_Anfajm.pdf"
      className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-semibold rounded-xl shadow-sm transition-all duration-200 text-sm"
      aria-label="Unduh CV Maulana Nur Anfajm (PDF)"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      Unduh CV
    </a>
  );
}
