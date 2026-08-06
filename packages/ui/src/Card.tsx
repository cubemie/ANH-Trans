import { HTMLAttributes } from "react";
import { cn } from "./cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

export function GlassCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-glass-card backdrop-blur-md border border-white/40 rounded-3xl shadow-glass",
        className
      )}
      {...props}
    />
  );
}
