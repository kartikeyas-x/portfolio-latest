'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ParticleBackground from "../components/ParticleBackground";
import AnimatedText from "../components/AnimatedText";
import EducationSection from '../components/EducationSection';
import BlobButton from "../components/BlobButton";
import YinYangCats from '../components/YingYangCats';
import TextRotator from "../components/rotate";

const Home = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nameRef = useRef(null);

  // Define translations
  const translations = {
    english: "Dhanwaria",
    hindi: "धनवारिया",
    punjabi: "ਧਨਵਾਰੀਆ",
  };

  // State for current language
  const [currentLanguage, setCurrentLanguage] = useState("english");

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!nameRef.current) return;
      const rect = nameRef.current.getBoundingClientRect();

      const isWithinBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isWithinBounds) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        const translateX = ((x / rect.width) - 0.5) * 15;
        const translateY = ((y / rect.height) - 0.5) * 15;

        setRotation({ x: rotateX, y: rotateY });
        setTranslate({ x: translateX, y: translateY });
      } else {
        setRotation({ x: 0, y: 0 });
        setTranslate({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const languageInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentLanguage((prevLang) => {
          const languages = Object.keys(translations);
          const currentIndex = languages.indexOf(prevLang);
          const nextIndex = (currentIndex + 1) % languages.length;
          return languages[nextIndex];
        });
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(languageInterval);
    };
  }, []);

  const transformStyle = {
    transform: `
      perspective(1000px) 
      rotateX(${rotation.x}deg) 
      rotateY(${rotation.y}deg)
      translate(${translate.x}px, ${translate.y}px)
    `,
    transition: "transform 0.3s ease-out",
  };

  return (
    <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300 font-poppins">
      <YinYangCats />

      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex flex-col justify-center pt-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm tracking-widest text-[#6b563c] dark:text-[#c4b5a1] mb-4 font-medium pl-1"
            >
              HELLO, I AM
            </motion.span>

            <motion.div 
              ref={nameRef} 
              style={transformStyle}
              className="mb-6 transition-transform duration-300 ease-out will-change-transform"
            >
              <AnimatedText 
                text="Kartikeya"
                className="mb-4"
                textSize="text-7xl md:text-8xl font-lora"
                letterSpacing="tracking-tight"
                lineHeight="leading-none"
                isTransitioning={false}
                blur={false}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLanguage}
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ 
                    opacity: 1, 
                    filter: "blur(0px)",
                  }}
                  exit={{ 
                    opacity: 0, 
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <AnimatedText 
                    text={translations[currentLanguage]}
                    className="mt-4 font-lora"
                    textSize="text-7xl md:text-8xl"
                    letterSpacing="tracking-tight"
                    lineHeight="leading-none"
                    isTransitioning={isTransitioning}
                    blur={true}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <TextRotator />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <BlobButton />
              </motion.div>
            </motion.div>

            <motion.div
  className="mt-20 mb-32 ml-0"  
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <EducationSection />


              <h2 className="text-2xl font-lora tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] mt-20 mb-8 
              hover:text-[#8b7355] dark:hover:text-[#a69887] transition-colors duration-300 inline-block">
                SELECTED PROJECTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
  {
    title: "AI Diagnosis Predictor",
    description: "Machine learning system for predicting medical diagnoses using patient data and symptoms",
    tags: ["TensorFlow", "Python", "scikit-learn"],
    link: "#"
  },
  {
    title: "Portfolio v2",
    description: "An immersive, interactive portfolio with 3D elements",
    tags: ["React", "Three.js", "Framer Motion"],
    link: "#"
  },
  {
    title: "Smart Home Dashboard",
    description: "IoT dashboard for monitoring and controlling smart devices",
    tags: ["React", "Node.js", "MQTT"],
    link: "#"
  }
].map((project, index) => (
  <motion.div
    key={project.title}
    className="group relative bg-[#fff] dark:bg-[#242020] p-6 rounded-sm 
      border border-[#e5ded5] dark:border-[#363030]
      hover:border-[#8b7355] dark:hover:border-[#a69887] 
      transition-all duration-300 overflow-hidden"
    whileHover={{ 
      y: -10,
      scale: 1.03,
      boxShadow: "0 10px 15px rgba(0,0,0,0.1)"
    }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
  >
    <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#8b7355] dark:bg-[#a69887] opacity-10 rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
    <span className="text-xs text-[#8b7355] dark:text-[#a69887] tracking-wider">
      FEATURED PROJECT
    </span>
    <h3 className="text-xl font-lora mt-2 mb-3 text-[#4a3f35] dark:text-[#e8e3d9]">
      {project.title}
    </h3>
    <p className="text-sm text-[#665544] dark:text-[#bdb7ae] font-poppins mb-4">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-3">
      {project.tags.map(tag => (
        <span key={tag} className="text-xs px-2 py-1 bg-[#f0e6d6] dark:bg-[#363030] text-[#8b7355] dark:text-[#a69887] rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <a href={project.link} className="text-sm text-[#8b7355] dark:text-[#a69887] hover:underline inline-flex items-center">
      View Project <span className="ml-1">→</span>
    </a>
  </motion.div>
))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;