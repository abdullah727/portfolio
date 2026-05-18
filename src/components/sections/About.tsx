"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { yearsOfExperienceLabel } from "@/lib/constants";

const stats = [
  { value: yearsOfExperienceLabel, label: "Years Experience" },
  { value: "5", label: "Companies" },
  { value: "6+", label: "Products Shipped" },
  { value: "90+", label: "Lighthouse Score" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-5 md:px-10 max-w-6xl mx-auto">
      <SectionHeading label="About" title="Who I am." />

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5 text-[var(--text-muted)] text-base md:text-lg leading-relaxed text-center md:text-left"
        >
          <p className="text-[var(--text)] text-lg md:text-xl font-medium leading-snug">
            Senior Frontend Engineer who enjoys turning complex problems into simple, elegant interfaces.
          </p>
          <p>
            {yearsOfExperienceLabel} years shipping high-performance, scalable web apps across startups and enterprise teams
            in Finland, Singapore, USA, Saudi Arabia, and Pakistan.
          </p>
          <p>
            I specialize in React and Next.js, with deep experience in performance optimization, complex state management,
            and translating designs into pixel-perfect, accessible interfaces.
          </p>
          <p>
            I take ownership end to end, from planning and implementation to
            deployment and post-deployment analysis. Not just closing tickets,
            but seeing features through and making sure they deliver real value
            after release. To work efficiently without compromising quality, I
            actively use AI tools like Cursor and Claude to reduce busywork and
            stay focused on the decisions that matter — building reliable
            solutions, moving faster, and shipping with confidence.
          </p>
          <p className="text-sm font-mono text-[var(--text-dim)] pt-2">
            Based in Lahore, Pakistan · Available remote worldwide.
          </p>
        </motion.div>

        {/* Photo + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-6 items-center md:items-start"
        >
          <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)]">
            <Image
              src="/profile.jpg"
              alt="Abdullah Saud"
              fill
              className="object-cover object-center"
              sizes="280px"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="gradient-border bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-[var(--text)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
