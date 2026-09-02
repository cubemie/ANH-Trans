import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl, quickBookingMessage } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(quickBookingMessage("armada ANH TRANS"), siteConfig.whatsappNumber)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-whatsapp-btn hover:bg-whatsapp-dark hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white" />
      </span>
    </a>
  );
}
