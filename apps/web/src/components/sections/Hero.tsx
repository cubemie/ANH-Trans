import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@busgo/ui";
import { siteConfig } from "@/lib/site-config";
import { quickBookingMessage } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-up order-2 lg:order-1">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              Dipercaya 5.000+ Pelanggan
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-tight text-white">
              {siteConfig.tagline}
            </h1>
            <p className="text-brand-soft text-base sm:text-lg max-w-lg leading-relaxed">
              Nikmati kenyamanan perjalanan antar kota dengan pemesanan mudah via
              WhatsApp — tanpa akun, tanpa ribet.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <WhatsAppButton
                phone={siteConfig.whatsappNumber}
                message={quickBookingMessage("armada BusGo")}
                size="lg"
              >
                Pesan via WhatsApp
              </WhatsAppButton>
              <Link
                to="/armada"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-brand-deep transition-all duration-200"
              >
                Lihat Armada
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
              alt="Armada bus pariwisata BusGo"
              className="w-full rounded-3xl shadow-glass object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
