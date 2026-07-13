"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-cyan-500 dark:text-cyan-400 mb-4 tracking-widest uppercase font-[family-name:var(--font-orbitron)]"
          >
            // system evolution log
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black mb-6 leading-[1.1] font-[family-name:var(--font-orbitron)] tracking-wide"
          >
            THIS IS<br />EVOLUTION.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-3"
          >
            No lab. No team. Just a laptop, a blank file, and enough
            stubbornness to build it anyway.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-gray-500 dark:text-gray-400 max-w-xl"
          >
            From single scripts to systems that remember, speak, and think.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex justify-center items-center group h-full"
        >
          <div className="absolute w-64 h-64 bg-cyan-400/30 dark:bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute w-48 h-48 bg-orange-400/20 dark:bg-orange-500/20 rounded-full blur-2xl translate-x-10 -translate-y-6" />

          <motion.div
  className="relative"
  animate={{ y: [0, -14, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
            <Image
              src="/images/hero-visual.png"
              alt="Hero visual"
              width={500}
              height={500}
              quality={100}
              className="w-full max-w-md h-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;