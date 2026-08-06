import { useState } from "react";
import { Container, cn } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { galleryImages } from "@/data/content";
import type { GalleryImage } from "@/types";

const categories: { key: GalleryImage["category"] | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "bus", label: "Bus" },
  { key: "interior", label: "Interior" },
  { key: "wisata", label: "Wisata" },
  { key: "pelanggan", label: "Pelanggan" },
  { key: "event", label: "Event" },
];

export function GalleryPage() {
  const [active, setActive] = useState<GalleryImage["category"] | "all">("all");

  const filtered =
    active === "all" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Dokumentasi Perjalanan"
        description="Momen-momen perjalanan bersama pelanggan BusGo — armada, interior, wisata, hingga event."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                  active === c.key
                    ? "bg-brand text-white"
                    : "bg-white text-brand-deep hover:bg-brand-soft"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="columns-2 sm:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={img.src + i}
                className="rounded-2xl overflow-hidden shadow-card break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
