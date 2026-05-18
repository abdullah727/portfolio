"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const socials = [
  { href: "https://github.com/abdullah727", icon: GitHubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abdullah-saud-9b8174141/", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://t.me/abdullahsaud", icon: TelegramIcon, label: "Telegram" },
  { href: "https://wa.me/923314124948", icon: WhatsAppIcon, label: "WhatsApp" },
  { href: "mailto:abdullahsaud2010@hotmail.com", icon: Mail, label: "Email" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Contact" title="Let's build something." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-center md:text-left mx-auto md:mx-0"
        >
          <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8">
            I&apos;m currently open to senior frontend or lead engineering roles — remote or
            hybrid anywhere. If you&apos;re building something interesting and want someone
            who cares deeply about quality, I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:abdullahsaud2010@hotmail.com"
            className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors group mb-10 break-all"
          >
            abdullahsaud2010@hotmail.com
            <span className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">→</span>
          </a>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
