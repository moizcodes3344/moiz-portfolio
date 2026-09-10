import type { ArtworkVariant } from "@/components/Artwork";

export interface Discipline {
  title: string;
  description: string;
  artwork: ArtworkVariant;
  artworkLabel: string;
  tone: "gold" | "blue" | "green" | "rose";
}

export interface TeamData {
  label: string;
  title: string;
  disciplines: Discipline[];
}

export const teamData: TeamData = {
  label: "Development approach",
  title: "From problem to dependable product",
  disciplines: [
    { title: "Understand", description: "Define the problem and constraints.", artwork: "orbit", artworkLabel: "Original orbital study representing discovery", tone: "gold" },
    { title: "Design", description: "Shape a clear technical direction.", artwork: "portal", artworkLabel: "Original blue portal representing system design", tone: "blue" },
    { title: "Build", description: "Implement in focused, testable steps.", artwork: "fold", artworkLabel: "Original green folded form representing implementation", tone: "green" },
    { title: "Improve", description: "Validate, maintain, and keep learning.", artwork: "signal", artworkLabel: "Original rose signal representing iteration", tone: "rose" },
  ],
};
