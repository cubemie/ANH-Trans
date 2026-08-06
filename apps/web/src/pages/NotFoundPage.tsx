import { Link } from "react-router-dom";
import { Bus, Home } from "lucide-react";
import { Container } from "@busgo/ui";

export function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-center text-center gap-5">
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-soft text-brand">
          <Bus className="h-10 w-10" />
        </span>
        <h1 className="text-6xl font-extrabold text-brand-deep">404</h1>
        <p className="text-slate-500 max-w-sm">
          Halaman yang Anda cari tidak ditemukan. Mungkin sudah dipindahkan atau
          tidak pernah ada.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 font-semibold hover:bg-brand-deep transition-colors"
        >
          <Home className="h-4 w-4" /> Kembali ke Beranda
        </Link>
      </Container>
    </section>
  );
}
