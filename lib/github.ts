import type { GitHubRepo } from "./types/github";

export async function getGitHubRepos(
  username: string
): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
}
