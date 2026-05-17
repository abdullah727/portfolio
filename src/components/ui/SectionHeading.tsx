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
      className={cn("mb-12", className)}
    >
      <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-12 bg-[var(--accent)]" />
    </motion.div>
  );
}
