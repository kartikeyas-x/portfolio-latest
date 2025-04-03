import React, { useState } from 'react';
import { motion } from "framer-motion";
import ParticleBackground from '../components/ParticleBackground';
import {
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Download
} from 'lucide-react';

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

const ContactPage = () => {
  const [downloading, setDownloading] = useState(false);

  const socialLinks = [
    { 
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/kartikeya-dhanwaria/" 
    },
    { 
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/kartikeyas-x" 
    },
    { 
      name: "Email",
      icon: <Mail size={20} />,
      link: "mailto:kartikeyasoni@gmail.com" 
    },
    { 
      name: "Twitter",
      icon: <Twitter size={20} />,
      link: "https://x.com/Kartikeya_soni1" 
    }
  ];

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div className="fluid-background relative min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300 flex flex-col justify-between p-8 font-poppins">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <main className="relative z-10 flex flex-col justify-center flex-grow">
        <motion.div 
          className="max-w-7xl mx-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[180px] font-lora font-bold text-neutral-900 dark:text-neutral-100 leading-none mb-12">
            {["Get", "in", "touch"].map((word, index) => (
              <motion.span 
                key={word}
                custom={index}
                initial="initial"
                animate="animate"
                variants={textVariants}
                whileHover="hover"
                className="inline-block mr-8 cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <a 
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
                    >
                      {social.icon}
                      <span className="text-lg">{social.name}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <a
                  href="/KartikeyaDhanwaria_Resume.pdf"
                  download
                  onClick={handleDownload}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300"
                >
                  <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl text-neutral-700 dark:text-neutral-300">
                Let's connect and discuss how we can work together to create something amazing.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Whether you have a project in mind or just want to say hello, I'm always open to new opportunities and conversations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ContactPage;