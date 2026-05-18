"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-28 px-5 md:px-10 bg-[var(--surface-2)]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Skills" title="What I work with." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="gradient-border bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-colors"
            >
              <h3 className="text-xs font-mono text-[var(--accent-secondary)] tracking-[0.25em] uppercase mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
