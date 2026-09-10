import type { Metadata } from "next";
import { AboutPortfolioPage } from "@/components/PortfolioPages";

export const metadata: Metadata = { title: "About", description: "About Moiz Ahmad’s software engineering approach, capabilities, and tools." };
export default function AboutRoute() { return <AboutPortfolioPage />; }
