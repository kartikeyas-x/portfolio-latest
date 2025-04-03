// // import React, { useState, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { 
// //   User, 
// //   Briefcase, 
// //   Code, 
// //   Target, 
// //   Award 
// // } from 'lucide-react';
// // import ParticleBackground from "../components/ParticleBackground";
// // import AnimatedText from "../components/AnimatedText";

// // const AboutPage = () => {
// //   const skills = [
// //     'React.js', 
// //     'Node.js', 
// //     'TypeScript', 
// //     'Tailwind CSS', 
// //     'Next.js', 
// //     'Git/GitHub', 
// //     'Docker', 
// //     'MongoDB',
// //     'Express.js',
// //     'GraphQL'
// //   ];

// //   const [activeSkill, setActiveSkill] = useState(null);
// //   const cardRefs = useRef([]);

// //   const professionalJourney = [
// //     {
// //       title: 'Web Development',
// //       description: 'Passionate about creating intuitive, performant web applications that solve real-world problems.',
// //       icon: <Code className="text-[#8b7355] dark:text-[#a69887]" size={24} />
// //     },
// //     {
// //       title: 'Continuous Learning',
// //       description: 'Constantly exploring new technologies and staying updated with the latest industry trends.',
// //       icon: <Target className="text-[#8b7355] dark:text-[#a69887]" size={24} />
// //     },
// //     {
// //       title: 'Problem Solving',
// //       description: 'Analytical approach to breaking down complex challenges and developing efficient solutions.',
// //       icon: <Award className="text-[#8b7355] dark:text-[#a69887]" size={24} />
// //     }
// //   ];

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
// //     <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300">
// //       <div className="absolute inset-0">
// //         <ParticleBackground />
// //       </div>

// //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// //         {/* Header Section */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-16"
// //         >
// //           <AnimatedText 
// //             text="About Me"
// //             className="mb-4"
// //             textSize="text-6xl md:text-7xl"
// //             letterSpacing="tracking-tight"
// //             lineHeight="leading-none"
// //           />
// //           <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-light tracking-wide max-w-2xl">
// //             A passionate web developer dedicated to crafting innovative digital solutions 
// //             that blend creativity with technical expertise.
// //           </p>
// //         </motion.div>

// //         {/* Personal Info & Professional Journey */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-16">
// //           {/* Personal Details */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             <h2 className="text-2xl font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6">
// //               PERSONAL INFORMATION
// //             </h2>
// //             <div className="space-y-4">
// //               {[
// //                 { icon: <User className="text-[#8b7355] dark:text-[#a69887]" size={20} />, text: "Full Stack Web Developer" },
// //                 { icon: <Briefcase className="text-[#8b7355] dark:text-[#a69887]" size={20} />, text: "Open to New Opportunities" }
// //               ].map((item, index) => (
// //                 <div 
// //                   key={index} 
// //                   className="flex items-center space-x-4 group"
// //                 >
// //                   {item.icon}
// //                   <span className="text-[#4a3f35] dark:text-[#e8e3d9] group-hover:text-[#8b7355] dark:group-hover:text-[#a69887] transition-colors">
// //                     {item.text}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //           {/* Professional Journey */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.4 }}
// //           >
// //             <h2 className="text-2xl font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6">
// //               PROFESSIONAL JOURNEY
// //             </h2>
// //             <div className="space-y-4">
// //               {professionalJourney.map((journey, index) => (
// //                 <motion.div
// //                   key={index}
// //                   ref={(el) => cardRefs.current[index] = el}
// //                   onMouseMove={(e) => handleMouseMove(e, index)}
// //                   onMouseLeave={() => handleMouseLeave(index)}
// //                   whileHover={{ scale: 1.05 }}
// //                   style={{ 
// //                     transition: 'transform 0.1s ease-out',
// //                     transformStyle: 'preserve-3d'
// //                   }}
// //                   className="flex items-start space-x-4 p-4 
// //                     border border-[#e5ded5] dark:border-[#363030] 
// //                     hover:border-[#8b7355] dark:hover:border-[#a69887]
// //                     transition-all duration-300"
// //                 >
// //                   {journey.icon}
// //                   <div>
// //                     <h3 className="text-lg text-[#4a3f35] dark:text-[#e8e3d9] mb-2">
// //                       {journey.title}
// //                     </h3>
// //                     <p className="text-[#665544] dark:text-[#bdb7ae]">
// //                       {journey.description}
// //                     </p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* Skills Section - Code Editor Style */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.6 }}
// //           className="mb-16"
// //         >
// //           <h2 className="text-2xl font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6">
// //             TECHNICAL SKILLS
// //           </h2>
// //           <div className="bg-[#242020] dark:bg-[#1a1614] p-6 rounded-sm">
// //             <div className="flex justify-between mb-4">
// //               <div className="flex space-x-2">
// //                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
// //                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
// //                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
// //               </div>
// //               <span className="text-[#a69887]">skills.tsx</span>
// //             </div>
// //             <pre className="text-[#e8e3d9] font-mono text-sm">
// //               <code>
// //                 {skills.map((skill, index) => (
// //                   <div 
// //                     key={index}
// //                     onMouseEnter={() => setActiveSkill(skill)}
// //                     onMouseLeave={() => setActiveSkill(null)}
// //                     className={`
// //                       cursor-pointer py-1 px-2 
// //                       ${activeSkill === skill 
// //                         ? 'bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb]' 
// //                         : 'hover:bg-[#363030]'}
// //                       transition-colors duration-300
// //                     `}
// //                   >
// //                     <span className="text-[#a69887]">const</span> {skill} = 
// //                     <span className="text-green-400"> "proficient"</span>;
// //                   </div>
// //                 ))}
// //               </code>
// //             </pre>
// //           </div>
// //         </motion.div>

// //         {/* Call to Action */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.8 }}
// //           className="text-center"
// //         >
          
           
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutPage;

// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   User, 
//   Briefcase, 
//   Code, 
//   Target, 
//   Award 
// } from 'lucide-react';
// import ParticleBackground from "../components/ParticleBackground";
// import AnimatedText from "../components/AnimatedText";


// const AboutPage = () => {
//   const skills = [
//     'React.js', 
//     'Node.js', 
//     'TypeScript', 
//     'Tailwind CSS', 
//     'Next.js', 
//     'Git/GitHub', 
//     'Docker', 
//     'MongoDB',
//     'Express.js',
//     'GraphQL'
//   ];

//   const [activeSkill, setActiveSkill] = useState(null);
//   const cardRefs = useRef([]);

//   const professionalJourney = [
//     {
//       title: 'Web Development',
//       description: 'Passionate about creating intuitive, performant web applications that solve real-world problems.',
//       icon: <Code className="text-[#8b7355] dark:text-[#a69887]" size={24} />
//     },
//     {
//       title: 'Continuous Learning',
//       description: 'Constantly exploring new technologies and staying updated with the latest industry trends.',
//       icon: <Target className="text-[#8b7355] dark:text-[#a69887]" size={24} />
//     },
//     {
//       title: 'Problem Solving',
//       description: 'Analytical approach to breaking down complex challenges and developing efficient solutions.',
//       icon: <Award className="text-[#8b7355] dark:text-[#a69887]" size={24} />
//     }
//   ];

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
//     <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300 font-poppins">
//       <div className="absolute inset-0">
//         <ParticleBackground />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           <AnimatedText 
//             text="About Me"
//             className="mb-4 font-lora text-6xl md:text-7xl"
//             textSize="text-6xl md:text-7xl"
//             letterSpacing="tracking-tight"
//             lineHeight="leading-none"
//           />
         
//           <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-poppins font-light tracking-wide max-w-2xl">
//             A passionate web developer dedicated to crafting innovative digital solutions 
//             that blend creativity with technical expertise.
//           </p>
//         </motion.div>

//         {/* Personal Info & Professional Journey */}
//         <div className="grid md:grid-cols-2 gap-12 mb-16">
//           {/* Personal Details */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h2 className="text-2xl font-lora font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6">
//               PERSONAL INFORMATION
//             </h2>
//             <div className="space-y-4">
//               {[
//                 { icon: <User className="text-[#8b7355] dark:text-[#a69887]" size={20} />, text: "Full Stack Web Developer" },
//                 { icon: <Briefcase className="text-[#8b7355] dark:text-[#a69887]" size={20} />, text: "Open to New Opportunities" }
//               ].map((item, index) => (
//                 <div 
//                   key={index} 
//                   className="flex items-center space-x-4 group"
//                 >
//                   {item.icon}
//                   <span className="text-[#4a3f35] dark:text-[#e8e3d9] group-hover:text-[#8b7355] dark:group-hover:text-[#a69887] transition-colors font-poppins">
//                     {item.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Professional Journey */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <h2 className="text-2xl font-lora font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6">
//               PROFESSIONAL JOURNEY
//             </h2>
//             <div className="space-y-4">
//               {professionalJourney.map((journey, index) => (
//                 <motion.div
//                   key={index}
//                   ref={(el) => cardRefs.current[index] = el}
//                   onMouseMove={(e) => handleMouseMove(e, index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   whileHover={{ scale: 1.05 }}
//                   style={{ 
//                     transition: 'transform 0.1s ease-out',
//                     transformStyle: 'preserve-3d'
//                   }}
//                   className="flex items-start space-x-4 p-4 
//                     border border-[#e5ded5] dark:border-[#363030] 
//                     hover:border-[#8b7355] dark:hover:border-[#a69887]
//                     transition-all duration-300"
//                 >
//                   {journey.icon}
//                   <div>
//                     <h3 className="text-lg text-[#4a3f35] dark:text-[#e8e3d9] mb-2 font-lora">
//                       {journey.title}
//                     </h3>
//                     <p className="text-[#665544] dark:text-[#bdb7ae] font-poppins">
//                       {journey.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Skills Section - Code Editor Style */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mb-16"
//         >
//           <h2 className="text-2xl font-lora font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6">
//             TECHNICAL SKILLS
//           </h2>
//           <div className="bg-[#242020] dark:bg-[#1a1614] p-6 rounded-sm">
//             <div className="flex justify-between mb-4">
//               <div className="flex space-x-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               </div>
//               <span className="text-[#a69887] font-poppins">skills.tsx</span>
//             </div>
//             <pre className="text-[#e8e3d9] font-mono text-sm">
//               <code>
//                 {skills.map((skill, index) => (
//                   <div 
//                     key={index}
//                     onMouseEnter={() => setActiveSkill(skill)}
//                     onMouseLeave={() => setActiveSkill(null)}
//                     className={`
//                       cursor-pointer py-1 px-2 
//                       ${activeSkill === skill 
//                         ? 'bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb]' 
//                         : 'hover:bg-[#363030]'}
//                       transition-colors duration-300
//                     `}
//                   >
//                     <span className="text-[#a69887]">const</span> {skill} = 
//                     <span className="text-green-400"> "proficient"</span>;
//                   </div>
//                 ))}
//               </code>
//             </pre>
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="text-center"
//         >
//           {/* Placeholder for Call to Action */}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Code, 
  Target, 
  Award 
} from 'lucide-react';
import ParticleBackground from "../components/ParticleBackground";
import AnimatedText from "../components/AnimatedText";


// const AboutPage = () => {
//   const skills = [
//     'React.js', 
//     'Node.js', 
//     'TypeScript', 
//     'Tailwind CSS', 
//     'Next.js', 
//     'Git/GitHub', 
//     'Docker', 
//     'MongoDB',
//     'Express.js',
//     'GraphQL'
//   ];

const AboutPage = () => {
  const skills = {
    frontend: "HTML, CSS, JavaScript, React.js, TypeScript, Flutter",
    backend: "Node.js, Nest.js, Express.js, MySQL, MongoDB",
    tools: "Git, Github, Figma, Postman",
    languages: "C++, Python, English (Full Professional Proficiency), Hindi (Full Professional Proficiency), Punjabi (Limited Working Proficiency)"
  };

  const [activeSkill, setActiveSkill] = useState(null);
  const cardRefs = useRef([]);

  const professionalJourney = [
    {
      title: 'Web Development',
      description: 'Passionate about creating intuitive, performant web applications that solve real-world problems.',
      icon: <Code className="text-[#8b7355] dark:text-[#a69887]" size={24} />
    },
    {
      title: 'Continuous Learning',
      description: 'Constantly exploring new technologies and staying updated with the latest industry trends.',
      icon: <Target className="text-[#8b7355] dark:text-[#a69887]" size={24} />
    },
    {
      title: 'Problem Solving',
      description: 'Analytical approach to breaking down complex challenges and developing efficient solutions.',
      icon: <Award className="text-[#8b7355] dark:text-[#a69887]" size={24} />
    }
  ];

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
          className="mb-16"
        >
          <AnimatedText 
            text="About Me"
            className="mb-4 font-lora text-6xl md:text-7xl"
            textSize="text-6xl md:text-7xl"
            letterSpacing="tracking-tight"
            lineHeight="leading-none"
          />
         
          <p className="text-xl text-[#4a3f35] dark:text-[#e8e3d9] font-poppins font-light tracking-wide max-w-2xl">
            A passionate web developer dedicated to crafting innovative digital solutions 
            that blend creativity with technical expertise.
          </p>
        </motion.div>

        {/* Personal Info & Professional Journey */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-lora font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6 
                          group transition-all duration-300 hover:text-[#8b7355] hover:scale-105">
              PERSONAL INFORMATION
            </h2>
            <div className="space-y-4">
              {[
                { icon: <User className="text-[#8b7355] dark:text-[#a69887]" size={20} />, text: "Full Stack Web Developer" },
                { icon: <Briefcase className="text-[#8b7355] dark:text-[#a69887]" size={20} />, text: "Open to New Opportunities" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 group transition-all duration-300 
                             hover:text-[#8b7355] dark:hover:text-[#a69887] hover:scale-105"
                >
                  {item.icon}
                  <span className="text-[#4a3f35] dark:text-[#e8e3d9] group-hover:text-[#8b7355] dark:group-hover:text-[#a69887] transition-colors font-poppins">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-lora font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6 
                          group transition-all duration-300 hover:text-[#8b7355] hover:scale-105">
              PROFESSIONAL JOURNEY
            </h2>
            <div className="space-y-4">
              {professionalJourney.map((journey, index) => (
                <motion.div
                  key={index}
                  ref={(el) => cardRefs.current[index] = el}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  whileHover={{ scale: 1.05 }}
                  style={{ 
                    transition: 'transform 0.1s ease-out',
                    transformStyle: 'preserve-3d'
                  }}
                  className="flex items-start space-x-4 p-4 
                    border border-[#e5ded5] dark:border-[#363030] 
                    hover:border-[#8b7355] dark:hover:border-[#a69887]
                    transition-all duration-300 group hover:scale-105"
                >
                  {journey.icon}
                  <div>
                    <h3 className="text-lg text-[#4a3f35] dark:text-[#e8e3d9] mb-2 font-lora 
                                group transition-all duration-300 hover:text-[#8b7355]">
                      {journey.title}
                    </h3>
                    <p className="text-[#665544] dark:text-[#bdb7ae] font-poppins 
                                group transition-all duration-300 hover:text-[#8b7355]">
                      {journey.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Code Editor Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-lora font-light tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mb-6 
                        group transition-all duration-300 hover:text-[#8b7355] hover:scale-105">
            TECHNICAL SKILLS
          </h2>
          <div className="bg-[#242020] dark:bg-[#1a1614] p-6 rounded-sm">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-[#a69887] font-poppins">skills.tsx</span>
            </div>
            {/* <pre className="text-[#e8e3d9] font-mono text-sm">
              <code>
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                    className={`
                      cursor-pointer py-1 px-2 
                      ${activeSkill === skill 
                        ? 'bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb]' 
                        : 'hover:bg-[#363030]'}
                      transition-colors duration-300 group hover:scale-105
                    `}
                  >
                    <span className="text-[#a69887]">const</span> {skill} = 
                    <span className="text-green-400"> "proficient"</span>;
                  </div>
                ))}
              </code>
            </pre> */}
            
            <pre className="text-[#e8e3d9] font-mono text-sm">
  <code>
    {Object.entries(skills).map(([category, skillList], index) => (
      <div key={index} className="py-2">
        <div className="text-[#a69887]">
          <span className="font-semibold">{category.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span>
        </div>
        <div className="mt-2">
          <div 
            onMouseEnter={() => setActiveSkill(skillList)}
            onMouseLeave={() => setActiveSkill(null)}
            className={`
              cursor-pointer py-1 px-2
              ${activeSkill === skillList 
                ? 'bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb]' 
                : 'hover:bg-[#363030]'}
              transition-colors duration-300 group hover:scale-105
            `}
          >
            {skillList}
          </div>
        </div>
      </div>
    ))}
  </code>
</pre>


          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          {/* Placeholder for Call to Action */}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

