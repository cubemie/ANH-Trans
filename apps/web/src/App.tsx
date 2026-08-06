import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { FleetListPage } from "@/pages/FleetListPage";
import { FleetDetailPage } from "@/pages/FleetDetailPage";
import { BookingPage } from "@/pages/BookingPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PricingPage } from "@/pages/PricingPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { TestimoniPage } from "@/pages/TestimoniPage";
import { FaqPage } from "@/pages/FaqPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang-kami" element={<AboutPage />} />
        <Route path="/armada" element={<FleetListPage />} />
        <Route path="/armada/:slug" element={<FleetDetailPage />} />
        <Route path="/pesan" element={<BookingPage />} />
        <Route path="/layanan" element={<ServicesPage />} />
        <Route path="/harga" element={<PricingPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
