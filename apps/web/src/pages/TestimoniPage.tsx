import { Star, Quote } from "lucide-react";
import { Container, SectionHeading, WhatsAppButton } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { testimonials } from "@/data/content";
import { siteConfig } from "@/lib/site-config";

export function TestimoniPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimoni"
        title="Apa Kata Pelanggan Kami"
        description="Kepercayaan pelanggan adalah amanah kami. Simak pengalaman nyata mereka bersama BusGo."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Ulasan Pelanggan"
            title="Ribuan Perjalanan, Satu Kepercayaan"
            description="Dari wisata keluarga, study tour, hingga event perusahaan — kami hadir untuk setiap momen perjalanan Anda."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-5"
              >
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-brand/30" />

                {/* Bintang */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < t.rating ? "fill-accent text-accent" : "fill-brand-soft text-brand-soft"
                      }`}
                    />
                  ))}
                </div>

                {/* Pesan */}
                <p className="text-base text-slate-600 leading-relaxed flex-1 italic">
                  &ldquo;{t.message}&rdquo;
                </p>

                {/* Profil */}
                <div className="flex items-center gap-4 pt-4 border-t border-brand-soft/60">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-deep font-bold text-sm shrink-0">
                    {t.avatarInitials}
                  </span>
                  <div>
                    <p className="font-bold text-brand-deep">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-brand-soft/40 rounded-3xl p-10 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-extrabold text-brand-deep">
              Bergabung Bersama Pelanggan Kami
            </h3>
            <p className="text-slate-500 max-w-md">
              Rencanakan perjalanan Anda sekarang. Konsultasi gratis, harga transparan, proses mudah via WhatsApp.
            </p>
            <WhatsAppButton
              phone={siteConfig.whatsappNumber}
              message="Halo Admin 👋 Saya ingin berkonsultasi mengenai pemesanan armada."
              size="lg"
            >
              Konsultasi via WhatsApp
            </WhatsAppButton>
          </div>
        </Container>
      </section>
    </>
  );
}
