'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Text } from '@react-three/drei';

// Core styles for glitch and particle effects
const styles = {
  container: `relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden`,
  text: `absolute font-extrabold uppercase tracking-wide text-center`,
  particle: `absolute rounded-full opacity-50 mix-blend-screen pointer-events-none`,
};

// Performance Mode Context
const PerformanceContext = React.createContext(false);

// Glitch Animation Variants
const glitchVariants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [1, 0.8, 1],
    x: [0, 10, -10, 0],
    textShadow: [
      '0 0 5px #00ffea, 0 0 10px #00ffea',
      '0 0 10px #ff007a, 0 0 20px #ff007a',
      '0 0 15px #00ffea, 0 0 25px #00ffea',
    ],
    transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' },
  },
};

// Particle Effect Component with nuanced behaviors
const Particle = React.memo(({ size, performanceMode }) => {
  const speed = useMemo(() => (performanceMode ? Math.random() * 2 + 1 : Math.random() * 4 + 2), [performanceMode]);

  return (
    <motion.div
      className={styles.particle}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, #00ffea 0%, transparent 80%)`,
      }}
      animate={{
        top: [0, '100%'],
        left: ['0%', '100%'],
        opacity: [1, 0],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  );
});

// Hero Text with Three.js Integration
const HeroText = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const [performanceMode, setPerformanceMode] = useState(false);
  const prefersReducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const AnimatedText = React.memo(() => {
    const textRef = useRef();
    useFrame(({ mouse }) => {
      if (!performanceMode && textRef.current) {
        textRef.current.rotation.x = mouse.y * 0.2;
        textRef.current.rotation.y = mouse.x * 0.2;
      }
    });

    return (
      <Text
        ref={textRef}
        color="#e8e3d9"
        fontSize={1}
        maxWidth={10}
        lineHeight={1.2}
        letterSpacing={-0.05}
        font="https://fonts.gstatic.com/s/anton/v22/1Ptgg87LROyAm3Kz-C8.woff"
      >
        {text}
      </Text>
    );
  });

  useEffect(() => {
    if (prefersReducedMotion) setPerformanceMode(true);
  }, [prefersReducedMotion]);

  return (
    <PerformanceContext.Provider value={performanceMode}>
      <div className={styles.container}>
        {/* Canvas for Three.js Animation */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <AnimatedText />
        </Canvas>

        {/* Glitch Text */}
        <motion.div
          className={styles.text}
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', color: '#00ffea' }}
          variants={glitchVariants}
          initial="initial"
          animate={hovered ? 'hover' : 'initial'}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {text}
        </motion.div>

        {/* Interactive Particles */}
        {!performanceMode &&
          Array.from({ length: 30 }).map((_, i) => (
            <Particle key={i} size={`${Math.random() * 15 + 5}px`} performanceMode={performanceMode} />
          ))}

        {/* Performance Mode Toggle */}
        <button
          onClick={() => setPerformanceMode((prev) => !prev)}
          className="absolute bottom-10 right-10 p-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600"
        >
          {performanceMode ? 'Enable Effects' : 'Performance Mode'}
        </button>
      </div>
    </PerformanceContext.Provider>
  );
};

export default React.memo(HeroText);
