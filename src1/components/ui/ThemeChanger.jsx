"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sun, Moon } from 'lucide-react';

/**
 * A reusable button component to toggle between light and dark themes.
 *
 * @param {object} props - The component props.
 * @param {'light' | 'dark'} props.theme - The current theme.
 * @param {() => void} props.toggleTheme - The function to call to toggle the theme.
 */
const ThemeChanger = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  const icon = isDark ? <Sun size={24} /> : <Moon size={24} />;

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-200"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.button>
  );
};
export default ThemeChanger;
