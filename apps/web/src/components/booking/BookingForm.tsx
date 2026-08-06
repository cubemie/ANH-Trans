import { useForm } from "react-hook-form";
import { Field, Input, Select, Textarea, WhatsAppButton } from "@busgo/ui";
import { fleets } from "@/data/fleet";
import { siteConfig } from "@/lib/site-config";
import { formatBookingMessage } from "@/lib/whatsapp";
import type { BookingFormData } from "@/types";

const durations = ["1 Hari", "2 Hari 1 Malam", "3 Hari 2 Malam", "Lebih dari 3 Hari"];

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: {
      name: "",
      phone: "",
      departureDate: "",
      destination: "",
      passengers: "",
      fleetType: "",
      duration: "",
      notes: "",
    },
  });

  const values = watch();
  const message = formatBookingMessage(values);
  const isMinimalValid = values.name.trim() && values.phone.trim();

  return (
    <form
      className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Nama" htmlFor="name" error={errors.name?.message}>
        <Input id="name" placeholder="Nama lengkap Anda" {...register("name", { required: true })} />
      </Field>

      <Field label="Nomor WhatsApp" htmlFor="phone" error={errors.phone?.message}>
        <Input id="phone" placeholder="08xxxxxxxxxx" inputMode="tel" {...register("phone", { required: true })} />
      </Field>

      <Field label="Tanggal Berangkat" htmlFor="departureDate">
        <Input id="departureDate" type="date" {...register("departureDate")} />
      </Field>

      <Field label="Tujuan" htmlFor="destination">
        <Input id="destination" placeholder="mis. Jakarta - Bandung" {...register("destination")} />
      </Field>

      <Field label="Jumlah Penumpang" htmlFor="passengers">
        <Input id="passengers" type="number" min={1} placeholder="mis. 30" {...register("passengers")} />
      </Field>

      <Field label="Jenis Armada" htmlFor="fleetType">
        <Select id="fleetType" {...register("fleetType")}>
          <option value="">Pilih armada</option>
          {fleets.map((f) => (
            <option key={f.slug} value={f.name}>
              {f.name} ({f.capacity} Seat)
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Durasi" htmlFor="duration">
        <Select id="duration" {...register("duration")}>
          <option value="">Pilih durasi</option>
          {durations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Select>
      </Field>

      <div className="sm:col-span-2">
        <Field label="Catatan (opsional)" htmlFor="notes">
          <Textarea id="notes" placeholder="Kebutuhan khusus, titik jemput, dll." {...register("notes")} />
        </Field>
      </div>

      <div className="sm:col-span-2 mt-1">
        <WhatsAppButton
          phone={siteConfig.whatsappNumber}
          message={message}
          fullWidth
          size="lg"
          onClick={(e) => {
            if (!isMinimalValid) {
              e.preventDefault();
              alert("Mohon isi Nama dan Nomor WhatsApp terlebih dahulu.");
            }
          }}
        >
          Pesan via WhatsApp
        </WhatsAppButton>
        <p className="text-xs text-slate-400 text-center mt-3">
          Klik tombol di atas untuk melanjutkan pemesanan lewat WhatsApp Admin kami.
        </p>
      </div>
    </form>
  );
}
