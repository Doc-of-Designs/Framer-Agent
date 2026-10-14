import Link from "next/link";
import GradientBackdrop from "@/components/ui/GradientBackdrop";
import Eyebrow from "@/components/ui/Eyebrow";
import { caseStudies } from "@/content/case-studies";

export const metadata = {
  title: "Work — Portfolio",
};

export default function WorkPage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48">
        <GradientBackdrop />
        <div className="relative mx-auto max-w-3xl px-6">
          <Eyebrow>Case Studies</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            A curated collection of design projects and UX explorations.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div
                className={`relative flex aspect-[4/3] items-end bg-gradient-to-br p-5 ${study.cover.gradient}`}
              >
                <div className="w-full rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur">
                  <p className="text-xs font-medium text-ink-soft">{study.tagline}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl">{study.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{study.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
