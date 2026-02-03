// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaAws, FaReact, FaCode, FaServer } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiPostgresql, SiGraphql, SiNextdotjs, SiDocker, SiGithubactions, SiVuedotjs, SiDjango, SiMongodb } from 'react-icons/si';
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "HatchWorks AI",
    position: "Senior AI Fullstack Developer",
    duration: "Jan 2023 – Present",
    location: "Atlanta, GA",
    year: 2023,
    description: [
      "Developed full‑stack web and AI‑integrated applications serving 10,000+ concurrent users, improving system responsiveness and scalability by 30%.",
      "Built and integrated AI‑powered features including predictive analytics modules and intelligent automation systems, enhancing operational efficiency and decision-making speed by 35%.",
      "Designed and maintained backend services and RESTful APIs using Node.js and Python, reducing average data processing time by 25% while ensuring secure and reliable workflows.",
      "Optimized data pipelines and prepared datasets for AI models, increasing model accuracy by 20% and reducing training time by 40%.",
      "Collaborated in agile teams with designers, product managers, and QA engineers to deliver AI-enabled solutions, cutting project delivery cycles by 15% on average.",
      "Contributed to architecture planning and deployment strategies for enterprise AI applications, improving system scalability and reducing runtime errors by 30%.",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaServer },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
    ],
    logo: "https://hatchworks.com/",
  },
  {
    company: "AppsChopper",
    position: "Fullstack Engineer",
    duration: "Jul 2021 – Nov 2022",
    location: "New York, NY",
    year: 2021,
    description: [
      "Developed native and cross-platform mobile applications for Android and iOS using React Native, Flutter, Swift, and Kotlin, supporting scalable architectures and high user concurrency.",
      "Designed and integrated AI-powered mobile features including in-app chatbots, recommendation engines, and predictive analytics, improving user engagement by 30%.",
      "Built mobile-first backend services and RESTful APIs using Node.js and Django, enabling secure data exchange, authentication, and real-time app functionality.",
      "Connected AI and analytics modules to mobile frontends, delivering interactive dashboards, push-notification systems, and data-driven mobile user experiences.",
      "Implemented SQL and NoSQL databases optimized for mobile applications, reducing API response time and improving app performance by 25%.",
      "Built mobile-first backend services and RESTful APIs using Node.js and Django, enabling secure data exchange, authentication, and real-time app functionality.",
      "Participated in the end-to-end mobile app development lifecycle, from requirement analysis and UI/ UX collaboration to App Store / Play Store deployment, increasing delivery speed by 20%."
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaServer },
      { name: "Django", icon: SiDjango },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
    logo: "https://www.appschopper.com/"
  },
  {
    company: "Computools",
    position: "Fullstack Developer",
    duration: "Nov 2017 – Jun 2021",
    location: "New York, NY",
    year: 2017,
    description: [
      "Developed and maintained full‑stack web applications using Node.js, Python, and Django, delivering scalable solutions for clients in finance, healthcare, retail, and consumer services.",
      "Implemented AI-driven features including predictive analytics, intelligent automation, and chatbot systems, enhancing decision-making and operational efficiency by 30%.",
      "Designed and optimized backend APIs and services, ensuring high performance, reliability, and seamless integration with frontend applications.",
      "Collaborated with product managers, designers, and QA teams in agile environments to deliver high-quality, client-focused software on time.",
      "Ensured security and compliance across enterprise applications, maintaining data integrity and meeting industry standards.",
      "Participated in architecture planning, development, testing, and deployment, contributing to the creation of maintainable and scalable software systems.",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaServer },
      { name: "Django", icon: SiDjango },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
    logo: "https://computools.com/"
  }
];
