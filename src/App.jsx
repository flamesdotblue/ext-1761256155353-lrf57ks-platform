import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-orange-500 to-amber-600" />
            <span className="font-semibold tracking-tight">Smart Agenda+</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition">Fonctionnalités</a>
            <a href="#how" className="hover:text-white transition">Comment ça marche</a>
            <a href="#cta" className="hover:text-white transition">Commencer</a>
          </nav>
          <div className="md:hidden" />
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Smart Agenda+. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition">Fonctionnalités</a>
            <a href="#how" className="hover:text-white transition">Guide</a>
            <a href="#cta" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
