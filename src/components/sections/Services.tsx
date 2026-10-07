import { Target, MapPin, Zap, ArrowRight } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

const services = [
  {
    icon: Target,
    title: "Acquisition de clients",
    description:
      "Recevez des demandes de devis qualifiées directement sur votre téléphone ou par email — en automatique, sans effort commercial de votre côté.",
    items: [
      "Demandes entrantes automatiques",
      "Prospects ciblés dans votre zone",
      "Contacts prêts à demander un devis",
    ],
  },
  {
    icon: MapPin,
    title: "Visibilité ciblée",
    description:
      "Vos futurs clients vous trouvent exactement au moment où ils cherchent un prestataire de nettoyage. Pas de visibilité inutile, que du ciblage pertinent.",
    items: [
      "Présence là où vos clients cherchent",
      "Zones d'intervention optimisées",
      "Image professionnelle rassurante",
    ],
  },
  {
    icon: Zap,
    title: "Système CleanBoost",
    description:
      "Notre méthode exclusive de ciblage, pensée spécifiquement pour les entreprises de nettoyage. Les détails ? On vous les présente en rendez-vous.",
    items: [
      "Méthode adaptée au nettoyage pro",
      "Mise en place clé en main",
      "Accompagnement continu",
    ],
  },
];

export function Services() {
  return (
    <section id="prestations" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            Ce qu&apos;on met en place pour vous
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Des prestations qui correspondent à vos besoins
          </h2>
          <p className="mt-4 text-lg text-muted">
            Transformez votre activité en véritable moteur de croissance.
            Plus de clients, moins de prospection — c&apos;est notre promesse.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-border bg-white p-8"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10">
                <service.icon className="h-6 w-6 text-teal" />
              </div>

              <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-navy/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <BookTrigger className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal/90">
            Lancer mon projet
            <ArrowRight className="h-4 w-4" />
          </BookTrigger>
        </div>
      </div>
    </section>
  );
}
