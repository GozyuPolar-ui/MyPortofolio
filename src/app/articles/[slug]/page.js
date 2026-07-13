import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetail({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
      <Link
        href="/articles"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-8 inline-block"
      >
        ← back to articles
      </Link>

      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-[family-name:var(--font-orbitron)]">
        {article.date}
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 font-[family-name:var(--font-orbitron)] leading-tight">
        {article.title}
      </h1>

      <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {article.content}
      </div>
    </main>
  );
}