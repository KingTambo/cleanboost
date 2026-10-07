"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Mail, Send } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Prêt à recevoir plus de demandes de devis ?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Prenez rendez-vous pour qu&apos;on échange sur votre activité.
              On vous explique comment notre système de ciblage peut vous
              amener des clients en automatique — sans engagement.
            </p>

            <BookTrigger className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal/90 sm:w-auto">
              Choisir un créneau
              <ArrowRight className="h-4 w-4" />
            </BookTrigger>

            <div className="mt-8 space-y-4">
              <BookTrigger className="flex w-full items-start gap-4 rounded-xl border border-border bg-white p-5 text-left transition-colors hover:border-teal/40 hover:bg-surface">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="font-semibold text-navy">Premier rendez-vous gratuit</p>
                  <p className="mt-1 text-sm text-muted">
                    30 minutes en visio pour comprendre votre activité et
                    voir si CleanBoost est fait pour vous.
                  </p>
                </div>
              </BookTrigger>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="font-semibold text-navy">amar.cleanboost@gmail.com</p>
                  <p className="mt-1 text-sm text-muted">
                    Vous préférez écrire ? Envoyez-nous un message via le
                    formulaire.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-7 lg:p-8">
            <p className="mb-6 text-sm font-medium text-muted">
              Ou laissez-nous un message — on vous recontacte sous 24h.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
                  <Send className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy">Message envoyé !</h3>
                <p className="mt-2 max-w-sm text-muted">
                  Merci pour votre intérêt. Nous vous recontactons sous 24h pour
                  fixer un rendez-vous.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                      Nom & prénom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy">
                      Entreprise
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="ProNet Services"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="jean@pronet.fr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sector" className="mb-1.5 block text-sm font-medium text-navy">
                    Type de nettoyage
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Sélectionnez votre activité
                    </option>
                    <option value="bureaux">Nettoyage de bureaux</option>
                    <option value="coproprietes">Copropriétés / syndics</option>
                    <option value="commerces">Locaux commerciaux</option>
                    <option value="industriel">Nettoyage industriel</option>
                    <option value="fin-chantier">Fin de chantier</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                    placeholder="Parlez-nous de votre activité, vos zones d'intervention, vos objectifs..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal/90"
                >
                  Envoyer ma demande
                  <Send className="h-4 w-4" />
                </button>

                <p className="text-center text-xs text-muted">
                  Préférez réserver directement ?{" "}
                  <BookTrigger className="font-semibold text-teal hover:text-teal/80">
                    Ouvrir le calendrier
                  </BookTrigger>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
