import Link from "next/link";
import { ArrowRight, PhoneIncoming } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted">
            <PhoneIncoming className="h-4 w-4 text-teal" />
            Des demandes de devis, en automatique
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            L&apos;agence qui fait grandir les entreprises de{" "}
            <span className="text-teal">nettoyage</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">
            Pour les pros du nettoyage professionnel — bureaux, copropriétés,
            locaux commerciaux et industriel. Vous vous concentrez sur vos
            chantiers, on s&apos;occupe de remplir votre pipeline de clients.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal/90">
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </BookTrigger>
            <Link
              href="#secteurs"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:border-teal/40 hover:bg-surface"
            >
              Découvrir le système
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: "100%", label: "Spécialisés nettoyage" },
            { value: "Auto", label: "Demandes en automatique" },
            { value: "0 €", label: "Premier RDV sans engagement" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface px-6 py-5"
            >
              <p className="text-3xl font-extrabold text-navy">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
