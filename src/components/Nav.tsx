import { Github } from 'lucide-react'

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-base font-semibold tracking-tight">lanter</span>
        <div className="flex items-center gap-5">
          <a
            href="https://www.npmjs.com/package/@lanter/lanter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            npm
          </a>
          <a
            href="https://github.com/lanter-dev/lanter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
