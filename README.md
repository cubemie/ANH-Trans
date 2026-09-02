# BusGo Monorepo

Platform digital promosi & pemesanan **Bus Pariwisata dan Travel** berbasis **WhatsApp**.
Tidak ada payment gateway, tidak ada login — semua pemesanan diteruskan ke WhatsApp Admin
dalam format pesan siap kirim.

## Struktur Monorepo

```
busgo/
├── apps/
│   └── web/                 → Aplikasi utama (React + Vite + TypeScript + Tailwind)
├── packages/
│   ├── ui/                  → Design system / komponen UI reusable (@busgo/ui)
│   └── config/               → Shared config: Tailwind preset, TypeScript base, ESLint (@busgo/config)
├── package.json              → Root workspaces (npm workspaces)
└── README.md
```

Package manager: **npm workspaces** (bisa diganti pnpm/yarn dengan sedikit penyesuaian).

## Menjalankan Project

```bash
# install semua dependency (root + semua workspace)
npm install

# jalankan dev server (apps/web)
npm run dev

# build production
npm run build

# preview hasil build
npm run preview
```

## Tech Stack

| Layer       | Teknologi                                   |
|-------------|----------------------------------------------|
| Framework   | React 18 + Vite 5                             |
| Bahasa      | TypeScript                                    |
| Styling     | Tailwind CSS 3 (custom preset `@busgo/config`)|
| Routing     | React Router 6                                |
| Icons       | lucide-react                                  |
| Forms       | React Hook Form + Zod                         |
| State       | React Context (fleet filter, booking draft)   |
| Integrasi   | WhatsApp Click-to-Chat, Google Maps embed     |

## Konsep Alur Booking

```
Website → Lihat Armada → Isi Form Pemesanan → Klik "Pesan via WhatsApp"
       → WhatsApp terbuka otomatis dengan pesan terformat → Admin lanjutkan proses
```

Lihat `apps/web/src/lib/whatsapp.ts` untuk builder pesan WhatsApp.

## Design Tokens

Warna, tipografi (Plus Jakarta Sans), dan token lain didefinisikan satu kali di
`packages/config/tailwind-preset.js` lalu dipakai bersama oleh `apps/web` (dan app lain
di masa depan, mis. dashboard admin) supaya konsisten dengan identity system BusGo.

## Roadmap (lihat dokumen produk)

Login pelanggan, dashboard admin, payment gateway (Midtrans/Xendit), e-ticket, dsb — lihat
`docs/product-spec.md` (opsional, tempatkan dokumen spesifikasi di sini jika diperlukan).
