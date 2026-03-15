"use client";

import type { ResumeData } from "@/lib/resume-data";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SectionReveal } from "@/components/ui/section-reveal";
import Image from "next/image";

interface AboutHeroProps {
  data: ResumeData;
}

export function AboutHero({ data }: AboutHeroProps) {
  return (
    <SectionReveal>
      <div className="pt-10 md:pt-20 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="shrink-0">
          <Image
            src={data.avatarUrl}
            alt={data.name}
            width={160}
            height={160}
            className="rounded-full border-4 border-neutral-200 dark:border-neutral-800 shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
            About me
          </p>
          <TextGenerateEffect
            words={data.name}
            textClassName="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white"
          />
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
            {data.description}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            {data.summary}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{data.location}</span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
