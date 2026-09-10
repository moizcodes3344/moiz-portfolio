import type { Metadata } from "next";
import { ContactPortfolioPage } from "@/components/PortfolioPages";

export const metadata: Metadata = { title: "Contact", description: "Contact Moiz Ahmad about a software project." };
export default function ContactRoute() { return <ContactPortfolioPage />; }
