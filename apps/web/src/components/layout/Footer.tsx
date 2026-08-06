import { Link } from "react-router-dom";
import { Bus, Instagram, Facebook, Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const linkGroups = [
  {
    title: "Perusahaan",
    links: [
      { to: "/tentang-kami", label: "Tentang Kami" },
      { to: "/galeri", label: "Galeri" },
      { to: "/kontak", label: "Kontak" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { to: "/armada", label: "Armada" },
      { to: "/layanan", label: "Layanan Kami" },
      { to: "/harga", label: "Estimasi Harga" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { to: "/testimoni", label: "Testimoni" },
      { to: "/faq", label: "FAQ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-soft mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
                <Bus className="h-5 w-5" />
              </span>
              <span className="text-xl font-extrabold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-brand-soft/80">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-soft/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-soft/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+{siteConfig.whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{siteConfig.operationalHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-soft/60">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta
            dilindungi.
          </span>
          <span>Dibuat dengan React, Vite &amp; Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
