import { CaseStudy } from "@/lib/types";

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const metaRows = [
    { label: "Role", value: study.meta.role },
    { label: "Duration", value: study.meta.duration },
    { label: "Tools", value: study.meta.tools },
    { label: "Team", value: study.meta.team },
  ];

  return (
    <section className="pt-40 pb-16 sm:pt-48">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-serif text-3xl leading-tight sm:text-5xl">{study.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{study.description}</p>
      </div>

      <div
        className={`relative mx-auto mt-10 aspect-[16/8] max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-br ${study.cover.gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-4 p-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-full w-1/4 rounded-2xl border border-white/30 bg-white/15 shadow-xl backdrop-blur-sm"
              style={{ transform: `rotate(${(i - 1) * 8}deg) translateY(${Math.abs(i - 1) * 12}px)` }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-black/30 py-2.5">
          <div className="flex w-max animate-marquee gap-10 text-xs font-semibold uppercase tracking-widest text-white/70">
            {Array.from({ length: 6 }).flatMap((_, i) => [
              <span key={`a-${i}`} className="flex items-center gap-10">
                {study.tagline} <span className="text-white/30">↕</span>
              </span>,
              <span key={`b-${i}`} className="flex items-center gap-10">
                {study.category} <span className="text-white/30">↕</span>
              </span>,
            ])}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-6 px-6 sm:grid-cols-4">
        {metaRows.map((row) => (
          <div key={row.label}>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{row.label}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{row.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
