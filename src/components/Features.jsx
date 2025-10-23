import { Calendar, CreditCard, Bell, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Planification simple',
    desc: 'Créez, modifiez et organisez vos rendez-vous en quelques secondes, avec vues jour, semaine et mois.'
  },
  {
    icon: CreditCard,
    title: 'Suivi de crédits',
    desc: 'Gardez un œil sur vos paiements, soldes et échéances. Recevez des alertes avant chaque date clé.'
  },
  {
    icon: Bell,
    title: 'Rappels intelligents',
    desc: 'Notifications locales et alarmes adaptatives en fonction de votre disponibilité et de vos préférences.'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp intégré',
    desc: 'Recevez des rappels directement dans WhatsApp pour ne rien manquer, où que vous soyez.'
  }
];

function Features() {
  return (
    <section id="features" className="relative mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Tout ce qu’il faut pour rester à jour</h2>
          <p className="mt-3 text-neutral-300">
            Un ensemble d’outils modernes pour planifier vos journées, suivre vos échéances et automatiser vos rappels.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-600/20 border border-white/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
