import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@busgo/ui";
import { siteConfig } from "@/lib/site-config";
import { quickBookingMessage } from "@/lib/whatsapp";
import { fleets } from "@/data/fleet";

export function Hero() {
  const heroImages = fleets.map((f) => f.images[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Ganti gambar setiap 4 detik

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
                message={quickBookingMessage("armada ANH TRANS")}
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

          <div className="relative order-1 lg:order-2 h-[300px] sm:h-[400px]">
            {heroImages.map((src, index) => (
              <img
                key={src + index}
                src={src}
                alt={`Armada ${index + 1}`}
                className={`absolute inset-0 w-full h-full rounded-3xl shadow-glass object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
