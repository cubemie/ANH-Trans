import { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-10",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {eyebrow && (
        <span className="text-base font-bold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-deep max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-500 max-w-xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function StatCard({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center text-center gap-1", className)}>
      <span className="text-3xl sm:text-4xl font-extrabold text-white">{value}</span>
      <span className="text-base text-brand-soft">{label}</span>
    </div>
  );
}

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
