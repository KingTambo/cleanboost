import { ArrowUpRight, Building2, Factory, Home, Store, HardHat, Sparkles } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

const sectors = [
  {
    icon: Building2,
    title: "Nettoyage de bureaux",
    description:
      "Vous cherchez des contrats récurrents en open space, immeubles tertiaires ou espaces de coworking.",
  },
  {
    icon: Home,
    title: "Copropriétés & syndics",
    description:
      "Vous voulez être contacté par des syndics et gestionnaires de résidences pour des contrats réguliers.",
  },
  {
    icon: Store,
    title: "Locaux commerciaux",
    description:
      "Commerces, restaurants, cabinets médicaux — vous ciblez des clients qui ont besoin d'un prestataire fiable.",
  },
  {
    icon: Factory,
    title: "Nettoyage industriel",
    description:
      "Entrepôts, usines, sites logistiques : vous voulez élargir votre zone d'intervention avec des demandes qualifiées.",
  },
  {
    icon: HardHat,
    title: "Fin de chantier",
    description:
      "Remise en état après travaux, nettoyage de livraison — vous cherchez des chantiers réguliers avec promoteurs et artisans.",
  },
  {
    icon: Sparkles,
    title: "Vitres & façades",
    description:
      "Nettoyage de vitrerie, façades, enseignes — vous voulez des demandes ciblées sur votre périmètre géographique.",
  },
];

export function Sectors() {
  return (
    <section id="secteurs" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            Secteurs d&apos;activité
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Un système pensé pour votre métier
          </h2>
          <p className="mt-4 text-lg text-muted">
            CleanBoost est 100 % dédié au nettoyage professionnel. Que vous
            soyez artisan, TPE ou PME, notre système de ciblage s&apos;adapte à
            votre activité et à vos zones d&apos;intervention.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10">
                <sector.icon className="h-5 w-5 text-teal" />
              </div>

              <h3 className="text-lg font-bold text-navy">{sector.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {sector.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <BookTrigger className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-teal">
            Voir si CleanBoost est fait pour vous
            <ArrowUpRight className="h-4 w-4" />
          </BookTrigger>
        </div>
      </div>
    </section>
  );
}
