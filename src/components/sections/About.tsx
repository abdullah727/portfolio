"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "5", label: "Companies" },
  { value: "6+", label: "Products Shipped" },
  { value: "40%", label: "Perf. Improvement" },
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
            I&apos;m a Senior Frontend Engineer with 8+ years of experience building
            high-performance, scalable web applications. I&apos;ve worked across startups
            and enterprise teams in Finland, Singapore, and Pakistan — shipping products
            that real users depend on every day.
          </p>
          <p>
            My focus is on the intersection of engineering quality and product impact.
            I specialize in React and Next.js, with deep experience in UI performance
            optimization, complex state management, and translating intricate designs
            into pixel-perfect, accessible interfaces.
          </p>
          <p>
            Beyond code, I care about team culture — I mentor junior engineers, establish
            architecture standards, and collaborate closely with Product and Design to make
            sure we&apos;re always building the right thing, the right way.
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
