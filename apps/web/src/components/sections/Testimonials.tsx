import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Container, SectionHeading } from "@busgo/ui";

interface Testimoni {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimoni[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("anh-trans-testimoni");
      if (stored) setTestimonials(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  if (testimonials.length === 0) return null;

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
              key={t.id}
              className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < t.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-base text-slate-600 leading-relaxed flex-1 italic">
                &ldquo;{t.message}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-brand-soft/60">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-deep font-bold text-base shrink-0">
                  {getInitials(t.name)}
                </span>
                <div>
                  <p className="text-base font-bold text-brand-deep">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
