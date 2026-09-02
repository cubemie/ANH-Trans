import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WhatsAppButton, cn } from "@busgo/ui";
import { siteConfig } from "@/lib/site-config";
import { quickBookingMessage } from "@/lib/whatsapp";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/armada", label: "Armada" },
  { to: "/layanan", label: "Layanan" },
  { to: "/harga", label: "Harga" },
  { to: "/galeri", label: "Galeri" },
  { to: "/testimoni", label: "Testimoni" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [window.location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-card" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo-anh-trans.png"
              alt={siteConfig.name}
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-base font-semibold link-underline",
                    isActive ? "text-brand" : "text-brand-deep/80 hover:text-brand"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <WhatsAppButton
              phone={siteConfig.whatsappNumber}
              message={quickBookingMessage("armada BusGo")}
              size="sm"
            >
              Pesan Sekarang
            </WhatsAppButton>
          </div>

          <button
            className="lg:hidden p-2 text-brand-deep"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-brand-soft shadow-card">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 text-base font-semibold",
                    isActive
                      ? "bg-brand-soft text-brand-deep"
                      : "text-brand-deep/80 hover:bg-brand-light"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <WhatsAppButton
              phone={siteConfig.whatsappNumber}
              message={quickBookingMessage("armada BusGo")}
              className="mt-2"
              fullWidth
            >
              Pesan via WhatsApp
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}
