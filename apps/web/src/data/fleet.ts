import type { Fleet } from "@/types";

export const fleets: Fleet[] = [
  {
    slug: "hiace-14-seat",
    name: "Hiace",
    category: "hiace",
    capacity: 14,
    year: 2023,
    facilities: ["AC", "Audio", "Reclining Seat"],
    priceFrom: 1_200_000,
    images: [
      "/armada/hiace-1.jpg",
    ],
    description:
      "Pilihan tepat untuk grup kecil-menengah — antar jemput bandara, perjalanan dinas, atau liburan keluarga.",
    terms: [
      "Harga belum termasuk BBM luar kota & tol (kondisional)",
      "DP 30% saat konfirmasi booking",
    ],
  },
  {
    slug: "medium-bus-33-seat",
    name: "Medium Bus",
    category: "medium",
    capacity: 33,
    year: 2023,
    facilities: ["AC", "Karaoke", "LED Lighting", "Reclining Seat", "Audio"],
    priceFrom: 2_500_000,
    images: [
      "/armada/medium-bus-interior.jpg",
      "/armada/medium-bus-exterior.jpg",
    ],
    description:
      "Armada medium bus 33–35 seat dengan interior mewah, pencahayaan LED warna-warni, bantal, dan kursi reclining untuk kenyamanan optimal.",
    terms: [
      "Harga belum termasuk BBM luar kota & tol (kondisional)",
      "DP 30% saat konfirmasi booking",
      "Driver & co-driver berpengalaman",
    ],
  },
  {
    slug: "elf-long-18-seat",
    name: "Isuzu Elf Long",
    category: "elf",
    capacity: 18,
    year: 2022,
    facilities: ["AC", "Audio", "Kursi Premium"],
    priceFrom: 1_500_000,
    images: [
      "/armada/elf-exterior.jpg",
      "/armada/elf-interior.jpg",
    ],
    description:
      "Isuzu Elf Long 18 seat — solusi sewa carter terbaik untuk grup menengah, ziarah, study tour, atau perjalanan antar kota.",
    terms: [
      "Harga belum termasuk BBM luar kota & tol (kondisional)",
      "DP 30% saat konfirmasi booking",
    ],
  },
];

export const fleetCategoryLabel: Record<Fleet["category"], string> = {
  medium: "Bus Medium",
  hiace: "Hiace",
  elf: "Elf",
};

export function getFleetBySlug(slug: string) {
  return fleets.find((f) => f.slug === slug);
}
