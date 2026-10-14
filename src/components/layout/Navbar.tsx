"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[94vw] max-w-fit -translate-x-1/2 sm:top-6">
      <nav className="flex items-center gap-0.5 rounded-full border border-black/5 bg-white/80 px-1.5 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:gap-1 sm:px-2 sm:py-2">
        <Link
          href="/"
          className="relative mr-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink sm:mr-1 sm:h-9 sm:w-9"
        >
          <span className="text-xs font-semibold text-white">PD</span>
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
        </Link>

        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative shrink-0 rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm"
            >
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-black/[0.06]"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className={`relative z-10 ${active ? "text-accent" : "text-ink-soft"}`}>
                {link.label}
              </span>
            </Link>
          );
        })}

        <Link
          href="/#contact"
          className="ml-0.5 flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-2.5 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:ml-1 sm:px-4 sm:py-2 sm:text-sm"
        >
          <span aria-hidden>✉️</span>
          <span className="hidden sm:inline">Let&apos;s talk</span>
        </Link>
      </nav>
    </header>
  );
}
