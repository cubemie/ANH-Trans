import { Container } from "@busgo/ui";
import { BookingForm } from "@/components/booking/BookingForm";

export function BookingSection() {
  return (
    <section id="booking" className="relative py-16 sm:py-20 bg-hero-gradient overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl bg-white rounded-3xl shadow-glass p-6 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep">
              Formulir Pemesanan Perjalanan
            </h2>
            <p className="text-slate-500 mt-2">
              Isi data singkat berikut, lalu lanjutkan pemesanan langsung via WhatsApp.
            </p>
          </div>
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
