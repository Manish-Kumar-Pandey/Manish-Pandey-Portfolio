"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Code,
  Sparkles,
  Zap,
  ShieldCheck,
  Layout,
  Clock,
  BrainCircuit,
} from "lucide-react";

export function About() {
  const { personal, statistics } = portfolioData;

  const statIcons = [
    <Clock key="clock" className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
    <Layout key="layout" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    <Zap key="zap" className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 scroll-mt-20"
      aria-label="About Manish Kumar Pandey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background & Expertise"
          title="A Little"
          titleHighlight="About Me"
          subtitle="Full Stack Engineer blending enterprise UI architecture, microservice backends, and AI-accelerated workflows."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-surface-100/70 border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl shadow-sm dark:shadow-glass">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Engineering Philosophy
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    High Performance • Clean Architecture • Business Impact
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {personal.aboutLong.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* AI & Productivity Highlight Banner */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.08]">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-50 dark:bg-gradient-to-r dark:from-purple-500/10 dark:via-indigo-500/10 dark:to-sky-500/10 border border-purple-200 dark:border-purple-500/20">
                  <BrainCircuit className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-purple-900 dark:text-purple-200">
                      AI-Assisted Development Multiplier
                    </h4>
                    <p className="text-xs text-purple-800/80 dark:text-slate-300 mt-1 leading-relaxed">
                      Proficient in leveraging GitHub Copilot, Cursor AI, and ChatGPT to accelerate boilerplate development, generate robust test suites, and deliver production features 2x faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Column (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statistics.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-white dark:bg-surface-100/70 border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/40 hover:bg-slate-50/50 dark:hover:bg-surface-50 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-glass flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-surface-200/80 border border-slate-200 dark:border-white/5 group-hover:scale-110 transition-transform">
                    {statIcons[idx % statIcons.length]}
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Metric 0{idx + 1}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      {stat.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
