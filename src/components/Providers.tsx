"use client";

import { CalendlyProvider } from "@/components/CalendlyProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CalendlyProvider>{children}</CalendlyProvider>;
}
