"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className=" flex items-center justify-center fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-sky-950"
      onClick={toggleTheme}
      aria-label="Changement theme"
    >
      {theme === "light" ? (
        <BsSun className="text-center" />
      ) : (
        <BsMoon className="text-center" />
      )}
    </button>
  );
}
