// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import '../styles/ExperienceTimeline.css';


// // // // // // // // const experiences = [
// // // // // // // //   {
// // // // // // // //     title: 'Software Developer',
// // // // // // // //     company: 'ABC Tech',
// // // // // // // //     location: 'San Francisco, CA',
// // // // // // // //     date: 'Jan 2023 - Present',
// // // // // // // //     description: 'Developing web applications with React and Node.js.',
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'Frontend Intern',
// // // // // // // //     company: 'XYZ Solutions',
// // // // // // // //     location: 'Remote',
// // // // // // // //     date: 'June 2022 - Dec 2022',
// // // // // // // //     description: 'Worked on UI components and collaborated with backend developers.',
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'Web Development Intern',
// // // // // // // //     company: 'Web Inc.',
// // // // // // // //     location: 'Los Angeles, CA',
// // // // // // // //     date: 'Summer 2021',
// // // // // // // //     description: 'Assisted with the creation of responsive websites using HTML, CSS, and JavaScript.',
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const ExperienceTimeline = () => {
// // // // // // // //   const [hoveredItem, setHoveredItem] = useState(null);

// // // // // // // //   return (
// // // // // // // //     <div className="experience-container pt-20">
// // // // // // // //       <h2 className="experience-title">Work Experience</h2>
// // // // // // // //       <div className="timeline">
// // // // // // // //         {experiences.map((item, index) => (
// // // // // // // //           <div
// // // // // // // //             key={index}
// // // // // // // //             className={`timeline-item ${hoveredItem === index ? 'hovered' : ''}`}
// // // // // // // //             onMouseEnter={() => setHoveredItem(index)}
// // // // // // // //             onMouseLeave={() => setHoveredItem(null)}
// // // // // // // //           >
// // // // // // // //             <div className="timeline-circle"></div>
// // // // // // // //             <div className="timeline-content">
// // // // // // // //               <h3>{item.title}</h3>
// // // // // // // //               <p className="company">{item.company} - {item.location}</p>
// // // // // // // //               <p className="date">{item.date}</p>
// // // // // // // //               <p className="description">{item.description}</p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ExperienceTimeline;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import '../styles/ExperienceTimeline.css';

// // // // // // // const experiences = [
// // // // // // //   {
// // // // // // //     title: 'Software Developer',
// // // // // // //     company: 'ABC Tech',
// // // // // // //     location: 'San Francisco, CA',
// // // // // // //     date: 'Jan 2023 - Present',
// // // // // // //     description: 'Developing web applications with React and Node.js.',
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: 'Frontend Intern',
// // // // // // //     company: 'XYZ Solutions',
// // // // // // //     location: 'Remote',
// // // // // // //     date: 'June 2022 - Dec 2022',
// // // // // // //     description: 'Worked on UI components and collaborated with backend developers.',
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: 'Web Development Intern',
// // // // // // //     company: 'Web Inc.',
// // // // // // //     location: 'Los Angeles, CA',
// // // // // // //     date: 'Summer 2021',
// // // // // // //     description: 'Assisted with the creation of responsive websites using HTML, CSS, and JavaScript.',
// // // // // // //   },
// // // // // // // ];

// // // // // // // const ExperienceTimeline = () => {
// // // // // // //   const [hoveredItem, setHoveredItem] = useState(null);
// // // // // // //   const [darkMode, setDarkMode] = useState(false);

// // // // // // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // // // // // //   return (
// // // // // // //     <div className={`experience-container ${darkMode ? 'dark' : 'light'}`}>
// // // // // // //       <button onClick={toggleDarkMode} className="toggle-dark-mode">
// // // // // // //         {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
// // // // // // //       </button>
// // // // // // //       <h1 className="experience-title">Work Experience</h1>
// // // // // // //       <div className="timeline">
// // // // // // //         {experiences.map((item, index) => (
// // // // // // //           <div
// // // // // // //             className={`timeline-item ${hoveredItem === index ? 'hovered' : ''}`}
// // // // // // //             key={index}
// // // // // // //             onMouseEnter={() => setHoveredItem(index)}
// // // // // // //             onMouseLeave={() => setHoveredItem(null)}
// // // // // // //           >
// // // // // // //             <div className="timeline-circle"></div>
// // // // // // //             <div className="timeline-content">
// // // // // // //               <h3>{item.title}</h3>
// // // // // // //               <div className="company">
// // // // // // //                 {item.company} - {item.location}
// // // // // // //               </div>
// // // // // // //               <div className="date">{item.date}</div>
// // // // // // //               <div className="description">{item.description}</div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ExperienceTimeline;
// // // // // // // import React from 'react';
// // // // // // // import ParticleBackground from '../components/ParticleBackground'; // Reuse the particle animation

// // // // // // // const ExperienceTimeline = () => {
// // // // // // //   const timelineData = [
// // // // // // //     {
// // // // // // //       date: "May 2023 - Aug 2023",
// // // // // // //       role: "Software Developer Intern",
// // // // // // //       description: "Developed responsive web applications and optimized performance.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       date: "Sep 2023 - Dec 2023",
// // // // // // //       role: "Full-Stack Developer",
// // // // // // //       description: "Built end-to-end solutions for e-commerce platforms.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       date: "Jan 2024 - Mar 2024",
// // // // // // //       role: "UI/UX Designer",
// // // // // // //       description: "Designed user-friendly interfaces for SaaS products.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] text-[#4a3f35] dark:text-[#e8e3d9] transition-colors duration-300">
// // // // // // //       {/* Animated Background */}
// // // // // // //       <div className="absolute inset-0">
// // // // // // //         <ParticleBackground />
// // // // // // //       </div>

// // // // // // //       {/* Timeline Content */}
// // // // // // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// // // // // // //         <h1 className="text-4xl font-light tracking-wide text-center">
// // // // // // //           My Professional Timeline
// // // // // // //         </h1>
// // // // // // //         <p className="mt-4 text-center text-lg text-[#6b563c] dark:text-[#c4b5a1]">
// // // // // // //           A journey through my experiences and accomplishments.
// // // // // // //         </p>

// // // // // // //         <div className="mt-12 relative">
// // // // // // //           <div className="border-l-4 border-[#8b7355] dark:border-[#a69887]">
// // // // // // //             {timelineData.map((item, index) => (
// // // // // // //               <div
// // // // // // //                 key={index}
// // // // // // //                 className="mb-8 ml-8 group relative"
// // // // // // //               >
// // // // // // //                 <div
// // // // // // //                   className="absolute w-4 h-4 bg-[#8b7355] dark:bg-[#a69887] rounded-full 
// // // // // // //                     -left-2.5 group-hover:scale-110 transition-transform duration-300"
// // // // // // //                 ></div>

// // // // // // //                 <div
// // // // // // //                   className="relative bg-[#fff] dark:bg-[#242020] p-6 rounded-lg shadow-md border border-[#e5ded5] 
// // // // // // //                   dark:border-[#363030] hover:shadow-lg hover:translate-y-[-2px] 
// // // // // // //                   transition-all duration-300"
// // // // // // //                 >
// // // // // // //                   <span className="block text-sm text-[#8b7355] dark:text-[#a69887] tracking-wider">
// // // // // // //                     {item.date}
// // // // // // //                   </span>
// // // // // // //                   <h2 className="mt-2 text-xl font-medium text-[#4a3f35] dark:text-[#e8e3d9]">
// // // // // // //                     {item.role}
// // // // // // //                   </h2>
// // // // // // //                   <p className="mt-3 text-sm text-[#665544] dark:text-[#bdb7ae]">
// // // // // // //                     {item.description}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ExperienceTimeline;
// // // // // // import React from 'react';
// // // // // // import { motion } from 'framer-motion';
// // // // // // import ParticleBackground from '../components/ParticleBackground';

// // // // // // const ExperienceTimeline = () => {
// // // // // //   const timelineData = [
// // // // // //     {
// // // // // //       date: "May 2023 - Aug 2023",
// // // // // //       role: "Software Developer Intern",
// // // // // //       description: "Developed responsive web applications and optimized performance.",
// // // // // //     },
// // // // // //     {
// // // // // //       date: "Sep 2023 - Dec 2023",
// // // // // //       role: "Full-Stack Developer",
// // // // // //       description: "Built end-to-end solutions for e-commerce platforms.",
// // // // // //     },
// // // // // //     {
// // // // // //       date: "Jan 2024 - Mar 2024",
// // // // // //       role: "UI/UX Designer",
// // // // // //       description: "Designed user-friendly interfaces for SaaS products.",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] text-[#4a3f35] dark:text-[#e8e3d9] transition-colors duration-300">
// // // // // //       {/* Animated Background */}
// // // // // //       <div className="absolute inset-0">
// // // // // //         <ParticleBackground />
// // // // // //       </div>

// // // // // //       {/* Timeline Content */}
// // // // // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
// // // // // //         <h1 className="text-4xl font-light tracking-wide text-center">
// // // // // //           Experiences
// // // // // //         </h1>
// // // // // //         <p className="mt-4 text-center text-lg text-[#6b563c] dark:text-[#c4b5a1]">
// // // // // //           A journey through my professional growth and accomplishments.
// // // // // //         </p>

// // // // // //         <div className="mt-12 relative">
// // // // // //           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
// // // // // //           {timelineData.map((item, index) => (
// // // // // //             <motion.div
// // // // // //               key={index}
// // // // // //               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ 
// // // // // //                 duration: 0.6, 
// // // // // //                 type: "spring", 
// // // // // //                 stiffness: 100,
// // // // // //                 delay: index * 0.2 
// // // // // //               }}
// // // // // //               whileHover={{ scale: 1.02 }}
// // // // // //               className={`mb-8 flex items-center ${
// // // // // //                 index % 2 === 0 ? 'flex-row-reverse' : ''
// // // // // //               }`}
// // // // // //             >
// // // // // //               {/* Timeline Dot */}
// // // // // //               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

// // // // // //               {/* Card */}
// // // // // //               <motion.div
// // // // // //                 whileHover={{ 
// // // // // //                   boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// // // // // //                   y: -5
// // // // // //                 }}
// // // // // //                 className={`w-[45%] p-6 rounded-lg bg-white/90 dark:bg-[#242020]/90 
// // // // // //                   backdrop-blur-sm border border-[#e5ded5] dark:border-[#363030]
// // // // // //                   transition-all duration-300 ease-in-out ${
// // // // // //                     index % 2 === 0 ? 'mr-auto' : 'ml-auto'
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 <span className="block text-sm text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2">
// // // // // //                   {item.date}
// // // // // //                 </span>
// // // // // //                 <h2 className="text-xl font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-3">
// // // // // //                   {item.role}
// // // // // //                 </h2>
// // // // // //                 <p className="text-sm text-[#665544] dark:text-[#bdb7ae]">
// // // // // //                   {item.description}
// // // // // //                 </p>
// // // // // //               </motion.div>
// // // // // //             </motion.div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ExperienceTimeline;

// // // // // import React, { useState } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // import ParticleBackground from '../components/ParticleBackground';

// // // // // const ExperienceTimeline = () => {
// // // // //   const [expandedIndex, setExpandedIndex] = useState(null);

// // // // //   const timelineData = [
// // // // //     {
// // // // //       date: "May 2023 - Aug 2023",
// // // // //       role: "Software Developer Intern",
// // // // //       description: "Developed responsive web applications and optimized performance.",
// // // // //     },
// // // // //     {
// // // // //       date: "Sep 2023 - Dec 2023",
// // // // //       role: "Full-Stack Developer",
// // // // //       description: "Built end-to-end solutions for e-commerce platforms.",
// // // // //     },
// // // // //     {
// // // // //       date: "Jan 2024 - Mar 2024",
// // // // //       role: "UI/UX Designer",
// // // // //       description: "Designed user-friendly interfaces for SaaS products.",
// // // // //     },
// // // // //   ];

// // // // //   const handleCardClick = (index) => {
// // // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] text-[#4a3f35] dark:text-[#e8e3d9] transition-colors duration-300">
// // // // //       {/* Animated Background */}
// // // // //       <div className="absolute inset-0">
// // // // //         <ParticleBackground />
// // // // //       </div>

// // // // //       {/* Timeline Content */}
// // // // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
// // // // //         <motion.h1 
// // // // //           whileHover={{ scale: 1.05 }}
// // // // //           className="text-4xl font-light tracking-wide text-right"
// // // // //         >
// // // // //           Experiences
// // // // //         </motion.h1>
// // // // //         <motion.p 
// // // // //           whileHover={{ scale: 1.02 }}
// // // // //           className="mt-4 text-right text-lg text-[#6b563c] dark:text-[#c4b5a1]"
// // // // //         >
// // // // //           A journey through my professional growth and accomplishments.
// // // // //         </motion.p>

// // // // //         <div className="mt-12 relative">
// // // // //           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
// // // // //           {timelineData.map((item, index) => (
// // // // //             <motion.div
// // // // //               key={index}
// // // // //               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// // // // //               animate={{ 
// // // // //                 opacity: 1, 
// // // // //                 x: 0,
// // // // //                 height: expandedIndex === index ? 'auto' : 'auto',
// // // // //                 scale: expandedIndex !== null && expandedIndex !== index ? 0.95 : 1
// // // // //               }}
// // // // //               transition={{ 
// // // // //                 duration: 0.6, 
// // // // //                 type: "spring", 
// // // // //                 stiffness: 100,
// // // // //                 delay: index * 0.2 
// // // // //               }}
// // // // //               whileHover={{ scale: 1.02 }}
// // // // //               className={`mb-8 flex items-center ${
// // // // //                 index % 2 === 0 ? 'flex-row-reverse' : ''
// // // // //               }`}
// // // // //             >
// // // // //               {/* Timeline Dot */}
// // // // //               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

// // // // //               {/* Card */}
// // // // //               <motion.div
// // // // //                 onClick={() => handleCardClick(index)}
// // // // //                 whileHover={{ 
// // // // //                   boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// // // // //                   y: -5
// // // // //                 }}
// // // // //                 className={`w-[45%] p-6 rounded-lg bg-white/90 dark:bg-[#242020]/90 
// // // // //                   backdrop-blur-sm border border-[#e5ded5] dark:border-[#363030]
// // // // //                   transition-all duration-300 ease-in-out cursor-pointer ${
// // // // //                     index % 2 === 0 ? 'mr-auto' : 'ml-auto'
// // // // //                   }`}
// // // // //               >
// // // // //                 <span className="block text-sm text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2">
// // // // //                   {item.date}
// // // // //                 </span>
// // // // //                 <h2 className="text-xl font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-3">
// // // // //                   {item.role}
// // // // //                 </h2>
// // // // //                 <AnimatePresence>
// // // // //                   {(expandedIndex === index) && (
// // // // //                     <motion.div
// // // // //                       initial={{ opacity: 0, height: 0 }}
// // // // //                       animate={{ 
// // // // //                         opacity: 1, 
// // // // //                         height: 'auto',
// // // // //                         transition: { 
// // // // //                           duration: 0.3,
// // // // //                           type: "tween"
// // // // //                         }
// // // // //                       }}
// // // // //                       exit={{ 
// // // // //                         opacity: 0, 
// // // // //                         height: 0,
// // // // //                         transition: { 
// // // // //                           duration: 0.2
// // // // //                         }
// // // // //                       }}
// // // // //                       className="overflow-hidden"
// // // // //                     >
// // // // //                       <p className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2">
// // // // //                         {item.description}
// // // // //                       </p>
// // // // //                     </motion.div>
// // // // //                   )}
// // // // //                 </AnimatePresence>
// // // // //               </motion.div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ExperienceTimeline;
// // // // import React, { useState } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import ParticleBackground from '../components/ParticleBackground';

// // // // const ExperienceTimeline = () => {
// // // //   const [expandedIndex, setExpandedIndex] = useState(null);

// // // //   const timelineData = [
// // // //     {
// // // //       date: "May 2023 - Aug 2023",
// // // //       role: "Software Developer Intern",
// // // //       description: "Developed responsive web applications and optimized performance.",
// // // //     },
// // // //     {
// // // //       date: "Sep 2023 - Dec 2023",
// // // //       role: "Full-Stack Developer",
// // // //       description: "Built end-to-end solutions for e-commerce platforms.",
// // // //     },
// // // //     {
// // // //       date: "Jan 2024 - Mar 2024",
// // // //       role: "UI/UX Designer",
// // // //       description: "Designed user-friendly interfaces for SaaS products.",
// // // //     },
// // // //   ];

// // // //   const handleCardClick = (index) => {
// // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // //   };

// // // //   return (
// // // //     <div className="relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] text-[#4a3f35] dark:text-[#e8e3d9] transition-colors duration-300">
// // // //       {/* Animated Background */}
// // // //       <div className="absolute inset-0">
// // // //         <ParticleBackground />
// // // //       </div>

// // // //       {/* Timeline Content */}
// // // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
// // // //         <h1 
// // // //           className="text-4xl font-light tracking-wide text-left"
// // // //         >
// // // //           <motion.span 
// // // //             whileHover={{
// // // //               scale: 1.05,
// // // //               textShadow: "0 1px 3px rgba(0,0,0,0.2)"
// // // //             }}
// // // //             transition={{ 
// // // //               type: "spring", 
// // // //               stiffness: 300, 
// // // //               damping: 10 
// // // //             }}
// // // //           >
// // // //             Experiences
// // // //           </motion.span>
// // // //         </h1>
// // // //         <motion.p 
// // // //           whileHover={{
// // // //             scale: 1.05,
// // // //             textShadow: `
// // // //               1px 1px 0px rgba(255,0,0,0.3), 
// // // //               -1px -1px 0px rgba(0,255,0,0.3), 
// // // //               2px 2px 0px rgba(0,0,255,0.3)
// // // //             `
// // // //           }}
// // // //           className="mt-4 text-left text-lg text-[#6b563c] dark:text-[#c4b5a1]"
// // // //         >
// // // //           A journey through my professional growth and accomplishments.
// // // //         </motion.p>

// // // //         <div className="mt-12 relative">
// // // //           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
// // // //           {timelineData.map((item, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// // // //               animate={{ 
// // // //                 opacity: 1, 
// // // //                 x: 0,
// // // //                 height: 'auto'
// // // //               }}
// // // //               transition={{ 
// // // //                 duration: 0.6, 
// // // //                 type: "spring", 
// // // //                 stiffness: 100,
// // // //                 delay: index * 0.2 
// // // //               }}
// // // //               className={`mb-8 flex items-center ${
// // // //                 index % 2 === 0 ? 'flex-row-reverse' : ''
// // // //               }`}
// // // //             >
// // // //               {/* Timeline Dot */}
// // // //               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

// // // //               {/* Card */}
// // // //               <motion.div
// // // //                 onClick={() => handleCardClick(index)}
// // // //                 whileHover={{ 
// // // //                   boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// // // //                   y: -5
// // // //                 }}
// // // //                 className={`w-[45%] p-6 rounded-lg bg-white/90 dark:bg-[#242020]/90 
// // // //                   backdrop-blur-sm border border-[#e5ded5] dark:border-[#363030]
// // // //                   transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${
// // // //                     index % 2 === 0 ? 'mr-auto' : 'ml-auto'
// // // //                   }`}
// // // //               >
// // // //                 <span className="block text-sm text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2">
// // // //                   {item.date}
// // // //                 </span>
// // // //                 <h2 className="text-xl font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-3">
// // // //                   {item.role}
// // // //                 </h2>
// // // //                 <AnimatePresence>
// // // //                   {(expandedIndex === index) && (
// // // //                     <motion.div
// // // //                       initial={{ opacity: 0, height: 0 }}
// // // //                       animate={{ 
// // // //                         opacity: 1, 
// // // //                         height: 'auto',
// // // //                         transition: { 
// // // //                           duration: 0.3,
// // // //                           type: "tween"
// // // //                         }
// // // //                       }}
// // // //                       exit={{ 
// // // //                         opacity: 0, 
// // // //                         height: 0,
// // // //                         transition: { 
// // // //                           duration: 0.2
// // // //                         }
// // // //                       }}
// // // //                       className="overflow-hidden"
// // // //                     >
// // // //                       <p className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2">
// // // //                         {item.description}
// // // //                       </p>
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>
// // // //               </motion.div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ExperienceTimeline;

// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import ParticleBackground from '../components/ParticleBackground';

// // // const HoverText = ({ children }) => {
// // //   const letters = children.split('');

// // //   return (
// // //     <motion.span 
// // //       className="relative inline-block"
// // //       whileHover="hover"
// // //     >
// // //       {letters.map((letter, index) => (
// // //         <motion.span
// // //           key={index}
// // //           className="inline-block relative"
// // //           variants={{
// // //             hover: {
// // //               color: index % 3 === 0 ? 'rgba(0,0,0,0.3)' : 'inherit'
// // //             }
// // //           }}
// // //         >
// // //           {letter}
// // //         </motion.span>
// // //       ))}
// // //       <motion.span 
// // //         className="absolute bottom-0 left-0 w-full h-0.5 bg-black/50 dark:bg-white/50"
// // //         initial={{ scaleX: 0 }}
// // //         variants={{
// // //           hover: { 
// // //             scaleX: 1,
// // //             transition: {
// // //               duration: 0.5,
// // //               ease: "easeInOut"
// // //             }
// // //           }
// // //         }}
// // //       />
// // //     </motion.span>
// // //   );
// // // };

// // // const ExperienceTimeline = () => {
// // //   const [expandedIndex, setExpandedIndex] = useState(null);

// // //   const timelineData = [
// // //     {
// // //       date: "May 2023 - Aug 2023",
// // //       role: "Software Developer Intern",
// // //       description: "Developed responsive web applications and optimized performance.",
// // //     },
// // //     {
// // //       date: "Sep 2023 - Dec 2023",
// // //       role: "Full-Stack Developer",
// // //       description: "Built end-to-end solutions for e-commerce platforms.",
// // //     },
// // //     {
// // //       date: "Jan 2024 - Mar 2024",
// // //       role: "UI/UX Designer",
// // //       description: "Designed user-friendly interfaces for SaaS products.",
// // //     },
// // //   ];

// // //   const handleCardClick = (index) => {
// // //     setExpandedIndex(expandedIndex === index ? null : index);
// // //   };

// // //   return (
// // //     <div className="relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] text-[#4a3f35] dark:text-[#e8e3d9] transition-colors duration-300">
// // //       <div className="absolute inset-0">
// // //         <ParticleBackground />
// // //       </div>

// // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
// // //         <h1 className="text-4xl font-light tracking-wide text-left mb-4">
// // //           <HoverText>Experiences</HoverText>
// // //         </h1>

// // //         <p className="mt-4 text-left text-lg text-[#6b563c] dark:text-[#c4b5a1]">
// // //           A journey through my professional growth and accomplishments.
// // //         </p>

// // //         <div className="mt-12 relative">
// // //           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
// // //           {timelineData.map((item, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// // //               animate={{ 
// // //                 opacity: 1, 
// // //                 x: 0
// // //               }}
// // //               transition={{ 
// // //                 duration: 0.6, 
// // //                 type: "spring", 
// // //                 stiffness: 100,
// // //                 delay: index * 0.2 
// // //               }}
// // //               className={`mb-8 flex items-center ${
// // //                 index % 2 === 0 ? 'flex-row-reverse' : ''
// // //               }`}
// // //             >
// // //               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

// // //               <motion.div
// // //                 onClick={() => handleCardClick(index)}
// // //                 whileHover={{ 
// // //                   boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// // //                   y: -5
// // //                 }}
// // //                 className={`w-[45%] p-6 rounded-lg bg-white/90 dark:bg-[#242020]/90 
// // //                   backdrop-blur-sm border border-[#e5ded5] dark:border-[#363030]
// // //                   transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${
// // //                     index % 2 === 0 ? 'mr-auto' : 'ml-auto'
// // //                   }`}
// // //               >
// // //                 <span className="block text-sm text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2">
// // //                   {item.date}
// // //                 </span>
// // //                 <h2 className="text-xl font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-3">
// // //                   {item.role}
// // //                 </h2>
// // //                 {(expandedIndex === index) && (
// // //                   <div className="overflow-hidden">
// // //                     <p className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2">
// // //                       {item.description}
// // //                     </p>
// // //                   </div>
// // //                 )}
// // //               </motion.div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ExperienceTimeline;

// // import React, { useState, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import ParticleBackground from '../components/ParticleBackground';

// // const HoverText = ({ children }) => {
// //   const letters = children.split('');

// //   return (
// //     <motion.span 
// //       className="relative inline-block text-5xl font-bold"
// //       whileHover="hover"
// //     >
// //       {letters.map((letter, index) => (
// //         <motion.span
// //           key={index}
// //           className="inline-block relative"
// //           variants={{
// //             hover: {
// //               color: index % 3 === 0 ? 'rgba(0,0,0,0.3)' : 'inherit'
// //             }
// //           }}
// //         >
// //           {letter}
// //         </motion.span>
// //       ))}
// //       <motion.span 
// //         className="absolute bottom-1/2 left-0 w-full h-0.5 bg-black/50 dark:bg-white/50"
// //         initial={{ scaleX: 0 }}
// //         variants={{
// //           hover: { 
// //             scaleX: 1,
// //             transition: {
// //               duration: 0.5,
// //               ease: "easeInOut"
// //             }
// //           }
// //         }}
// //       />
// //     </motion.span>
// //   );
// // };

// // const ExperienceTimeline = () => {
// //   const [expandedIndex, setExpandedIndex] = useState(null);
// //   const cardRefs = useRef([]);

// //   const timelineData = [
// //     {
// //       date: "May 2023 - Aug 2023",
// //       role: "Software Developer Intern",
// //       description: "Developed responsive web applications and optimized performance.",
// //     },
// //     {
// //       date: "Sep 2023 - Dec 2023",
// //       role: "Full-Stack Developer",
// //       description: "Built end-to-end solutions for e-commerce platforms.",
// //     },
// //     {
// //       date: "Jan 2024 - Mar 2024",
// //       role: "UI/UX Designer",
// //       description: "Designed user-friendly interfaces for SaaS products.",
// //     },
// //   ];

// //   const handleCardClick = (index) => {
// //     setExpandedIndex(expandedIndex === index ? null : index);
// //   };

// //   const handleMouseMove = (e, index) => {
// //     const card = cardRefs.current[index];
// //     if (!card) return;

// //     const rect = card.getBoundingClientRect();
// //     const x = e.clientX - rect.left;
// //     const y = e.clientY - rect.top;

// //     const rotateX = (y - rect.height / 2) / 10;
// //     const rotateY = -(x - rect.width / 2) / 10;

// //     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
// //   };

// //   const handleMouseLeave = (index) => {
// //     const card = cardRefs.current[index];
// //     if (!card) return;
// //     card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
// //   };

// //   return (
// //     <div className="relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] text-[#4a3f35] dark:text-[#e8e3d9] transition-colors duration-300">
// //       <div className="absolute inset-0">
// //         <ParticleBackground />
// //       </div>

// //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
// //         <h1 className="text-left mb-4">
// //           <HoverText>Experiences</HoverText>
// //         </h1>

// //         <p className="mt-4 text-left text-lg text-[#6b563c] dark:text-[#c4b5a1]">
// //           A journey through my professional growth and accomplishments.
// //         </p>

// //         <div className="mt-12 relative">
// //           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
// //           {timelineData.map((item, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// //               animate={{ 
// //                 opacity: 1, 
// //                 x: 0
// //               }}
// //               transition={{ 
// //                 duration: 0.6, 
// //                 type: "spring", 
// //                 stiffness: 100,
// //                 delay: index * 0.2 
// //               }}
// //               className={`mb-8 flex items-center ${
// //                 index % 2 === 0 ? 'flex-row-reverse' : ''
// //               }`}
// //             >
// //               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

// //               <motion.div
// //                 ref={(el) => cardRefs.current[index] = el}
// //                 onClick={() => handleCardClick(index)}
// //                 onMouseMove={(e) => handleMouseMove(e, index)}
// //                 onMouseLeave={() => handleMouseLeave(index)}
// //                 whileHover={{ 
// //                   boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// //                 }}
// //                 className={`w-[45%] p-6 rounded-lg bg-white/90 dark:bg-[#242020]/90 
// //                   backdrop-blur-sm border border-[#e5ded5] dark:border-[#363030]
// //                   transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${
// //                     index % 2 === 0 ? 'mr-auto' : 'ml-auto'
// //                   }`}
// //                 style={{ 
// //                   transition: 'transform 0.1s ease-out',
// //                   transformStyle: 'preserve-3d' 
// //                 }}
// //               >
// //                 <span className="block text-sm text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2">
// //                   {item.date}
// //                 </span>
// //                 <h2 className="text-xl font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-3">
// //                   {item.role}
// //                 </h2>
// //                 {(expandedIndex === index) && (
// //                   <motion.div
// //                     initial={{ opacity: 0, height: 0 }}
// //                     animate={{ opacity: 1, height: 'auto' }}
// //                     exit={{ opacity: 0, height: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     className="overflow-hidden"
// //                   >
// //                     <p className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2">
// //                       {item.description}
// //                     </p>
// //                   </motion.div>
// //                 )}
// //               </motion.div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExperienceTimeline;
// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ParticleBackground from '../components/ParticleBackground';
// import AnimatedText from '../components/AnimatedText';

// const ExperienceTimeline = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const cardRefs = useRef([]);

//   const timelineData = [
//     {
//       date: "May 2023 - Aug 2023",
//       role: "Software Developer Intern",
//       description: "Developed responsive web applications and optimized performance.",
//     },
//     {
//       date: "Sep 2023 - Dec 2023",
//       role: "Full-Stack Developer",
//       description: "Built end-to-end solutions for e-commerce platforms.",
//     },
//     {
//       date: "Jan 2024 - Mar 2024",
//       role: "UI/UX Designer",
//       description: "Designed user-friendly interfaces for SaaS products.",
//     },
//   ];

//   const handleCardClick = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

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
//             text="Experiences"
//             className="mb-4"
//             textSize="text-6xl md:text-7xl"
//             letterSpacing="tracking-tight"
//             lineHeight="leading-none"
//           />
//           <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-light tracking-wide">
//             A journey through my professional growth and accomplishments.
//           </p>
//         </motion.div>

//         <div className="mt-12 relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
//           {timelineData.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={{ 
//                 opacity: 1, 
//                 x: 0
//               }}
//               transition={{ 
//                 duration: 0.6, 
//                 type: "spring", 
//                 stiffness: 100,
//                 delay: index * 0.2 
//               }}
//               className={`mb-8 flex items-center ${
//                 index % 2 === 0 ? 'flex-row-reverse' : ''
//               }`}
//             >
//               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

//               <motion.div
//                 ref={(el) => cardRefs.current[index] = el}
//                 onClick={() => handleCardClick(index)}
//                 onMouseMove={(e) => handleMouseMove(e, index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//                 whileHover={{ 
//                   boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//                 }}
//                 className={`w-[45%] p-6 rounded-sm 
//                   bg-white dark:bg-[#242020] 
//                   border border-[#e5ded5] dark:border-[#363030]
//                   hover:border-[#8b7355] dark:hover:border-[#a69887] 
//                   transition-all duration-300
//                   cursor-pointer overflow-hidden ${
//                     index % 2 === 0 ? 'mr-auto' : 'ml-auto'
//                   }`}
//                 style={{ 
//                   transition: 'transform 0.1s ease-out',
//                   transformStyle: 'preserve-3d' 
//                 }}
//               >
//                 <span className="block text-xs text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2">
//                   {item.date}
//                 </span>
//                 <h3 className="text-xl font-light text-[#4a3f35] dark:text-[#e8e3d9] mb-3">
//                   {item.role}
//                 </h3>
//                 <AnimatePresence>
//                   {(expandedIndex === index) && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2">
//                         {item.description}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;
// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ParticleBackground from '../components/ParticleBackground';
// import AnimatedText from '../components/AnimatedText';

// const ExperienceTimeline = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [mousePositions, setMousePositions] = useState(
//     new Array(3).fill({ x: 0, y: 0 })
//   );
//   const cardRefs = useRef([]);

//   const timelineData = [
//     {
//       date: "May 2023 - Aug 2023",
//       role: "Software Developer Intern",
//       description: "Developed responsive web applications and optimized performance.",
//     },
//     {
//       date: "Sep 2023 - Dec 2023",
//       role: "Full-Stack Developer",
//       description: "Built end-to-end solutions for e-commerce platforms.",
//     },
//     {
//       date: "Jan 2024 - Mar 2024",
//       role: "UI/UX Designer",
//       description: "Designed user-friendly interfaces for SaaS products.",
//     },
//   ];

//   const handleCardClick = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const handleMouseMove = (e, index) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const newMousePositions = [...mousePositions];
//     newMousePositions[index] = {
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     };
//     setMousePositions(newMousePositions);

//     const card = cardRefs.current[index];
//     if (!card) return;

//     const rotateX = (e.clientY - rect.top - rect.height / 2) / 10;
//     const rotateY = -(e.clientX - rect.left - rect.width / 2) / 10;

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
//             text="Experiences"
//             className="mb-4"
//             textSize="text-6xl md:text-7xl"
//             letterSpacing="tracking-tight"
//             lineHeight="leading-none"
//           />
//           <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-light tracking-wide">
//             A journey through my professional growth and accomplishments.
//           </p>
//         </motion.div>

//         <div className="mt-12 relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
//           {timelineData.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={{ 
//                 opacity: 1, 
//                 x: 0
//               }}
//               transition={{ 
//                 duration: 0.6, 
//                 type: "spring", 
//                 stiffness: 100,
//                 delay: index * 0.2 
//               }}
//               className={`mb-8 flex items-center ${
//                 index % 2 === 0 ? 'flex-row-reverse' : ''
//               }`}
//             >
//               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

//               <motion.div
//                 ref={(el) => cardRefs.current[index] = el}
//                 onClick={() => handleCardClick(index)}
//                 onMouseMove={(e) => handleMouseMove(e, index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//                 className={`relative overflow-hidden group rounded-lg transition-all duration-300 
//                   border border-[#8b7355]/40 dark:border-[#a69887]/40 
//                   hover:border-[#8b7355] dark:hover:border-[#a69887] 
//                   w-[45%] 
//                   ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
//                 style={{
//                   background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)',
//                   boxShadow: '0 4px 15px rgba(139,115,85,0.1), inset 0 0 20px rgba(139,115,85,0.05)',
//                   transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
//                   transformStyle: 'preserve-3d'
//                 }}
//               >
//                 {/* Hover lighting effect */}
//                 <div 
//                   className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{
//                     background: `radial-gradient(300px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px, rgba(139,115,85,0.2), transparent 40%)`,
//                     zIndex: 1
//                   }}
//                 ></div>

//                 <div className="relative z-10 p-6 bg-white/70 dark:bg-[#242020]/80 backdrop-blur-sm">
//                   <span 
//                     className="block text-xs text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2 
//                       transition-all duration-300 
//                       group-hover:translate-x-1 group-hover:text-opacity-90"
//                   >
//                     {item.date}
//                   </span>
//                   <h3 
//                     className="text-xl font-light text-[#4a3f35] dark:text-[#e8e3d9] mb-3 
//                       transition-all duration-300 
//                       group-hover:translate-x-1 group-hover:text-opacity-90"
//                   >
//                     {item.role}
//                   </h3>
                  
//                   <AnimatePresence>
//                     {(expandedIndex === index) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <p 
//                           className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2 
//                             transition-all duration-300 
//                             group-hover:translate-x-2 group-hover:text-opacity-80"
//                         >
//                           {item.description}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;

// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ParticleBackground from '../components/ParticleBackground';
// import AnimatedText from '../components/AnimatedText';

// const ExperienceTimeline = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [mousePositions, setMousePositions] = useState(
//     new Array(4).fill({ x: 0, y: 0 })
//   );
//   const cardRefs = useRef([]);

//   const timelineData = [
//     {
//       date: "May 2024 – July 2024",
//     role: "Full-Stack Developer Intern at Aayush Bharat - ABNW",
//     description: "Developed a new business vertical, improving operational efficiency by 30%, using React.js, Node.js, PHP, and MySQL. Implemented JWT-based authentication, reducing unauthorized access incidents by 20%. Automated bulk onboarding processes, reducing employee processing time by 40%, and integrated a secure payment gateway. Designed features such as consultation booking, e-commerce modules, and analytics dashboards, increasing user engagement by 15%. Optimized system performance, reducing load times by 25% while ensuring cross-device responsiveness."
//     },
//     {
//       date: "Sep 2023 - Dec 2023",
//       role: "Full-Stack Developer",
//       description: "Built end-to-end solutions for e-commerce platforms.",
//     },
//     {
//       date: "Jan 2024 - Mar 2024",
//       role: "UI/UX Designer",
//       description: "Designed user-friendly interfaces for SaaS products.",
//     },
//   ];

//   const handleCardClick = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const handleMouseMove = (e, index) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const newMousePositions = [...mousePositions];
//     newMousePositions[index] = {
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     };
//     setMousePositions(newMousePositions);

//     const card = cardRefs.current[index];
//     if (!card) return;

//     const rotateX = (e.clientY - rect.top - rect.height / 2) / 10;
//     const rotateY = -(e.clientX - rect.left - rect.width / 2) / 10;

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
//             text="Experiences"
//             className="mb-4"
//             textSize="text-6xl md:text-7xl font-lora tracking-tight leading-none"
//             letterSpacing="tracking-tight"
//             lineHeight="leading-none"
//           />
//           <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-poppins font-light tracking-wide">
//             A journey through my professional growth and accomplishments.
//           </p>
//         </motion.div>

//         <div className="mt-12 relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8b7355]/30 to-[#a69887]/30 dark:from-[#a69887]/30 dark:to-[#8b7355]/30"></div>
          
//           {timelineData.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={{ 
//                 opacity: 1, 
//                 x: 0
//               }}
//               transition={{ 
//                 duration: 0.6, 
//                 type: "spring", 
//                 stiffness: 100,
//                 delay: index * 0.2 
//               }}
//               className={`mb-8 flex items-center ${
//                 index % 2 === 0 ? 'flex-row-reverse' : ''
//               }`}
//             >
//               <div className="w-4 h-4 rounded-full bg-[#8b7355] dark:bg-[#a69887] z-20 mx-4"></div>

//               <motion.div
//                 ref={(el) => cardRefs.current[index] = el}
//                 onClick={() => handleCardClick(index)}
//                 onMouseMove={(e) => handleMouseMove(e, index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//                 className={`relative overflow-hidden group rounded-lg transition-all duration-300 
//                   border border-[#8b7355]/40 dark:border-[#a69887]/40 
//                   hover:border-[#8b7355] dark:hover:border-[#a69887] 
//                   w-[45%] 
//                   ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
//                 style={{
//                   background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)',
//                   boxShadow: '0 4px 15px rgba(139,115,85,0.1), inset 0 0 20px rgba(139,115,85,0.05)',
//                   transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
//                   transformStyle: 'preserve-3d'
//                 }}
//               >
//                 {/* Hover lighting effect */}
//                 <div 
//                   className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{
//                     background: `radial-gradient(300px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px, rgba(139,115,85,0.2), transparent 40%)`,
//                     zIndex: 1
//                   }}
//                 ></div>

//                 <div className="relative z-10 p-6 bg-white/70 dark:bg-[#242020]/80 backdrop-blur-sm">
//                   <span 
//                     className="block text-xs text-[#8b7355] dark:text-[#a69887] tracking-wider mb-2 
//                       transition-all duration-300 
//                       group-hover:translate-x-1 group-hover:text-opacity-90 font-poppins"
//                   >
//                     {item.date}
//                   </span>
//                   <h3 
//                     className="text-xl font-lora text-[#4a3f35] dark:text-[#e8e3d9] mb-3 
//                       transition-all duration-300 
//                       group-hover:translate-x-1 group-hover:text-opacity-90"
//                   >
//                     {item.role}
//                   </h3>
                  
//                   <AnimatePresence>
//                     {(expandedIndex === index) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <p 
//                           className="text-sm text-[#665544] dark:text-[#bdb7ae] mt-2 
//                             transition-all duration-300 
//                             group-hover:translate-x-2 group-hover:text-opacity-80 font-poppins"
//                         >
//                           {item.description}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedText from '../components/AnimatedText';

const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [mousePositions, setMousePositions] = useState(
    new Array(4).fill({ x: 0, y: 0 })
  );
  const cardRefs = useRef([]);

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
        {/* Header Section */}
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
                {/* Hover lighting effect */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(300px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px, rgba(139,115,85,0.2), transparent 40%)`,
                    zIndex: 1
                  }}
                ></div>

                <div className="relative z-10 p-6 bg-white/70 dark:bg-[#242020]/80 backdrop-blur-sm">
                  {/* Date moved to top right corner */}
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

                  {/* New type field */}
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