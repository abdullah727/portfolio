"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-28 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Projects" title="Selected work." />

        <p className="text-sm text-[var(--text-muted)] mb-12 -mt-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
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
