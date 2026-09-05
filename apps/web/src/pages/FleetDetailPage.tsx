import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeft, Users, Cog, Fuel, Check, ClipboardList } from "lucide-react";
import { Badge, Container } from "@busgo/ui";
import { getFleetBySlug, fleetCategoryLabel } from "@/data/fleet";


export function FleetDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const fleet = slug ? getFleetBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  if (!fleet) return <Navigate to="/armada" replace />;

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Link
          to="/armada"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all mb-6"
        >
          <ChevronLeft className="h-4 w-4" /> Kembali ke Armada
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3] mb-4">
              <img
                src={fleet.images[activeImage]}
                alt={fleet.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {fleet.images.map((img, i) => (
                <button
                  key={img + i}
                  onClick={() => setActiveImage(i)}
                  className={`rounded-xl overflow-hidden aspect-square border-2 transition-colors ${
                    activeImage === i ? "border-brand" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Badge tone="blue">{fleetCategoryLabel[fleet.category]}</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-deep mt-3 mb-3">
              {fleet.name}
            </h1>
            <p className="text-slate-500 leading-relaxed mb-6">{fleet.description}</p>

            <h3 className="font-bold text-brand-deep mb-3">Spesifikasi Armada</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <SpecItem icon={Users} label={`Kapasitas`} value={`${fleet.capacity} Penumpang`} />
              <SpecItem icon={Cog} label="Transmisi" value="Manual" />
              <SpecItem icon={Fuel} label="Bahan Bakar" value="Diesel" />
            </div>

            <h3 className="font-bold text-brand-deep mb-3">Fasilitas</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {fleet.facilities.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 text-sm font-medium bg-brand-light text-brand-deep rounded-full px-3.5 py-1.5"
                >
                  <Check className="h-3.5 w-3.5 text-brand" /> {f}
                </span>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-card p-6">
              <Link
                to={`/pesan?armada=${encodeURIComponent(fleet.name)}`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-6 py-4 text-base font-semibold text-white transition-colors shadow-sm"
              >
                <ClipboardList className="h-5 w-5" />
                Isi Formulir & Pesan
              </Link>
              <p className="text-xs text-slate-400 text-center mt-3">
                Anda akan diarahkan untuk mengisi formulir pemesanan terlebih dahulu.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SpecItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-4 flex flex-col items-center text-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-brand">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-[11px] text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-brand-deep">{value}</p>
      </div>
    </div>
  );
}
