"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RotatingWord from "@/components/ui/RotatingWord";

const CIRCLE_TEXT = "* I AM AVAILABLE * FOR WORK * I AM AVAILABLE * FOR WORK ";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-dark px-6 pb-10 pt-24 text-white sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Let&apos;s{" "}
            <RotatingWord
              words={["Build", "Ship", "Design", "Craft"]}
              className="text-accent-soft"
            />
            <br />
            <span className="text-white/40">incredible work together.</span>
          </h2>

          <a
            href="mailto:docofdesigns@gmail.com"
            aria-label="Available for work — email me"
            className="relative flex h-32 w-32 shrink-0 items-center justify-center"
          >
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
            >
              <defs>
                <path id="circlePath" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text fill="white" fontSize="10" letterSpacing="2">
                <textPath href="#circlePath">{CIRCLE_TEXT}</textPath>
              </text>
            </motion.svg>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-lg">
              ✉️
            </span>
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center">
          <a
            href="https://www.linkedin.com/in/john-olukitibi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Linkedin ↗
          </a>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white">
              Home ↗
            </Link>
            <Link href="/work" className="hover:text-white">
              Work ↗
            </Link>
            <Link href="/about" className="hover:text-white">
              About ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
