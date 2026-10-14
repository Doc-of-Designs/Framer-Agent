export default function FlowDiagram({
  heading,
  intro,
  items,
}: {
  heading: string;
  intro: string;
  items: { title: string; body: string }[];
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl">{heading}</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">{intro}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={item.title} className="relative rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
              {i + 1}
            </span>
            <p className="mt-3 font-semibold">{item.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
