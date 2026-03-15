"use client";

import type { ResumeData } from "@/lib/resume-data";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

interface CareerTimelineProps {
  data: ResumeData;
}

export function CareerTimeline({ data }: CareerTimelineProps) {
  const timelineData = data.work.map((job) => ({
    title: `${job.start} — ${job.end}`,
    content: (
      <div className="space-y-3 pb-8">
        <div className="flex items-center gap-3">
          {job.logoUrl && (
            <Image
              src={job.logoUrl}
              alt={job.company}
              width={36}
              height={36}
              className="rounded-lg"
            />
          )}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {job.title}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {job.company} · {job.location}
            </p>
          </div>
        </div>
        {job.badges?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {job.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {job.description}
        </p>
      </div>
    ),
  }));

  return (
    <div className="mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white font-heading mb-4">
        Career Journey
      </h2>
      <Timeline data={timelineData} />
    </div>
  );
}
