"use client";

import { motion } from "framer-motion";

export default function Stagger({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}