"use client";

import React, { useState } from "react";
import { portfolioData, ExperienceItem } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export function Experience() {
  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden"
      aria-label="Professional Experience and Career Timeline"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Timeline"
          title="My Professional"
          titleHighlight="Journey"
          subtitle="4+ years of building enterprise-scale web solutions, driving measurable performance improvements, and architecting modern frontend systems."
        />

        {/* Vertical Timeline Container */}
        <div className="relative mt-12 sm:mt-16">
          {/* Vertical central glowing line */}
          <div className="absolute top-3 bottom-8 left-4 md:left-8 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-300 dark:to-slate-800" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp: ExperienceItem) => {
              return (
                <div
                  key={exp.id}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-1.5 md:left-5.5 -top-0.5 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`relative flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                        exp.isCurrent
                          ? "bg-sky-500/20 border-sky-500 dark:border-sky-400 shadow-glow-blue"
                          : "bg-slate-100 dark:bg-surface-200 border-slate-300 dark:border-slate-700 group-hover:border-sky-500"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          exp.isCurrent
                            ? "bg-sky-500 dark:bg-sky-400 animate-pulse"
                            : "bg-slate-400 group-hover:bg-sky-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-surface-100/75 border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/40 hover:bg-slate-50/50 dark:hover:bg-surface-50 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-glass overflow-hidden">
                    {/* Header bar */}
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                              {exp.role}
                            </h3>
                            {exp.isCurrent && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                Present Role
                              </span>
                            )}
                          </div>

                          <div className="mt-1 text-base sm:text-lg font-semibold text-sky-600 dark:text-sky-400">
                            {exp.company}
                          </div>
                        </div>

                        {/* Metadata: Period & Location */}
                        <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Metric Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.highlights.map((highlight: string, hIdx: number) => (
                            <div
                              key={hIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-500/20"
                            >
                              <TrendingUp className="w-3 h-3 text-sky-500 dark:text-sky-400" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Responsibilities List */}
                      <div className="mt-6">
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp: string, rIdx: number) => (
                            <li
                              key={rIdx}
                              className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400/80 mt-1 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies used at this company */}
                      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/[0.06]">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                          Technologies Utilized
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill: string) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-surface-200/90 border border-slate-200 dark:border-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
