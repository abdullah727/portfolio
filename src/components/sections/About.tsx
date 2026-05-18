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
    <section id="about" className="py-24 px-5 md:px-10 max-w-6xl mx-auto">
      <SectionHeading label="About" title="Who I am" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5 text-[var(--text-muted)] text-base leading-relaxed"
        >
          <p>
            Senior Frontend Engineer with {yearsOfExperienceLabel} years shipping high-performance, scalable web apps across
            startups and enterprise teams in Finland, Singapore, USA, Saudi Arabia, and Pakistan.
          </p>
          <p>
            I specialize in React and Next.js, deep experience in performance optimization, complex state management, and
            translating designs into pixel-perfect, accessible interfaces.
          </p>
          <p>
            I take ownership end to end — from planning and implementation to deployment
            and post-deployment analysis. Not just closing tickets, but seeing features through.
          </p>
          <p>
            I also move fast on purpose. Using AI tools like Cursor and Claude, I cut busywork
            and stay focused on decisions that matter — quality code, shipped with confidence.
          </p>
          <p>
            Based in Lahore, Pakistan · Available for remote roles across all timezones.
          </p>
        </motion.div>

        {/* Photo + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Profile photo */}
          <div className="relative w-52 h-64 rounded-2xl overflow-hidden border border-[var(--border)] mx-auto md:mx-0">
            <Image
              src="/profile.jpg"
              alt="Abdullah Saud"
              fill
              className="object-cover object-center"
              sizes="208px"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4"
              >
                <div className="text-2xl font-semibold text-[var(--accent)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
