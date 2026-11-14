"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const { personal, navigation } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active tab
      const sections = navigation.map((nav) => nav.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-[#08090d]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.06] shadow-sm dark:shadow-lg dark:shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
            aria-label="Manish Kumar Pandey - Return to top"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-sky-500/30 group-hover:border-sky-400 group-hover:shadow-glow-blue transition-all duration-300">
              <span className="font-heading font-black text-base text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">
                {personal.initials}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-sky-400 ring-2 ring-white dark:ring-black" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-heading font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                {personal.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 -mt-0.5">
                {personal.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-surface-100/60 border border-slate-200/80 dark:border-white/[0.06] backdrop-blur-md shadow-sm dark:shadow-none">
            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-sky-600 dark:text-sky-300 bg-white dark:bg-white/[0.08] shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shadow-glow-blue" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href={personal.resumeUrl}
              download="Manish_Kumar_Pandey_Resume_Jan27.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200 bg-white dark:bg-surface-100/90 hover:bg-slate-50 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-white dark:text-black bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-sky-400 dark:to-cyan-300 hover:from-sky-600 hover:to-cyan-600 dark:hover:from-sky-300 dark:hover:to-cyan-200 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button & Mobile Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <a
              href={personal.resumeUrl}
              download="Manish_Kumar_Pandey_Resume_Jan27.pdf"
              aria-label="Download resume"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-surface-100 border border-slate-200 dark:border-white/5"
            >
              <FileDown className="w-4 h-4 text-sky-500 dark:text-sky-400" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-surface-100/80 border border-slate-200 dark:border-white/10 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-surface-50 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-sky-500 dark:text-sky-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-[#090b12]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl transition-all">
          <nav className="flex flex-col gap-1.5">
            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 shadow-glow-blue" />
                  )}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href={personal.resumeUrl}
                download="Manish_Kumar_Pandey_Resume_Jan27.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-surface-50 border border-slate-200 dark:border-white/10"
              >
                <FileDown className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white dark:text-black bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-sky-400 dark:to-cyan-300 shadow-glow-blue"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
