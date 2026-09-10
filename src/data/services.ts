import type { ArtworkVariant } from "@/components/Artwork";

export interface ServiceItem {
  title: string;
  number: string;
  description: string;
  artwork: ArtworkVariant;
  artworkLabel: string;
  tone: "gold" | "blue" | "green" | "rose";
}

export interface ServicesData {
  label: string;
  items: ServiceItem[];
}

export const servicesData: ServicesData = {
  label: "Capabilities",
  items: [
    { title: "Full-Stack", number: "(01)", description: "Modern products considered from interface to data flow.", artwork: "sculpture", artworkLabel: "Abstract golden study representing full-stack development", tone: "gold" },
    { title: "Frontend", number: "(02)", description: "Responsive interfaces with clear, accessible interactions.", artwork: "portal", artworkLabel: "Abstract blue portal representing frontend engineering", tone: "blue" },
    { title: "Backend & APIs", number: "(03)", description: "Maintainable services, integrations, and application logic.", artwork: "fold", artworkLabel: "Abstract green folded system representing backend architecture", tone: "green" },
    { title: "Machine Learning", number: "(04)", description: "Intelligent solutions shaped around useful data and outcomes.", artwork: "signal", artworkLabel: "Abstract rose signal representing machine learning", tone: "rose" },
    { title: "Automation", number: "(05)", description: "Practical workflows that reduce repetition and improve consistency.", artwork: "orbit", artworkLabel: "Abstract golden orbit representing automation", tone: "gold" },
  ],
};
