import { Info } from "lucide-react";
import { Container, WhatsAppButton } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { priceRoutes } from "@/data/content";
import { formatRupiah } from "@/lib/format";
import { siteConfig } from "@/lib/site-config";

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Harga"
        title="Estimasi Harga Perjalanan"
        description="Berikut kisaran harga untuk beberapa rute populer. Harga final dapat menyesuaikan tanggal, durasi, dan armada."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="bg-white rounded-3xl shadow-card overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="px-6 py-4 text-base font-semibold">Tujuan (Asal - Tujuan)</th>
                  <th className="px-6 py-4 text-base font-semibold text-right">Mulai Dari</th>
                </tr>
              </thead>
              <tbody>
                {priceRoutes.map((r, i) => (
                  <tr
                    key={`${r.from}-${r.to}`}
                    className={i % 2 === 0 ? "bg-white" : "bg-brand-light/60"}
                  >
                    <td className="px-6 py-4 text-base font-medium text-brand-deep border-t border-brand-soft/50">
                      {r.from} - {r.to}
                    </td>
                    <td className="px-6 py-4 text-base font-bold text-brand-deep text-right border-t border-brand-soft/50">
                      {formatRupiah(r.priceFrom)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-3 bg-brand-soft/60 rounded-2xl p-4 mt-6 text-base text-brand-deep">
            <Info className="h-5 w-5 shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold">Catatan:</span> Harga dapat berubah
              tergantung tanggal, durasi, jumlah hari, jenis armada, dan tujuan
              perjalanan. Hubungi kami untuk konfirmasi harga akurat.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <WhatsAppButton
              phone={siteConfig.whatsappNumber}
              message="Halo Admin, saya ingin menanyakan estimasi harga untuk perjalanan saya."
              size="lg"
            >
              Kontak via WhatsApp
            </WhatsAppButton>
          </div>
        </Container>
      </section>
    </>
  );
}
