import { HTMLAttributes } from "react";
import { cn } from "./cn";

type Tone = "blue" | "orange" | "green" | "neutral";

const toneClasses: Record<Tone, string> = {
  blue: "bg-brand-soft text-brand-deep",
  orange: "bg-accent-soft text-accent",
  green: "bg-whatsapp/10 text-whatsapp-dark",
  neutral: "bg-brand-light text-brand-deep",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ tone = "blue", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
