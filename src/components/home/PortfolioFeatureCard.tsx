import Link from "next/link";
import { CaseStudy } from "@/lib/types";

export default function PortfolioFeatureCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="grid gap-8 p-8 sm:grid-cols-2 sm:items-center sm:p-10">
        <div>
          <h3 className="font-serif text-2xl leading-snug sm:text-3xl">{study.title}</h3>
          <p className="mt-4 text-ink-soft">{study.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-ink-soft">
                {tag}
              </span>
            ))}
            <span className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-ink-soft">
              {study.meta.duration}
            </span>
          </div>
        </div>

        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${study.cover.gradient}`}
        >
          <div className="absolute inset-0 flex items-center justify-center gap-3 p-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-4/5 w-1/4 rounded-2xl border border-white/30 bg-white/15 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:rotate-0"
                style={{ transform: `rotate(${(i - 1) * 10}deg) translateY(${Math.abs(i - 1) * 10}px)` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-black/5 bg-ink py-3">
        <div className="flex w-max animate-marquee gap-10 text-xs font-semibold uppercase tracking-widest text-white/50">
          {Array.from({ length: 6 }).flatMap((_, i) => [
            <span key={`a-${i}`} className="flex items-center gap-10">
              {study.tagline} <span className="text-white/20">↕</span>
            </span>,
            <span key={`b-${i}`} className="flex items-center gap-10">
              {study.category} <span className="text-white/20">↕</span>
            </span>,
          ])}
        </div>
      </div>
    </Link>
  );
}
