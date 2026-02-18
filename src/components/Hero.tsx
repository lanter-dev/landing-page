import { Terminal, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-slate-200 text-sm text-slate-500">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Early stage &middot; MIT
      </div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
        Convert codebases between<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
          programming languages.
        </span>
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
        CLI tool that uses agentic AI to evaluate, plan, and convert
        your projects from one language to another.
      </p>
      <div className="flex flex-wrap gap-3">
        <code className="flex items-center gap-2.5 px-5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-base text-slate-600 font-mono select-all">
          <Terminal className="w-4.5 h-4.5 text-slate-400" />
          npm install -g @lanter/lanter
        </code>
        <a
          href="https://github.com/lanter-dev/lanter#getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-base text-white hover:bg-slate-800 transition-colors"
        >
          Get started
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
