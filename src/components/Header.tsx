"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BookTrigger } from "@/components/BookTrigger";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#secteurs", label: "Secteurs" },
  { href: "#prestations", label: "Prestations" },
  { href: "#processus", label: "Processus" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="#accueil" className="shrink-0">
          <Image
            src="/logo-cleanboost-transparent.png"
            alt="CleanBoost"
            width={280}
            height={64}
            className="h-12 w-auto sm:h-14 lg:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookTrigger className="inline-flex items-center rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal/90">
            Prendre rendez-vous
          </BookTrigger>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-navy/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <BookTrigger
              className="mt-2 inline-flex items-center justify-center rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Prendre rendez-vous
            </BookTrigger>
          </nav>
        </div>
      )}
    </header>
  );
}
