import { ReactNode } from "react";
import { Container } from "@busgo/ui";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-14 sm:py-20">
      <Container className="relative flex flex-col items-center text-center gap-4">
        <span className="text-sm font-bold uppercase tracking-widest text-brand-soft">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="text-brand-soft max-w-xl leading-relaxed">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
