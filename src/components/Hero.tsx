"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";
import {
  ArrowDown,
  FileDown,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

export function Hero() {
  const { personal } = portfolioData;

  const roles = [
    "Full Stack Developer",
    "React & Node.js Specialist",
    "Enterprise UI Architect",
    "MERN Stack Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const delta = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-center overflow-hidden"
      aria-label="Introduction & Hero Section"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-600/10 to-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Availability Badge */}
            {personal.isOpenToWork && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 backdrop-blur-md mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wide font-semibold">{personal.availabilityStatus}</span>
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-gradient-accent inline-block">
                {personal.name}
              </span>
            </h1>

            {/* Sub-heading / Typewriter Role */}
            <div className="mt-4 flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 min-h-[44px]">
              <span className="text-sky-500 dark:text-sky-400 font-mono mr-2">&gt;</span>
              <span className="text-slate-900 dark:text-slate-100 font-heading">
                {displayText}
              </span>
              <span className="w-0.5 h-6 ml-1 bg-sky-500 dark:bg-sky-400 animate-pulse inline-block" />
            </div>

            {/* Subtitle / Professional title badge */}
            <div className="mt-2 text-sm md:text-base font-mono text-sky-600 dark:text-sky-400/90 font-medium tracking-wide">
              {personal.title} | {personal.subtitle}
            </div>

            {/* Introduction paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white dark:text-slate-950 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 dark:from-sky-400 dark:via-cyan-300 dark:to-sky-300 hover:from-sky-600 hover:to-cyan-600 dark:hover:from-sky-300 dark:hover:to-cyan-200 transition-all duration-300 shadow-md hover:shadow-cyan-500/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={personal.resumeUrl}
                download="Manish_Kumar_Pandey_Resume_Jan27.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-surface-100 hover:bg-slate-50 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-white transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Quick Meta */}
            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/[0.08] w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Connect:
                </span>
                <SocialLinks variant="icons" showLabel={true} />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>Noida, UP, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Graphic with Floating Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Code Terminal Mockup Card */}
            <div className="relative w-full max-w-md rounded-2xl bg-[#0c0e17] border border-slate-800 dark:border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#08090f] border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>manish-profile.ts</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto selection:bg-sky-500/30">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;Manish Kumar Pandey&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span>{" "}
                  <span className="text-amber-300">&quot;4+ Years&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">specialization:</span> [
                </div>
                <div className="pl-8 text-cyan-300">
                  &quot;React.js&quot;, &quot;Node.js&quot;, &quot;Angular&quot;,
                </div>
                <div className="pl-8 text-cyan-300">
                  &quot;Redux Toolkit&quot;, &quot;TypeScript&quot;
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-slate-400">strengths:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">perfOptimization:</span>{" "}
                  <span className="text-sky-300">&quot;+30%&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">testCoverage:</span>{" "}
                  <span className="text-sky-300">&quot;85%+&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">aiWorkflow:</span>{" "}
                  <span className="text-emerald-400">true</span>,
                </div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{" "}
                  <span className="text-emerald-400">&quot;Ready to Build Scalable Apps&quot;</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#08090f]/80 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>TypeScript 5.7</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-sky-400">Prettier: Ready</span>
                </div>
              </div>
            </div>

            {/* Floating Technology Badges */}
            {/* 1. React Badge - Top Right */}
            <div className="absolute -top-6 -right-3 sm:-right-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-surface-100/90 border border-slate-200 dark:border-sky-500/30 shadow-lg backdrop-blur-md animate-float">
              <SiReact className="w-5 h-5 text-sky-500 dark:text-sky-400 animate-spin-slow" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">React.js</span>
            </div>

            {/* 2. Angular Badge - Top Left */}
            <div className="absolute -top-4 -left-4 sm:-left-8 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-surface-100/90 border border-slate-200 dark:border-rose-500/30 shadow-lg backdrop-blur-md animate-float-reverse">
              <SiAngular className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Angular</span>
            </div>

            {/* 3. Node.js Badge - Bottom Left */}
            <div className="absolute -bottom-5 -left-4 sm:-left-8 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-surface-100/90 border border-slate-200 dark:border-emerald-500/30 shadow-lg backdrop-blur-md animate-float">
              <SiNodedotjs className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Node.js</span>
            </div>

            {/* 4. TypeScript Badge - Right Center */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-surface-100/90 border border-slate-200 dark:border-blue-500/30 shadow-lg backdrop-blur-md animate-float-reverse">
              <SiTypescript className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">TypeScript</span>
            </div>

            {/* 5. MongoDB Badge - Bottom Right */}
            <div className="absolute -bottom-5 -right-2 sm:-right-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-surface-100/90 border border-slate-200 dark:border-green-500/30 shadow-lg backdrop-blur-md animate-float">
              <SiMongodb className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">MongoDB</span>
            </div>

            {/* 6. Next.js Badge - Bottom Center Floating */}
            <div className="absolute -bottom-10 left-1/3 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 dark:bg-surface-100/90 border border-slate-200 dark:border-white/20 shadow-lg backdrop-blur-md animate-float-reverse">
              <SiNextdotjs className="w-4 h-4 text-slate-900 dark:text-white" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Next.js</span>
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down to About section"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            <span>DISCOVER MORE</span>
            <div className="w-7 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-start justify-center p-1.5 group-hover:border-sky-500/50 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-sky-500 dark:bg-sky-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
