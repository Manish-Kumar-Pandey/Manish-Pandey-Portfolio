"use client";

import React, { useState, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Code2,
  Server,
  Database,
  Workflow,
  Sparkles,
  Cloud,
  Wrench,
  Layers,
  Flame,
  Globe,
  Network,
  Cpu,
  Brain,
  Bot,
  GitBranch,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { VscVscode, VscAzureDevops } from "react-icons/vsc";
import { FaAws, FaCss3Alt } from "react-icons/fa6";

import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiMui,
  SiReactivex,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiRedis,
  SiRedux,
  SiReactquery,
  SiGithubcopilot,
  SiAnthropic,
  SiDocker,
  SiJest,
  SiTestinglibrary,
  SiJasmine,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiPostman,
  SiWebpack,
  SiVite,
  SiVercel,
} from "react-icons/si";

export function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code2 className="w-4 h-4" />;
      case "backend":
        return <Server className="w-4 h-4" />;
      case "databases":
        return <Database className="w-4 h-4" />;
      case "state":
        return <Workflow className="w-4 h-4" />;
      case "ai":
        return <Sparkles className="w-4 h-4" />;
      case "cloud":
        return <Cloud className="w-4 h-4" />;
      case "tools":
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();

    // Frontend
    if (s.includes("react.js") || s === "react") return <SiReact className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    if (s.includes("angular")) return <SiAngular className="w-5 h-5 text-rose-500" />;
    if (s.includes("typescript")) return <SiTypescript className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    if (s.includes("javascript")) return <SiJavascript className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
    if (s.includes("html5")) return <SiHtml5 className="w-5 h-5 text-orange-500" />;
    if (s.includes("css3") || s === "css") return <FaCss3Alt className="w-5 h-5 text-blue-600 dark:text-blue-500" />;
    if (s.includes("tailwind")) return <SiTailwindcss className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
    if (s.includes("material ui")) return <SiMui className="w-5 h-5 text-sky-600 dark:text-sky-500" />;
    if (s.includes("rxjs")) return <SiReactivex className="w-5 h-5 text-pink-500" />;

    // Backend
    if (s.includes("node.js")) return <SiNodedotjs className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />;
    if (s.includes("express")) return <SiExpress className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
    if (s.includes("rest api")) return <Globe className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    if (s.includes("microservice")) return <Network className="w-5 h-5 text-violet-500 dark:text-violet-400" />;
    if (s.includes("graphql")) return <SiGraphql className="w-5 h-5 text-pink-500 dark:text-pink-400" />;
    if (s.includes("jwt")) return <SiJsonwebtokens className="w-5 h-5 text-amber-600 dark:text-amber-300" />;

    // Databases
    if (s.includes("mongodb")) return <SiMongodb className="w-5 h-5 text-green-600 dark:text-green-500" />;
    if (s.includes("mysql")) return <SiMysql className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    if (s.includes("neo4j")) return <SiNeo4J className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (s.includes("redis")) return <SiRedis className="w-5 h-5 text-rose-500" />;

    // State Management
    if (s.includes("redux")) return <SiRedux className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    if (s.includes("react query")) return <SiReactquery className="w-5 h-5 text-rose-500 dark:text-rose-400" />;
    if (s.includes("ngrx")) return <SiReactivex className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    if (s.includes("context api")) return <SiReact className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />;

    // AI & AI-Assisted
    if (s.includes("copilot")) return <SiGithubcopilot className="w-5 h-5 text-purple-600 dark:text-purple-300" />;
    if (s.includes("cursor")) return <Bot className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    if (s.includes("chatgpt") || s.includes("openai")) return <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (s.includes("prompt")) return <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-300" />;
    if (s.includes("claude")) return <SiAnthropic className="w-5 h-5 text-orange-500 dark:text-orange-400" />;
    if (s.includes("vibe coding")) return <Flame className="w-5 h-5 text-rose-500 dark:text-rose-400" />;

    // Cloud & DevOps
    if (s.includes("aws s3") || s.includes("s3")) return <FaAws className="w-5 h-5 text-amber-600 dark:text-amber-500" />;
    if (s.includes("lambda")) return <Cpu className="w-5 h-5 text-orange-500 dark:text-orange-400" />;
    if (s.includes("docker")) return <SiDocker className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    if (s.includes("ci/cd")) return <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (s.includes("azure")) return <VscAzureDevops className="w-5 h-5 text-blue-600 dark:text-blue-500" />;

    // Testing & Tools
    if (s.includes("jest")) return <SiJest className="w-5 h-5 text-rose-500" />;
    if (s.includes("testing library")) return <SiTestinglibrary className="w-5 h-5 text-red-500 dark:text-red-400" />;
    if (s.includes("jasmine")) return <SiJasmine className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    if (s.includes("karma")) return <FlaskConical className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    if (s === "git") return <SiGit className="w-5 h-5 text-orange-500" />;
    if (s === "github") return <SiGithub className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
    if (s === "gitlab") return <SiGitlab className="w-5 h-5 text-amber-600 dark:text-amber-500" />;
    if (s === "jira") return <SiJira className="w-5 h-5 text-blue-600 dark:text-blue-500" />;
    if (s === "postman") return <SiPostman className="w-5 h-5 text-orange-500 dark:text-orange-400" />;
    if (s.includes("vs code")) return <VscVscode className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    if (s === "webpack") return <SiWebpack className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    if (s === "vite") return <SiVite className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    if (s === "vercel") return <SiVercel className="w-5 h-5 text-slate-900 dark:text-white" />;

    return <Code2 className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
  };

  // Filter categories or return all
  const filteredCategories =
    activeCategoryId === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategoryId);

  const totalSkillCount = skillCategories.reduce(
    (acc, curr) => acc + curr.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden"
      aria-label="Technical Skills and Technologies"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Competencies"
          title="Technical"
          titleHighlight="Skill Arsenal"
          subtitle={`A modern full-stack tech stack spanning ${totalSkillCount}+ technologies, frameworks, cloud services, and AI tooling.`}
        />

        {/* Category Tabs with robust horizontal scroll controls (Fixes left clipping) */}
        <div className="relative mb-12">
          {/* Scroll Left Button */}
          <button
            type="button"
            onClick={() => scrollTabs("left")}
            aria-label="Scroll categories left"
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-surface-100 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-md hover:scale-105 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Horizontally Scrollable Pills Container */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto pb-4 pt-1 px-1 flex items-center justify-start gap-2.5 scrollbar-thin scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <button
              type="button"
              onClick={() => setActiveCategoryId("all")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 cursor-pointer ${
                activeCategoryId === "all"
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow-blue"
                  : "bg-white dark:bg-surface-100/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 shadow-sm"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Categories ({totalSkillCount})</span>
            </button>

            {skillCategories.map((category) => {
              const isActive = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow-blue"
                      : "bg-white dark:bg-surface-100/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 shadow-sm"
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  <span>{category.title}</span>
                  <span className="text-[10px] font-mono opacity-80 bg-slate-200 dark:bg-black/40 px-1.5 py-0.5 rounded text-slate-800 dark:text-slate-200">
                    {category.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            type="button"
            onClick={() => scrollTabs("right")}
            aria-label="Scroll categories right"
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-surface-100 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-md hover:scale-105 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group p-6 rounded-2xl bg-white dark:bg-surface-100/70 border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/40 hover:bg-slate-50/50 dark:hover:bg-surface-50 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-glass flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-surface-200 border border-slate-200 dark:border-white/5 text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-normal">
                  {category.description}
                </p>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group/item flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/90 dark:bg-surface-200/90 border border-slate-200/80 dark:border-white/[0.06] hover:border-sky-500/40 dark:hover:border-sky-500/30 hover:bg-white dark:hover:bg-surface-50 transition-all duration-200"
                    >
                      <span className="group-hover/item:scale-110 transition-transform">
                        {getSkillIcon(skill)}
                      </span>
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>Production Verified</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
