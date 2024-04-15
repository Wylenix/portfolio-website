"use client";
import { motion } from "framer-motion";

export default function Separation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-sky-800/30 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-sky-500/30"
    ></motion.div>
  );
}
