// components/SkillsGrid.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaCode, FaReact, FaJs, FaNodeJs, FaGithub, FaAws, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiNestjs, SiPostgresql, SiMongodb, SiRedis, SiVuedotjs, SiGraphql, SiReact, SiDjango, SiDocker, SiFirebase, SiMicrosoftazure, SiFlutter, SiKotlin, SiSwift, SiAngular, SiExpress } from 'react-icons/si';

const SkillsGrid = () => {
  const skills = useMemo(() => [
    // Frontend Frameworks
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiVuedotjs />, name: 'Vue.js' },
    { icon: <SiAngular />, name: 'Angular' },
    
    // Programming Languages
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiKotlin />, name: 'Kotlin' },
    { icon: <SiSwift />, name: 'Swift' },
    
    // Mobile Development
    { icon: <SiReact />, name: 'React Native' },
    { icon: <SiFlutter />, name: 'Flutter' },
    
    // Backend Frameworks
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <SiNestjs />, name: 'NestJS' },
    { icon: <SiDjango />, name: 'Django' },
    
    // API & Data Layer
    { icon: <SiGraphql />, name: 'GraphQL' },
    
    // Databases
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiRedis />, name: 'Redis' },
    { icon: <SiFirebase />, name: 'Firebase' },
    
    // Cloud & DevOps
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiMicrosoftazure />, name: 'Azure' },
    { icon: <SiDocker />, name: 'Docker' },
    
    // AI/ML
    { icon: <FaBrain />, name: 'AI/ML' },
  ], []);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-4 gap-3 sm:gap-5 md:gap-6 mb-8 -mx-2 sm:mx-0"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          custom={index}
          variants={skillVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-card text-card-foreground rounded-lg p-3 sm:p-4 text-center flex flex-col items-center justify-center"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl mb-2 text-primary">{skill.icon}</div>
          <p className="text-xs sm:text-sm md:text-base font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
