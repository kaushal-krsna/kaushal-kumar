import project1 from "../assets/projects/loquax.svg";
import project2 from "../assets/projects/BiteRush.svg";
import project3 from "../assets/logo.png";
import project4 from "../assets/projects/chat-bot.png";
import project5 from "../assets/projects/project5.PNG";
import veenoImg from "../assets/projects/veeno png.png";
import farmAuraImg from "../assets/projects/farmaura.svg";

export const HERO_CONTENT = `A Software Engineer learning differently by building real systems, documenting the process, and turning work into visible proof of trust.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With hands-on experience in modern technologies including React, Next.js, FastAPI, AWS Lambda, DynamoDB, PostgreSQL, and MongoDB. My journey in web development is driven by a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "Founding Software Engineer",
    company: "Bizora",
    description: [
      "Architected a secure OAuth 2.0 microservice using Python, AWS Lambda, and API Gateway, implementing RFC 7636 (PKCE) to eliminate security vulnerabilities",
      "Designed scalable Terraform infrastructure with DynamoDB composite keys and GSI to optimize query patterns",
      "Established multi-stage GitHub Actions pipelines enforcing 70% code coverage with Pytest",
      "Built the core 'Vault' file management system using React and Redux Toolkit with optimistic updates, improving user perceived performance by 40%",
      "Integrated REST + WebSocket APIs for real-time file uploads with 95% upload reliability"
    ],
    technologies: ["Python", "AWS Lambda", "Terraform", "React", "Redux Toolkit", "DynamoDB", "GitHub Actions"],
  },
  {
    year: "April 2023 - July 2024",
    role: "Senior Video Editor & Creative Lead",
    company: "Ekcel Academy",
    description: [
      "Led a cross-functional creative team to scale content output, implementing agile-like workflows that increased video production delivery by 30%",
      "Produced 400+ high-retention videos including shorts, reels, and marketing content while maintaining high viewer retention"
    ],
    technologies: ["Premiere Pro", "After Effects", "Gen AI", "Agile Workflows"],
  }
];

export const PROJECTS = [
  {
    title: "Veenoe - AI Edtech Platform",
    image: veenoImg,
    description: [
      "Built a real-time voice AI platform enabling interactive oral exams using Google Gemini Live API",
      "Developed custom WebSocket SDK with exponential backoff for reliable connections",
      "Created production-ready FastAPI backend with dependency injection and IP-based rate limiting",
      "Implemented AudioWorklet and Web Audio API for jitter-free 16kHz microphone capture",
      "Built 13+ headless React components with ownership-based authorization and Clerk authentication"
    ],
    technologies: [
      "Next.js",
      "FastAPI",
      "Gemini Live API",
      "WebSocket",
      "Zustand",
      "TanStack Query",
      "Clerk Auth"
    ],
    link: "https://app.veenoe.com/",
    resumeLink: "https://storage.googleapis.com/acciojob-user-content/resumes/f7e8a5c9-7c1b-48d8-b185-10b278c18668-Kaushal%20Kumar%20Resume.pdf"
  },
  {
    title: "FarmAura - Social Gamification Platform",
    image: farmAuraImg,
    description: [
      "Built a social gamification platform enabling users to create tribes and reward positive actions",
      "Implemented point-based reward system for recognizing good vibes and helpful actions",
      "Developed tribe management system for organizing groups with friends, coworkers, or family",
      "Created redemption marketplace where users can exchange points for real-life rewards and perks",
      "Designed intuitive UI for seamless social interactions and reward tracking"
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Authentication"
    ],
    link: "https://farmaura.vercel.app/"
  },
  {
    title: "Precisium AI",
    image: project5,
    description: [
      "Built an AI-driven SaaS platform using LangChain to generate precise PDF summaries",
      "Optimized summarization pipeline, reducing processing time for 10-page documents to under 5 seconds",
      "Integrated secure backend pipeline with file uploads via UploadThing and payments via Stripe",
      "Implemented PostgreSQL for data persistence and Clerk for secure authentication"
    ],
    technologies: [
      "Next.js",
      "LangChain",
      "Gemini API",
      "Stripe",
      "PostgreSQL",
      "Clerk Auth",
      "UploadThing"
    ],
    link: "https://precisium-ai.vercel.app/"
  },
  {
    title: "Loquax",
    image: project1,
    description: [
      "Developed a real-time messaging platform supporting 100+ concurrent users with sub-200ms latency",
      "Implemented JWT authentication and Socket.io for reliable bidirectional communication",
      "Designed responsive UI with clean design and smooth user experience",
      "Built dynamic chat rooms with active user tracking and instant messaging capabilities"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    link: "https://loquax.onrender.com/signup"
  },
  {
    title: "Bite Rush",
    image: project2,
    description: [
      "Built a food delivery web app with React and Redux for state management",
      "Implemented real-time restaurant listings with dynamic menu updates",
      "Created smooth cart experience with optimized performance for speed and usability",
      "Designed responsive interface using Tailwind CSS for cross-device compatibility"
    ],
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    link: "https://bite-rush.onrender.com/"
  },
  {
    title: "Deep Bot",
    image: project4,
    description: [
      "Developed an AI-powered chatbot using Gemini API for intelligent conversations",
      "Implemented natural language processing for human-like interactions",
      "Optimized for speed and accuracy across various query types",
      "Built with vanilla JavaScript for lightweight, fast-loading experience"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Gemini API"],
    link: "https://kaushalkrsna1602.github.io/Deep-Bot-A-Gemini-Chat-bot/"
  },
];

export const CERTIFICATIONS = [
  {
    title: "Gen AI Certification Bootcamp",
    provider: "Euron",
    skills: ["RAG", "LangChain", "LangGraph", "N8N", "Pinecone", "CI/CD", "Python"]
  },
  {
    title: "Full Stack Web Development",
    provider: "AccioJob",
    skills: ["Data Structures & Algorithms", "System Design", "MERN Stack"]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  university: "Chandigarh University",
  period: "2022 - 2025",
  cgpa: "7.0+",
  coursework: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"]
};

export const CONTACT = {
  address: "New Delhi, Delhi 110042",
  phoneNo: "+91 7461 8104 64",
  email: "kaushal.kr.kr@gmail.com",
  leetcode: "https://leetcode.com/u/kaushalkrsna/",
};
