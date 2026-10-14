import Eyebrow from "@/components/ui/Eyebrow";

const tools = [
  {
    name: "Figma",
    emoji: "🎨",
    body: "Expert-level product design, prototyping, auto layout, component libraries, and high-fidelity interaction design.",
  },
  {
    name: "Claude",
    emoji: "✴️",
    body: "AI-assisted product thinking, UX research synthesis, content structuring, workflow exploration, rapid ideation, and design decision support.",
  },
  {
    name: "Framer",
    emoji: "🧊",
    body: "High-fidelity website design and development, responsive layouts, interactive prototypes, animations, and polished production-ready experiences.",
  },
];

export default function ToolsExpertise() {
  return (
    <section className="bg-surface-dark px-6 py-24 text-white sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Eyebrow variant="muted">
          <span className="text-white/50">Expertise</span>
        </Eyebrow>
        <h2 className="mt-3 max-w-xl font-serif text-3xl sm:text-4xl">
          I&apos;m highly skilled in the tools that matter.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.name} className="rounded-3xl bg-white/[0.04] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl">
                {tool.emoji}
              </span>
              <h3 className="mt-5 font-serif text-xl">{tool.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{tool.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
