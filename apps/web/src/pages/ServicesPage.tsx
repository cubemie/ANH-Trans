import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, WhatsAppButton } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";
import { quickBookingMessage } from "@/lib/whatsapp";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Layanan Transportasi Kami"
        description="Beragam layanan untuk memenuhi kebutuhan perjalanan Anda, dari wisata keluarga hingga event perusahaan."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon =
                (Icons as unknown as Record<string, LucideIcon>)[s.icon] ?? Icons.Bus;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-deep">{s.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed flex-1">
                    {s.description}
                  </p>
                  <WhatsAppButton
                    phone={siteConfig.whatsappNumber}
                    message={quickBookingMessage(s.title)}
                    size="sm"
                    className="mt-1 self-start"
                  >
                    Tanya Layanan Ini
                  </WhatsAppButton>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
