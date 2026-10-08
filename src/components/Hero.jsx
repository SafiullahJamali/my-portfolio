import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { downloadCV } from '../utils/downloadCV'
import {
  IconArrow,
  IconDownload,
  IconGithub,
  IconLinkedin,
} from './Icons'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:pt-44">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-cyan-300">
            Karachi, Sindh, Pakistan
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-2xl font-semibold gradient-text sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={downloadCV}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.25)] transition hover:brightness-110"
            >
              <IconDownload /> Download CV
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60"
            >
              Contact Me <IconArrow />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 hover:bg-white/5"
            >
              <IconGithub /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 hover:bg-white/5"
            >
              <IconLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-transparent to-violet-500/30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-8">
            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 p-[3px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070b18]">
                <span className="font-display text-5xl font-bold text-white">S</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="font-display text-xl font-bold text-white">Full Stack Developer</p>
              <p className="mt-2 text-sm text-slate-300">
                PHP · Laravel · JavaScript · MySQL · Bootstrap
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ['3+', 'Projects'],
                ['2025', 'Graduate'],
                ['3.25', 'CGPA'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/5 py-3">
                  <p className="font-display text-lg font-bold text-cyan-300">{value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
