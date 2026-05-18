"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { yearsOfExperienceLabel } from "@/lib/constants";

const PILLARS = [
  "Frontend Engineering",
  "React & Next.js",
  "UI Performance",
];

export function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-10 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl w-full text-center pt-24 pb-16"
      >

        {/* Big brand name — hanenko-style centerpiece */}
        <motion.h1
          variants={item}
          className="text-[var(--text)] font-bold tracking-tight leading-[0.95] mb-8"
          style={{
            fontSize: "clamp(3rem, 12vw, 6rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Abdullah<span className="text-[var(--accent-secondary)]">.</span>
          <br className="sm:hidden" />
          <span className="sm:ml-4">Saud</span>
        </motion.h1>

        {/* Three service pillars */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-sm md:text-base font-mono uppercase tracking-widest text-[var(--text-muted)]"
        >
          {PILLARS.map((p, i) => (
            <span key={p} className="flex items-center gap-6">
              {i > 0 && (
                <span className="text-[var(--text-dim)] hidden sm:inline">·</span>
              )}
              {p}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {yearsOfExperienceLabel} years building fast, scalable web products — from startup MVPs to
          enterprise platforms used by millions. I bridge the gap between great
          design and production-grade engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-[var(--bg)] text-sm font-medium transition-opacity hover:opacity-85"
          >
            View Work
          </a>
          <a
            href="/cv.pdf"
            download
            className="gradient-border inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] text-sm font-medium transition-colors"
          >
            <Download size={15} />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {[
            { href: "https://github.com/abdullah727", icon: GitHubIcon, label: "GitHub" },
            { href: "https://www.linkedin.com/in/abdullah-saud-9b8174141/", icon: LinkedInIcon, label: "LinkedIn" },
            { href: "https://t.me/abdullahsaud", icon: TelegramIcon, label: "Telegram" },
            { href: "https://wa.me/923314124948", icon: WhatsAppIcon, label: "WhatsApp" },
            { href: "mailto:abdullahsaud2010@hotmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text)] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-dim)]"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
