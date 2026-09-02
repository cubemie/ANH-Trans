import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Users, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge, Card } from "@busgo/ui";
import type { Fleet } from "@/types";

function ImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    },
    [images.length]
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    },
    [images.length]
  );

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-400 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} ${i + 1}`}
            loading="lazy"
            className="h-full w-full shrink-0 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ))}
      </div>

      {/* Arrow buttons — only show if multiple images */}
      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Gambar sebelumnya"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Gambar berikutnya"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(i);
                }}
                aria-label={`Gambar ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-4 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function FleetCard({ fleet }: { fleet: Fleet }) {
  const bookingUrl = `/pesan?armada=${encodeURIComponent(fleet.name)}`;

  return (
    <Card className="flex flex-col group">
      <Link to={`/armada/${fleet.slug}`} className="relative block overflow-hidden">
        <ImageSlider images={fleet.images} alt={fleet.name} />
        <div className="absolute top-3 left-3 z-10">
          <Badge tone="blue">{fleet.capacity} Seat</Badge>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <Link to={`/armada/${fleet.slug}`}>
          <h3 className="text-xl font-bold text-brand-deep hover:text-brand transition-colors">
            {fleet.name}
          </h3>
        </Link>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" /> {fleet.capacity} Seat
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {fleet.year}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {fleet.facilities.slice(0, 4).map((f) => (
            <span
              key={f}
              className="text-sm font-medium bg-brand-light text-brand-deep/70 rounded-full px-3 py-1"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 border-t border-brand-soft/60 flex justify-end">
          {/* Arahkan ke halaman form pemesanan dengan armada ter-preselect */}
          <Link
            to={bookingUrl}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-5 py-2.5 text-base font-semibold text-white transition-colors shadow-sm"
          >
            Pesan
          </Link>
        </div>
      </div>
    </Card>
  );
}
