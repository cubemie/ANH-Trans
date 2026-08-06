import { Star } from "lucide-react";
import { Container, SectionHeading } from "@busgo/ui";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Pelanggan Kami"
          description="Kepuasan pelanggan adalah prioritas utama kami di setiap perjalanan."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating ? "fill-accent text-accent" : "fill-brand-soft text-brand-soft"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                &ldquo;{t.message}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-brand-soft/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-deep font-bold text-sm">
                  {t.avatarInitials}
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-deep">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
