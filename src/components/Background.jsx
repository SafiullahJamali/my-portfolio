export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="diamond-grid absolute inset-0 opacity-70" />
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[110px]" />
      <div className="absolute right-[-80px] top-40 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="spin-slow absolute left-[12%] top-[28%] h-16 w-16 rotate-45 border border-cyan-300/20" />
      <div className="absolute right-[18%] top-[18%] h-10 w-10 rotate-45 border border-violet-300/25" />
    </div>
  )
}
