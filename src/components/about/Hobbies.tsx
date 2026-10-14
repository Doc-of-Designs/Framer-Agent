const hobbies = ["Fitness", "Designing", "Traveling", "Music", "Learning", "Trekking"];

export default function Hobbies() {
  return (
    <section className="px-6 py-20 text-center sm:px-10">
      <h2 className="font-serif text-3xl">My Hobbies</h2>
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-ink-soft"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}
