import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'
import { IconExternal } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Live products and an in-progress Laravel platform built with a full stack approach."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass group flex flex-col rounded-3xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    project.status === 'Live'
                      ? 'bg-cyan-400/15 text-cyan-300'
                      : 'bg-violet-400/15 text-violet-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950"
                >
                  Live Demo <IconExternal />
                </a>
              ) : (
                <div className="mt-6 rounded-full border border-white/10 px-4 py-2.5 text-center text-sm text-slate-400">
                  Demo coming soon
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
