export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  iconName?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  responsibilities: string[];
  skills: string[];
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Enterprise Application" | "Event Platform" | "Internal Tool";
  technologies: string[];
  keyContributions: string[];
  isPrivate: boolean;
  statusBadge: string;
  featured: boolean;
  impactMetric?: string;
  color: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  duration: string;
  grade: string;
  gradeScale: string;
  location: string;
  coursework?: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    initials: string;
    title: string;
    subtitle: string;
    bio: string;
    shortBio: string;
    aboutLong: string[];
    location: string;
    email: string;
    phone?: string;
    isOpenToWork: boolean;
    availabilityStatus: string;
    yearsOfExperience: string;
    resumeUrl: string;
    avatarUrl: string;
  };
  seo: {
    siteUrl: string;
    siteName: string;
    title: string;
    description: string;
    keywords: string[];
    author: string;
    twitterHandle: string;
    locale: string;
  };
  socialLinks: SocialLink[];
  statistics: Statistic[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  navigation: { name: string; href: string }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Manish Kumar Pandey",
    firstName: "Manish",
    lastName: "Pandey",
    initials: "MKP",
    title: "Full Stack Developer",
    subtitle: "React & Node.js Specialist",
    shortBio:
      "I'm a Software Engineer with 4+ years of experience building scalable, high-performance web applications. I specialize in React, Angular, Node.js, and modern web technologies, transforming complex business requirements into intuitive and efficient digital experiences.",
    bio: "Full Stack Developer with 4+ years of experience building enterprise web applications, high-throughput microservices, dynamic dashboards, and event management platforms.",
    aboutLong: [
      "I'm a Full Stack Developer passionate about building scalable applications, solving complex engineering challenges, and creating seamless user experiences.",
      "With 4+ years of experience across frontend and backend development, I have worked on enterprise applications, internal business tools, event management platforms, and dynamic dashboards.",
      "My expertise includes React, Angular, Node.js, Express.js, MongoDB, Redux Toolkit, and cloud technologies. I also leverage AI-assisted development tools such as GitHub Copilot, Cursor AI, and ChatGPT to improve development productivity.",
    ],
    location: "Noida, Uttar Pradesh, India",
    email: "manishkpandey.work@gmail.com",
    isOpenToWork: true,
    availabilityStatus: "Open to Opportunities",
    yearsOfExperience: "4+",
    resumeUrl: "/Manish_Kumar_Pandey_Resume_Jan27.pdf",
    avatarUrl: "/images/avatar.png",
  },
  seo: {
    siteUrl: "https://manishkumar.dev",
    siteName: "Manish Kumar Pandey | Full Stack Developer",
    title: "Manish Kumar Pandey | Full Stack Developer | React & Node.js Specialist",
    description:
      "Personal portfolio of Manish Kumar Pandey, Full Stack Developer with 4+ years of experience in React, Node.js, Angular, Redux Toolkit, MongoDB, and modern web architecture.",
    keywords: [
      "Manish Kumar Pandey",
      "Manish Kumar Pandey Developer",
      "Manish Kumar Pandey Full Stack Developer",
      "Manish Kumar Pandey React Developer",
      "Manish Kumar Pandey Node.js Developer",
      "Full Stack Developer Noida",
      "React Developer Noida",
      "MERN Stack Developer India",
      "Full Stack Software Engineer",
      "Angular Developer",
      "Next.js Portfolio",
    ],
    author: "Manish Kumar Pandey",
    twitterHandle: "@manishpandeydev",
    locale: "en_US",
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Manish-Kumar-Pandey",
      icon: "Github",
      username: "Manish-Kumar-Pandey",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manishkpandey2001/",
      icon: "Linkedin",
      username: "manishkpandey2001",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/manishkpandey2001/",
      icon: "Code2",
      username: "manishkpandey2001",
    },
    {
      name: "Email",
      url: "mailto:manishkpandey.work@gmail.com",
      icon: "Mail",
      username: "manishkpandey.work@gmail.com",
    },
  ],
  statistics: [
    {
      value: "4+",
      label: "Years of Experience",
      description: "Delivering enterprise & production-grade web systems",
    },
    {
      value: "30+",
      label: "Reusable UI Components",
      description: "From Gemini Solutions enterprise design systems",
    },
    {
      value: "30%",
      label: "Performance Improvement",
      description: "Through global state caching & React memoization",
    },
    {
      value: "85%+",
      label: "Unit Test Coverage",
      description: "Maintained reliably across 6+ enterprise releases",
    },
  ],
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
  skillCategories: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Building responsive, performant, and accessible user interfaces",
      skills: [
        "React.js",
        "Angular",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
        "RxJS",
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Architecting resilient APIs, services, and secure backends",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Microservices",
        "GraphQL (Basics)",
        "JWT Authentication",
      ],
    },
    {
      id: "databases",
      title: "Databases & Storage",
      description: "Designing robust schemas and optimized data access layers",
      skills: ["MongoDB", "MySQL", "Neo4j", "Redis (Basics)"],
    },
    {
      id: "state",
      title: "State Management",
      description: "Managing predictable global client & server data flows",
      skills: ["Redux Toolkit", "React Query", "NgRx", "Context API"],
    },
    {
      id: "ai",
      title: "AI & AI-Assisted Development",
      description: "Amplifying productivity and engineering with next-gen AI workflows",
      skills: [
        "GitHub Copilot",
        "Cursor AI",
        "ChatGPT / OpenAI APIs",
        "Prompt Engineering",
        "Claude AI",
        "Vibe Coding",
      ],
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      description: "Deploying infrastructure, storage, and automated pipelines",
      skills: [
        "AWS S3",
        "AWS Lambda",
        "Docker (Basics)",
        "CI/CD Pipelines",
        "Azure Pipelines",
      ],
    },
    {
      id: "tools",
      title: "Testing & Development Tools",
      description: "Ensuring code quality, test reliability, and smooth delivery",
      skills: [
        "Jest",
        "React Testing Library",
        "Jasmine",
        "Karma",
        "Git",
        "GitHub",
        "GitLab",
        "Jira",
        "Postman",
        "VS Code",
        "Webpack",
        "Vite",
        "Vercel",
      ],
    },
  ],
  experiences: [
    {
      id: "flexsin",
      company: "Flexsin Technologies",
      role: "Software Engineer",
      period: "May 2025 – Present",
      location: "Noida, India",
      isCurrent: true,
      responsibilities: [
        "Built and optimized React UI components for NAMBA, an event management platform, with dynamic filtering, sorting, and heat-sheet views using Redux Toolkit.",
        "Reduced unnecessary API calls and improved performance by 30% using Redux Toolkit global state management and memoization.",
        "Integrated React Query for caching and real-time synchronization.",
        "Refactored legacy class components into functional components using React Hooks.",
        "Developed an Express.js module to store winners' data and photos on AWS S3.",
        "Integrated Twilio SendGrid for automated email notifications.",
      ],
      skills: [
        "React.js",
        "Redux Toolkit",
        "React Query",
        "Node.js",
        "Express.js",
        "AWS S3",
        "Twilio SendGrid",
        "TypeScript",
      ],
      highlights: [
        "30% Performance boost via Redux Toolkit memoization",
        "Real-time heat-sheet event filtering and sorting UI",
        "Automated SendGrid transactional messaging pipeline",
      ],
    },
    {
      id: "yesitlabs",
      company: "Yes IT Labs",
      role: "Full Stack Developer",
      period: "September 2024 – February 2025",
      location: "Noida, India",
      isCurrent: false,
      responsibilities: [
        "Architected Redux-based global state management, reducing unnecessary API calls by 30%.",
        "Integrated React Query for server-state synchronization and background refetching.",
        "Refactored legacy components using useState, useEffect, useCallback, and useMemo.",
        "Reduced unnecessary component re-renders by 25%.",
        "Collaborated on REST API design using Node.js and Express.js.",
      ],
      skills: [
        "React.js",
        "Redux",
        "React Query",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Performance Optimization",
      ],
      highlights: [
        "Reduced component re-renders by 25%",
        "30% reduction in redundant network requests",
        "Scalable REST API endpoints built with Express",
      ],
    },
    {
      id: "gemini",
      company: "Gemini Solutions",
      role: "Software Engineer L1",
      period: "February 2022 – March 2024",
      location: "Gurugram, India",
      isCurrent: false,
      responsibilities: [
        "Developed 30+ responsive, reusable UI components using React and Material UI, improving development efficiency by 30%.",
        "Managed application state using Redux and NgRx.",
        "Led frontend development of an organizational hierarchy tool using Angular.",
        "Implemented MSAL authentication, CRUD operations, printing, and advanced search.",
        "Improved application load time by 35% through lazy loading and modular routing.",
        "Designed a responsive internal HRIS tool, reducing manual effort by 25%.",
        "Wrote Jasmine/Karma unit tests achieving 85%+ coverage across 6+ releases.",
      ],
      skills: [
        "React.js",
        "Angular",
        "Material UI",
        "Redux",
        "NgRx",
        "MSAL",
        "Jasmine",
        "Karma",
        "HRIS Systems",
      ],
      highlights: [
        "Created 30+ reusable UI component library",
        "35% load time reduction via lazy loading",
        "85%+ unit test coverage across 6+ releases",
      ],
    },
  ],
  projects: [
    {
      id: "namba-event-platform",
      title: "NAMBA",
      tagline: "High-Throughput Event Management & Racing Platform",
      description:
        "A comprehensive event management platform featuring dynamic heat-sheet interfaces, configurable participant entry limits, administrative controls, automated participant emails, and winners' data storage.",
      category: "Event Platform",
      technologies: [
        "React",
        "Redux Toolkit",
        "React Query",
        "Node.js",
        "Express.js",
        "Twilio SendGrid",
        "AWS S3",
        "TypeScript",
      ],
      keyContributions: [
        "Built heat-sheet UI and dynamic filtering with lightning-fast responsive rendering.",
        "Implemented configurable per-class entry limits with backend validation.",
        "Developed backend functionality for storing winners and race photos securely on AWS S3.",
        "Integrated automated email notifications via Twilio SendGrid.",
      ],
      isPrivate: true,
      statusBadge: "Private Enterprise Project",
      featured: true,
      impactMetric: "30% faster data loading & automated notification delivery",
      color: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    },
    {
      id: "orgchart-hierarchy-tool",
      title: "OrgChart",
      tagline: "Enterprise Organizational Hierarchy & Access Management Tool",
      description:
        "An organizational hierarchy management tool designed to visualize multi-level corporate structures with role-based access control, enterprise authentication, and advanced search capabilities.",
      category: "Internal Tool",
      technologies: [
        "Angular",
        "MSAL (Azure AD)",
        "Redux",
        "TypeScript",
        "Material UI",
        "RxJS",
      ],
      keyContributions: [
        "Developed multi-level hierarchy visualization UI with smooth drill-down navigation.",
        "Implemented enterprise MSAL authentication and fine-grained role-based access control (RBAC).",
        "Built advanced search, document printing, and comprehensive administrative features.",
        "Implemented silent token refresh and session handling with Azure AD.",
      ],
      isPrivate: true,
      statusBadge: "Internal Corporate Tool",
      featured: true,
      impactMetric: "35% faster initial load time & 85%+ automated test coverage",
      color: "from-violet-500/20 via-purple-500/10 to-cyan-500/20",
    },
  ],
  education: [
    {
      institution: "Raj Kumar Goel Institute of Technology (RKGIT)",
      degree: "Bachelor of Technology (B.Tech)",
      fieldOfStudy: "Computer Science & Engineering",
      duration: "June 2018 – June 2022",
      grade: "8.38",
      gradeScale: "10",
      location: "Ghaziabad, Uttar Pradesh, India",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
      ],
    },
  ],
};

