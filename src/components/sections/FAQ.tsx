"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Où êtes-vous situés et travaillez-vous à distance ?",
    answer:
      "Nous accompagnons des entreprises de nettoyage partout en France. La plupart de nos échanges se font en visio pour plus de réactivité. Si vous êtes dans notre région, on peut aussi se voir sur place.",
  },
  {
    question: "Concrètement, comment ça fonctionne ?",
    answer:
      "On met en place un système de ciblage adapté à votre activité de nettoyage. Résultat : des prospects qualifiés vous contactent en automatique pour demander un devis. Les détails techniques et la méthode exacte, on vous les présente lors d'un premier rendez-vous — c'est plus clair en direct.",
  },
  {
    question: "Travaillez-vous exclusivement pour les entreprises de nettoyage ?",
    answer:
      "Oui. Nous travaillons spécifiquement avec les entreprises de nettoyage professionnel : bureaux, copropriétés, commerces, industriel, fin de chantier. Que vous soyez artisan, TPE ou PME, notre système est pensé pour votre marché. Contrairement aux agences généralistes, on maîtrise vos enjeux terrain.",
  },
  {
    question: "Combien de temps avant de recevoir les premières demandes ?",
    answer:
      "Cela dépend de votre zone et de votre activité. En général, nos clients commencent à recevoir des demandes dans les premières semaines après la mise en place. On vous donne une estimation réaliste lors du premier rendez-vous.",
  },
  {
    question: "Avez-vous déjà accompagné des entreprises de nettoyage ?",
    answer:
      "CleanBoost est une agence récente, entièrement dédiée au nettoyage professionnel. Nous recrutons actuellement nos premiers partenaires et offrons un accompagnement renforcé à chaque entreprise qu'on prend en charge. Prenez rendez-vous pour en discuter — sans engagement.",
  },
  {
    question: "Est-ce que je dois m'occuper de quelque chose techniquement ?",
    answer:
      "Non. On s'occupe de tout. Vous recevez les demandes, vous répondez, vous signez. C'est aussi simple que ça. Zéro compétence technique requise de votre côté.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            Questions fréquentes
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Vous avez des questions ?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Voici les réponses aux questions les plus courantes. Pour le reste,
            prenez rendez-vous — on répond à tout en direct.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 pb-5 pt-2">
                    <p className="leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-muted">
          Une autre question ?{" "}
          <Link href="#contact" className="font-semibold text-teal hover:text-teal/80">
            Contactez-nous
          </Link>
        </p>
      </div>
    </section>
  );
}
