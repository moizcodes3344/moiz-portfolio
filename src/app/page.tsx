import { Approach, Capabilities, ContactCta, Hero, SelectedProjects, Technologies, Writing } from "@/components/PortfolioHome";

export default function Home() {
  return <main id="main-content" className="home-main"><Hero /><SelectedProjects /><Capabilities /><Technologies /><Approach /><Writing /><ContactCta /></main>;
}
