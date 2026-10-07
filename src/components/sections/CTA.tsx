import { ArrowRight } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

export function CTA() {
  return (
    <section className="border-y border-border bg-white py-16">
      <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          Prêt à remplir votre planning de nouveaux clients ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Prenez rendez-vous et découvrez comment notre système de ciblage
          peut transformer votre acquisition de clients.
        </p>
        <BookTrigger className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-teal/90">
          Parler de mon projet
          <ArrowRight className="h-4 w-4" />
        </BookTrigger>
      </div>
    </section>
  );
}
