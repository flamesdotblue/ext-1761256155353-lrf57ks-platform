function CTA() {
  return (
    <section id="cta" className="relative mt-24 mb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-900/60">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute right-[-10%] top-[-30%] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute left-[-10%] bottom-[-30%] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
          </div>
          <div className="relative p-8 sm:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold">Prêt à gagner du temps ?</h3>
              <p className="mt-2 text-neutral-300">Rejoignez Smart Agenda+ et laissez les rappels intelligents vous guider au quotidien.</p>
            </div>

            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Votre email"
                className="flex-1 rounded-md border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-amber-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/20 hover:brightness-110 transition"
              >
                Demander l’accès
              </button>
            </form>

            <p className="mt-3 text-xs text-neutral-400">Essai gratuit. Annulation à tout moment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
