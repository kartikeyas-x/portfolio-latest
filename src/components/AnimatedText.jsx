'use client';

import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';

const TypewriterText = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};

// Animation variants for individual letters
const letterVariants = {
  initial: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    rotate: 0 
  },
  hover: (custom) => ({
    y: -15,
    z: 50,
    rotateX: custom % 2 === 0 ? 15 : -15,
    rotateY: custom % 2 === 0 ? 10 : -10,
    scale: 1.2,
    color: "#8b7355",
    textShadow: "0 20px 30px rgba(0,0,0,0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 8,
      mass: 0.8,
      delay: custom * 0.04
    }
  }),
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Animation variants for words
const wordVariants = {
  initial: { 
    scale: 1,
    y: 0,
    letterSpacing: '0em',
  },
  hover: { 
    scale: 1.02,
    y: -2,
    letterSpacing: '0.02em',
    transition: {
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3
    }
  }
};

// Line animation variants
const lineVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    filter: "blur(8px)"
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
    transition: {
      duration: 0.3
    }
  }
};

// Animated Letter Component
const AnimatedLetter = memo(({ char, index, isSpace, isHovered, className }) => {
  const controls = useAnimationControls();

  return (
    <motion.span
      custom={index}
      variants={letterVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      exit="exit"
      className={`inline-block transform-gpu ${className} ${
        isSpace ? 'mx-0.5' : 'mx-0'
      }`}
      onMouseEnter={() => controls.start("hover")}
      onMouseLeave={() => controls.start("initial")}
      style={{
        display: 'inline-block',
        willChange: 'transform'
      }}
    >
      {char}
    </motion.span>
  );
});

AnimatedLetter.displayName = 'AnimatedLetter';

// Animated Word Component
const AnimatedWord = memo(({ 
  word, 
  onHover, 
  onClick, 
  className,
  isTransitioning,
  textColor
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    if (!isTransitioning) {
      setIsHovered(true);
      onHover?.(word);
    }
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.span
      className={`inline-block cursor-pointer select-none ${className}`}
      variants={wordVariants}
      initial="initial"
      whileHover={isTransitioning ? {} : "hover"}
      whileTap={isTransitioning ? {} : "tap"}
      exit="exit"
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      onClick={() => !isTransitioning && onClick?.(word)}
      style={{
        color: textColor
      }}
    >
      {word.split('').map((char, index) => (
        <AnimatedLetter
          key={`${word}-${index}`}
          char={char}
          index={index}
          isSpace={char === ' '}
          isHovered={isHovered}
          className={className}
        />
      ))}
    </motion.span>
  );
});

AnimatedWord.displayName = 'AnimatedWord';

// Main AnimatedText Component
const AnimatedText = ({
  text,
  onWordHover,
  onWordClick,
  className = "",
  textSize = "text-7xl",
  lineHeight = "leading-tight",
  letterSpacing = "tracking-tight",
  isTransitioning = false,
  textColor,
  animationDelay = 0,
  blur = false
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const lines = text.split('\n');

  return (
    <AnimatePresence mode="wait">
      {mounted && (
        <motion.div 
          className={`space-y-2 ${className}`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: animationDelay
              }
            },
            exit: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {lines.map((line, lineIndex) => (
            <motion.div
              key={`line-${lineIndex}`}
              variants={lineVariants}
              className={`
                font-medium
                ${textSize}
                ${lineHeight}
                ${letterSpacing}
                transform-gpu
                transition-colors duration-300
              `}
              style={{
                filter: blur && isTransitioning ? 'blur(4px)' : 'blur(0px)',
                transition: 'filter 0.3s ease-out'
              }}
            >
              {line.split(' ').map((word, wordIndex) => (
                <React.Fragment key={`word-${lineIndex}-${wordIndex}`}>
                  <AnimatedWord
                    word={word}
                    onHover={onWordHover}
                    onClick={onWordClick}
                    className={`text-[#28221E] dark:text-[#e8e3d9] transition-colors duration-300`}
                    isTransitioning={isTransitioning}
                    textColor={textColor}
                  />
                  {wordIndex < line.split(' ').length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(AnimatedText);
export { TypewriterText };