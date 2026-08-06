import type { FaqItem, GalleryImage, PriceRoute, Testimonial } from "@/types";

export const priceRoutes: PriceRoute[] = [
  { from: "Jakarta", to: "Bandung", priceFrom: 2_500_000 },
  { from: "Jakarta", to: "Bogor", priceFrom: 1_500_000 },
  { from: "Jakarta", to: "Yogyakarta", priceFrom: 8_500_000 },
  { from: "Jakarta", to: "Semarang", priceFrom: 7_000_000 },
  { from: "Jakarta", to: "Surabaya", priceFrom: 12_500_000 },
  { from: "Bandung", to: "Yogyakarta", priceFrom: 7_000_000 },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ibu Ratna",
    role: "Wisata Keluarga",
    rating: 5,
    message: "Pelayanan sangat ramah dan bus bersih. Perjalanan keluarga jadi nyaman sekali, anak-anak senang!",
    avatarInitials: "RA",
  },
  {
    name: "Pak Hendra",
    role: "Study Tour SMA",
    rating: 5,
    message: "Booking gampang tinggal chat WhatsApp, harga jelas dari awal, driver on time dan sopan.",
    avatarInitials: "HD",
  },
  {
    name: "Sarah & Bima",
    role: "Wedding",
    rating: 5,
    message: "Armada untuk tamu undangan pernikahan kami rapi dan tepat waktu. Sangat membantu acara berjalan lancar.",
    avatarInitials: "SB",
  },
  {
    name: "PT Nusantara Jaya",
    role: "Corporate Trip",
    rating: 4,
    message: "Fleksibel untuk kebutuhan mendadak, komunikasi dengan admin cepat dan responsif.",
    avatarInitials: "NJ",
  },
];

export const faqs: FaqItem[] = [
  { question: "Apakah bisa DP?", answer: "Bisa. Umumnya kami menerapkan DP 30% dari total harga untuk mengunci jadwal armada, sisanya dilunasi mendekati/pada hari keberangkatan." },
  { question: "Bagaimana cara booking?", answer: "Pilih armada yang sesuai kebutuhan, isi form pemesanan singkat di website, lalu klik \"Pesan via WhatsApp\". Chat Anda akan langsung terkirim ke Admin untuk diproses." },
  { question: "Apakah harga bisa nego?", answer: "Harga di website adalah estimasi awal \"mulai dari\". Harga final dapat didiskusikan langsung bersama Admin melalui WhatsApp sesuai tanggal, tujuan, dan durasi perjalanan." },
  { question: "Apakah tersedia driver?", answer: "Ya, semua paket sewa sudah termasuk driver (dan co-driver untuk perjalanan jauh/luar kota) yang berpengalaman." },
  { question: "Apakah armada bisa disewa untuk 1 hari saja?", answer: "Bisa. Kami melayani sewa harian, charter beberapa hari, maupun drop off satu arah." },
];

export const galleryImages: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop", alt: "Bus pariwisata BusGo", category: "bus" },
  { src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop", alt: "Interior bus nyaman", category: "interior" },
  { src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", alt: "Perjalanan wisata rombongan", category: "wisata" },
  { src: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=800&auto=format&fit=crop", alt: "Pelanggan BusGo", category: "pelanggan" },
  { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop", alt: "Event perusahaan", category: "event" },
  { src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop", alt: "Armada Big Bus", category: "bus" },
];
