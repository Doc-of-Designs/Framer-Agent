"use client";

import { useEffect, useRef, useState } from "react";
import {
  Pencil,
  Eraser,
  MousePointer2,
  Undo2,
  Redo2,
  Trash2,
  Copy,
  Type,
  PaintBucket,
  Diamond,
} from "lucide-react";

type Point = { x: number; y: number };

type Shape =
  | { kind: "stroke"; tool: "pencil" | "eraser"; color: string; size: number; points: Point[] }
  | { kind: "rect"; color: string; filled: boolean; x: number; y: number; w: number; h: number }
  | { kind: "text"; color: string; x: number; y: number; text: string };

type Tool = "select" | "pencil" | "eraser" | "shape" | "text";

const COLORS = [
  "#ef4444",
  "#dc2626",
  "#991b1b",
  "#7c3aed",
  "#4338ca",
  "#2563eb",
  "#0ea5e9",
  "#22c55e",
  "#a3e635",
  "#facc15",
  "#f97316",
  "#ea580c",
];

export default function DoodleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tool, setTool] = useState<Tool>("pencil");
  const [color, setColor] = useState("#16161a");
  const [filled, setFilled] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [redoStack, setRedoStack] = useState<Shape[]>([]);
  const [textDraft, setTextDraft] = useState<{ x: number; y: number; value: string } | null>(null);
  const drawing = useRef(false);
  const current = useRef<Shape | null>(null);

  const drawShape = (ctx: CanvasRenderingContext2D, shape: Shape) => {
    if (shape.kind === "stroke") {
      if (shape.points.length < 2) return;
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = shape.size;
      ctx.strokeStyle = shape.tool === "eraser" ? "#faf9f5" : shape.color;
      ctx.moveTo(shape.points[0].x, shape.points[0].y);
      for (const point of shape.points.slice(1)) ctx.lineTo(point.x, point.y);
      ctx.stroke();
    } else if (shape.kind === "rect") {
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = shape.color;
      ctx.fillStyle = shape.color;
      if (shape.filled) ctx.fillRect(shape.x, shape.y, shape.w, shape.h);
      else ctx.strokeRect(shape.x, shape.y, shape.w, shape.h);
    } else if (shape.kind === "text") {
      const handFont = getComputedStyle(document.documentElement).getPropertyValue("--font-hand");
      ctx.fillStyle = shape.color;
      ctx.font = `20px ${handFont || "cursive"}, cursive`;
      ctx.fillText(shape.text, shape.x, shape.y);
    }
  };

  const redraw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const shape of shapes) drawShape(ctx, shape);
  };

  useEffect(() => {
    redraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shapes]);

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      redraw();
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPoint = (e: React.PointerEvent): Point => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const commit = (shape: Shape) => {
    setRedoStack([]);
    setShapes((prev) => [...prev, shape]);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const point = getPoint(e);

    if (tool === "text") {
      setTextDraft({ x: point.x, y: point.y, value: "" });
      return;
    }

    if (tool === "select") return;

    drawing.current = true;
    setRedoStack([]);

    if (tool === "shape") {
      current.current = { kind: "rect", color, filled, x: point.x, y: point.y, w: 0, h: 0 };
    } else {
      current.current = {
        kind: "stroke",
        tool,
        color,
        size: tool === "eraser" ? 18 : 3,
        points: [point],
      };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drawing.current || !current.current) return;
    const point = getPoint(e);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    if (current.current.kind === "rect") {
      current.current.w = point.x - current.current.x;
      current.current.h = point.y - current.current.y;
    } else if (current.current.kind === "stroke") {
      current.current.points.push(point);
    }

    redraw();
    drawShape(ctx, current.current);
  };

  const onPointerUp = () => {
    if (!drawing.current || !current.current) return;
    drawing.current = false;
    const finished = current.current;
    current.current = null;
    setShapes((prev) => [...prev, finished]);
  };

  const undo = () => {
    setShapes((prev) => {
      if (prev.length === 0) return prev;
      const next = prev.slice(0, -1);
      setRedoStack((r) => [...r, prev[prev.length - 1]]);
      return next;
    });
  };

  const redo = () => {
    setRedoStack((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      setShapes((s) => [...s, last]);
      return prev.slice(0, -1);
    });
  };

  const duplicateLast = () => {
    setShapes((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      let clone: Shape;
      if (last.kind === "stroke") {
        clone = { ...last, points: last.points.map((p) => ({ x: p.x + 16, y: p.y + 16 })) };
      } else if (last.kind === "rect") {
        clone = { ...last, x: last.x + 16, y: last.y + 16 };
      } else {
        clone = { ...last, x: last.x + 16, y: last.y + 16 };
      }
      return [...prev, clone];
    });
    setRedoStack([]);
  };

  const clearAll = () => {
    setShapes([]);
    setRedoStack([]);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[420px] w-full overflow-hidden rounded-[32px] border border-black/5 bg-[radial-gradient(circle,_#e5e2db_1px,_transparent_1px)] bg-[length:22px_22px] bg-paper shadow-sm sm:h-[480px]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none"
        style={{
          cursor:
            tool === "pencil" || tool === "shape"
              ? "crosshair"
              : tool === "eraser"
                ? "cell"
                : tool === "text"
                  ? "text"
                  : "default",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      />

      {textDraft && (
        <input
          autoFocus
          value={textDraft.value}
          placeholder="Type a note…"
          onChange={(e) => setTextDraft({ ...textDraft, value: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (textDraft.value.trim()) {
                commit({ kind: "text", color, x: textDraft.x, y: textDraft.y, text: textDraft.value.trim() });
              }
              setTextDraft(null);
            } else if (e.key === "Escape") {
              setTextDraft(null);
            }
          }}
          onBlur={() => {
            if (textDraft.value.trim()) {
              commit({ kind: "text", color, x: textDraft.x, y: textDraft.y, text: textDraft.value.trim() });
            }
            setTextDraft(null);
          }}
          className="font-hand absolute z-10 -translate-y-full rounded border border-ink/20 bg-white/95 px-2 py-0.5 text-lg outline-none"
          style={{ left: textDraft.x, top: textDraft.y, color }}
        />
      )}

      <div className="absolute left-1/2 top-4 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/90 px-2 py-1.5 shadow-md backdrop-blur">
          <ToolButton active={tool === "select"} onClick={() => setTool("select")} label="Select">
            <MousePointer2 size={16} />
          </ToolButton>
          <ToolButton active={tool === "pencil"} onClick={() => setTool("pencil")} label="Pencil">
            <Pencil size={16} />
          </ToolButton>
          <ToolButton active={tool === "eraser"} onClick={() => setTool("eraser")} label="Eraser">
            <Eraser size={16} />
          </ToolButton>
          <ToolButton active={tool === "shape"} onClick={() => setTool("shape")} label="Shape">
            <Diamond size={16} />
          </ToolButton>
          <ToolButton onClick={duplicateLast} disabled={shapes.length === 0} label="Duplicate">
            <Copy size={16} />
          </ToolButton>
          <ToolButton active={tool === "text"} onClick={() => setTool("text")} label="Text">
            <Type size={16} />
          </ToolButton>
          <ToolButton active={filled} onClick={() => setFilled((v) => !v)} label="Toggle fill">
            <PaintBucket size={16} />
          </ToolButton>
          <button
            type="button"
            onClick={() => setShowPalette((v) => !v)}
            className="h-6 w-6 rounded-full border border-black/10"
            style={{ backgroundColor: color }}
            aria-label="Choose color"
          />
          <div className="mx-1 h-5 w-px bg-black/10" />
          <ToolButton onClick={undo} disabled={shapes.length === 0} label="Undo">
            <Undo2 size={16} />
          </ToolButton>
          <ToolButton onClick={redo} disabled={redoStack.length === 0} label="Redo">
            <Redo2 size={16} />
          </ToolButton>
          <ToolButton onClick={clearAll} disabled={shapes.length === 0} label="Clear">
            <Trash2 size={16} />
          </ToolButton>
        </div>

        {showPalette && (
          <div className="flex items-center gap-1.5 rounded-full border border-black/5 bg-white/90 px-3 py-2 shadow-md backdrop-blur">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setColor(c);
                  setShowPalette(false);
                  if (tool === "select" || tool === "eraser") setTool("pencil");
                }}
                className="h-5 w-5 rounded-md ring-offset-2 transition hover:scale-110"
                style={{ backgroundColor: c, outline: color === c ? "2px solid #16161a" : "none" }}
                aria-label={`Color ${c}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ToolButton({
  children,
  active,
  disabled,
  onClick,
  label,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
        active ? "bg-ink text-white" : "text-ink-soft hover:bg-black/5"
      } ${disabled ? "opacity-30" : ""}`}
    >
      {children}
    </button>
  );
}
