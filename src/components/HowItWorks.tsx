import { FileSearch, Cpu, Zap } from 'lucide-react'
import type { ReactNode } from 'react'

function Step({ icon, title, description, command }: {
  icon: ReactNode
  title: string
  description: string
  command?: string
}) {
  return (
    <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50">
      {icon}
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-base text-slate-500 leading-relaxed">{description}</p>
      {command && (
        <code className="block mt-4 text-sm text-slate-400 font-mono">{command}</code>
      )}
    </div>
  )
}

const steps = [
  {
    icon: <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-4"><FileSearch className="w-4.5 h-4.5 text-blue-600" /></div>,
    title: '1. Evaluate',
    description: 'Scans your codebase, maps dependencies, and produces a feasibility report with effort estimates, risks, and blockers.',
    command: 'lanter evaluate -i ./app -d python',
  },
  {
    icon: <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center mb-4"><Cpu className="w-4.5 h-4.5 text-cyan-600" /></div>,
    title: '2. Plan',
    description: 'Generates a conversion plan, interface specs, dependency mapping, and deployment strategy before writing a single line.',
  },
  {
    icon: <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-4"><Zap className="w-4.5 h-4.5 text-emerald-600" /></div>,
    title: '3. Convert',
    description: 'An AI agent reads, writes, and edits files\u2014converting your project file by file with full context of the evaluation.',
    command: 'lanter run -i ./app -o ./out -d python',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 border-t border-slate-100">
      <h2 className="text-sm font-medium uppercase tracking-widest text-slate-400 mb-10">How it works</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <Step key={step.title} {...step} />
        ))}
      </div>
    </section>
  )
}
