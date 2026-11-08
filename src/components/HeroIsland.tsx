// src/components/HeroIsland.tsx — React island untuk animasi
// Foto profil diambil dari /public/Profile.jpg
import { type ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, type Variants } from "framer-motion";
import CVDownloadButton from "./CVDownloadButton.tsx";
import { siGithub, siInstagram } from "simple-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Ikon brand dari simple-icons & Font Awesome Free Brands (LinkedIn)
function BrandIcon({ icon, viewBox = "0 0 24 24", path }: { icon?: { path: string }; viewBox?: string; path?: string }) {
  return (
    <svg viewBox={viewBox} fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d={icon ? icon.path : path} />
    </svg>
  );
}

const SOCIAL = [
  {
    name: "GitHub", url: "https://github.com/Lananuranf",
    hover: "hover:bg-gray-900 hover:text-white hover:border-gray-900",
    icon: <BrandIcon icon={siGithub} />,
  },
  {
    name: "LinkedIn", url: "https://www.linkedin.com/in/maulana-nur-anfajm-759a633b4/",
    hover: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    icon: <BrandIcon viewBox={`0 0 ${faLinkedin.icon[0]} ${faLinkedin.icon[1]}`} path={String(faLinkedin.icon[4])} />,
  },
  {
    name: "Instagram", url: "https://www.instagram.com/lananur.anf/",
    hover: "hover:bg-pink-500 hover:text-white hover:border-pink-500",
    icon: <BrandIcon icon={siInstagram} />,
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
                sequence={["Software Engineer",1800,"Mahasiswa Sistem Informasi",1800,"Pengembang Frontend & Backend",1800]}
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
