import { navLinks, profile } from '../data/content'
import { IconGithub, IconLinkedin, IconMail } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="glass mx-auto max-w-6xl rounded-3xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-white">Safiullah</p>
            <p className="mt-3 max-w-xs text-sm text-slate-300">
              Full Stack Developer crafting practical web applications for software teams.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Quick Links</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Social</p>
            <div className="mt-4 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 p-3 text-white hover:bg-white/10"
                aria-label="GitHub"
              >
                <IconGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 p-3 text-white hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <IconLinkedin />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white/5 p-3 text-white hover:bg-white/10"
                aria-label="Email"
              >
                <IconMail />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © {year} Safiullah. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
