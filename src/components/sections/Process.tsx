import { BookTrigger } from "@/components/BookTrigger";

const steps = [
  {
    number: "01",
    title: "Premier rendez-vous",
    description:
      "On échange sur votre activité, vos zones d'intervention et vos objectifs. Vous comprenez comment notre système peut s'adapter à votre entreprise — sans engagement.",
  },
  {
    number: "02",
    title: "Cadrage du projet",
    description:
      "On définit ensemble le périmètre, les zones à cibler et le calendrier. Vous savez exactement ce qu'on met en place et ce que vous pouvez attendre comme résultats.",
  },
  {
    number: "03",
    title: "Mise en place",
    description:
      "Notre équipe déploie le système de ciblage CleanBoost. Vous restez informé à chaque étape — zéro charge technique de votre côté.",
  },
  {
    number: "04",
    title: "Demandes & accompagnement",
    description:
      "Les demandes arrivent en automatique. On reste à vos côtés pour optimiser les résultats et ajuster le ciblage selon votre activité.",
  },
];

export function Process() {
  return (
    <section id="processus" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            Simple et efficace
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Les étapes pour recevoir vos premières demandes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Pas de jargon, pas de surprise. Un processus clair pour des
            résultats concrets.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-border bg-surface p-6"
            >
              <span className="text-4xl font-extrabold text-teal/20">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <BookTrigger className="inline-flex items-center rounded-full border border-border bg-white px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:border-teal/40 hover:bg-surface">
            Commencer par un rendez-vous
          </BookTrigger>
        </div>
      </div>
    </section>
  );
}
