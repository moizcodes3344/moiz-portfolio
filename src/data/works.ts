import type { ArtworkVariant } from "@/components/Artwork";
import { projectDetails } from "@/data/project-details";

export interface WorkConcept {
  name: string;
  title: string;
  discipline: string;
  year: string;
  focus: string;
  description: string;
  artwork: ArtworkVariant;
  tone: "gold" | "blue" | "green" | "rose";
  artworkLabel: string;
}

export interface WorksData {
  heading: string;
  label: string;
  selectionLabel: string;
  allConcepts: string;
  viewConcept: string;
  closePreview: string;
  previewLabel: string;
  yearLabel: string;
  disciplineLabel: string;
  focusLabel: string;
  projects: readonly WorkConcept[];
}

export const worksData: WorksData = {
  heading: "WORK",
  label: "Temporary project demos",
  selectionLabel: "Select a demo",
  allConcepts: "All project demos",
  viewConcept: "View demo project",
  closePreview: "Close preview",
  previewLabel: "Temporary concept/demo project",
  yearLabel: "Status",
  disciplineLabel: "Area",
  focusLabel: "Focus",
  projects: projectDetails.slice(0, 4).map((project) => ({
    name: project.name.toUpperCase(),
    title: project.title,
    discipline: project.services[0],
    year: "Demo",
    focus: project.services.slice(1).join(" / "),
    description: project.summary,
    artwork: project.artwork,
    tone: project.tone,
    artworkLabel: project.mediaLabels[0],
  })),
};
