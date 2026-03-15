"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import Image from "next/image";

interface CaseStudyProject {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  caseStudy: {
    heroImage: string;
    problem: string;
    solution: string;
    outcome: string;
    techDetails: string[];
  };
}

interface CaseStudyProps {
  project: CaseStudyProject;
}

export function CaseStudy({ project }: CaseStudyProps) {
  const { caseStudy } = project;

  return (
    <div className="pt-10 md:pt-20">
      <SectionReveal>
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white font-heading">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
            {project.description}
          </p>
        </header>
      </SectionReveal>

      {caseStudy.heroImage && (
        <SectionReveal delay={0.1}>
          <div className="relative mt-10 h-64 md:h-96 overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800">
            <Image
              src={caseStudy.heroImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </SectionReveal>
      )}

      <div className="mt-12 space-y-12">
        <SectionReveal delay={0.2}>
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white font-heading">
              The Problem
            </h2>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white font-heading">
              The Solution
            </h2>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white font-heading">
              The Outcome
            </h2>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.outcome}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.5}>
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white font-heading">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techDetails.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
