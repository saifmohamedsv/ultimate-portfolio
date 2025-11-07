"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { DATA } from "@/data/resume";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Testimonials() {
  return (
    <div id="testimonials" className="container w-full py-12 md:py-16">
      <div className="py-4">
        <TextGenerateEffect
          words={"Testimonials"}
          textClassName="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl"
        />
        <TextGenerateEffect
          words={`What people say about working with me and my contributions.`}
          textClassName="font-normal text-neutral-700 dark:text-neutral-300 text-sm max-w-sm"
        />
      </div>
      <AnimatedTestimonials testimonials={DATA.testimonials} />
    </div>
  );
}
