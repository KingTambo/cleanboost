import Image from "next/image";
import Link from "next/link";
import { BookTrigger } from "@/components/BookTrigger";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo-cleanboost-white.png"
              alt="CleanBoost"
              width={320}
              height={73}
              className="mb-5 h-16 w-auto lg:h-[4.5rem]"
            />
            <p className="text-sm leading-relaxed text-white/70">
              CleanBoost accompagne les entreprises de nettoyage à développer
              leur activité grâce à un système de ciblage qui génère des
              demandes de devis en automatique.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-light">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#secteurs" className="hover:text-white">
                  Secteurs d&apos;activité
                </Link>
              </li>
              <li>
                <Link href="#prestations" className="hover:text-white">
                  Prestations
                </Link>
              </li>
              <li>
                <Link href="#processus" className="hover:text-white">
                  Notre processus
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-light">
              Secteurs
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Nettoyage de bureaux</li>
              <li>Copropriétés & syndics</li>
              <li>Locaux commerciaux</li>
              <li>Nettoyage industriel</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-light">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:amar.cleanboost@gmail.com" className="hover:text-white">
                  amar.cleanboost@gmail.com
                </a>
              </li>
              <li>
                <BookTrigger className="font-medium text-teal-light hover:text-white">
                  Prendre rendez-vous →
                </BookTrigger>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} CleanBoost. Tous droits réservés.</p>
          <p>Mentions légales</p>
        </div>
      </div>
    </footer>
  );
}
