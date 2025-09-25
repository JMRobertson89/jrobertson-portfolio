"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = [
  "Developer",
  "Problem Solver",
  "Innovator",
];

export default function RotatingWord({ interval = 2500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, interval);
    return () => clearInterval(t);
  }, [interval]);

  return (
      <div className="relative h-[1.2em] md:h-[1.4em] mt-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {WORDS[index].toUpperCase()}
          </motion.span>
        </AnimatePresence>
      </div>

  );
}