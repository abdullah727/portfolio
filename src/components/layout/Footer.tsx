"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-5 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--text-dim)] font-mono">
          © {new Date().getFullYear()} Abdullah Saud
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors font-mono"
        >
          Back to top <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
