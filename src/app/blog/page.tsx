import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { blogData } from "@/data/articles";

export const metadata: Metadata = { title: "Engineering writing", description: blogData.introduction };
export default function BlogRoute() { return <BlogIndexPage data={blogData} />; }
