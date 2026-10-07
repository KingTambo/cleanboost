import { ArrowRight } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

export function Intro() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Faites passer votre entreprise au niveau supérieur
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Votre priorité, ce sont vos chantiers et vos équipes. La nôtre,
              vous amener des demandes de devis qualifiées — sans que vous ayez
              à courir après les clients.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Grâce à notre système de ciblage, des prospects vous contactent
              en automatique. Vous remplissez votre planning, vous développez
              votre chiffre d&apos;affaires, et vous gardez le contrôle sur
              votre croissance.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-7">
              <h3 className="text-lg font-bold text-navy">Pour qui ?</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Pour les <strong className="font-semibold text-navy">artisans</strong>,{" "}
                <strong className="font-semibold text-navy">TPE/PME</strong> et{" "}
                <strong className="font-semibold text-navy">sociétés de propreté</strong>{" "}
                qui interviennent en bureaux, copropriétés, commerces ou sites
                industriels.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Si vous êtes dans le nettoyage professionnel,{" "}
                <strong className="font-semibold text-navy">
                  notre système est fait pour vous
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-7">
              <h3 className="text-lg font-bold text-navy">Pourquoi ?</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Parce que nous <strong className="font-semibold text-navy">connaissons votre métier</strong>.
                Nous savons comment vos clients cherchent un prestataire, ce qui
                les rassure et ce qui déclenche une demande de devis.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Résultat : un flux de demandes{" "}
                <strong className="font-semibold text-navy">
                  qui génèrent des contrats
                </strong>
                , pas juste de la visibilité.
              </p>
              <BookTrigger className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal/80">
                En savoir plus en rendez-vous
                <ArrowRight className="h-4 w-4" />
              </BookTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
