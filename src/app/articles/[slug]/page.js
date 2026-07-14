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
  className="group inline-flex items-center gap-3 mb-8 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
>
  <span className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  </span>
  Back to articles
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