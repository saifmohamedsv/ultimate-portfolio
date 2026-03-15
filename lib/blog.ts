import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost } from "./types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const frontmatter = data as BlogFrontmatter;

      if (!frontmatter.published) return null;

      return { slug, frontmatter, content };
    })
    .filter(Boolean) as BlogPost[];

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return { slug, frontmatter: data as BlogFrontmatter, content };
}

export function getLatestPosts(n: number): BlogPost[] {
  return getBlogPosts().slice(0, n);
}
