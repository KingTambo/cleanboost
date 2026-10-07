import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CleanBoost — Plus de clients pour votre entreprise de nettoyage",
  description:
    "CleanBoost accompagne les entreprises de nettoyage à recevoir des demandes de devis en automatique grâce à un système de ciblage adapté à votre métier.",
  openGraph: {
    title: "CleanBoost — Plus de clients pour votre entreprise de nettoyage",
    description:
      "Recevez des demandes de devis qualifiées en automatique. Prenez rendez-vous pour découvrir notre système.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
