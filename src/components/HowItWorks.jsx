function Step({ number, title, desc }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-neutral-900/40 p-6">
      <div className="absolute -top-3 -left-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white text-sm font-semibold flex items-center justify-center shadow-lg shadow-orange-500/20">
          {number}
        </div>
      </div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Comment ça marche</h2>
          <p className="mt-3 text-neutral-300">Trois étapes pour démarrer avec Smart Agenda+ et gagner du temps au quotidien.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Step
            number={1}
            title="Créez votre agenda"
            desc="Ajoutez vos rendez-vous, missions et échéances de crédits en un clin d’œil. Importez depuis votre calendrier existant si besoin."
          />
          <Step
            number={2}
            title="Activez les rappels"
            desc="Choisissez entre notifications, alarmes ou messages WhatsApp. Ajustez la fréquence et l’heure idéale."
          />
          <Step
            number={3}
            title="Recevez et agissez"
            desc="Soyez notifié au bon moment. Confirmez, reportez ou complétez en un tap depuis la notification."
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
