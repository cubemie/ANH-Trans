export type FleetCategory = "medium" | "big" | "hiace" | "elf";

export interface Fleet {
  slug: string;
  name: string;
  category: FleetCategory;
  capacity: number;
  year: number;
  facilities: string[];
  priceFrom: number;
  images: string[];
  description: string;
  terms: string[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  message: string;
  avatarInitials: string;
}

export interface PriceRoute {
  from: string;
  to: string;
  priceFrom: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: "bus" | "interior" | "wisata" | "pelanggan" | "event";
}

export interface BookingFormData {
  name: string;
  phone: string;
  departureDate: string;
  destination: string;
  passengers: string;
  fleetType: string;
  duration: string;
  notes?: string;
}
