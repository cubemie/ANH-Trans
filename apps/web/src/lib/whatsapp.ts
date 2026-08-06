import { siteConfig } from "./site-config";
import type { BookingFormData } from "@/types";

/**
 * Bangun URL wa.me dari nomor + pesan mentah.
 * Dipakai untuk tombol "Pesan Sekarang" cepat (tanpa mengisi form penuh).
 */
export function buildWhatsAppUrl(message: string, phone = siteConfig.whatsappNumber) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Pesan singkat ketika pelanggan klik "Pesan Sekarang" langsung dari kartu armada. */
export function quickBookingMessage(fleetName: string) {
  return [
    "Halo Admin,",
    "",
    `Saya tertarik dengan *${fleetName}*.`,
    "Mohon informasi mengenai harga dan ketersediaan armada.",
    "",
    "Terima kasih.",
  ].join("\n");
}

/**
 * Format pesan WhatsApp lengkap sesuai spesifikasi produk (§7 Format Pesan WhatsApp).
 * Field kosong tetap ditampilkan agar admin tahu apa yang belum diisi pelanggan.
 */
export function formatBookingMessage(data: BookingFormData) {
  const sep = "==============================";
  return [
    "Halo Admin 👋",
    "",
    "Saya ingin melakukan pemesanan Bus & Travel.",
    "",
    sep,
    "📋 DATA PEMESAN",
    sep,
    "",
    `👤 Nama              : ${data.name || "-"}`,
    `📱 Nomor WhatsApp    : ${data.phone || "-"}`,
    `📅 Tanggal Berangkat : ${data.departureDate || "-"}`,
    `📅 Tanggal Pulang    : ${data.returnDate || "-"}`,
    `📍 Titik Jemput      : ${data.pickupPoint || "-"}`,
    `🎯 Tujuan            : ${data.destination || "-"}`,
    `🚌 Jenis Armada      : ${data.fleetType || "-"}`,
    `👥 Jumlah Penumpang  : ${data.passengers || "-"}`,
    `🕒 Durasi            : ${data.duration || "-"}`,
    `📝 Catatan           : ${data.notes || "-"}`,
    "",
    "Mohon informasi mengenai:",
    "",
    "• Ketersediaan armada",
    "• Estimasi harga",
    "• Cara pembayaran",
    "",
    "Terima kasih.",
  ].join("\n");
}

export function buildBookingWhatsAppUrl(data: BookingFormData) {
  return buildWhatsAppUrl(formatBookingMessage(data));
}
