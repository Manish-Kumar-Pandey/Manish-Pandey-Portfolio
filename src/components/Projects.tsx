"use client";

import React, { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Lock,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  Info,
  X,
  Network,
  ExternalLink,
  BrainCircuit,
  KeyRound,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden"
      aria-label="Featured Projects and Technical Solutions"
    >
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Showcase"
          title="Things I've"
          titleHighlight="Built"
          subtitle="Enterprise platforms, dynamic event management engines, and high-performance internal business tooling."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project: ProjectItem) => {
            const isFlagship = project.id === "knowledgeai-rag-system";
            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl bg-white dark:bg-surface-100/70 border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/40 hover:bg-slate-50/50 dark:hover:bg-surface-50 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-glass flex flex-col justify-between overflow-hidden ${
                  isFlagship ? "lg:col-span-2" : ""
                }`}
              >
                {/* Card Header & Custom Visual Mockup */}
                <div>
                  {/* Visual Architecture Preview Container */}
                  <div
                    className={`relative ${
                      isFlagship ? "h-64 sm:h-72" : "h-56 sm:h-64"
                    } w-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-surface-200 dark:via-surface-100 dark:to-surface-200 p-6 flex flex-col justify-between border-b border-slate-200 dark:border-white/[0.06] overflow-hidden`}
                  >
                    {/* Subtle Grid overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                    {/* Top Bar with Badges */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-surface-100/80 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm">
                        <Layers className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                        {project.category}
                      </span>

                      {project.isPrivate ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-amber-800 dark:text-amber-300/90 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 backdrop-blur-md">
                          <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                          {project.statusBadge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 backdrop-blur-md">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          {project.statusBadge}
                        </span>
                      )}
                    </div>

                    {/* Custom Graphic Representation based on project */}
                    <div className="relative z-10 my-auto flex items-center justify-center">
                      {project.id === "knowledgeai-rag-system" ? (
                        /* KnowledgeAI Multi-Tenant RAG Visual Pipeline */
                        <div className="w-full max-w-xl rounded-xl bg-white dark:bg-surface-300/95 border border-slate-200 dark:border-cyan-500/30 p-3 sm:p-4 shadow-xl backdrop-blur-md">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-white/5">
                            <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                              <BrainCircuit className="w-4 h-4 text-cyan-500 animate-pulse" />
                              Multi-Tenant RAG Pipeline Engine
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Live SSE Streaming
                            </span>
                          </div>
                          <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[10px] sm:text-[11px]">
                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-surface-200/90 text-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                              <div className="text-slate-500 dark:text-slate-400 text-[9px] uppercase font-semibold">1. Ingestion</div>
                              <div className="text-sky-600 dark:text-sky-300 font-semibold truncate">PDF • DOCX • SHA-256</div>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-surface-200/90 text-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                              <div className="text-slate-500 dark:text-slate-400 text-[9px] uppercase font-semibold">2. Hybrid Retrieval</div>
                              <div className="text-cyan-600 dark:text-cyan-300 font-semibold truncate">pgvector + BM25</div>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-surface-200/90 text-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                              <div className="text-slate-500 dark:text-slate-400 text-[9px] uppercase font-semibold">3. RRF & Inference</div>
                              <div className="text-purple-600 dark:text-purple-300 font-semibold truncate">RRF (k=60) • Llama 3.1</div>
                            </div>
                          </div>
                        </div>
                      ) : project.id === "namba-event-platform" ? (
                        /* Heat-sheet / Racing Event Mockup Visual */
                        <div className="w-full max-w-sm rounded-xl bg-white dark:bg-surface-300/90 border border-slate-200 dark:border-sky-500/20 p-3 shadow-lg backdrop-blur-md">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-white/5">
                            <span className="text-sky-600 dark:text-sky-400 font-bold flex items-center gap-1">
                              <Zap className="w-3 h-3" /> Heat-Sheet Engine
                            </span>
                            <span className="text-emerald-600 dark:text-emerald-400">Live Sync</span>
                          </div>
                          <div className="mt-2 space-y-1.5 font-mono text-[11px]">
                            <div className="flex items-center justify-between p-1.5 rounded bg-slate-100 dark:bg-surface-200/80 text-slate-800 dark:text-slate-300">
                              <span>#01 Class-A Qualifier</span>
                              <span className="text-sky-600 dark:text-sky-300 font-semibold">12 Racers • Heat 1</span>
                            </div>
                            <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-surface-200/50 text-slate-500 dark:text-slate-400">
                              <span>#02 Class-B Semis</span>
                              <span className="text-slate-500 dark:text-slate-400">AWS S3 Photos Synced</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* OrgChart Hierarchy Visual Mockup */
                        <div className="w-full max-w-sm rounded-xl bg-white dark:bg-surface-300/90 border border-slate-200 dark:border-purple-500/20 p-3 shadow-lg backdrop-blur-md">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-white/5">
                            <span className="text-purple-600 dark:text-purple-400 font-bold flex items-center gap-1">
                              <Network className="w-3 h-3" /> Org Hierarchy Tree
                            </span>
                            <span className="text-sky-600 dark:text-sky-400">Azure AD / MSAL</span>
                          </div>
                          <div className="mt-2.5 flex flex-col items-center gap-1.5">
                            <div className="px-3 py-1 rounded bg-purple-100 dark:bg-purple-500/20 border border-purple-300 dark:border-purple-500/40 text-[10px] font-mono text-purple-800 dark:text-purple-200">
                              Executive Committee
                            </div>
                            <div className="w-0.5 h-2 bg-purple-400/50" />
                            <div className="grid grid-cols-2 gap-2 w-full text-center">
                              <div className="px-2 py-1 rounded bg-slate-100 dark:bg-surface-200 text-[10px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                                Engineering (42)
                              </div>
                              <div className="px-2 py-1 rounded bg-slate-100 dark:bg-surface-200 text-[10px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                                Operations (18)
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Impact Metric Pill */}
                    {project.impactMetric && (
                      <div className="relative z-10 flex items-center gap-1.5 text-xs font-mono text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-lg border border-sky-200 dark:border-sky-500/20 w-fit">
                        <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                        <span>{project.impactMetric}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-500/20">
                          Production Ready
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400/90">
                      {project.tagline}
                    </p>

                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="mt-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                        Key Engineering Highlights
                      </div>
                      <ul className="space-y-2.5">
                        {project.keyContributions.slice(0, 4).map((contribution: string, cIdx: number) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400/90 mt-0.5 shrink-0" />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Badges */}
                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/[0.06]">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-surface-200/90 border border-slate-200 dark:border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 sm:p-8 pt-0 mt-auto flex flex-wrap items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 hover:from-sky-300 hover:to-cyan-200 transition-all duration-300 shadow-glow-blue cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-surface-200/80 hover:bg-slate-200 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 hover:border-sky-500/40 hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer"
                      title="View Source on GitHub"
                      aria-label="View Source on GitHub"
                    >
                      <FaGithub className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-surface-200/80 hover:bg-slate-200 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 hover:border-sky-500/40 hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer ${
                      project.liveUrl ? "" : "w-full"
                    }`}
                  >
                    <Info className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                    <span>View Architecture Specs</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-surface-100 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-50 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-500/20 mb-3">
                {selectedProject.category}
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="mt-1 text-sm text-sky-600 dark:text-sky-400 font-medium">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Project Overview</h4>
                <p className="leading-relaxed">{selectedProject.description}</p>
              </div>

              {selectedProject.demoCredentials && (
                <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30">
                  <div className="flex items-center gap-2 font-mono font-semibold text-xs text-cyan-800 dark:text-cyan-300 mb-2 uppercase tracking-wider">
                    <KeyRound className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Live Demo Test Org Credentials (Or Click Autofill on Sign-In)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-surface-200/90 border border-cyan-200 dark:border-white/5">
                      <span className="text-slate-500 dark:text-slate-400">Email: </span>
                      <strong className="text-slate-900 dark:text-white">{selectedProject.demoCredentials.email}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-surface-200/90 border border-cyan-200 dark:border-white/5">
                      <span className="text-slate-500 dark:text-slate-400">Password: </span>
                      <strong className="text-slate-900 dark:text-white">{selectedProject.demoCredentials.password}</strong>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Architecture & Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Complete Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-surface-200 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.isPrivate ? (
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800 dark:text-amber-200/90 leading-relaxed">
                    <strong>Confidentiality Notice:</strong> This project was engineered under enterprise client non-disclosure agreements. Source code and live production credentials remain proprietary, while architecture and engineering contributions are demonstrated here.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-emerald-800 dark:text-emerald-200/90 leading-relaxed">
                    <strong>Production SaaS Verification:</strong> Full-stack multi-tenant platform with live URL and open-source GitHub repository. Explore the live streaming UI or inspect the modular backend architecture.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 hover:from-sky-300 hover:to-cyan-200 transition-all shadow-glow-blue cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live App</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-surface-200/80 hover:bg-slate-200 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 hover:border-sky-500/40 transition-all cursor-pointer"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white dark:text-slate-950 bg-sky-500 dark:bg-sky-400 hover:bg-sky-600 dark:hover:bg-sky-300 transition-colors cursor-pointer"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
