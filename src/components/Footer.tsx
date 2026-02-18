export function Footer() {
  return (
    <footer className="py-10 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400">
      <span>lanter.dev</span>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/lanter-dev/lanter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-600 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/@lanter/lanter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-600 transition-colors"
        >
          npm
        </a>
        <span>MIT License</span>
      </div>
    </footer>
  )
}
