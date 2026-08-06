import { Mail, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { Container } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/booking/BookingForm";
import { siteConfig } from "@/lib/site-config";

const contactItems = [
  { icon: MapPin, label: "Alamat", value: siteConfig.address },
  { icon: Phone, label: "WhatsApp", value: `+${siteConfig.whatsappNumber}` },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Clock, label: "Jam Operasional", value: siteConfig.operationalHours },
];

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi Kami"
        description="Ada pertanyaan atau ingin melakukan pemesanan? Kami siap membantu Anda."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl shadow-card overflow-hidden">
                <iframe
                  title="Lokasi BusGo"
                  src={siteConfig.mapsEmbedUrl}
                  className="w-full h-64 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-white rounded-3xl shadow-card p-6 flex flex-col gap-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">{item.label}</p>
                      <p className="font-semibold text-brand-deep">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-2 border-t border-brand-soft/60">
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand hover:bg-brand hover:text-white transition-colors"
                  >
                    <Instagram className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand hover:bg-brand hover:text-white transition-colors"
                  >
                    <Facebook className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-card p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-brand-deep mb-1">
                Formulir Pemesanan
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Isi data Anda, lalu lanjutkan pemesanan via WhatsApp.
              </p>
              <BookingForm compact />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
