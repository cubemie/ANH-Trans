import { useSearchParams } from "react-router-dom";
import { Container } from "@busgo/ui";
import { BookingForm } from "@/components/booking/BookingForm";
import { PageHero } from "@/components/sections/PageHero";
import { fleets } from "@/data/fleet";
import { ClipboardList } from "lucide-react";

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const armadaParam = searchParams.get("armada") ?? "";

  // Cari nama armada yang cocok dari data fleet (case-insensitive)
  const selectedFleet = fleets.find(
    (f) => f.name.toLowerCase() === armadaParam.toLowerCase()
  );

  const defaultFleet = selectedFleet?.name ?? armadaParam;

  return (
    <>
      <PageHero
        eyebrow="Formulir Pemesanan"
        title={
          selectedFleet
            ? `Pesan ${selectedFleet.name}`
            : "Formulir Pemesanan Perjalanan"
        }
        description="Isi semua data di bawah ini dengan lengkap, lalu klik tombol Pesan via WhatsApp. Pesan Anda akan langsung terkirim ke Admin."
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">

          {/* Info armada yang dipilih */}
          {selectedFleet && (
            <div className="flex items-center gap-3 bg-brand-soft/60 border border-brand/20 rounded-2xl px-5 py-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shrink-0">
                <ClipboardList className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-deep">Armada yang Dipilih</p>
                <p className="text-sm text-slate-500">
                  {selectedFleet.name} — {selectedFleet.capacity} Seat · Mulai dari{" "}
                  <span className="font-semibold text-brand-deep">
                    Rp {selectedFleet.priceFrom.toLocaleString("id-ID")}
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Panduan pengisian */}
          <div className="bg-white rounded-3xl shadow-card p-6 sm:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-extrabold text-brand-deep">
                Lengkapi Data Pemesanan
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Kolom bertanda <span className="text-red-500 font-bold">*</span> wajib diisi sebelum dapat melanjutkan ke WhatsApp.
              </p>
            </div>

            <BookingForm defaultFleet={defaultFleet} />
          </div>

          {/* Info alur */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "1", label: "Isi Formulir", desc: "Lengkapi semua data perjalanan" },
              { step: "2", label: "Klik Pesan", desc: "Pesan terformat otomatis di WhatsApp" },
              { step: "3", label: "Konfirmasi Admin", desc: "Admin menghubungi untuk detail & harga" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-3 bg-white rounded-2xl shadow-card px-5 py-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm font-bold shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-deep">{item.label}</p>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
