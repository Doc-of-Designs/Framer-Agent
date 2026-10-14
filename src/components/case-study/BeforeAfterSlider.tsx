"use client";

import { useRef, useState } from "react";

export default function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  gradient,
}: {
  beforeLabel: string;
  afterLabel: string;
  gradient: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-3xl border border-black/5 bg-neutral-100"
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 bg-[radial-gradient(circle,_#d4d4d4_1px,_transparent_1px)] bg-[length:18px_18px]">
        <span className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-soft shadow">
          {beforeLabel}
        </span>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-ink shadow">
          {afterLabel}
        </span>
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
          <span className="text-xs">↔</span>
        </div>
      </div>
    </div>
  );
}
