import type { ArtworkVariant } from "@/components/Artwork";
import { projectDetails } from "@/data/project-details";

export interface WorksIndexProject {
  name: string;
  title: string;
  href: string;
  artwork: ArtworkVariant;
  tone: "gold" | "blue" | "green" | "rose";
  artworkLabel: string;
}

export interface WorksIndexData {
  label: string;
  title: string;
  introduction: string;
  projects: readonly WorksIndexProject[];
}

export const worksIndexData: WorksIndexData = {
  label: "Project system",
  title: "Concept demos",
  introduction: "Six temporary concept/demo entries preserving the project architecture until Moiz's real projects are provided.",
  projects: projectDetails.map((project) => ({
    name: project.name,
    title: project.title,
    href: `/works/${project.slug}`,
    artwork: project.artwork,
    tone: project.tone,
    artworkLabel: project.mediaLabels[0],
  })),
};
