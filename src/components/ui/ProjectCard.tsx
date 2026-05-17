"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const prev = () => setImageIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setImageIndex((i) => (i + 1) % project.images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className={cn(
        "group flex flex-col rounded-xl overflow-hidden",
        "bg-[var(--surface)] border border-[var(--border)]",
        "hover:border-[var(--accent)] transition-all duration-300",
        "hover:shadow-[0_0_24px_var(--accent-dim)]"
      )}
    >
      {/* Image carousel */}
      <div className="relative w-full aspect-[16/9] bg-[var(--surface-2)] overflow-hidden">
        <Image
          src={project.images[imageIndex]}
          alt={`${project.name} screenshot ${imageIndex + 1}`}
          fill
          className="object-cover object-top transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Carousel controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-10 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-10 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  aria-label={`Screenshot ${i + 1}`}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-200",
                    i === imageIndex ? "bg-white w-3" : "bg-white/40"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-[var(--text)] leading-tight">{project.name}</h3>
          <div className="flex items-center gap-2 shrink-0 mt-0.5">
            {project.nda ? (
              <span
                title="Built under NDA or as part of an in-house product team — URL not publicly available"
                className="flex items-center gap-1 text-[10px] font-mono text-[var(--text-dim)] border border-[var(--border)] rounded px-1.5 py-0.5"
              >
                <Lock size={10} />
                NDA
              </span>
            ) : (
              <>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-colors"
                  >
                    <GitHubIcon size={15} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.stack.slice(0, 5).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {project.stack.length > 5 && (
            <span className="text-xs text-[var(--text-dim)] self-center">
              +{project.stack.length - 5} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
