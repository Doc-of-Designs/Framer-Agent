export default function Eyebrow({
  children,
  variant = "outline",
}: {
  children: React.ReactNode;
  variant?: "outline" | "muted";
}) {
  if (variant === "muted") {
    return <p className="text-sm font-medium tracking-wide text-ink-soft">{children}</p>;
  }
  return (
    <span className="inline-flex items-center rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-soft">
      {children}
    </span>
  );
}
