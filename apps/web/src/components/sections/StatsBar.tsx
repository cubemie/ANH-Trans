import { StatCard } from "@busgo/ui";
import { siteConfig } from "@/lib/site-config";

export function StatsBar() {
  return (
    <section className="bg-brand-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {siteConfig.stats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}
