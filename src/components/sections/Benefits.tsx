import { CheckCircle2 } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

const benefits = [
  "Recevez plus de demandes de devis qualifiées",
  "Valorisez votre savoir-faire auprès des bons clients",
  "Créez une relation de confiance avant même le premier appel",
];

export function Benefits() {
  return (
    <section className="bg-navy py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Développez votre activité avant vos concurrents
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Pendant que d&apos;autres courent après les clients, vous recevez
              des demandes en automatique. C&apos;est ça, l&apos;avantage
              CleanBoost.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <p className="font-medium text-white">{benefit}</p>
              </div>
            ))}

            <BookTrigger className="mt-4 inline-flex items-center rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal/90">
              Prendre rendez-vous
            </BookTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
