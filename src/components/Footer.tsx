"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowUp, Heart, Code2 } from "lucide-react";

export function Footer() {
  const { personal, navigation } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#06070a] pt-16 pb-12 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/[0.06]">
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/30">
                <span className="font-heading font-black text-sm text-sky-600 dark:text-sky-400">
                  {personal.initials}
                </span>
              </div>
              <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                {personal.name}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {personal.title} | {personal.subtitle}. Dedicated to engineering high-performance web applications, scalable backends, and responsive UIs.
            </p>

            <div className="pt-2">
              <SocialLinks variant="icons" />
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold mb-4">
              Quick Links
            </div>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-6">
            <div className="md:text-right">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold mb-2">
                Availability
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>Open for Opportunities</span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-surface-100 hover:bg-slate-100 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 hover:border-sky-500/40 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with Next.js, React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

