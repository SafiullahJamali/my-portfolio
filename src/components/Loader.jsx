import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative h-28 w-28">
          <div className="absolute inset-0 rotate-45 rounded-lg border border-cyan-300/40" />
          <motion.div
            className="absolute inset-3 rotate-45 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_40px_rgba(34,211,238,0.45)]"
            animate={{ rotate: [45, 225, 45], scale: [1, 0.92, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 animate-pulse rounded-full border border-violet-400/20" />
        </div>
        <div className="text-center">
          <p className="font-display text-xl font-bold tracking-wide text-white">Safiullah</p>
          <p className="mt-1 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
            Loading portfolio
          </p>
        </div>
      </div>
    </motion.div>
  )
}
