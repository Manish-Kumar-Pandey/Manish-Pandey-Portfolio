"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
}

export function ThemeToggle({ className = "", showText = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-surface-100/60 border border-black/5 dark:border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`group relative flex items-center gap-2 p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer ${
        isDark
          ? "bg-surface-100/80 hover:bg-surface-50 text-amber-400 border border-white/10 hover:border-amber-400/40 hover:shadow-glow-blue"
          : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300/80 hover:border-sky-500/40 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <FiSun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <FiMoon className="w-4 h-4 text-indigo-600 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>

      {showText && (
        <span className="text-xs font-mono font-medium capitalize">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
