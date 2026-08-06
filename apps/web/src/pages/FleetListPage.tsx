import { useMemo, useState } from "react";
import { Container } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { FleetFilters } from "@/components/fleet/FleetFilters";
import { FleetCard } from "@/components/fleet/FleetCard";
import { fleets } from "@/data/fleet";

const capacityRanges: Record<string, [number, number]> = {
  "10-20 Seat": [10, 20],
  "21-30 Seat": [21, 30],
  "31-50 Seat": [31, 50],
  "50+ Seat": [51, Infinity],
};

export function FleetListPage() {
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);

  const toggleFacility = (f: string) =>
    setSelectedFacilities((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );

  const toggleCapacity = (c: string) =>
    setSelectedCapacity((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  const reset = () => {
    setSelectedFacilities([]);
    setSelectedCapacity([]);
  };

  const filtered = useMemo(() => {
    return fleets.filter((f) => {
      const facilityMatch =
        selectedFacilities.length === 0 ||
        selectedFacilities.every((sf) =>
          f.facilities.some((ff) => ff.toLowerCase() === sf.toLowerCase())
        );

      const capacityMatch =
        selectedCapacity.length === 0 ||
        selectedCapacity.some((sc) => {
          const [min, max] = capacityRanges[sc];
          return f.capacity >= min && f.capacity <= max;
        });

      return facilityMatch && capacityMatch;
    });
  }, [selectedFacilities, selectedCapacity]);

  return (
    <>
      <PageHero
        eyebrow="Armada"
        title="Pilih Armada Sesuai Kebutuhan"
        description="Dari grup kecil hingga rombongan besar, temukan armada yang pas untuk perjalanan Anda."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <FleetFilters
              selectedFacilities={selectedFacilities}
              onToggleFacility={toggleFacility}
              selectedCapacity={selectedCapacity}
              onToggleCapacity={toggleCapacity}
              onReset={reset}
            />

            <div>
              <p className="text-sm text-slate-500 mb-5">
                Menampilkan <span className="font-semibold text-brand-deep">{filtered.length}</span> armada
              </p>
              {filtered.length === 0 ? (
                <div className="bg-white rounded-3xl shadow-card p-10 text-center text-slate-500">
                  Tidak ada armada yang cocok dengan filter Anda. Coba ubah pilihan filter.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((f) => (
                    <FleetCard key={f.slug} fleet={f} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
