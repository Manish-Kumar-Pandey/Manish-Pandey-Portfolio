import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { generatePortfolioMetadata, generatePersonJsonLd } from "@/lib/seo";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = generatePortfolioMetadata();

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generatePersonJsonLd();

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-800 dark:text-slate-100 antialiased selection:bg-sky-500/25 selection:text-white font-sans transition-colors duration-300">
        <ThemeProvider>
          {/* Subtle global background grid and radial glows */}
          <div className="fixed inset-0 bg-grid-pattern opacity-40 dark:opacity-30 pointer-events-none -z-20" />
          <div className="fixed inset-0 bg-radial-glow pointer-events-none -z-10" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
