// data/projects.ts

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Contentoo",
    description: "Content marketing platform for brands that need high-quality content — without hiring a full in-house team. It helps marketing teams produce articles, whitepapers, social media posts, and more by connecting them with experienced freelancers in writing, translation, and strategy. The platform supports fast turnaround, brand-relevant messaging, and editorial control at every stage.",
    category: "Personal Project",
    image: "/pics/ai-contentoo.jpg",
    githubLink: "https://www.contentoo.com/",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "PHP", "MySQL", "OpenAI", "Mistral"],
    skills: [
      {name: "Frontend Development"},
      { name: "UI/UX Design"},
      { name: "Responsive Web Design"},
      { name: "Performance Optimization"}
    ]
  },
  {
    id: 2,
    title: "Sharkvision",
    description: "The site showcases services like AI-powered surveillance systems, face recognition products, insurance claim processing tools, attendance/visitor management solutions, and mobile/web development services.",
    category: "Personal Project",
    image: "/pics/ai-sharkvision.jpg",
    githubLink: "https://sharkvisionindia.com/",
    technologies: ["React", "Next.js", "Vue.js", "TailwindCSS", "PHP", "Python", "NestJS","PostgreSQL", "n8n", "Make.com", "Docker", "AWS"],
    skills: [
      {name: "Frontend Development"},
      { name: "UI/UX Design"},
      { name: "Responsive Web Design"},
      { name: "Performance Optimization"}
    ]
  },
  {
    id: 3,
    title: "Talliant",
    description: "Talliant streamlines hiring from job posting to candidate selection. The bot allows HR teams to create and manage job postings, automate resume screening based on predefined criteria, schedule interviews, and track candidate progress through a user-friendly dashboard.",
    category: "Personal Project",
    image: "/pics/ai-tailiant.jpg",
    githubLink: "https://www.talliant.com/",
    technologies: ["React", "Next.js", "Vue.js", "TailwindCSS", "PHP", "Python", "NestJS","MongoDB", "AI Chatbots", "Voice Agents", "Make.com", "Docker", "Firebase", "AWS"],
    skills: [
      {name: "Frontend Development"},
      { name: "UI/UX Design"},
      { name: "Responsive Web Design"},
      { name: "Performance Optimization"}
    ]
  },
  {
    id: 4,
    title: "SiXT",
    description: "Through the site, customers can search, book, and manage vehicle rentals worldwide — ranging from economy cars to premium SUVs — and also access related offerings like car subscriptions, car sharing, ride-hailing, and chauffeur services",
    category: "Personal Project",
    image: "/pics/react-sixt.jpg",
    githubLink: "https://www.sixt.com/",
    technologies: ["React", "Next.js", "Vue.js", "TailwindCSS", "PHP", "NestJS","PostgreSQL", "Microservices Architecture", "JWT Authentication", "Docker", "Firebase", "Amazon S3"],
    skills: [
      {name: "Frontend Development"},
      { name: "UI/UX Design"},
      { name: "Responsive Web Design"},
      { name: "Performance Optimization"}
    ]
  },
  
  {
    id: 5,
    title: "Mokum Taxi – Taxi & Airport Transfers",
    description: "Mokum Taxi lets users book reliable taxi rides and airport transfers in Amsterdam with fixed prices, no surprises, and professional drivers.",
    category: "Personal Project",
    image: "/pics/react-mokum-taxi.jpg",
    githubLink: "https://mokum‑taxi.nl/",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "SendGrid", "Stripe"],
    skills: [
      {name: "Frontend Development"},
      { name: "UI/UX Design"},
      { name: "Responsive Web Design"},
      { name: "Performance Optimization"}
    ]
  },
  {
    id: 6,
    title: "Autodesk – 3D Design, Engineering",
    description: "Autodesk helps teams design, build, and manufacture faster while reducing errors and improving collaboration.",
    category: "Personal Project",
    image: "/pics/react-autodesk.jpg",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Python", "Selenium", "Pandas", "GPT"],
    githubLink: "https://www.autodesk.com/",
    skills: [
      { name: "Data Analysis"},
      { name: "Automation"},
      { name: "Machine Learning"},
      { name: "Document Generation"}
    ]
  },
  {
    id: 7,
    title: "Gro Call – Team Communication",
    description: "Gro Call helps teams manage communication, access, and workflows in one place to reduce manual work and improve coordination.",
    category: "Personal Project",
    technologies: ["React", "Next.js", "TailwindCSS","REST APIs", "PostgreSQL", "Redux Toolkit"],
    image: "/pics/react-grocall.jpg",
    githubLink: "https://www.gro-call.com/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  },
  {
    id: 8,
    title: "Fundraiz – AI‑Powered Fundraising Platform",
    description: "Fundraiz helps nonprofits and fundraisers raise more money by automating donor engagement, analysing donor behaviour, personalising campaigns, and replacing multiple tools with one AI‑driven platform.",
    category: "Personal Project",
    technologies: ["React", "Next.js", "TypeScript","Node.js", "GraphQL", "REST APIs", "PostgreSQL", "AI/ML Integration", "Firebase"],
    image: "/pics/ai-fundraiz.jpg",
    githubLink: "https://visionforlife.au/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  },
  {
    id: 9,
    title: "Arcus BTC – Institutional Bitcoin Yield & Credit Platform",
    description: "Arcus BTC helps institutions and family offices generate secure yield on Bitcoin and stablecoins, access liquidity without selling assets, and integrate Bitcoin lending into their systems with compliance and high security.",
    category: "Personal Project",
    technologies: ["React", "Next.js", "TypeScript","Node.js", "Web3 Libraries", "PostgreSQL", "Docker", "AWS"],
    image: "/pics/blockchain-arcusbtc.jpg",
    githubLink: "https://arcusbtc.com/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  }
];
