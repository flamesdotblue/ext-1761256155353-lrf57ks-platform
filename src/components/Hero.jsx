import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="pt-28 sm:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-0 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-white/5 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Assistant personnel intelligent
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Organisez, suivez et ne manquez plus jamais un rendez-vous
          </h1>
          <p className="mt-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
            Smart Agenda+ centralise vos rendez-vous, vos crédits et vos rappels intelligents
            (notification, alarme ou message WhatsApp) dans une interface simple et conviviale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-amber-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/20 hover:brightness-110 transition"
            >
              Commencer gratuitement
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-neutral-900/60 px-5 py-3 text-sm font-medium text-white hover:border-white/20 transition"
            >
              Voir la démo
            </a>
          </div>
          <div className="mt-6 text-xs text-neutral-400">
            Rappels intelligents par notification, alarme ou WhatsApp.
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/40">
            <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
