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
      className={cn("mb-12 text-center md:text-left", className)}
    >
      <span className="font-mono text-xs tracking-widest uppercase mb-3 block gradient-text">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] tracking-tight">
        {title}
      </h2>
      <div
        className="mt-4 h-0.5 w-12 rounded-full mx-auto md:mx-0"
        style={{ background: "var(--gradient)" }}
      />
    </motion.div>
  );
}
