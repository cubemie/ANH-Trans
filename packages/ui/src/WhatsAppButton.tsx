import { AnchorHTMLAttributes, ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "./cn";

export interface WhatsAppButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Nomor WhatsApp admin, format internasional tanpa "+" contoh: 6281234567890 */
  phone: string;
  /** Pesan yang sudah diformat (sudah di-encode oleh caller atau raw text) */
  message: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children?: ReactNode;
}

const sizeClasses = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-base px-6 py-3 gap-2",
  lg: "text-lg px-8 py-4 gap-2.5",
};

/** Tombol siap-pakai yang membuka WhatsApp (wa.me) dengan pesan pre-filled. */
export function WhatsAppButton({
  phone,
  message,
  size = "md",
  fullWidth,
  className,
  children,
  ...props
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 active:scale-[0.98] bg-whatsapp text-white hover:bg-whatsapp-dark shadow-whatsapp-btn",
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.2} />
      {children ?? "Pesan via WhatsApp"}
    </a>
  );
}
