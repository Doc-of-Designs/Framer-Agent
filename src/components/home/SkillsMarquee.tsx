const skills = [
  "Product Strategy",
  "UI / UX Design",
  "User Research",
  "Prototyping",
  "Typography",
  "A/B Testing",
  "Design Thinking",
];

export default function SkillsMarquee() {
  return (
    <section className="overflow-hidden border-y border-black/5 bg-paper py-6">
      <div className="flex w-max animate-marquee gap-4">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-white px-5 py-2.5 font-serif text-lg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
