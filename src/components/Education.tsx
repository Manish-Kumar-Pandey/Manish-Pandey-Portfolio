"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="relative py-24 md:py-32 scroll-mt-20"
      aria-label="Academic Education and Credentials"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education &"
          titleHighlight="Foundations"
          subtitle="Formal engineering education providing a strong foundation in computer science, algorithms, and systems design."
        />

        <div className="mt-12">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-surface-100/70 border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/40 hover:bg-slate-50/50 dark:hover:bg-surface-50 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-glass"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Institution & Degree */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-sky-600 dark:text-sky-400 mt-1">
                      {item.fieldOfStudy}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {item.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Score / Grade Badge */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center p-4 md:p-0 rounded-2xl bg-slate-100/80 dark:bg-surface-200/50 md:bg-transparent border md:border-0 border-slate-200 dark:border-white/5">
                  <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                    Cumulative Grade
                  </span>
                  <div className="inline-flex items-center gap-2 mt-1">
                    <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                      {item.grade}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      / {item.gradeScale} CGPA
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursework Tags */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>Relevant Coursework & Core Subjects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-surface-200/80 border border-slate-200 dark:border-white/5 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

