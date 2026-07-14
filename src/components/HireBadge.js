"use client";
import { motion } from "framer-motion";

const HireBadge = () => {
  const text = "AVAILABLE FOR WORK • AVAILABLE FOR WORK • ";

  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Go to contact section"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center group cursor-pointer"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-gray-600 dark:fill-gray-300" style={{ fontSize: "7.5px", letterSpacing: "1px" }}>
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </motion.svg>

      <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0E12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </button>
  );
};

export default HireBadge;