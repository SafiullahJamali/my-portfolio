import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          subtitle="Internships and teaching roles that shaped a practical engineering mindset."
        />
        <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400 before:to-violet-500 md:before:left-1/2">
          {experience.map((job, index) => (
            <motion.article
              key={job.role}
              className={`relative md:w-[calc(50%-1.5rem)] ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass ml-10 rounded-3xl p-6 md:ml-0">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{job.duration}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{job.role}</h3>
                <p className="mt-1 text-slate-300">{job.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
