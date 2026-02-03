"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';


const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row align-center justify-center scroll-mt-20 py-8" ref={ref}>
      <motion.div 
      className="w-full sm:w-[85%] pr-0 sm:pr-6 mb-8 sm:mb-0 sm:ml-[-20px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hello there! <br></br>I am Michael Hassan, a Senior AI Full-Stack Engineer with 7+ years of experience building modern web, mobile, and AI-driven platforms. Specialized in Javascript-based frontend architectures and backend systems built with NestJS, Node.js, and Python.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              Proven track record delivering AI-enabled products including intelligent assistants, automation pipelines, and data-driven services integrated with OpenAI and LangChain. Strong experience designing cloud-native architectures on AWS and Azure, optimizing performance, and leading complex projects from MVP to large-scale production systems.
            </p>
            <p>
              I am focused on building maintainable, high-throughput systems that balance performance, reliability, and long-term scalability. Throughout my career, I have:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed full‑stack web and AI‑integrated applications serving 10,000+ concurrent users</li>
              <li>Built and integrated AI‑powered features including predictive analytics modules and intelligent automation systems</li>
              <li>Optimized data pipelines and prepared datasets for AI models, increasing model accuracy by 20%</li>
            </ul>
            <p>
              I am passionate about creating solutions that make a real impact, whether it is streamlining workflows, improving user experiences, or building scalable infrastructure. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the forefront of software engineering.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default AboutMe
