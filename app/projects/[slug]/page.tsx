import { getResumeData } from "@/lib/resume-data";
import { CaseStudy } from "@/components/pages/projects/case-study";
import { ButtonConnect } from "@/components/shared/button-connect";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = await getResumeData();
  return data.projects
    .filter((p) => p.slug && p.caseStudy)
    .map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getResumeData();
  const project = data.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const data = await getResumeData();
  const project = data.projects.find((p) => p.slug === slug && p.caseStudy);

  if (!project || !project.caseStudy) notFound();

  return (
    <div className="min-h-screen w-full pt-8 pb-24">
      <section className="container max-w-4xl">
        <CaseStudy project={{ ...project, caseStudy: project.caseStudy! }} />
        <div className="mt-16 flex justify-center gap-4">
          <ButtonConnect href="/projects">All projects</ButtonConnect>
          <ButtonConnect href="/">Back to home</ButtonConnect>
        </div>
      </section>
    </div>
  );
}
