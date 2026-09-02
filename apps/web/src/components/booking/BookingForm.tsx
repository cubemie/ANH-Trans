import { useForm } from "react-hook-form";
import { Field, Input, Select, Textarea, WhatsAppButton } from "@busgo/ui";
import { fleets } from "@/data/fleet";
import { siteConfig } from "@/lib/site-config";
import { formatBookingMessage } from "@/lib/whatsapp";
import type { BookingFormData } from "@/types";

const durations = ["1 Hari", "2 Hari 1 Malam", "3 Hari 2 Malam", "Lebih dari 3 Hari"];

interface BookingFormProps {
  compact?: boolean;
  /** Nama armada yang sudah dipilih (preselect dari halaman detail armada) */
  defaultFleet?: string;
}

export function BookingForm({ compact = false, defaultFleet = "" }: BookingFormProps) {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm<BookingFormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      departureDate: "",
      returnDate: "",
      pickupPoint: "",
      destination: "",
      passengers: "",
      fleetType: defaultFleet,
      duration: "",
      notes: "",
    },
  });

  const values = watch();
  const message = formatBookingMessage(values);

  // Cek apakah semua field wajib sudah terisi
  const isFormValid =
    values.name.trim() !== "" &&
    values.phone.trim() !== "" &&
    values.departureDate !== "" &&
    values.pickupPoint.trim() !== "" &&
    values.destination.trim() !== "" &&
    values.passengers !== "" &&
    values.fleetType !== "" &&
    values.duration !== "";

  const gap = compact
    ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
    : "grid grid-cols-1 sm:grid-cols-2 gap-5";

  const handleWhatsAppClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Trigger validasi semua field sebelum buka WhatsApp
    const valid = await trigger([
      "name",
      "phone",
      "departureDate",
      "pickupPoint",
      "destination",
      "passengers",
      "fleetType",
      "duration",
    ]);
    if (!valid || !isFormValid) {
      e.preventDefault();
      // Scroll ke form jika ada error
      document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <form
      id="booking-form"
      className={gap}
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Nama Lengkap */}
      <Field label="Nama Lengkap *" htmlFor="name" error={errors.name?.message}>
        <Input
          id="name"
          placeholder="Nama lengkap Anda"
          {...register("name", { required: "Nama wajib diisi" })}
        />
      </Field>

      {/* Nomor WhatsApp */}
      <Field label="Nomor WhatsApp *" htmlFor="phone" error={errors.phone?.message}>
        <Input
          id="phone"
          placeholder="08xxxxxxxxxx"
          inputMode="tel"
          {...register("phone", {
            required: "Nomor WhatsApp wajib diisi",
            pattern: { value: /^[0-9+\-\s]{9,15}$/, message: "Format nomor tidak valid" },
          })}
        />
      </Field>

      {/* Tanggal Keberangkatan */}
      <Field label="Tanggal Keberangkatan *" htmlFor="departureDate" error={errors.departureDate?.message}>
        <Input
          id="departureDate"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          {...register("departureDate", { required: "Tanggal keberangkatan wajib diisi" })}
        />
      </Field>

      {/* Tanggal Kepulangan (opsional) */}
      <Field label="Tanggal Kepulangan (Opsional)" htmlFor="returnDate">
        <Input
          id="returnDate"
          type="date"
          min={values.departureDate || new Date().toISOString().split("T")[0]}
          {...register("returnDate")}
        />
      </Field>

      {/* Titik Jemput */}
      <Field label="Titik Jemput *" htmlFor="pickupPoint" error={errors.pickupPoint?.message}>
        <Input
          id="pickupPoint"
          placeholder="mis. Jl. Sudirman No. 10, Jakarta"
          {...register("pickupPoint", { required: "Titik jemput wajib diisi" })}
        />
      </Field>

      {/* Tujuan */}
      <Field label="Tujuan *" htmlFor="destination" error={errors.destination?.message}>
        <Input
          id="destination"
          placeholder="mis. Bandung, Yogyakarta, Bali"
          {...register("destination", { required: "Tujuan wajib diisi" })}
        />
      </Field>

      {/* Jumlah Penumpang */}
      <Field label="Jumlah Penumpang *" htmlFor="passengers" error={errors.passengers?.message}>
        <Input
          id="passengers"
          type="number"
          min={1}
          placeholder="mis. 30"
          {...register("passengers", { required: "Jumlah penumpang wajib diisi", min: { value: 1, message: "Minimal 1 penumpang" } })}
        />
      </Field>

      {/* Jenis Armada */}
      <Field label="Jenis Armada *" htmlFor="fleetType" error={errors.fleetType?.message}>
        <Select
          id="fleetType"
          {...register("fleetType", { required: "Pilih jenis armada" })}
        >
          <option value="">Pilih armada</option>
          {fleets.map((f) => (
            <option key={f.slug} value={f.name}>
              {f.name} ({f.capacity} Seat)
            </option>
          ))}
        </Select>
      </Field>

      {/* Durasi Sewa — full width */}
      <div className="sm:col-span-2">
        <Field label="Durasi Sewa *" htmlFor="duration" error={errors.duration?.message}>
          <Select
            id="duration"
            {...register("duration", { required: "Pilih durasi sewa" })}
          >
            <option value="">Pilih durasi</option>
            {durations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      {/* Catatan Tambahan */}
      <div className="sm:col-span-2">
        <Field label="Catatan Tambahan (Opsional)" htmlFor="notes">
          <Textarea
            id="notes"
            placeholder="Permintaan khusus, kebutuhan tertentu, dll."
            {...register("notes")}
          />
        </Field>
      </div>

      {/* Submit */}
      <div className="sm:col-span-2 mt-1 flex flex-col gap-3">
        {/* Info progres pengisian */}
        {!isFormValid && (
          <p className="text-xs text-amber-600 text-center bg-amber-50 rounded-xl py-2 px-3 border border-amber-200">
            ⚠️ Lengkapi semua field yang bertanda * sebelum memesan.
          </p>
        )}

        <WhatsAppButton
          phone={siteConfig.whatsappNumber}
          message={message}
          fullWidth
          size="lg"
          onClick={handleWhatsAppClick}
          className={!isFormValid ? "opacity-60 cursor-not-allowed" : ""}
        >
          Pesan via WhatsApp
        </WhatsAppButton>

        <p className="text-xs text-slate-400 text-center">
          {isFormValid
            ? "✅ Formulir lengkap — siap dikirim ke WhatsApp Admin."
            : "Setelah terisi lengkap, klik tombol untuk melanjutkan ke WhatsApp Admin."}
        </p>
      </div>
    </form>
  );
}
