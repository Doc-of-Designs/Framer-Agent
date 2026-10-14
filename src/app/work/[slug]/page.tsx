import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySections from "@/components/case-study/CaseStudySections";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return { title: study ? `${study.title} — Portfolio` : "Case Study" };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <main>
      <CaseStudyHero study={study} />
      <CaseStudySections sections={study.sections} coverGradient={study.cover.gradient} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-6 font-serif text-2xl">Recent Case Studies</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/work/${r.slug}`}
              className={`group block overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white ${r.cover.gradient}`}
            >
              <p className="font-serif text-lg leading-snug">{r.title}</p>
              <p className="mt-2 text-sm text-white/75">{r.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
