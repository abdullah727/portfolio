"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-5 md:px-10 bg-[var(--surface)]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Experience" title="Where I've worked" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--border)] hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-[var(--accent)] -translate-x-1/2 hidden sm:block ring-4 ring-[var(--bg)] ring-offset-0" />

                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 sm:p-6 hover:border-[var(--border-hover)] transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-[var(--text)]">{item.role}</h3>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--accent)] hover:underline flex items-center gap-1"
                          >
                            {item.company}
                            <ExternalLink size={11} />
                          </a>
                        ) : (
                          <span className="text-sm text-[var(--accent)]">{item.company}</span>
                        )}
                        <span className="text-[var(--text-dim)] text-xs">·</span>
                        <span className="text-xs text-[var(--text-muted)]">{item.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-dim)] whitespace-nowrap border border-[var(--border)] rounded-full px-3 py-1 self-start">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed">
                        <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
