import type { ArtworkVariant } from "@/components/Artwork";

export const newsData = {
  label: "Engineering notebook",
  title: "Concept notes",
  cta: "Read a note",
  close: "Close note",
  items: [
    { title: "Clear boundaries support dependable systems", date: "Concept note", body: "A module, service, or model is easier to change when its responsibility is explicit. Good boundaries reduce hidden coupling and help each decision stay connected to the product goal.", variant: "sculpture" as ArtworkVariant, imageLabel: "Abstract monochrome study representing system boundaries" },
    { title: "Short feedback loops improve engineering decisions", date: "Concept note", body: "Small, testable steps make assumptions visible early. Tests, logs, and direct observation each provide different evidence for deciding what to improve next.", variant: "fold" as ArtworkVariant, imageLabel: "Abstract folded golden study representing iteration" },
    { title: "Machine learning needs product context", date: "Concept note", body: "A model is useful when its data, evaluation, limitations, and product purpose stay connected. Technical performance is one part of a responsible software decision.", variant: "signal" as ArtworkVariant, imageLabel: "Abstract golden signal representing machine learning" },
  ],
};
