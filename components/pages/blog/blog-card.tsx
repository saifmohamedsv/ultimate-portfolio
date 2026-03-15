"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { BlogFrontmatter } from "@/lib/types/blog";

interface BlogCardProps {
  slug: string;
  frontmatter: BlogFrontmatter;
  index: number;
}

export function BlogCard({ slug, frontmatter, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-shadow"
    >
      <Link href={`/blog/${slug}`} className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col gap-3 px-5 py-5 md:px-6 md:py-6">
          <div className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
            {frontmatter.title}
          </h3>

          <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
            {frontmatter.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 text-[11px] text-neutral-600 dark:text-neutral-400 border border-neutral-200/70 dark:border-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
