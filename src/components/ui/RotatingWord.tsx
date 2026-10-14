"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingWord({
  words,
  className = "",
  classNameByWord,
  intervalMs = 1600,
}: {
  words: string[];
  className?: string;
  classNameByWord?: Record<string, string>;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  const word = words[index];

  return (
    <span className="relative inline-grid place-items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={classNameByWord?.[word] ?? className}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
