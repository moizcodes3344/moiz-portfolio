import { portfolioProfile } from "@/data/portfolio";
export const navigationData = {
  name: portfolioProfile.name,
  wordmark: ["MOIZ", "AHMAD"],
  description: portfolioProfile.primaryTitle,
  menuTitle: "Explore Moiz Ahmadâ€™s portfolio",
  navigationLabel: "Main navigation",
  homeLabel: "Moiz Ahmad home",
  openLabel: "Open navigation",
  closeLabel: "Close navigation",
  skipLabel: "Skip to content",
  links: [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Writing", href: "#notes" },
    { label: "Contact", href: "#contact" },
    { label: "GitHub", href: portfolioProfile.githubUrl, external: true },
  ],
};
export type NavigationData = typeof navigationData;
