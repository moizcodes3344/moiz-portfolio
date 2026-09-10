import type { Metadata } from "next";
import { WorksPage as WorksPortfolioPage } from "@/components/PortfolioPages";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software projects by Moiz Ahmad.",
};

export default function WorksPage() {
  return (
    <main id="main-content" className="works-page-main">
      <WorksPortfolioPage />
    </main>
  );
}
