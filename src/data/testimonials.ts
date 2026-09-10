import type { ArtworkVariant } from "@/components/Artwork";

export interface WorkingPrinciple {
  name: string;
  quote: string;
  detail: string;
  artwork: ArtworkVariant;
  tone: "gold" | "blue" | "green" | "rose";
  artworkLabel: string;
}

export interface TestimonialsData {
  label: string;
  heading: string;
  previousLabel: string;
  nextLabel: string;
  tabsLabel: string;
  principles: readonly WorkingPrinciple[];
}

export const testimonialsData: TestimonialsData = {
  label: "Engineering principles",
  heading: "STRONG SYSTEMS START WITH CLEAR THINKING.",
  previousLabel: "Previous working principle",
  nextLabel: "Next working principle",
  tabsLabel: "Explore the working principles",
  principles: [
    { name: "Clarity", quote: "Make the problem understandable before making the solution complicated. Every layer should help the next decision become easier.", detail: "Start with the real problem", artwork: "orbit", tone: "blue", artworkLabel: "Original blue orbit, a study in clarity" },
    { name: "Reliability", quote: "Build for the ordinary path and the difficult edge case. Dependable behavior is part of the user experience.", detail: "Design for real conditions", artwork: "portal", tone: "gold", artworkLabel: "Original golden portal, a study in reliability" },
    { name: "Maintainability", quote: "Readable systems create room to improve. Structure, naming, and documentation should support the next change.", detail: "Make change easier", artwork: "fold", tone: "rose", artworkLabel: "Original folded rose form, a study in maintainability" },
    { name: "Learning", quote: "Technology keeps moving. Observe, test, and refine with purpose while keeping the product goal in view.", detail: "Keep learning deliberately", artwork: "signal", tone: "green", artworkLabel: "Original green signal, a study in learning" },
  ],
};
