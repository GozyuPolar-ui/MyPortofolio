import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Articles — Tony",
};

export default function ArticlesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-2 font-[family-name:var(--font-orbitron)]">
        // logs
      </div>
      <h1 className="text-4xl font-bold mb-14 font-[family-name:var(--font-orbitron)]">
        ARTICLES
      </h1>

      <div>
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </main>
  );
}