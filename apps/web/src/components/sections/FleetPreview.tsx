import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@busgo/ui";
import { fleets } from "@/data/fleet";
import { FleetCard } from "@/components/fleet/FleetCard";

export function FleetPreview() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Armada"
          title="Ringkasan Armada Kami"
          description="Pilihan armada lengkap untuk setiap kebutuhan perjalanan, dari grup kecil hingga rombongan besar."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleets.map((f) => (
            <FleetCard key={f.slug} fleet={f} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/armada"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all duration-200"
          >
            Lihat Semua Armada <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
