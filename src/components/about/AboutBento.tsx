const process = ["Discover", "Define", "Design", "Validate", "Deliver"];
const activeSteps = 4;

export default function AboutBento() {
  return (
    <section className="px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
        <div className="relative row-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-800 via-indigo-900 to-black sm:row-span-3 min-h-[260px]">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">🧑‍💻</div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl">Design Thinking &amp; Craft</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {["ALIGNMENT", "COLORS", "CONSISTENCY", "TYPOGRAPHY", "VISUAL CUES", "HIERARCHY", "PROXIMITY"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-ink-soft"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Philosophy</p>
          <p className="mt-3 font-serif text-lg leading-snug">
            I don&apos;t design to impress. I design to express, solve, and simplify.
          </p>
        </div>

        <div className="rounded-3xl bg-ink p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Experience</p>
          <p className="mt-4 font-serif text-4xl">4+ Years</p>
          <p className="mt-4 font-serif text-xl">Crafting Digital Products</p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Designing user-centered web and mobile experiences across SaaS and consumer
            platforms.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            Collaboration
          </p>
          <p className="mt-3 font-serif text-xl">Cross-functional Workflow</p>
          <p className="mt-2 text-sm text-ink-soft">
            Working closely with product and engineering teams.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              John
            </span>
            <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-medium text-fuchsia-700">
              Martha
            </span>
          </div>
        </div>

        <div className="rounded-3xl bg-lime-50 p-6">
          <p className="font-serif text-xl">Projects Completed</p>
          <p className="mt-2 text-sm text-ink-soft">Delivered across startups &amp; growing teams.</p>
          <p className="mt-4 font-serif text-4xl text-lime-700">20+</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            My Love Languages
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["ITERATE ✍️", "TEST IT 🛠️", "SHIP IT ✅", "LFG 🚀"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-soft/20 px-3 py-1.5 text-xs font-medium text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            My Design Process
          </p>
          <div className="mt-6 flex items-center justify-between">
            {process.map((step, i) => (
              <div key={step} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                      i < activeSteps
                        ? "bg-accent text-white"
                        : "border-2 border-black/15 text-transparent"
                    }`}
                  >
                    {i < activeSteps ? "✓" : ""}
                  </div>
                  <span className="text-xs font-medium">{step}</span>
                </div>
                {i < process.length - 1 && (
                  <div
                    className={`mx-2 h-px flex-1 ${i < activeSteps - 1 ? "bg-accent" : "bg-black/15"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
