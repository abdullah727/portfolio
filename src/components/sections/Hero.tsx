"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

const ROLES = ["Senior Frontend Engineer", "React & Next.js Specialist", "UI Performance Expert"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-10 dot-grid overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl w-full text-center"
      >
        {/* Availability */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[var(--text)] mb-5"
        >
          Abdullah Saud
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={item}
          className="h-8 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-lg md:text-xl text-[var(--accent)]">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          8+ years building fast, scalable web products — from startup MVPs to
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
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-blue-400 transition-colors"
          >
            View Work
          </a>
          <a
            href="mailto:abdullahsaud2010@hotmail.com"
            className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text-muted)] text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {[
            { href: "https://github.com/abdullah727", icon: GitHubIcon, label: "GitHub" },
            { href: "https://www.linkedin.com/in/abdullah-saud-9b8174141/", icon: LinkedInIcon, label: "LinkedIn" },
            { href: "mailto:abdullahsaud2010@hotmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
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
        transition={{ delay: 1.6, duration: 0.6 }}
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
