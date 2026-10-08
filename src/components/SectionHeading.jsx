import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-slate-300">{subtitle}</p> : null}
    </motion.div>
  )
}
