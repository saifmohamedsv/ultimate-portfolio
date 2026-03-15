"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ButtonConnect } from "@/components/shared/button-connect";
import { BlogCard } from "@/components/pages/blog/blog-card";
import type { BlogPost } from "@/lib/types/blog";

interface BlogPreviewProps {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) return null;

  return (
    <SectionReveal>
      <section className="container w-full py-20 md:py-32 flex flex-col gap-10">
        <div className="max-w-3xl space-y-3">
          <TextGenerateEffect
            words="Latest Articles"
            textClassName="font-heading text-2xl md:text-4xl font-semibold text-black dark:text-white"
          />
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-xl">
            Thoughts on web development, engineering practices, and lessons
            learned from building products.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              frontmatter={post.frontmatter}
              index={index}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <ButtonConnect href="/blog">Read all articles</ButtonConnect>
        </div>
      </section>
    </SectionReveal>
  );
}
