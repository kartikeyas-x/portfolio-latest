import React, { useState } from 'react';
import { motion } from "framer-motion";
import ParticleBackground from '../components/ParticleBackground';
import {
  ExternalLink
} from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      link: "https://www.linkedin.com/in/kartikeya-dhanwaria/" 
    },
    { 
      name: "GitHub", 
      link: "https://github.com/kartikeyas-x" 
    },
    { 
      name: "Email", 
      link: "mailto:kartikeyasoni@gmail.com" 
    },
    { 
      name: "Twitter", 
      link: "https://x.com/Kartikeya_soni1" 
    }
  ];

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    animate: (index) => ({
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100,
        delay: index * 0.2 
      }
    }),
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 15px rgba(0,0,0,0.2)",
      transition: { 
        duration: 0.3,
        type: "spring"
      }
    }
  };

  return (
    <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300 flex flex-col justify-between p-8 font-poppins">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <main className="relative z-10 flex flex-col justify-center flex-grow pt-3">
        <div className="text-[220px] font-lora font-bold text-neutral-900 dark:text-neutral-100 pl-16 leading-none mb-6 flex space-x-4">
          {["Get", "in", "touch"].map((word, index) => (
            <motion.span 
              key={word}
              custom={index}
              initial="initial"
              animate="animate"
              variants={textVariants}
              whileHover="hover"
              className="inline-block cursor-default"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="flex">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.6, 
                delay: 0.2,
                type: "spring", 
                stiffness: 100 
              }
            }}
            className="pl-24 flex-grow"
          >
            <motion.ul 
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              {socialLinks.map((social, index) => (
                <motion.li 
                  key={social.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: 0.3 + index * 0.1,
                      duration: 0.6,
                      type: "spring"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-sm uppercase underline decoration-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all duration-300"
                >
                  <a 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 group"
                  >
                    <span className="text-neutral-700 dark:text-neutral-300">{social.name}</span>
                    <ExternalLink 
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-700 dark:text-neutral-300" 
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.6, 
                delay: 0.4,
                type: "spring", 
                stiffness: 100 
              }
            }}
            className="text-right pr-8 self-end pb-8"
          >
            <a 
              href="mailto:contact@example.com" 
              className="block text-xs text-neutral-700 dark:text-neutral-300 mb-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Mail
            </a>
            <a 
              href="https://vimeo.com" 
              className="block text-xs text-neutral-700 dark:text-neutral-300 mb-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Vimeo
            </a>
            <a 
              href="https://instagram.com" 
              className="block text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Instagram
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;