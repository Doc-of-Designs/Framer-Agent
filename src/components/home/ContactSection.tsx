"use client";

import { useState } from "react";
import GradientBackdrop from "@/components/ui/GradientBackdrop";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-10">
      <GradientBackdrop />
      <div className="relative mx-auto grid max-w-5xl gap-12 overflow-hidden rounded-[40px] bg-white/70 p-8 shadow-sm backdrop-blur sm:grid-cols-2 sm:p-14">
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Got Something Worth Shipping?
          </h2>
          <p className="mt-4 text-ink-soft">
            I&apos;m open to full-time roles, contract work, and interesting product
            challenges. Drop me a message, and let&apos;s see how I can help.
          </p>
        </div>

        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field label="Name" placeholder="What should I call you?" />
          <Field label="Email" type="email" placeholder="you@example.com" />
          <Field label="What's this about?" placeholder="New product, redesign, a role..." />
          <div>
            <label className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Tell me about your project, timeline, or idea"
              className="w-full resize-none rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="mt-1 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            {sent ? "Message sent ✓" : "Get in Touch"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white"
      />
    </div>
  );
}
