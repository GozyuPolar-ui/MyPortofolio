"use client";
import { motion } from "framer-motion";

const skills = [
  "Python", "JavaScript", "SQLite", "WebSocket",
  "Git / GitHub", "REST APIs", "Kotlin", "System Design", "Language Design",
];

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-end gap-6 mb-14">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl sm:text-8xl font-black text-gray-200 dark:text-white/10 font-[family-name:var(--font-orbitron)] leading-none select-none"
        >
          02
        </motion.span>
        <div className="pb-2">
          <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-1 font-[family-name:var(--font-orbitron)]">
            // operator
          </div>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-orbitron)] tracking-wide">
            ABOUT
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent mb-4 hidden sm:block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I grew up watching Iron Man, and it was never really the suit
            that stuck with me — it was JARVIS. The idea that you could talk
            to something, and it would understand you, remember things, and
            help you build. That idea stayed long after the movies ended.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Eventually it turned into an actual question I couldn&apos;t let go
            of: how do I build my own version of that? Not a toy, something
            that actually listens, remembers, and does things.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            That&apos;s shown up as an AI assistant with its own memory and
            voice, and a programming language with its own grammar. Both
            started as a blank file and a rough idea.
          </p>

          <a href="/cv-tony.pdf" download className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 border-b border-gray-400 dark:border-gray-600 hover:border-cyan-400 transition-colors pb-0.5">
            Get in touch
            <span className="text-xs">↓</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 content-start"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;