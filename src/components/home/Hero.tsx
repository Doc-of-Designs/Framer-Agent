import GradientBackdrop from "@/components/ui/GradientBackdrop";
import RotatingWord from "@/components/ui/RotatingWord";
import DoodleCanvas from "./DoodleCanvas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48">
      <GradientBackdrop />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-serif text-4xl leading-[1.15] sm:text-6xl">
          I{" "}
          <RotatingWord
            words={["Build", "Ship", "Design"]}
            classNameByWord={{
              Build:
                "inline-block -rotate-1 rounded-md border-2 border-ink bg-accent-soft px-3 py-1 text-ink shadow-[3px_3px_0_0_rgba(20,24,25,1)]",
              Design:
                "inline-block -rotate-1 rounded-md border-2 border-ink bg-accent-soft px-3 py-1 text-ink shadow-[3px_3px_0_0_rgba(20,24,25,1)]",
              Ship: "inline-block -rotate-1 rounded-md border-2 border-ink bg-[#4ADE80] px-3 py-1 text-ink shadow-[3px_3px_0_0_rgba(20,24,25,1)]",
            }}
          />
          <br />
          Products that people use
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-ink-soft">
          Product Designer with 4+ years of experience turning complex products into
          simple, intuitive experiences. I design SaaS, fintech, AI, and healthcare
          products with a focus on clarity, usability, and scalable systems.
        </p>

        <div className="relative mt-16">
          <span className="font-hand absolute -top-8 right-0 hidden text-lg text-ink-soft sm:block">
            Doodle here
            <svg
              width="40"
              height="30"
              viewBox="0 0 40 30"
              className="absolute -bottom-6 left-2 text-ink-soft"
              fill="none"
            >
              <path
                d="M2 2C8 10 15 24 24 26C28 27 30 22 27 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path d="M27 19L22 20M27 19L27 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <DoodleCanvas />
        </div>
      </div>
    </section>
  );
}
