"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "./icons/Moon";
import SunIcon from "./icons/Sun";

import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const { setTheme, resolvedTheme } = useTheme();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={`flex-start justify-between items-center flex h-8 w-16 rounded-[50px] bg-white p-1 shadow-md shadow-black/50 dark:bg-dark-gray ${
        isOn && "place-content-end flex-row-reverse"
      }`}
    >
      <motion.div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-dark-gray dark:bg-white"
        layout
        transition={spring}
      />

      <motion.div
        whileTap={{ rotate: 360 }}
        onClick={toggleSwitch}
        className="hover:cursor-pointer"
      >
        {resolvedTheme === "dark" ? (
          <SunIcon className="w-5 h-5" onClick={() => setTheme("light")} />
        ) : (
          <MoonIcon className="w-5 h-5" onClick={() => setTheme("dark")} />
        )}
      </motion.div>
    </div>
  );
}
