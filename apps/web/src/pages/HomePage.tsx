import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { FleetPreview } from "@/components/sections/FleetPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingSection } from "@/components/sections/BookingSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhyUs />
      <FleetPreview />
      <Testimonials />
      <BookingSection />
    </>
  );
}
