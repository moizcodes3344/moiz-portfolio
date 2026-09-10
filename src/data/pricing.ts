import type { ArtworkVariant } from "@/components/Artwork";

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  action: string;
  artwork: ArtworkVariant;
  artworkLabel: string;
  badge?: string;
};

export type PricingContent = {
  title: string;
  optionsLabel: string;
  monthly: string;
  yearly: string;
  savings: string;
  currency: string;
  period: string;
  monthlyNote: string;
  yearlyNote: string;
  plans: PricingPlan[];
  href: string;
  bespokeLabel: string;
  bespokeTitle: string;
  bespokeDescription: string;
  bespokeAction: string;
  conceptNote: string;
};

export const pricingData: PricingContent = {
  title: "Areas of focus",
  optionsLabel: "Explore engineering perspectives",
  monthly: "Build",
  yearly: "Learn",
  savings: "Always",
  currency: "",
  period: "",
  monthlyNote: "Build useful systems",
  yearlyNote: "Learn, test, and improve",
  href: "#contact",
  plans: [
    {
      name: "Software products",
      description: "Reliable experiences supported by maintainable systems.",
      monthlyPrice: "WEB",
      yearlyPrice: "API",
      features: ["Responsive frontend", "Backend and API thinking", "Clear application structure"],
      action: "Explore the work",
      artwork: "fold",
      artworkLabel: "Original monochrome study of folded sculptural planes",
    },
    {
      name: "Intelligent systems",
      description: "Machine-learning capabilities connected to product needs.",
      monthlyPrice: "ML",
      yearlyPrice: "DATA",
      features: ["Problem-aware modeling", "Thoughtful data workflows", "Practical automation"],
      action: "Read the approach",
      artwork: "orbit",
      artworkLabel: "Original monochrome study of interlocking sculptural loops",
      badge: "Machine learning",
    },
  ],
  bespokeLabel: "Approach",
  bespokeTitle: "Choose the simplest dependable path.",
  bespokeDescription: "Start with the problem, then select the right tools.",
  bespokeAction: "View the process",
  conceptNote: "No service pricing is shown",
};
