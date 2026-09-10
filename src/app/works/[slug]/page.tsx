import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage as PortfolioProjectPage } from "@/components/PortfolioPages";
import { getPortfolioProject, portfolioProfile } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioProfile.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getPortfolioProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getPortfolioProject((await params).slug);
  if (!project) notFound();
  return <PortfolioProjectPage project={project} />;
}
