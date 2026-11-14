import React from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  badge,
  title,
  titleHighlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-4 border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 backdrop-blur-sm ${
          center ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient-accent">{titleHighlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
