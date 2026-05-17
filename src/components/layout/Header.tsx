"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center justify-center w-9 h-9 border border-[var(--border)] rounded-lg text-sm font-semibold font-mono text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          AS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Open to work badge */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to work
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] py-2.5 text-left transition-colors border-b border-[var(--border)] last:border-0"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] pt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </div>
        </nav>
      </div>
    </header>
  );
}
