import { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";

export function generatePortfolioMetadata(): Metadata {
  const { personal, seo } = portfolioData;

  return {
    metadataBase: new URL(seo.siteUrl),
    title: {
      default: seo.title,
      template: `%s | ${personal.name}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: personal.name, url: seo.siteUrl }],
    creator: personal.name,
    publisher: personal.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "profile",
      locale: seo.locale,
      url: seo.siteUrl,
      title: seo.title,
      description: seo.description,
      siteName: seo.siteName,
      firstName: personal.firstName,
      lastName: personal.lastName,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${personal.name} - ${personal.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      creator: seo.twitterHandle,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    other: {
      "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  };
}

export function generatePersonJsonLd() {
  const { personal, seo, socialLinks, education, experiences } = portfolioData;

  const sameAsLinks = socialLinks.map((s) => s.url);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${seo.siteUrl}/#person`,
        name: personal.name,
        givenName: personal.firstName,
        familyName: personal.lastName,
        jobTitle: personal.title,
        description: personal.shortBio,
        url: seo.siteUrl,
        image: `${seo.siteUrl}/images/avatar.png`,
        email: personal.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          addressCountry: "India",
        },
        sameAs: sameAsLinks,
        alumniOf: education.map((edu) => ({
          "@type": "EducationalOrganization",
          name: edu.institution,
          sameAs: "https://www.rkgit.edu.in",
        })),
        worksFor: experiences.map((exp) => ({
          "@type": "Organization",
          name: exp.company,
        })),
        knowsAbout: [
          "React.js",
          "Next.js",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Angular",
          "Redux Toolkit",
          "React Query",
          "MongoDB",
          "REST APIs",
          "Full Stack Web Development",
          "Microservices",
          "AWS S3",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${seo.siteUrl}/#website`,
        url: seo.siteUrl,
        name: seo.siteName,
        description: seo.description,
        publisher: {
          "@id": `${seo.siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${seo.siteUrl}/#webpage`,
        url: seo.siteUrl,
        name: seo.title,
        isPartOf: {
          "@id": `${seo.siteUrl}/#website`,
        },
        about: {
          "@id": `${seo.siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${seo.siteUrl}/#person`,
        },
        description: seo.description,
      },
    ],
  };
}

