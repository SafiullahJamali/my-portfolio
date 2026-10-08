import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

const highlights = [
  { label: 'Degree', value: 'BS Computer Science' },
  { label: 'University', value: 'QUEST, Nawabshah' },
  { label: 'CGPA', value: '3.25 / 4.0' },
  { label: 'Focus', value: 'Full Stack Development' },
]

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Building dependable full stack products"
          subtitle="A graduate engineer focused on shipping clean, maintainable web systems."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="glass rounded-3xl p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-lg leading-8 text-slate-200">{profile.about}</p>
          </motion.div>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {highlights.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">{item.label}</p>
                <p className="mt-2 font-medium text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
