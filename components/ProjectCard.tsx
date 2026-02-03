// components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps extends Project {
  isHovered: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  category,
  image,
  technologies, 
  isHovered, 
  githubLink,
  liveLink 
}) => {
  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col md:flex-row group">
        {/* Left Side - Image/Visual */}
        <div className="w-full md:w-1/2 bg-muted/30 flex items-center justify-center p-8 min-h-[300px] relative overflow-hidden">
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="rounded-lg w-full h-full transition-all duration-300 group-hover:brightness-105 group-hover:scale-[1.02]"
              />
              {/* Subtle overlay - normal state */}
              <div className="absolute inset-0 rounded-lg transition-opacity duration-300 group-hover:opacity-0"></div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:from-primary/30 group-hover:to-primary/10">
              <div className="text-3xl text-primary/30 transition-all duration-500 group-hover:text-primary/50">{title.charAt(0)}</div>
            </div>
          )}
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Category */}
            <motion.span
              className="inline-block text-xs font-semibold text-primary mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
            </motion.span>

            {/* Title */}
            <motion.h3
              className="text-xl md:text-xl text-primary font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-foreground/80 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {description}
            </motion.p>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-medium text-white bg-slate-800 border border-white/20 px-3 py-1.5 rounded-md transition-all duration-200 hover:border-white/40 hover:opacity-90"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Links */}
          <motion.div
            className="flex items-center gap-4 justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt size={20} />
              </Link>
            )}
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <svg 
                className="flex-shrink-0 h-5 w-5 hover:text-cyan-300 transition-colors duration-300 text-primary" 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                aria-hidden="true" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
