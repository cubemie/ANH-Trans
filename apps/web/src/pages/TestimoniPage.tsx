import { useState, useEffect } from "react";
import { Star, Quote, Send, CheckCircle2, User, MessageSquare } from "lucide-react";
import { Container, SectionHeading, WhatsAppButton } from "@busgo/ui";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site-config";

interface Testimoni {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

const STORAGE_KEY = "anh-trans-testimoni";

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function TestimoniPage() {
  const [testimonials, setTestimonials] = useState<Testimoni[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setTestimonials(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) { setError("Nama tidak boleh kosong."); return; }
    if (!message.trim()) { setError("Testimoni tidak boleh kosong."); return; }
    if (message.trim().length < 10) { setError("Testimoni terlalu singkat, minimal 10 karakter."); return; }

    const newEntry: Testimoni = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      rating,
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
    };

    const updated = [newEntry, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    setName("");
    setMessage("");
    setRating(5);
    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      <PageHero
        eyebrow="Testimoni"
        title="Apa Kata Pelanggan Kami"
        description="Kepercayaan pelanggan adalah amanah kami. Bagikan pengalaman perjalanan Anda bersama ANH TRANS."
      />

      <section className="py-16 sm:py-20">
        <Container>

          {/* ── Form Tulis Testimoni ───────────────────────── */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-card p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-extrabold text-brand-deep">Tulis Testimoni Anda</h2>
              </div>

              {submitted && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 rounded-2xl px-4 py-3 mb-5 text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Terima kasih! Testimoni Anda berhasil ditambahkan.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Nama */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="testimoni-name" className="text-sm font-semibold text-brand-deep flex items-center gap-1.5">
                    <User className="h-4 w-4 text-brand" /> Nama
                  </label>
                  <input
                    id="testimoni-name"
                    type="text"
                    placeholder="Masukkan nama Anda..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={60}
                    className="w-full rounded-xl border border-brand-soft bg-brand-soft/30 px-4 py-3 text-sm text-brand-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40 transition"
                  />
                </div>

                {/* Rating Bintang */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-brand-deep flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-brand" /> Rating
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(star)}
                        aria-label={`${star} bintang`}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-7 w-7 transition-colors ${
                            star <= (hovered || rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-slate-200 text-slate-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pesan */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="testimoni-message" className="text-sm font-semibold text-brand-deep flex items-center gap-1.5">
                    <Quote className="h-4 w-4 text-brand" /> Testimoni
                  </label>
                  <textarea
                    id="testimoni-message"
                    rows={4}
                    placeholder="Ceritakan pengalaman perjalanan Anda bersama ANH TRANS..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={400}
                    className="w-full rounded-xl border border-brand-soft bg-brand-soft/30 px-4 py-3 text-sm text-brand-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40 transition resize-none"
                  />
                  <span className="text-xs text-slate-400 text-right">{message.length}/400</span>
                </div>

                {error && (
                  <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-2">{error}</p>
                )}

                <button
                  type="submit"
                  id="submit-testimoni"
                  className="flex items-center justify-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-brand/90 active:scale-95 transition-all duration-150 shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  Kirim Testimoni
                </button>
              </form>
            </div>
          </div>

          {/* ── Daftar Testimoni ──────────────────────────── */}
          {testimonials.length > 0 ? (
            <>
              <SectionHeading
                eyebrow="Ulasan Pelanggan"
                title="Pengalaman Nyata dari Pelanggan"
                description="Testimoni ditulis langsung oleh para pelanggan ANH TRANS."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-5"
                  >
                    <Quote className="h-8 w-8 text-brand/30" />

                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < t.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-base text-slate-600 leading-relaxed flex-1 italic">
                      &ldquo;{t.message}&rdquo;
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-brand-soft/60">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-deep font-bold text-sm shrink-0">
                          {getInitials(t.name)}
                        </span>
                        <p className="font-bold text-brand-deep">{t.name}</p>
                      </div>
                      <span className="text-xs text-slate-400">{t.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 flex flex-col items-center gap-4 text-slate-400">
              <Quote className="h-12 w-12 text-brand-soft" />
              <p className="text-lg font-semibold text-slate-500">Belum ada testimoni.</p>
              <p className="text-sm">Jadilah yang pertama berbagi pengalaman perjalanan Anda!</p>
            </div>
          )}

          {/* ── CTA ───────────────────────────────────────── */}
          <div className="mt-16 text-center bg-brand-soft/40 rounded-3xl p-10 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-extrabold text-brand-deep">
              Siap Memulai Perjalanan?
            </h3>
            <p className="text-slate-500 max-w-md">
              Rencanakan perjalanan Anda sekarang. Konsultasi gratis, harga transparan, proses mudah via WhatsApp.
            </p>
            <WhatsAppButton
              phone={siteConfig.whatsappNumber}
              message="Halo Admin 👋 Saya ingin berkonsultasi mengenai pemesanan armada."
              size="lg"
            >
              Konsultasi via WhatsApp
            </WhatsAppButton>
          </div>

        </Container>
      </section>
    </>
  );
}
