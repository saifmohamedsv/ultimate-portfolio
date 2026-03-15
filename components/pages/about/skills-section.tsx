"use client";

import { motion } from "motion/react";

const SKILL_CATEGORIES: Record<string, string[]> = {
  Frontend: ["HTML", "CSS", "React.js", "Next.js", "TailwindCSS", "Shadcn UI", "Magic UI"],
  Mobile: ["React Native", "Expo"],
  Backend: ["Node.js", "Python"],
  "Tools & Services": ["Typescript", "Stripe", "Docker"],
};

interface SkillsSectionProps {
  skills: string[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const categorized = Object.entries(SKILL_CATEGORIES).map(
    ([category, categorySkills]) => ({
      category,
      skills: categorySkills.filter((s) =>
        skills.some((sk) => sk.toLowerCase() === s.toLowerCase())
      ),
    })
  );

  // Skills that don't match any category
  const categorizedSkillNames = Object.values(SKILL_CATEGORIES)
    .flat()
    .map((s) => s.toLowerCase());
  const uncategorized = skills.filter(
    (s) => !categorizedSkillNames.includes(s.toLowerCase())
  );

  if (uncategorized.length > 0) {
    categorized.push({ category: "Other", skills: uncategorized });
  }

  return (
    <div className="mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white font-heading mb-8">
        Skills & Technologies
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {categorized
          .filter((c) => c.skills.length > 0)
          .map((group, groupIndex) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="rounded-full bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
