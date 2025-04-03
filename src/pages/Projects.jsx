
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from '../components/ParticleBackground';
import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "IOT Smart Metering System",
    description: "Real-time IOT based smart metering system with prepaid bill generation capabilities",
    tags: ["IoT", "Real-time", "Hardware"],
    category: "Full Stack",
    image: "/api/placeholder/600/400",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "CARYA - SAAS E-commerce",
    description: "A full-featured web app for buying trekking equipment with dynamic product management, secure payments, and role-based dashboards",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image: "/api/placeholder/600/400",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "LUMEN - AI Assistant",
    description: "AI-powered assistant using image detection and speech transcription to answer questions with memory retention capabilities",
    tags: ["AI", "Computer Vision", "NLP"],
    category: "Full Stack",
    image: "/api/placeholder/600/400",
    github: "https://github.com"
  },
  {
    id: 4,
    title: "Real-time Collaboration Tool",
    description: "Real-time document editing app with live collaboration, file sharing, version control, and JWT authentication",
    tags: ["React.js", "Socket.io", "Node.js"],
    category: "Full Stack",
    image: "/api/placeholder/600/400",
    github: "https://github.com"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const cardRefs = useRef([]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 10;
    const rotateY = -(x - rect.width / 2) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300 font-poppins">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <AnimatedText 
            text="Projects"
            className="mb-4 font-lora text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            textSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            letterSpacing="tracking-tight"
            lineHeight="leading-none"
          />
          <p className="text-lg sm:text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-poppins font-light tracking-wide">
            A collection of my recent work and personal projects.
          </p>
        </motion.div>

        {/* Main Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              ref={(el) => cardRefs.current[index] = el}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="transform transition-all duration-300"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Slideshow */}
        {projects.length > 3 && (
          <div className="mt-12">
            <h3 className="text-2xl font-lora text-center mb-8 text-[#4a3f35] dark:text-[#e8e3d9]">
              More Projects
            </h3>
            <div className="relative max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <ProjectCard project={projects[currentIndex]} />
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevProject}
                  className="px-4 py-2 bg-[#8b7355] text-white rounded-full hover:bg-[#a69887] transition-colors duration-300"
                >
                  Previous
                </button>
                <div className="flex space-x-2">
                  {projects.slice(3).map((_, idx) => (
                    <button
                      key={idx + 3}
                      onClick={() => setCurrentIndex(idx + 3)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        idx + 3 === currentIndex ? 'bg-[#8b7355]' : 'bg-[#e5ded5] dark:bg-[#363030]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextProject}
                  className="px-4 py-2 bg-[#8b7355] text-white rounded-full hover:bg-[#a69887] transition-colors duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
