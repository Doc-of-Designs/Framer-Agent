"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Professional, structured, and extremely reliable. The UX thinking behind every component showed maturity.",
    name: "John Samuel",
    role: "Global ICT Rep, DCLM",
  },
  {
    quote:
      "Clear communication, strong design rationale, and scalable solutions. He understands business goals, not just aesthetics. That's rare.",
    name: "Nike Tokan Lawal",
    role: "CEO, Altaria Hub",
  },
  {
    quote:
      "One of the few designers who truly understands visual hierarchy at a deep level. The result was a product that feels premium and performs better.",
    name: "Damilola Odutola",
    role: "CEO, Physicians' Copilot",
  },
  {
    quote:
      "The product designer has an incredible eye for detail and consistently delivers user-friendly interfaces with a modern aesthetic.",
    name: "Temitope Oyadele",
    role: "CEO, TemiStar Coop",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 via-violet-50 to-amber-50" />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl sm:text-4xl">Testimonials</h2>
        <p className="mt-3 text-ink-soft">
          From early-stage startups to scaling SaaS teams, real impact across continents.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === active ? "w-6 bg-ink" : "bg-ink/20"
              }`}
              aria-label={`Show testimonial from ${t.name}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <p className="font-serif text-xl leading-relaxed sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="mt-5 text-sm font-medium">{current.name}</p>
            <p className="text-sm text-ink-soft">{current.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
