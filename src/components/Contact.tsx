"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Loader2,
} from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          data.message ||
            "Thank you! Your message has been received. I will get back to you shortly."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});

        // Fire celebratory confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#38bdf8", "#818cf8", "#34d399", "#c084fc"],
          });
        } catch {
          // Ignore if canvas isn't supported
        }
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.message || "Failed to send message. Please reach out via email directly."
        );
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(
        "An unexpected error occurred. Please send an email directly to " +
          personal.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 scroll-mt-20"
      aria-label="Contact Information and Inquiries"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-sky-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something"
          titleHighlight="Great Together"
          subtitle="I'm always interested in connecting with talented people, exploring exciting opportunities, and working on challenging products. If you're looking for a developer who can contribute to building scalable and high-performance applications, let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-surface-100/70 border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl shadow-sm dark:shadow-glass">
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Feel free to contact me directly via email or connect with me on professional platforms.
              </p>

              {/* Email Block with Copy Button */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-surface-200/90 border border-slate-200 dark:border-white/5 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 truncate block transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white dark:bg-surface-100 hover:bg-slate-50 dark:hover:bg-surface-50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Block */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-surface-200/90 border border-slate-200 dark:border-white/5 flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                    Location
                  </div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06]">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                  Find Me On
                </div>
                <SocialLinks variant="pills" />
              </div>
            </div>

            {/* Availability Callout Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-sky-500/5 to-transparent border border-emerald-500/20 backdrop-blur-xl">
              <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400 font-semibold text-sm mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>Currently Open to Opportunities</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Available for Full-time Senior/Lead Full Stack & Frontend Engineer roles. Willing to relocate or work remotely.
              </p>
            </div>
          </div>

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-surface-100/70 border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl shadow-sm dark:shadow-glass">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>

              {/* Submission Status Alerts */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-800 dark:text-emerald-300 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-800 dark:text-rose-300 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Name <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-surface-200/90 border text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-slate-200 dark:border-white/10 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Email <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@company.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-surface-200/90 border text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-slate-200 dark:border-white/10 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject <span className="text-rose-500 dark:text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Full Stack Engineering Opportunity"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-surface-200/90 border text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-rose-500 focus:border-rose-400"
                        : "border-slate-200 dark:border-white/10 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-mono">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message <span className="text-rose-500 dark:text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, team, or opportunity..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-surface-200/90 border text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-rose-500 focus:border-rose-400"
                        : "border-slate-200 dark:border-white/10 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 hover:from-sky-300 hover:to-cyan-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-glow-blue cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

