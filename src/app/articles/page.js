import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Articles — Raymond",
};

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-2 font-[family-name:var(--font-orbitron)]">
        // logs
      </div>
      <h1 className="text-4xl font-bold mb-14 font-[family-name:var(--font-orbitron)]">
        ARTICLES
      </h1>

      {featured && (
        <Link
          href={`/articles/${featured.slug}`}
          className="group block mb-16 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-cyan-400/40 transition-colors"
        >
          <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/[0.02]">
            {featured.image ? (
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-black text-gray-300 dark:text-white/10 font-[family-name:var(--font-orbitron)] select-none">
                  01
                </span>
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2 py-0.5 rounded border border-cyan-400/40 text-cyan-600 dark:text-cyan-400 font-[family-name:var(--font-orbitron)] tracking-wide">
                LATEST
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{featured.date}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{featured.excerpt}</p>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-[family-name:var(--font-orbitron)]">
            More
          </h3>
          <div>
            {rest.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}