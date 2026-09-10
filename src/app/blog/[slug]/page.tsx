import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/ArticleDetailPage";
import { articleSlugs, getArticle } from "@/data/articles";

export function generateStaticParams() { return articleSlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const article = getArticle((await params).slug); return article ? { title: article.title, description: article.excerpt } : {}; }
export default async function ArticleRoute({ params }: { params: Promise<{ slug: string }> }) { const article = getArticle((await params).slug); if (!article) notFound(); return <ArticleDetailPage article={article} />; }
