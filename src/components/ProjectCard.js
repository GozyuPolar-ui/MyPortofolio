"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <Link
          href={`/projects/${project.slug}`}
          className="group relative grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-6 py-6 px-5 -mx-5 rounded-lg border border-transparent hover:border-cyan-400/40 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative text-xs text-gray-500 dark:text-gray-400 font-[family-name:var(--font-orbitron)]">
            {project.period}
          </div>
          <div className="relative">
            <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 group-hover:border-cyan-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.span
            initial={{ opacity: 0, x: -4 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block"
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;