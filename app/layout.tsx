// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, FaFileAlt } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Michael Hassan",
  description: "Senior AI Full-Stack Engineer with 7+ years of experience building modern web, mobile, and AI-driven platforms. Specialized in Javascript-based frontend architectures and backend systems built with NestJS, Node.js, and Python.",
};

const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <FaUser />,
  },
  {
    name: "Work",
    link: "#work",
    icon: <FaBriefcase />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaCode />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <FaEnvelope />,
  },
  {
    name: "Resume",
    icon: <FaFileAlt />,
    link: "/pdf/resume.pdf",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <meta property="og:title" content="Michael Hassan - Senior AI Fullstack Developer" />
        <meta
          property="og:description"
          content="Senior AI Full-Stack Engineer with 7+ years of experience building modern web, mobile, and AI-driven platforms. Specialized in Javascript-based frontend architectures and backend systems built with NestJS, Node.js, and Python."
        />
        <meta property="og:url" content="https://michaelhassan.dev" />
        <meta
          property="og:image"
          content="https://krishnakumar.dev/pics/web_screenshot.png"
        />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <StickyIcons />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
