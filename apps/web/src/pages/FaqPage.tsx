import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, WhatsAppButton, cn } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { faqs } from "@/data/content";
import { siteConfig } from "@/lib/site-config";

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Pertanyaan yang Sering Diajukan"
        description="Belum menemukan jawaban yang Anda cari? Hubungi kami langsung via WhatsApp."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-lg text-brand-deep">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-brand shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-base text-slate-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-4 mt-12 text-center">
            <p className="text-lg text-slate-500">Masih ada pertanyaan lain?</p>
            <WhatsAppButton
              phone={siteConfig.whatsappNumber}
              message="Halo Admin, saya ingin bertanya lebih lanjut mengenai layanan ANH TRANS."
              size="lg"
            >
              Tanya via WhatsApp
            </WhatsAppButton>
          </div>
        </Container>
      </section>
    </>
  );
}
