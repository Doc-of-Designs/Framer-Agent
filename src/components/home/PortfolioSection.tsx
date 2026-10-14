import Eyebrow from "@/components/ui/Eyebrow";
import { caseStudies } from "@/content/case-studies";
import PortfolioFeatureCard from "./PortfolioFeatureCard";

export default function PortfolioSection() {
  return (
    <section className="px-6 py-10 sm:px-10">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <Eyebrow variant="muted">Portfolio</Eyebrow>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Selected Works</h2>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        {caseStudies.map((study) => (
          <PortfolioFeatureCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
