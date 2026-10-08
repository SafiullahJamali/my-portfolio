import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-200">{name}</span>
        <span className="text-cyan-300">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A practical full stack toolkit"
          subtitle="Frontend craft, backend systems, databases, and AI-assisted delivery."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              className="glass rounded-3xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <h3 className={`mb-5 font-display text-xl font-bold text-white`}>
                <span className={`bg-gradient-to-r ${group.accent} bg-clip-text text-transparent`}>
                  {group.category}
                </span>
              </h3>
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <SkillBar key={item.name} {...item} delay={i * 0.08} />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
