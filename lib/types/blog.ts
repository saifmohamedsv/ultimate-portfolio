export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}
