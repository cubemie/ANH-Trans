import { Badge } from "@busgo/ui";

const capacityOptions = ["10-20 Seat", "21-30 Seat", "31-50 Seat", "50+ Seat"];
const facilityOptions = ["AC", "WiFi", "Reclining Seat", "Toilet", "Power Outlet", "Snack"];

export function FleetFilters({
  selectedFacilities,
  onToggleFacility,
  selectedCapacity,
  onToggleCapacity,
  onReset,
}: {
  selectedFacilities: string[];
  onToggleFacility: (f: string) => void;
  selectedCapacity: string[];
  onToggleCapacity: (c: string) => void;
  onReset: () => void;
}) {
  return (
    <aside className="bg-white rounded-3xl shadow-card p-6 h-fit lg:sticky lg:top-24">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-brand-deep">Filter Armada</h3>
        {(selectedFacilities.length > 0 || selectedCapacity.length > 0) && (
          <button
            onClick={onReset}
            className="text-xs font-semibold text-brand hover:underline"
          >
            Reset
          </button>
        )}
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-brand-deep mb-3">Kapasitas</h4>
        <div className="flex flex-col gap-2.5">
          {capacityOptions.map((c) => (
            <label key={c} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCapacity.includes(c)}
                onChange={() => onToggleCapacity(c)}
                className="h-4 w-4 rounded border-2 border-brand-soft text-brand focus:ring-brand accent-brand"
              />
              <span className="text-sm text-slate-600 group-hover:text-brand-deep">
                {c}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-brand-deep mb-3">Fasilitas</h4>
        <div className="flex flex-col gap-2.5">
          {facilityOptions.map((f) => (
            <label key={f} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedFacilities.includes(f)}
                onChange={() => onToggleFacility(f)}
                className="h-4 w-4 rounded border-2 border-brand-soft text-brand focus:ring-brand accent-brand"
              />
              <span className="text-sm text-slate-600 group-hover:text-brand-deep">
                {f}
              </span>
            </label>
          ))}
        </div>
      </div>

      {selectedFacilities.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-brand-soft/60">
          {selectedFacilities.map((f) => (
            <Badge key={f} tone="blue">
              {f}
            </Badge>
          ))}
        </div>
      )}
    </aside>
  );
}
