const fs = require("fs");
const path = require("path");

const resumeContent = [
  "BT",
  "/F1 20 Tf",
  "50 740 Td",
  "(MANISH KUMAR PANDEY) Tj",
  "/F2 11 Tf",
  "0 -18 Td",
  "(Full Stack Developer | React & Node.js Specialist) Tj",
  "/F2 9 Tf",
  "0 -14 Td",
  "(Email: manishkpandey.work@gmail.com | Location: Noida, India | LinkedIn: linkedin.com/in/manishkumar-pandey) Tj",
  "0 -22 Td",
  "/F1 12 Tf",
  "(PROFESSIONAL SUMMARY) Tj",
  "/F2 9.5 Tf",
  "0 -14 Td",
  "(Software Engineer with 4+ years of experience building scalable, high-performance web applications.) Tj",
  "0 -12 Td",
  "(Specializes in React, Angular, Node.js, Redux Toolkit, MongoDB, and modern web architectures.) Tj",
  "0 -12 Td",
  "(Track record of improving application performance by 30% and maintaining 85%+ unit test coverage.) Tj",
  "0 -20 Td",
  "/F1 12 Tf",
  "(PROFESSIONAL EXPERIENCE) Tj",
  "/F1 10 Tf",
  "0 -15 Td",
  "(1. Flexsin Technologies - Software Engineer | May 2025 - Present | Noida) Tj",
  "/F2 9 Tf",
  "0 -12 Td",
  "(- Built and optimized React UI components for NAMBA event management platform with Redux Toolkit.) Tj",
  "0 -11 Td",
  "(- Reduced unnecessary API calls and improved performance by 30% using global state and memoization.) Tj",
  "0 -11 Td",
  "(- Integrated React Query for caching, real-time sync, and refactored legacy class components to hooks.) Tj",
  "0 -11 Td",
  "(- Developed Express.js backend module for storing winners data and photos on AWS S3 with SendGrid.) Tj",
  "/F1 10 Tf",
  "0 -16 Td",
  "(2. Yes IT Labs - Full Stack Developer | Sept 2024 - Feb 2025 | Noida) Tj",
  "/F2 9 Tf",
  "0 -12 Td",
  "(- Architected Redux-based state management, reducing unnecessary API calls by 30%.) Tj",
  "0 -11 Td",
  "(- Integrated React Query for server-state synchronization; reduced re-renders by 25%.) Tj",
  "0 -11 Td",
  "(- Designed scalable REST APIs using Node.js and Express.js.) Tj",
  "/F1 10 Tf",
  "0 -16 Td",
  "(3. Gemini Solutions - Software Engineer L1 | Feb 2022 - Mar 2024 | Gurugram) Tj",
  "/F2 9 Tf",
  "0 -12 Td",
  "(- Developed 30+ responsive, reusable UI components in React and Material UI, boosting velocity by 30%.) Tj",
  "0 -11 Td",
  "(- Led frontend development of OrgChart hierarchy tool using Angular and MSAL Azure AD authentication.) Tj",
  "0 -11 Td",
  "(- Reduced application load time by 35% via lazy loading and modular routing.) Tj",
  "0 -11 Td",
  "(- Wrote Jasmine/Karma unit tests achieving 85%+ coverage across 6+ production releases.) Tj",
  "0 -20 Td",
  "/F1 12 Tf",
  "(EDUCATION) Tj",
  "/F1 10 Tf",
  "0 -14 Td",
  "(Bachelor of Technology in Computer Science & Engineering) Tj",
  "/F2 9 Tf",
  "0 -12 Td",
  "(Raj Kumar Goel Institute of Technology (RKGIT) | 2018 - 2022 | CGPA: 8.38 / 10) Tj",
  "0 -20 Td",
  "/F1 12 Tf",
  "(KEY TECHNICAL SKILLS) Tj",
  "/F2 9 Tf",
  "0 -13 Td",
  "(Frontend: React.js, Angular, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Material UI, RxJS) Tj",
  "0 -11 Td",
  "(Backend: Node.js, Express.js, REST APIs, Microservices, GraphQL, JWT Authentication) Tj",
  "0 -11 Td",
  "(Databases & State: MongoDB, MySQL, Neo4j, Redis, Redux Toolkit, React Query, NgRx, Context API) Tj",
  "0 -11 Td",
  "(AI & DevOps: GitHub Copilot, Cursor AI, ChatGPT, AWS S3, Lambda, Docker, Azure Pipelines, Git, Vite) Tj",
  "ET"
].join("\n");

const stream = Buffer.from(resumeContent, "utf-8");

const objects = [
  "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
  "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n",
  "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n",
  "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
  `6 0 obj\n<< /Length ${stream.length} >>\nstream\n${resumeContent}\nendstream\nendobj\n`
];

let offset = 9; // "%PDF-1.4\n"
const xref = ["0000000000 65535 f \n"];
let body = "%PDF-1.4\n";

for (const obj of objects) {
  xref.push(String(offset).padStart(10, "0") + " 00000 n \n");
  body += obj;
  offset += Buffer.byteLength(obj, "utf-8");
}

const xrefStart = offset;
body += `xref\n0 ${xref.length}\n${xref.join("")}`;
body += `trailer\n<< /Size ${xref.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

const publicDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "Manish_Kumar_Pandey_Resume.pdf"), body, "utf-8");
console.log("PDF Resume generated successfully at public/Manish_Kumar_Pandey_Resume.pdf");

// Also create a basic favicon.ico (copying favicon.svg or 1x1 ico)
const icoPath = path.join(publicDir, "favicon.ico");
if (!fs.existsSync(icoPath)) {
  fs.copyFileSync(path.join(publicDir, "favicon.svg"), icoPath);
}
console.log("Favicon prepared.");

