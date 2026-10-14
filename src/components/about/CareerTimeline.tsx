const timeline = [
  {
    period: "Present",
    role: "Product Designer",
    company: "RUACH LABS",
    body: "Designing AI-powered products for a more connected world.",
  },
  {
    period: "Present",
    role: "Product Designer",
    company: "AEVOTECH",
    body: "Designed end-to-end user experiences for multiple products.",
  },
  {
    period: "2024",
    role: "UI/UX Designer",
    company: "PHYSICIANS' COPILOT",
    body: "Led end-to-end design and product decisions for a healthtech platform across mobile and web.",
  },
  {
    period: "2023",
    role: "UI/UX Designer",
    company: "OLYMPUS STUDIOS",
    body: "Built designed digital experiences across web and mobile.",
  },
];

export default function CareerTimeline() {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-surface-dark px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 font-serif text-3xl">My Journey</h2>
        <div className="relative space-y-10 border-l border-white/15 pl-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-surface-dark bg-accent-soft" />
              <p className="font-serif text-2xl text-white/40">{item.period}</p>
              <div className="mt-2 rounded-2xl bg-white/[0.06] p-5">
                <p className="font-serif text-lg">{item.role}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-soft">
                  {item.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
              </div>
            </div>
          ))}
          <p className="pt-2 font-serif text-2xl text-white/40">2022</p>
        </div>
      </div>
    </section>
  );
}
