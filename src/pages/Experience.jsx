import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedText from '../components/AnimatedText';

const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const timelineData = [
    {
      date: "March 2025 – Present",
      role: "Software Development Engineer - I",
      type: "Full-time", 
      company: "TAILSHUG",
      location: "Bangalore, Karnataka",
      description: "Developing a cross-platform pet services app using Flutter, NestJS, and TypeScript, implementing scalable APIs, real-time booking, secure authentication, and optimized state management."
    },
    {
      date: "May 2024 – July 2024",
      role: "Full-Stack Developer Intern",
      type: "Internship",
      company: "Aayush Bharat - ABNW",
      description: "Developed a new business vertical, improving operational efficiency by 30%, using React.js, Node.js, PHP, and MySQL. Implemented JWT-based authentication, reducing unauthorized access incidents by 20%. Automated bulk onboarding processes, reducing employee processing time by 40%, and integrated a secure payment gateway. Designed features such as consultation booking, e-commerce modules, and analytics dashboards, increasing user engagement by 15%. Optimized system performance, reducing load times by 25% while ensuring cross-device responsiveness."
    },
    {
      date: "May 2024 – June 2024",
      role: "React Internship",
      type: "Internship",
      company: "Celebal Technologies",
      description: "Developed dynamic web applications using React.js, applying component-based architecture to enhance code modularity and maintainability. Built scalable web components by implementing effective state management and lifecycle methods."
    },
    {
      date: "May 2023 – June 2023",
      role: "Web Development Intern",
      type: "Internship",
      company: "Immortal Ventures (Remote)",
      description: "Built a high-performance MERN stack application, reducing page load time by 15%, with a focus on modular architecture and seamless UX. Managed development timelines and collaborated with cross-functional teams, improving project delivery efficiency by 10%."
    },
    {
      date: "May 2023 – June 2023",
      role: "Front End Developer Intern",
      type: "Internship",
      company: "IBM – EDUNET FOUNDATION (Remote)",
      description: "Designed and implemented a Nike clone website using HTML, CSS, and JavaScript, ensuring pixel-perfect design and mobile responsiveness. Developed reusable front-end components, improving development speed by 20%, while ensuring seamless user experience."
    }
  ];

  const [mousePositions, setMousePositions] = useState(
    Array(timelineData.length).fill().map(() => ({ x: 0, y: 0 }))
  );
  const cardRefs = useRef([]);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newMousePositions = [...mousePositions];
    newMousePositions[index] = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    setMousePositions(newMousePositions);

    const card = cardRefs.current[index];
    if (!card) return;

    const rotateX = (e.clientY - rect.top - rect.height / 2) / 10;
    const rotateY = -(e.clientX - rect.left - rect.width / 2) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <AnimatedText 
            text="Experiences"
            className="mb-4"
            textSize="text-6xl md:text-7xl font-lora tracking-tight leading-none"
            letterSpacing="tracking-tight"
            lineHeight="leading-none"
          />
          <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-poppins font-light tracking-wide">
            A journey through my professional growth and accomplishments.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ 
                opacity: 1, 
                x: 0
              }}
              transition={{ 
                duration: 0.6, 
                type: "spring", 
                stiffness: 100,
                delay: index * 0.2 
              }}
              className={`mb-8 flex items-center ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

              <motion.div
                ref={(el) => cardRefs.current[index] = el}
                onClick={() => handleCardClick(index)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={`relative overflow-hidden group rounded-lg transition-all duration-300 
                  border border-[#8b7355]/40 dark:border-[#a69887]/40 
                  hover:border-[#8b7355] dark:hover:border-[#a69887] 
                  w-[45%] 
                  ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                style={{
                  background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)',
                  boxShadow: '0 4px 15px rgba(139,115,85,0.1), inset 0 0 20px rgba(139,115,85,0.05)',
                  transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(300px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px, rgba(139,115,85,0.2), transparent 40%)`,
                    zIndex: 1
                  }}
                ></div>

                <div className="relative z-10 p-6 bg-white/70 dark:bg-[#242020]/80 backdrop-blur-sm">
                  <span 
                    className="absolute top-4 right-4 text-xs text-[#8b7355] dark:text-[#a69887] 
                      tracking-wider 
                      transition-all duration-300 
                      group-hover:text-opacity-90 font-poppins"
                  >
                    {item.date}
                  </span>

                  <h3 
                    className="text-xl font-lora text-[#4a3f35] dark:text-[#e8e3d9] mb-1
                      transition-all duration-300 
                      group-hover:translate-x-1 group-hover:text-opacity-90"
                  >
                    {item.role}
                  </h3>

                  <p 
                    className="text-xs text-[#8b7355] dark:text-[#a69887] 
                      tracking-wider mb-3
                      font-poppins uppercase"
                  >
                    {item.type} • {item.company}
                  </p>

                  <AnimatePresence>
                    {(expandedIndex === index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p 
                          className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2 
                            transition-all duration-300 
                            group-hover:translate-x-2 group-hover:text-opacity-80 font-poppins"
                        >
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;