const lines = [
  { type: 'comment', text: '# Install' },
  { type: 'command', text: '$ npm install -g @lanter/lanter' },
  { type: 'blank' },
  { type: 'comment', text: '# Configure your provider' },
  { type: 'command', text: '$ lanter config set provider openai' },
  { type: 'command', text: '$ lanter config set model gpt-5' },
  { type: 'blank' },
  { type: 'comment', text: '# Evaluate first' },
  { type: 'command', text: '$ lanter evaluate -i ./my-node-app -d python' },
  { type: 'blank' },
  { type: 'comment', text: '# Then convert' },
  { type: 'command', text: '$ lanter run -i ./my-node-app -o ./output -d python' },
] as const

export function QuickStart() {
  return (
    <section className="py-20 border-t border-slate-100">
      <h2 className="text-sm font-medium uppercase tracking-widest text-slate-400 mb-10">Quick start</h2>
      <div className="rounded-xl border border-slate-200 bg-slate-900 overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-700/50">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="ml-2 text-sm text-slate-500 font-mono">terminal</span>
        </div>
        <pre className="p-6 text-base font-mono leading-relaxed overflow-x-auto">
          {lines.map((line, i) => {
            if (line.type === 'blank') return '\n'
            const color = line.type === 'comment' ? 'text-slate-500' : 'text-slate-300'
            return (
              <span key={i}>
                <span className={color}>{line.text}</span>
                {'\n'}
              </span>
            )
          })}
        </pre>
      </div>
    </section>
  )
}
