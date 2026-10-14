import Link from "next/link";
import GradientBackdrop from "@/components/ui/GradientBackdrop";

const stats = [
  { value: "4+", label: "Years Designing" },
  { value: "10+", label: "Industries Explored" },
  { value: "20+", label: "Products Designed" },
  { value: "13,000+", label: "Users Across Products" },
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48">
      <GradientBackdrop />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          John — Product Designer
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Hi, I&apos;m John.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
          A Product Designer turning complex ideas into simple, meaningful digital
          experiences.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft">
          I design at the intersection of technology, people, and purpose. With 4+ years
          of experience, I&apos;ve helped startups and global teams build products that are
          intuitive, inclusive, and built for real life.
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Let&apos;s work together
        </Link>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-ink-soft sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
