const STATS = [
  { value: "24h", label: "見守り体制 · Always here" },
  { value: "1:2", label: "手厚い人員配置 · Staff ratio" },
  { value: "18", label: "個室のお部屋 · Private rooms" },
  { value: "12", suffix: "yrs", label: "地域とともに · In the community" },
];

export function StatsSection() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 border-t border-line px-6 py-[52px] sm:px-10 md:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <div className="font-mincho text-[44px] text-ink">
            {stat.value}
            {stat.suffix && <span className="text-[22px]">{stat.suffix}</span>}
          </div>
          <div className="mt-[6px] text-[12.5px] tracking-[0.04em] text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
