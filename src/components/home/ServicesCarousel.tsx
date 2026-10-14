"use client";

import { useEffect, useRef, useState } from "react";
import {
  Fingerprint,
  Lightbulb,
  Link2,
  Pencil,
  Sparkles,
  Palette,
  Share2,
  Wand2,
} from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";

const services = [
  { icon: Fingerprint, title: "UI/UX Design", body: "End-to-end interface design from wireframes to polished visual designs, grounded in user research and usability best practices." },
  { icon: Lightbulb, title: "Product Design", body: "Strategic product thinking that aligns business goals with user needs. I design products people want to use, from concept to launch." },
  { icon: Link2, title: "Design Systems", body: "Scalable component libraries and design tokens that ensure consistency across products and accelerate your team's workflow." },
  { icon: Pencil, title: "Prototyping", body: "Interactive, high-fidelity prototypes that communicate design intent clearly and enable rapid validation with real users." },
  { icon: Sparkles, title: "User Research", body: "Qualitative and quantitative research methods including interviews, surveys, usability testing, and data analysis." },
  { icon: Palette, title: "Brand Identity", body: "Visual identity systems that capture your brand's essence — from logos and typography to comprehensive brand guidelines." },
  { icon: Share2, title: "Website Design", body: "Responsive, conversion-focused websites designed and built using modern tools like Framer." },
  { icon: Wand2, title: "Micro-interactions", body: "Thoughtful animations and micro-interactions that make digital experiences feel intuitive, engaging, and alive." },
];

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const middle = rect.left + rect.width / 2;
      let closest = 0;
      let min = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - middle);
        if (dist < min) {
          min = dist;
          closest = i;
        }
      });
      setCenter(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative py-24">
      <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
        <Eyebrow variant="muted">What I Do</Eyebrow>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
          Services I offer to bring your vision to life.
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[20vw] pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ perspective: "1400px" }}
      >
        {services.map((service, i) => {
          const distance = i - center;
          const rotateY = Math.max(-45, Math.min(45, distance * -22));
          const scale = 1 - Math.min(Math.abs(distance) * 0.08, 0.3);
          const translateZ = -Math.abs(distance) * 40;
          const opacity = 1 - Math.min(Math.abs(distance) * 0.18, 0.65);
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="flex w-[260px] shrink-0 snap-center flex-col justify-between rounded-3xl bg-ink p-6 text-white transition-[transform,opacity] duration-150"
              style={{
                transform: `rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
                opacity,
              }}
            >
              <span className="relative flex h-9 w-9 items-center justify-center">
                <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-accent-soft/60" />
                <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-accent-soft/60" />
                <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-accent-soft/60" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-accent-soft/60" />
                <Icon size={16} className="text-accent-soft" />
              </span>
              <div>
                <h3 className="mt-6 font-serif text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{service.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
