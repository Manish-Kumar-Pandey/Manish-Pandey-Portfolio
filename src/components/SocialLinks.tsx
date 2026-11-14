"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

interface SocialLinksProps {
  className?: string;
  variant?: "pills" | "icons" | "card";
  showLabel?: boolean;
}

export function SocialLinks({
  className = "",
  variant = "icons",
  showLabel = false,
}: SocialLinksProps) {
  const { socialLinks } = portfolioData;

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedinIn className="w-5 h-5" />;
      case "leetcode":
        return <SiLeetcode className="w-5 h-5" />;
      case "email":
        return <HiOutlineMail className="w-5 h-5" />;
      default:
        return <HiOutlineMail className="w-5 h-5" />;
    }
  };

  if (variant === "pills") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target={item.name === "Email" ? undefined : "_blank"}
            rel={item.name === "Email" ? undefined : "noopener noreferrer"}
            aria-label={`Visit Manish's ${item.name} profile`}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-glow-blue"
          >
            <span className="text-slate-500 dark:text-slate-400 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              {getIcon(item.name)}
            </span>
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target={item.name === "Email" ? undefined : "_blank"}
          rel={item.name === "Email" ? undefined : "noopener noreferrer"}
          aria-label={`Visit Manish's ${item.name} profile`}
          className="group relative flex items-center justify-center w-11 h-11 rounded-xl text-slate-600 dark:text-slate-400 bg-white dark:bg-surface-100/80 border border-slate-200 dark:border-white/5 hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-surface-50 transition-all duration-300 shadow-sm hover:shadow-glow-blue hover:-translate-y-0.5"
        >
          {getIcon(item.name)}
          <span className="sr-only">{item.name}</span>

          {showLabel && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap border border-slate-200 dark:border-slate-700 shadow-sm">
              {item.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
