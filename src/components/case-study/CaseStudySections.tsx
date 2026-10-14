import { CaseStudySection } from "@/lib/types";
import StatGrid from "./StatGrid";
import FlowDiagram from "./FlowDiagram";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function CaseStudySections({
  sections,
  coverGradient,
}: {
  sections: CaseStudySection[];
  coverGradient: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-6">
      <div className="flex flex-col gap-14">
        {sections.map((section, i) => (
          <div key={i}>
            {section.kind === "paragraphs" && (
              <div>
                {section.eyebrow && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    {section.eyebrow}
                  </p>
                )}
                {section.heading && <h2 className="mb-4 font-serif text-3xl">{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4 leading-relaxed text-ink-soft last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {section.kind === "stats" && <StatGrid stats={section.items} />}

            {section.kind === "bullets" && (
              <div className="rounded-3xl bg-accent-soft/15 p-6 sm:p-8">
                {section.heading && <h2 className="font-serif text-2xl">{section.heading}</h2>}
                {section.intro && (
                  <p className="mt-4 leading-relaxed text-ink-soft">{section.intro}</p>
                )}
                <div className="mt-5 space-y-5">
                  {section.groups.map((group, g) => (
                    <div key={g}>
                      {group.heading && (
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                          {group.heading}
                        </p>
                      )}
                      <ul className="space-y-2.5">
                        {group.items.map((item, k) => (
                          <li key={k} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.kind === "flow" && (
              <FlowDiagram heading={section.heading} intro={section.intro} items={section.items} />
            )}

            {section.kind === "iterations" && (
              <div>
                {section.heading && <h2 className="mb-6 font-serif text-3xl">{section.heading}</h2>}
                <div className="space-y-4">
                  {section.items.map((item, j) => (
                    <div key={j} className="rounded-2xl bg-black/[0.03] p-5">
                      <p className="font-semibold">
                        Iteration {j + 1}: {item.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">
                        <span className="font-semibold">Result: </span>
                        {item.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.kind === "beforeAfter" && (
              <div>
                {section.heading && <h2 className="mb-6 font-serif text-2xl">{section.heading}</h2>}
                <BeforeAfterSlider
                  beforeLabel={section.beforeLabel}
                  afterLabel={section.afterLabel}
                  gradient={coverGradient}
                />
              </div>
            )}

            {section.kind === "features" && (
              <div>
                {section.eyebrow && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    {section.eyebrow}
                  </p>
                )}
                <h2 className="font-serif text-3xl">{section.heading}</h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{section.intro}</p>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.kind === "quote" && (
              <blockquote className="border-l-2 border-accent-soft pl-6 font-serif text-2xl leading-snug text-ink">
                &ldquo;{section.text}&rdquo;
              </blockquote>
            )}

            {section.kind === "list" && (
              <div>
                <h2 className="mb-5 font-serif text-2xl">{section.heading}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
