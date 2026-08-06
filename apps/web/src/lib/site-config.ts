/** Konfigurasi global situs BusGo — ubah di satu tempat ini, konsisten di seluruh halaman. */
export const siteConfig = {
  name: "BusGo",
  tagline: "Solusi Transportasi Terbaik untuk Perjalanan Anda",
  description:
    "Platform digital promosi & pemesanan Bus Pariwisata dan Travel. Booking cepat, harga transparan, langsung via WhatsApp.",
  whatsappNumber: "6289522907848", // ganti dengan nomor admin asli, format internasional tanpa "+"
  instagram: "https://instagram.com/busgo.id",
  facebook: "https://facebook.com/busgo.id",
  email: "cs@busgo.id",
  address: "Jl. Raya Transportasi No. 88, Kota Anda",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253680.5!2d106.7!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDInMDAuMCJF!5e0!3m2!1sid!2sid!4v1700000000000",
  operationalHours: "Setiap hari, 08.00 - 21.00 WIB",
  stats: [
    { value: "10+", label: "Tahun Pengalaman" },
    { value: "150+", label: "Armada Tersedia" },
    { value: "5.000+", label: "Pelanggan Puas" },
    { value: "4.9/5", label: "Rating Layanan" },
  ],
} as const;
