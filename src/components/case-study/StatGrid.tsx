import { StatItem } from "@/lib/types";

export default function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl bg-black/5 px-4 py-8 text-center">
          <p className="font-serif text-3xl sm:text-4xl">{stat.value}</p>
          <p className="mt-2 text-xs text-ink-soft sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
