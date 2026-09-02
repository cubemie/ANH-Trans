import type { Fleet } from "@/types";

export const fleets: Fleet[] = [
  {
    slug: "bus-medium-31-seat",
    name: "Bus Medium",
    category: "medium",
    capacity: 31,
    year: 2022,
    facilities: ["AC", "TV", "Audio", "Reclining Seat"],
    priceFrom: 2_500_000,
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Cocok untuk rombongan sedang seperti study tour sekolah, wisata keluarga besar, atau perjalanan dinas instansi.",
    terms: [
      "Harga belum termasuk BBM luar kota & tol (kondisional)",
      "DP 30% saat konfirmasi booking",
      "Driver & co-driver berpengalaman",
    ],
  },
  {
    slug: "big-bus-59-seat",
    name: "Big Bus",
    category: "big",
    capacity: 59,
    year: 2023,
    facilities: ["Toilet", "Karaoke", "Charger", "WiFi", "AC"],
    priceFrom: 4_500_000,
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Armada premium untuk rombongan besar — wisata luar kota, wedding, hingga corporate trip dengan kenyamanan maksimal.",
    terms: [
      "Harga belum termasuk BBM luar kota & tol (kondisional)",
      "DP 30% saat konfirmasi booking",
      "Free 1x istirahat rest area setiap 4 jam perjalanan",
    ],
  },
  {
    slug: "hiace-14-seat",
    name: "Hiace",
    category: "hiace",
    capacity: 14,
    year: 2023,
    facilities: ["Full AC", "Audio"],
    priceFrom: 1_200_000,
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Pilihan tepat untuk grup kecil-menengah — antar jemput bandara, perjalanan dinas, atau liburan keluarga.",
    terms: [
      "Harga belum termasuk BBM luar kota & tol (kondisional)",
      "DP 30% saat konfirmasi booking",
    ],
  },
  {
    slug: "elf-19-seat",
    name: "Elf",
    category: "elf",
    capacity: 19,
    year: 2021,
    facilities: ["AC", "Audio"],
    priceFrom: 1_500_000,
    images: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Solusi ekonomis untuk grup menengah — cocok untuk ziarah, study tour, atau travel antar kota.",
    terms: [
      "Harga belum termasuk BBM luar kota & tol (kondisional)",
      "DP 30% saat konfirmasi booking",
    ],
  },
];

export const fleetCategoryLabel: Record<Fleet["category"], string> = {
  medium: "Bus Medium",
  big: "Big Bus",
  hiace: "Hiace",
  elf: "Elf",
};

export function getFleetBySlug(slug: string) {
  return fleets.find((f) => f.slug === slug);
}
