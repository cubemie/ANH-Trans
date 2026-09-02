import { ShieldCheck, Clock, Sparkles, Wallet } from "lucide-react";
import { Container, SectionHeading } from "@busgo/ui";

const points = [
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    description: "Driver berpengalaman dan armada terawat dengan pengecekan rutin sebelum keberangkatan.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Kami menjunjung tinggi ketepatan waktu, penjemputan dan keberangkatan sesuai jadwal.",
  },
  {
    icon: Sparkles,
    title: "Kenyamanan Extra",
    description: "Kabin bersih, kursi nyaman, dan fasilitas lengkap untuk perjalanan yang menyenangkan.",
  },
  {
    icon: Wallet,
    title: "Harga Transparan",
    description: "Estimasi harga jelas sejak awal, tanpa biaya tersembunyi. Bisa didiskusikan langsung.",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Keunggulan"
          title="Kenapa Memilih BusGo?"
          description="Kami berkomitmen memberikan pengalaman perjalanan terbaik untuk setiap rombongan Anda."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand mb-4">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-brand-deep mb-2">{p.title}</h3>
              <p className="text-base text-slate-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
