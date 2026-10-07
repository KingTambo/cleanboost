"use client";

import { useCalendly } from "@/components/CalendlyProvider";

type BookTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BookTrigger({ children, onClick, ...props }: BookTriggerProps) {
  const { open } = useCalendly();

  return (
    <button
      type="button"
      onClick={(event) => {
        open();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
