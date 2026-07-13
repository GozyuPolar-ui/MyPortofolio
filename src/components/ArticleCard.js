"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ArticleCard = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="group block py-6 border-b border-gray-200 dark:border-gray-800 hover:pl-2 transition-all duration-300"
      >
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-[family-name:var(--font-orbitron)]">
          {article.date}
        </div>
        <h3 className="font-bold text-xl mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {article.excerpt}
        </p>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;