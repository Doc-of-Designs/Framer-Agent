export default function GradientBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-300 via-indigo-300 to-purple-200 opacity-70 blur-3xl" />
      <div className="absolute -bottom-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-pink-200 via-rose-100 to-amber-100 opacity-70 blur-3xl" />
    </div>
  );
}
