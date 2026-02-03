import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { useScrollSection } from '@/hooks/use-scroll-section';

interface CodeLines {
  [key: string]: string[];
}

const Terminal = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'javascript'>('python');
  const [typedLines, setTypedLines] = useState<{ [key: string]: string[] }>({ python: ['', '', ''], javascript: ['', '', ''] });
  const [currentLine, setCurrentLine] = useState<{ [key: string]: number }>({ python: 0, javascript: 0 });
  const [currentChar, setCurrentChar] = useState<{ [key: string]: number }>({ python: 0, javascript: 0 });
  const [isTyping, setIsTyping] = useState<{ [key: string]: boolean }>({ python: false, javascript: false });
  const { ref, isVisible } = useScrollSection();

  const codeLines: CodeLines = useMemo(() => ({
    python: [
      'print("Hello, World! 👋 I\'m Michael Hassan")',
      'print("Based in New York, United States")',
      'print("Senior AI Full-Stack Engineer with 7+ years of experience building modern web, mobile, and AI-driven platforms. Specialized in Javascript-based frontend architectures and backend systems built with NestJS, Node.js, and Python. Proven track record delivering AI-enabled products including intelligent assistants, automation pipelines, and data-driven services integrated with OpenAI and LangChain.")'
    ],
    javascript: [
      'console.log("Hello, World! 👋 I\'m Michael Hassan");',
      'console.log("Based in New York, United States");',
      'console.log("Senior AI Full-Stack Engineer with 7+ years of experience building modern web, mobile, and AI-driven platforms. Specialized in Javascript-based frontend architectures and backend systems built with NestJS, Node.js, and Python. Proven track record delivering AI-enabled products including intelligent assistants, automation pipelines, and data-driven services integrated with OpenAI and LangChain.");'
    ]
  }), []);

  const typeLine = useCallback(async (language: 'python' | 'javascript') => {
    const line = codeLines[language][currentLine[language]];
    if (currentChar[language] <= line.length) {
      setTypedLines(prev => ({
        ...prev,
        [language]: prev[language].map((l, idx) => 
          idx === currentLine[language] ? line.slice(0, currentChar[language]) : l
        )
      }));
      setCurrentChar(prev => ({ ...prev, [language]: prev[language] + 1 }));
    } else {
      if (currentLine[language] < codeLines[language].length - 1) {
        setCurrentLine(prev => ({ ...prev, [language]: prev[language] + 1 }));
        setCurrentChar(prev => ({ ...prev, [language]: 0 }));
      } else {
        setIsTyping(prev => ({ ...prev, [language]: false }));
      }
    }
  }, [codeLines, currentLine, currentChar]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsTyping({ python: true, javascript: true });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isTyping[activeTab]) {
      const timer = setTimeout(() => typeLine(activeTab), 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, isTyping, typeLine]);

  const handleTabChange = (tab: 'python' | 'javascript') => {
    setActiveTab(tab);
  };

  return (
    <></>
  );
};

export default Terminal;
