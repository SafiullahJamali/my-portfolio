import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education } from '../data/content'

const facts = [
  { label: 'University', value: education.university },
  { label: 'Degree', value: education.degree },
  { label: 'CGPA', value: education.cgpa },
  { label: 'Passing Year', value: education.year },
]

export default function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          subtitle="Computer Science training with a focus on software engineering fundamentals."
        />
        <motion.div
          className="glass relative overflow-hidden rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rotate-45 bg-gradient-to-br from-cyan-400/20 to-violet-500/20" />
          <p className="mb-6 font-display text-2xl font-bold text-white">QUEST, Nawabshah</p>
          <div className="grid gap-5 md:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">{fact.label}</p>
                <p className="mt-2 text-slate-100">{fact.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
