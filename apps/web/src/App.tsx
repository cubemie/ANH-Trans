import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { FleetListPage } from "@/pages/FleetListPage";
import { FleetDetailPage } from "@/pages/FleetDetailPage";
import { BookingPage } from "@/pages/BookingPage";
import { TestimoniPage } from "@/pages/TestimoniPage";
import { FaqPage } from "@/pages/FaqPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/armada" element={<FleetListPage />} />
        <Route path="/armada/:slug" element={<FleetDetailPage />} />
        <Route path="/pesan" element={<BookingPage />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

