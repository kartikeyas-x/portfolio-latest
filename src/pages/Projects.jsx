// // // pages/Projects.jsx
// // import { useState } from 'react';
// // import { motion, AnimatePresence } from "framer-motion";
// // import ProjectCard from '../components/ProjectCard';

// // const projects = [
// //   {
// //     id: 1,
// //     title: "E-commerce Platform",
// //     description: "A full-stack e-commerce platform built with React and Node.js",
// //     tags: ["React", "Node.js", "MongoDB"],
// //     category: "Full Stack",
// //     image: "/api/placeholder/600/400",
// //     github: "https://github.com",
// //     live: "https://example.com"
// //   },
// //   {
// //     id: 2,
// //     title: "Portfolio Website",
// //     description: "A modern portfolio website with smooth animations",
// //     tags: ["React", "Tailwind", "Framer Motion"],
// //     category: "Frontend",
// //     image: "/api/placeholder/600/400",
// //     github: "https://github.com",
// //     live: "https://example.com"
// //   },
// //   {
// //     id: 3,
// //     title: "Task Management API",
// //     description: "RESTful API for task management application",
// //     tags: ["Node.js", "Express", "MongoDB"],
// //     category: "Backend",
// //     image: "/api/placeholder/600/400",
// //     github: "https://github.com"
// //   },
// //   // Add more projects as needed
// // ];

// // const categories = ["All", "Frontend", "Backend", "Full Stack"];

// // const Projects = () => {
// //   const [activeCategory, setActiveCategory] = useState("All");

// //   const filteredProjects = projects.filter(project => 
// //     activeCategory === "All" ? true : project.category === activeCategory
// //   );

// //   return (
// //     <div className="min-h-screen pt-20 pb-16">
// //       <div className="max-w-6xl mx-auto px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
// //           <p className="text-gray-600 mb-8">
// //             A collection of my recent work and personal projects.
// //           </p>

// //           {/* Category Filter */}
// //           <div className="flex flex-wrap gap-4 mb-12">
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 onClick={() => setActiveCategory(category)}
// //                 className={`px-4 py-2 rounded-full transition-colors ${
// //                   activeCategory === category
// //                     ? "bg-gray-800 text-white"
// //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Projects Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <AnimatePresence mode="wait">
// //               {filteredProjects.map((project) => (
// //                 <ProjectCard key={project.id} {...project} />
// //               ))}
// //             </AnimatePresence>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;
// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import ParticleBackground from '../components/ParticleBackground';
// import AnimatedText from '../components/AnimatedText';
// import ProjectCard from '../components/ProjectCard';

// const projects = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     description: "A full-stack e-commerce platform built with React and Node.js",
//     tags: ["React", "Node.js", "MongoDB"],
//     category: "Full Stack",
//     image: "/api/placeholder/600/400",
//     github: "https://github.com",
//     live: "https://example.com"
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description: "A modern portfolio website with smooth animations",
//     tags: ["React", "Tailwind", "Framer Motion"],
//     category: "Frontend",
//     image: "/api/placeholder/600/400",
//     github: "https://github.com",
//     live: "https://example.com"
//   },
//   {
//     id: 3,
//     title: "Task Management API",
//     description: "RESTful API for task management application",
//     tags: ["Node.js", "Express", "MongoDB"],
//     category: "Backend",
//     image: "/api/placeholder/600/400",
//     github: "https://github.com"
//   },
// ];

// const categories = ["All", "Frontend", "Backend", "Full Stack"];

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const cardRefs = useRef([]);

//   const filteredProjects = projects.filter(project => 
//     activeCategory === "All" ? true : project.category === activeCategory
//   );

//   const handleMouseMove = (e, index) => {
//     const card = cardRefs.current[index];
//     if (!card) return;

//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const rotateX = (y - rect.height / 2) / 10;
//     const rotateY = -(x - rect.width / 2) / 10;

//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
//   };

//   const handleMouseLeave = (index) => {
//     const card = cardRefs.current[index];
//     if (!card) return;
//     card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
//   };

//   return (
//     <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300">
//       <div className="absolute inset-0">
//         <ParticleBackground />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12"
//         >
//           <AnimatedText 
//             text="Projects"
//             className="mb-4"
//             textSize="text-6xl md:text-7xl"
//             letterSpacing="tracking-tight"
//             lineHeight="leading-none"
//           />
//           <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-light tracking-wide">
//             A collection of my recent work and personal projects.
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex justify-center space-x-4 mb-12"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-[#8b7355] text-white dark:bg-[#a69887]"
//                   : "bg-[#f0e6d6] text-[#4a3f35] hover:bg-[#e5d5c1] dark:bg-[#363030] dark:text-[#e8e3d9] dark:hover:bg-[#4a3f35]"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, staggerChildren: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           <AnimatePresence>
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 ref={(el) => cardRefs.current[index] = el}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 50 }}
//                 transition={{ 
//                   duration: 0.6, 
//                   type: "spring", 
//                   stiffness: 100 
//                 }}
//                 onMouseMove={(e) => handleMouseMove(e, index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//                 style={{ 
//                   transition: 'transform 0.1s ease-out',
//                   transformStyle: 'preserve-3d' 
//                 }}
//                 className="cursor-pointer"
//               >
//                 <ProjectCard 
//                   project={project}
//                   className="w-full p-6 rounded-sm 
//                     bg-white dark:bg-[#242020] 
//                     border border-[#e5ded5] dark:border-[#363030]
//                     hover:border-[#8b7355] dark:hover:border-[#a69887] 
//                     transition-all duration-300"
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React, { useRef } from 'react';
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
  const cardRefs = useRef([]);

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <AnimatedText 
            text="Projects"
            className="mb-4 font-lora text-6xl md:text-7xl"
            textSize="text-6xl md:text-7xl"
            letterSpacing="tracking-tight"
            lineHeight="leading-none"
          />
          <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-poppins font-light tracking-wide">
            A collection of my recent work and personal projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={(el) => cardRefs.current[index] = el}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 100 
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ 
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d' 
                }}
                className="cursor-pointer"
              >
                <ProjectCard 
                  project={project}
                  className="w-full p-6 rounded-sm 
                    bg-white dark:bg-[#242020] 
                    border border-[#e5ded5] dark:border-[#363030]
                    hover:border-[#8b7355] dark:hover:border-[#a69887] 
                    transition-all duration-300"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
