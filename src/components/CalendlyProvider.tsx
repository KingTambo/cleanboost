"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Calendar, X } from "lucide-react";
import { getCalendlyWidgetUrl } from "@/lib/calendly";

type CalendlyContextValue = {
  open: () => void;
  close: () => void;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CalendlyContext = createContext<CalendlyContextValue | null>(null);

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within CalendlyProvider");
  }
  return context;
}

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scriptReady, setScriptReady] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    setIsLoading(true);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    if (widgetRef.current) {
      widgetRef.current.innerHTML = "";
    }
  }, []);

  const initWidget = useCallback(() => {
    if (!widgetRef.current || !window.Calendly) return;

    widgetRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: getCalendlyWidgetUrl(),
      parentElement: widgetRef.current,
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) return;

    if (window.Calendly) {
      setScriptReady(true);
      return;
    }

    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existing) {
      existing.addEventListener("load", () => setScriptReady(true));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setScriptReady(true);
    document.body.appendChild(script);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !scriptReady) return;

    initWidget();

    function onCalendlyMessage(event: MessageEvent) {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event === "calendly.page_height") {
        setIsLoading(false);
      }
    }

    window.addEventListener("message", onCalendlyMessage);
    const timer = window.setTimeout(() => setIsLoading(false), 6000);

    return () => {
      window.removeEventListener("message", onCalendlyMessage);
      window.clearTimeout(timer);
    };
  }, [isOpen, scriptReady, initWidget]);

  return (
    <CalendlyContext.Provider value={{ open, close }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calendly-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            onClick={close}
            aria-label="Fermer la fenêtre de rendez-vous"
          />

          <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-border bg-white shadow-2xl shadow-navy/25 sm:rounded-2xl">
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border bg-surface px-5 py-4 sm:px-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10">
                  <Calendar className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h2
                    id="calendly-modal-title"
                    className="text-lg font-bold text-navy sm:text-xl"
                  >
                    Prendre rendez-vous
                  </h2>
                  <p className="mt-0.5 text-sm text-muted">
                    30 min en visio — sans engagement
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={close}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:border-teal/40 hover:bg-surface"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-y-auto bg-surface">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-surface">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-teal" />
                  <p className="text-sm text-muted">Chargement du calendrier…</p>
                </div>
              )}

              <div
                ref={widgetRef}
                className="calendly-inline-widget min-h-[680px] w-full"
                style={{ minWidth: "320px", height: "680px" }}
              />
            </div>
          </div>
        </div>
      )}
    </CalendlyContext.Provider>
  );
}
