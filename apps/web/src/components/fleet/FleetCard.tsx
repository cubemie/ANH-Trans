import { Link } from "react-router-dom";
import { Users, Calendar } from "lucide-react";
import { Badge, Card, WhatsAppButton } from "@busgo/ui";
import type { Fleet } from "@/types";
import { formatRupiah } from "@/lib/format";
import { siteConfig } from "@/lib/site-config";
import { quickBookingMessage } from "@/lib/whatsapp";

export function FleetCard({ fleet }: { fleet: Fleet }) {
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
          <h3 className="text-lg font-bold text-brand-deep hover:text-brand transition-colors">
            {fleet.name}
          </h3>
        </Link>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {fleet.capacity} Seat
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {fleet.year}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {fleet.facilities.slice(0, 4).map((f) => (
            <span
              key={f}
              className="text-[11px] font-medium bg-brand-light text-brand-deep/70 rounded-full px-2.5 py-1"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 border-t border-brand-soft/60 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[11px] text-slate-400">Harga mulai</span>
            <span className="text-lg font-extrabold text-brand-deep">
              {formatRupiah(fleet.priceFrom)}
            </span>
          </div>
          <WhatsAppButton
            phone={siteConfig.whatsappNumber}
            message={quickBookingMessage(fleet.name)}
            size="sm"
          >
            Pesan
          </WhatsAppButton>
        </div>
      </div>
    </Card>
  );
}
