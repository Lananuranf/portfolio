// src/components/HeroIsland.tsx — Hero (React island untuk animasi masuk).
// Foto profil diambil dari /public/Profile.jpg. Animasi dimatikan bila pengguna memilih reduced motion.
import { type ReactElement } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siGithub, siInstagram } from "simple-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const [liW, liH, , , liPath] = faLinkedin.icon;

// Ikon brand resmi: simple-icons (GitHub, Instagram) & Font Awesome Brands (LinkedIn)
const SOCIAL = [
  { name: "GitHub", url: "https://github.com/Lananuranf", viewBox: "0 0 24 24", path: siGithub.path },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maulana-nur-anfajm-759a633b4/",
    viewBox: `0 0 ${liW} ${liH}`,
    path: String(liPath),
  },
  { name: "Instagram", url: "https://www.instagram.com/lananur.anf/", viewBox: "0 0 24 24", path: siInstagram.path },
];

const STACK = ["Go", "Rust", "PostgreSQL", "Docker"];

export default function HeroIsland(): ReactElement {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.1 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-5 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28"
      style={{
        background:
          "radial-gradient(60% 50% at 85% 10%, #FFE4EF 0%, transparent 70%), radial-gradient(50% 45% at 0% 90%, #F1EBF8 0%, transparent 70%), #FFFBFD",
      }}
    >
      <div className="relative max-w-5xl mx-auto grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        {/* Teks */}
        <motion.div
          className="flex flex-col items-start gap-5 order-2 md:order-1"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink"
          >
            <span className="h-2 w-2 rounded-full bg-rose-brand" aria-hidden="true" />
            Terbuka untuk magang &amp; freelance
          </motion.p>

          <motion.div variants={item}>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-ink"
            >
              Maulana Nur Anfajm
            </h1>
            <p className="mt-3 text-lg md:text-xl font-semibold text-rose-deep">
              Backend Engineer
              <span className="font-normal text-ink-muted"> · alias Lananuranf</span>
            </p>
          </motion.div>

          <motion.p variants={item} className="max-w-xl text-base md:text-lg leading-relaxed text-ink-muted">
            Saya membangun REST API dan merancang database untuk aplikasi web. Sehari-hari saya menulis Go
            dan Rust dengan PostgreSQL, lalu mengemasnya dengan Docker.
          </motion.p>

          <motion.ul variants={item} className="flex flex-wrap gap-2" aria-label="Teknologi utama">
            {STACK.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-line bg-white px-2.5 py-1 font-mono text-xs font-medium text-ink"
              >
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-deep text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
            >
              Lihat proyek
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.64l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <ul className="flex items-center gap-2" aria-label="Media sosial">
              {SOCIAL.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} Maulana Nur Anfajm (tab baru)`}
                    title={s.name}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white text-ink transition-colors duration-200 hover:border-rose-brand hover:text-rose-deep"
                  >
                    <svg viewBox={s.viewBox} fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Foto */}
        <motion.div
          className="order-1 md:order-2 justify-self-center"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-[2rem] bg-gradient-brand p-1.5 shadow-[0_24px_48px_-24px_rgba(217,67,122,0.55)]">
            <img
              src="/Profile.jpg"
              alt="Foto Maulana Nur Anfajm (Lananuranf)"
              className="block h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 max-w-[calc(100vw-4rem)] max-h-[calc(100vw-4rem)] rounded-[1.6rem] object-cover object-[50%_40%] bg-white"
              width={288}
              height={288}
              fetchPriority="high"
            />
          </div>
          <p className="mt-4 text-center font-mono text-xs text-ink-muted">Jakarta, Indonesia</p>
        </motion.div>
      </div>
    </section>
  );
}
