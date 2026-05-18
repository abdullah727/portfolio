"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { yearsOfExperienceLabel } from "@/lib/constants";

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
          className="h-8 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-lg md:text-xl text-[var(--text-muted)]">
            {displayed}
            <span className="animate-pulse text-[var(--accent)]">|</span>
          </span>
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
            ria-label="Download CV"
            className="group relative inline-block rounded-lg p-[1.5px]"
            style={{ background: "linear-gradient(135deg, #f97316, #a855f7)" }}
          >
            <span className="relative flex items-center gap-2 px-6 py-3 rounded-[7px] bg-[var(--surface)] text-[var(--text)] text-sm font-medium overflow-hidden">
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(168,199,250,0.24) 50%, rgba(168,85,247,0.22) 100%)",
                }}
              />
            <Download size={15} />
           <span className="relative z-10">Download CV</span>
            </span>
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
