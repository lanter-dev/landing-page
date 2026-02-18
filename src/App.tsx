import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Details } from './components/Details'
import { QuickStart } from './components/QuickStart'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Nav />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <HowItWorks />
        <Details />
        <QuickStart />
        <Footer />
      </main>
    </div>
  )
}

export default App
