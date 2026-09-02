import { ShieldCheck, Target, Eye, Award } from "lucide-react";
import { Container, SectionHeading } from "@busgo/ui";
import { Hero } from "@/components/sections/Hero";

import { WhyUs } from "@/components/sections/WhyUs";
import { FleetPreview } from "@/components/sections/FleetPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingSection } from "@/components/sections/BookingSection";

const values = [
  {
    icon: Eye,
    title: "Visi",
    description:
      "Menjadi penyedia jasa transportasi bus pariwisata dan travel terpercaya nomor satu di Indonesia.",
  },
  {
    icon: Target,
    title: "Misi",
    description:
      "Memberikan layanan transportasi yang aman, nyaman, tepat waktu, dan terjangkau untuk setiap perjalanan pelanggan.",
  },
  {
    icon: ShieldCheck,
    title: "Legalitas",
    description:
      "Seluruh armada memiliki izin operasional resmi dan menjalani perawatan berkala sesuai standar keselamatan.",
  },
  {
    icon: Award,
    title: "Komitmen Pelayanan",
    description:
      "Mengutamakan kepuasan pelanggan melalui komunikasi responsif dan pelayanan yang ramah di setiap tahap perjalanan.",
  },
];

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <FleetPreview />
      <Testimonials />
      <BookingSection />

      {/* ── Tentang Kami ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20" id="tentang-kami">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <img
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop"
              alt="Sejarah perusahaan ANH TRANS"
              className="w-full rounded-3xl shadow-card object-cover aspect-[4/3]"
            />
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold uppercase tracking-widest text-brand">
                Tentang Kami
              </span>
              <h2 className="text-4xl font-extrabold text-brand-deep">
                Melayani Perjalanan Anda Sejak Awal Berdiri
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                ANH TRANS hadir dari kebutuhan sederhana: memudahkan siapa saja menyewa
                bus pariwisata dan travel tanpa proses yang rumit. Kami memulai
                dengan beberapa armada terbatas, dan seiring kepercayaan pelanggan
                terus tumbuh, kini kami melayani ratusan perjalanan setiap bulannya
                — mulai dari wisata keluarga, study tour, ziarah, wedding, hingga
                perjalanan dinas instansi dan perusahaan.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Dengan mengintegrasikan pemesanan langsung ke WhatsApp Admin,
                pelanggan bisa berkonsultasi, bernegosiasi harga, dan mengonfirmasi
                jadwal secara personal — tanpa perlu membuat akun atau melalui
                proses pembayaran online yang rumit.
              </p>
            </div>
          </div>

          <SectionHeading
            eyebrow="Nilai Kami"
            title="Visi, Misi & Komitmen Kami"
            description="Nilai-nilai yang menjadi landasan setiap layanan yang kami berikan."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-brand-deep mb-2">{v.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
