// src/components/HeroIsland.tsx — React island untuk animasi
// Foto profil diambil dari /public/Profile.jpg
import { type ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, type Variants } from "framer-motion";
import CVDownloadButton from "./CVDownloadButton.tsx";

const SOCIAL = [
  {
    name: "GitHub", url: "https://github.com/Lananuranf",
    hover: "hover:bg-gray-900 hover:text-white hover:border-gray-900",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    name: "LinkedIn", url: "https://www.linkedin.com/in/maulana-nur-anfajm-759a633b4/",
    hover: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    name: "Instagram", url: "https://www.instagram.com/lananur.anf/",
    hover: "hover:bg-pink-500 hover:text-white hover:border-pink-500",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
];

const float: Variants = {
  animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
};
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroIsland(): ReactElement {
  return (
    <section
      id="home"
      aria-label="Perkenalan Maulana Nur Anfajm alias Lananuranf, Software Engineer Jakarta"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 25%,#f8fafc 50%,#ede9fe 75%,#fdf4ff 100%)" }}
    >
      <motion.div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-50 pointer-events-none"
        animate={{ scale:[1,1.15,1], x:[0,20,0] }} transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }} />
      <motion.div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-50 pointer-events-none"
        animate={{ scale:[1,1.2,1], x:[0,-20,0] }} transition={{ duration:10, repeat:Infinity, ease:"easeInOut", delay:2 }} />

      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 pt-28 md:pt-24 pb-12 relative z-10">

        {/* Avatar */}
        <motion.div className="relative flex-shrink-0"
          initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.8, ease:"easeOut" }}>
          <motion.div variants={float} animate="animate">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-sky-100 via-violet-100 to-pink-100 opacity-80" />
            <img
              src="/Profile.jpg"
              alt="Foto profil Maulana Nur Anfajm (Lananuranf) — Software Engineer, Jakarta"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl ring-4 ring-white"
              width={224} height={224}
            />
            <span className="absolute bottom-2 right-2 flex h-5 w-5" title="Terbuka untuk peluang kerja">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-5 w-5 rounded-full bg-emerald-400 border-2 border-white" />
            </span>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
          variants={container} initial="hidden" animate="show">

          <motion.span variants={item}
            className="text-xs font-semibold tracking-widest text-slate-400 uppercase border border-slate-200 bg-white/80 rounded-full px-4 py-1.5">
            Terbuka untuk Peluang Kerja
          </motion.span>

          <motion.div variants={item}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Maulana Nur Anfajm
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">alias <strong className="text-slate-600">Lananuranf</strong></p>
            <div className="mt-2 h-7 text-base font-semibold">
              <TypeAnimation
                sequence={["Software Engineer",1800,"Mahasiswa Sistem Informasi",1800,"Frontend & Backend Developer",1800]}
                wrapper="span" speed={55} deletionSpeed={70} repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500"
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="w-10 h-0.5 bg-slate-200 rounded-full" />

          <motion.address variants={item} className="not-italic flex flex-col gap-2">
            <a href="tel:+6285960235008" className="flex items-center justify-center md:justify-start gap-2.5 text-sm text-slate-500 hover:text-slate-800 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 flex-shrink-0" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" /></svg>
              +62 859-6023-5008
            </a>
            <a href="mailto:lananuranf@gmail.com" className="flex items-center justify-center md:justify-start gap-2.5 text-sm text-slate-500 hover:text-slate-800 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 flex-shrink-0" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              lananuranf@gmail.com
            </a>
          </motion.address>

          <motion.div variants={item} className="flex flex-row flex-wrap justify-center md:justify-start gap-3 pt-1">
            {SOCIAL.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 bg-white shadow-sm transition-all duration-200 ${s.hover}`}
                aria-label={`Profil ${s.name} Maulana Nur Anfajm Lananuranf`}>
                {s.icon}{s.name}
              </a>
            ))}
            <CVDownloadButton />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
