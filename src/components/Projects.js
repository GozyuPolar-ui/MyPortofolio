"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-end gap-6 mb-14">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl sm:text-8xl font-black text-gray-200 dark:text-white/10 font-[family-name:var(--font-orbitron)] leading-none select-none"
        >
          01
        </motion.span>
        <div className="pb-2">
          <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-1 font-[family-name:var(--font-orbitron)]">
            // archive
          </div>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-orbitron)] tracking-wide">
            PROJECTS
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent mb-4 hidden sm:block" />
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;