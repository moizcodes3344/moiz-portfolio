import type { Metadata } from "next";
import { Geist, Geist_Mono, Mohave } from "next/font/google";
import { navigationData } from "@/data/navigation";
import { portfolioProfile } from "@/data/portfolio";
import { NavigationSection } from "@/components/NavigationSection";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionController } from "@/components/MotionController";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Mohave({ variable: "--font-display", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${portfolioProfile.name} — ${portfolioProfile.primaryTitle}`,
    template: `%s — ${portfolioProfile.name}`,
  },
  description: "Moiz Ahmad is a Software Engineer building modern, reliable software products with thoughtful interfaces, scalable backend systems, and maintainable architecture.",
  applicationName: `${portfolioProfile.name} Portfolio`,
  creator: portfolioProfile.name,
  keywords: [portfolioProfile.name, portfolioProfile.primaryTitle, "full-stack development", "frontend engineering", "backend development"],
  openGraph: {
    type: "website",
    title: `${portfolioProfile.name} — ${portfolioProfile.primaryTitle}`,
    description: portfolioProfile.shortIntroduction,
    siteName: `${portfolioProfile.name} Portfolio`,
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionController />
        <NavigationSection data={navigationData} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
