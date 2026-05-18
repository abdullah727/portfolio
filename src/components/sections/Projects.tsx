"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-5 md:px-10 bg-[var(--surface)]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Projects" title="Things I've built" />

        <p className="text-sm text-[var(--text-muted)] mb-10 -mt-6 max-w-xl text-center md:text-left mx-auto md:mx-0">
          Some projects were built under NDA or as part of in-house product teams — live URLs are not listed for those.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
