import type { ArtworkVariant } from "@/components/Artwork";
import { portfolioProfile } from "@/data/portfolio";

export interface AboutValue { number: string; title: string; description: string }
export interface AboutPerson { name: string; role: string; artwork: ArtworkVariant; tone: "gold" | "blue" | "green" | "rose"; label: string }

export const aboutData = {
  label: `About ${portfolioProfile.name}`,
  title: "ENGINEERING WITH CLARITY AND CURIOSITY",
  biography: portfolioProfile.biography,
  mediaLabel: "Abstract wide sculptural landscape representing software and machine-learning engineering",
  valuesLabel: "Engineering approach",
  valuesTitle: "RELIABLE SYSTEMS, THOUGHTFUL EXPERIENCES",
  values: [
    { number: "01", title: "Understand the problem", description: "Make goals, users, constraints, and tradeoffs visible before choosing an implementation." },
    { number: "02", title: "Build for change", description: "Readable structure and dependable interfaces make software easier to maintain and improve." },
    { number: "03", title: "Keep people in the loop", description: "Useful software and machine-learning systems should remain clear, accessible, and accountable." },
  ] satisfies readonly AboutValue[],
  recognitionLabel: "Areas of focus",
  recognitionTitle: "SOFTWARE + MACHINE LEARNING",
  recognitionItemLabel: "Engineering focus",
  recognitionYears: [
    { year: "BUILD", items: ["Modern web and software products", "Full-stack systems and APIs"] },
    { year: "LEARN", items: ["Machine-learning solutions", "Continuous technical development"] },
  ],
  teamLabel: "Technical lens",
  teamTitle: "FOUR CONNECTED PARTS OF THE WORK",
  people: [
    { name: "Frontend", role: "Responsive, accessible user experiences", artwork: "orbit", tone: "blue", label: "Abstract blue orbital portrait representing frontend engineering" },
    { name: "Backend", role: "Clear APIs and maintainable services", artwork: "fold", tone: "rose", label: "Abstract rose folded portrait representing backend systems" },
    { name: "Machine Learning", role: "Useful intelligence grounded in data", artwork: "signal", tone: "gold", label: "Abstract gold signal portrait representing machine learning" },
    { name: "Architecture", role: "Reliable foundations for future change", artwork: "portal", tone: "green", label: "Abstract green portal portrait representing software architecture" },
  ] satisfies readonly AboutPerson[],
};
