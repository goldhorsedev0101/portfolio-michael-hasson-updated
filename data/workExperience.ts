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
    position: "Senior AI Fullstack Engineer",
    duration: "Nov 2023 – Present",
    location: "Atlanta, GA",
    year: 2023,
    description: [
      "Architected and developed AI-powered SaaS platforms using TypeScript, React, Node.js, and Python, enabling 10,000+ concurrent users with scalable, high-performance backend services.",
      "Designed and deployed AI/ML pipelines for predictive analytics, recommendation systems, and automation workflows, improving user engagement and operational efficiency.",
      "Built RESTful APIs that integrate AI/ML models into production workflows, ensuring low-latency predictions (<200ms) and high reliability.",
      "Worked extensively with PostgreSQL and NoSQL databases to optimize data ingestion, feature engineering, and model training pipelines, improving AI data access performance by 25–30%.",
      "Implemented generative AI features (text, code, and content generation) and cognitive computing modules, enabling advanced automation and decision-support capabilities.",
      "Deployed containerized AI services on AWS with CI/CD pipelines, ensuring reproducible environments, model versioning, and smooth production updates.",
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
    position: "AI Fullstack Engineer",
    duration: "Apr 2021 – Oct 2023",
    location: "New York, NY",
    year: 2021,
    description: [
      "Developed AI-enhanced web and mobile applications, integrating chatbots and cognitive computing modules to automate workflows and improve user engagement.",
      "Architected modular and maintainable fullstack solutions using MVVM and repository patterns, increasing code reuse and reducing feature delivery timelines by 20%.",
      "Engineered seamless connections between frontend interfaces and 15+ backend APIs, ensuring robust error handling, efficient data transfer, and real-time AI-driven responses.",
      "Built scalable data layers with SQL and NoSQL, implementing caching and offline-first strategies to reduce network load by 30% while maintaining responsive AI services.",
      "Diagnosed and optimized performance bottlenecks in AI workflows, resolving memory leaks and concurrency issues to reduce crash rates by up to 40%.",
      "Introduced observability and monitoring for AI components, including logging, versioning, and runtime metrics, improving system reliability and maintainability.",
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
    company: "Evincedev",
    position: "Fullstack Engineer",
    duration: "Apr 2019 – Mar 2021",
    location: "New York, NY",
    year: 2019,
    description: [
      "Developed and maintained production web applications serving 8,000+ monthly active users using React and Next.js, implementing server-side rendering and static generation to improve initial load times by 35%.",
"Built scalable backend services and REST APIs with Node.js and Python, handling high-volume requests while reducing average API response time by 30%.",
"Integrated frontend and backend systems efficiently, eliminating redundant data processing and improving end-to-end application performance by 25%.",
"Optimized application architecture and code quality through refactoring and modular design, reducing technical debt and accelerating feature delivery by 20%.",
"Collaborated with cross-functional teams to deliver client-branded solutions, consistently meeting project deadlines and maintaining high reliability across multiple web platforms.",
"Supported deployment and production stability by improving error handling and logging, reducing runtime issues and support tickets by 40%."
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
    logo: "https://evincedev.com/"
  },
  {
    company: "Anthology",
    position: "Fullstack Developer",
    duration: "Sep 2016 – Mar 2019",
    location: "New York, NY",
    year: 2016,
    description: [
      "Engineered end-to-end web solutions at Innovify, creating scalable applications for fintech, AI, and enterprise clients using React and Angular on the front-end and Node.js and Python on the backend.",
"Implemented complex business workflows and integrated multiple third-party services through RESTful APIs, improving system efficiency and reducing processing time by 30%.",
"Developed dynamic, data-driven dashboards and interactive UI components, ensuring responsive design and seamless user experience across web and mobile platforms.",
"Optimized database structures in SQL and NoSQL systems, improving query performance and enabling real-time data retrieval for high-volume applications.",
"Participated in Agile development cycles, collaborating with cross-functional teams, conducting code reviews, and deploying projects through CI/CD pipelines on AWS and Azure.",
"Delivered 10+ production-ready applications, including AI-powered analytics tools and fintech solutions, contributing to measurable improvements in client operations and user engagement."
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
    logo: "https://www.anthology.com/"
  }
];
