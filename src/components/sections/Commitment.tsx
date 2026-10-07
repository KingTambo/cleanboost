import { ArrowRight, Handshake, Target, Shield, Zap } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

const commitments = [
  {
    icon: Target,
    title: "100 % spécialisés nettoyage",
    description:
      "Pas une agence généraliste. On connaît vos contraintes : planning, récurrence, devis, saisonnalité.",
  },
  {
    icon: Zap,
    title: "Des demandes, pas de la visibilité",
    description:
      "Notre objectif : vous amener des contacts prêts à demander un devis, pas juste des vues sur un site.",
  },
  {
    icon: Handshake,
    title: "Accompagnement de proximité",
    description:
      "En tant que nouvelle agence, chaque partenaire compte. Vous bénéficiez d'un suivi direct et personnalisé.",
  },
  {
    icon: Shield,
    title: "Premier RDV sans engagement",
    description:
      "On échange 30 minutes sur votre activité. Vous décidez ensuite si notre système vous convient.",
  },
];

export function Commitment() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            Notre engagement
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Ce sur quoi vous pouvez compter
          </h2>
          <p className="mt-4 text-lg text-muted">
            CleanBoost démarre avec une mission claire : aider les entreprises
            de nettoyage à recevoir plus de demandes de devis, sans courir
            après les clients.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-2xl border border-border bg-white p-7"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10">
                <item.icon className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <BookTrigger className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal/90">
            Devenir l&apos;un de nos premiers partenaires
            <ArrowRight className="h-4 w-4" />
          </BookTrigger>
        </div>
      </div>
    </section>
  );
}
