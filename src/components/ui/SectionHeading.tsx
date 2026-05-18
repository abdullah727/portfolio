"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("mb-14 text-center md:text-left", className)}
    >
      <span className="font-mono text-xs tracking-[0.3em] uppercase mb-4 block text-[var(--accent-secondary)]">
        — {label}
      </span>
      <h2
        className="text-[var(--text)] font-bold tracking-tight leading-[1.05]"
        style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
