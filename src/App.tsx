import { Github } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* GitHub Link - Top Right */}
      <a
        href="https://github.com/lanter-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 p-3 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        aria-label="View on GitHub"
      >
        <Github className="w-6 h-6 text-slate-900 dark:text-slate-100" />
      </a>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              lanter
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4">
              Transform your applications across languages
            </p>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              An open-source dev tool for converting applications from one programming language to another.
            </p>
          </header>

          {/* Coming Soon Badge */}
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm tracking-wide">
              COMING SOON
            </span>
          </div>

          {/* Footer */}
          <footer className="mt-24 text-center text-sm text-slate-500 dark:text-slate-500">
            <p>
              <a
                href="https://github.com/lanter-dev/landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                lanter.dev
              </a>
              {' '}&middot;{' '}
              Hosted on GitHub ❤️
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
