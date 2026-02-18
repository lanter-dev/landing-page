const items = [
  {
    title: 'Bring your own model',
    description: 'Works with OpenAI, Anthropic, and Ollama. Point it at any compatible endpoint. Use the model you trust.',
  },
  {
    title: 'Agentic, not template-based',
    description: 'The agent reads your source, reasons about structure, and writes idiomatic output. Not find-and-replace.',
  },
  {
    title: 'Evaluation before conversion',
    description: 'Know what you\'re getting into. The evaluation step produces a verdict, effort estimate, and risk analysis before any conversion begins.',
  },
  {
    title: 'Full tool suite',
    description: 'The agent has read, write, edit, glob, grep, and file-info tools. It navigates your project like a developer would.',
  },
]

export function Details() {
  return (
    <section className="py-20 border-t border-slate-100">
      <h2 className="text-sm font-medium uppercase tracking-widest text-slate-400 mb-10">Details</h2>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-base text-slate-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
