"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "motion/react";
import type { GitHubRepo } from "@/lib/types/github";
import { IconStar, IconExternalLink } from "@tabler/icons-react";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
};

interface GitHubActivityProps {
  repos: GitHubRepo[];
}

export function GitHubActivity({ repos }: GitHubActivityProps) {
  if (repos.length === 0) return null;

  return (
    <SectionReveal>
      <section className="container w-full py-20 md:py-32 flex flex-col gap-10">
        <div className="max-w-3xl space-y-3">
          <TextGenerateEffect
            words="Open Source & GitHub"
            textClassName="font-heading text-2xl md:text-4xl font-semibold text-black dark:text-white"
          />
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-xl">
            Recent repositories and open source contributions.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col gap-3 rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 p-5 backdrop-blur-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-primary transition-colors truncate">
                  {repo.name}
                </h3>
                <IconExternalLink className="w-4 h-4 shrink-0 text-neutral-400 group-hover:text-primary transition-colors" />
              </div>

              {repo.description && (
                <p className="line-clamp-2 text-xs text-neutral-600 dark:text-neutral-400">
                  {repo.description}
                </p>
              )}

              <div className="mt-auto flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          LANGUAGE_COLORS[repo.language] ?? "#8b8b8b",
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-0.5">
                    <IconStar className="w-3.5 h-3.5" />
                    {repo.stargazers_count}
                  </span>
                )}
              </div>

              {repo.topics?.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
