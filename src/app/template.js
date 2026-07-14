"use client";
import { motion } from "framer-motion";

const colors = ["#0A0E12", "#141A20", "#1E262D"];

const Template = ({ children }) => {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[100] flex">
        {colors.map((color, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "top", background: color }}
            className="flex-1"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Template;