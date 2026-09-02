import { Link } from "react-router-dom";
import { Users, Calendar } from "lucide-react";
import { Badge, Card } from "@busgo/ui";
import type { Fleet } from "@/types";
import { formatRupiah } from "@/lib/format";

export function FleetCard({ fleet }: { fleet: Fleet }) {
  const bookingUrl = `/pesan?armada=${encodeURIComponent(fleet.name)}`;

  return (
    <Card className="flex flex-col group">
      <Link to={`/armada/${fleet.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={fleet.images[0]}
          alt={fleet.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
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

        <div className="mt-auto pt-3 border-t border-brand-soft/60 flex items-center justify-between gap-3">
          <div>
            <span className="block text-sm text-slate-400">Harga mulai</span>
            <span className="text-2xl font-extrabold text-brand-deep">
              {formatRupiah(fleet.priceFrom)}
            </span>
          </div>
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
