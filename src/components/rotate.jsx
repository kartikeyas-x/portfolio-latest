import React from 'react';
import { motion } from 'framer-motion';

const TextRotator = () => {
  const phrases = [
    'Crafting seamless experiences',
    'Building user-first solutions',
    'Delivering high performance',
    'Creating intuitive designs',
    'Optimizing for usability'
  ];

  const containerStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '1.5rem',
    lineHeight: '1.2',
    color: '#4a3f35',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  };

  const rotatorContainerStyle = {
    position: 'relative',
    height: '2rem',
    overflow: 'hidden',
    marginLeft: '0.5rem'
  };

  const innerRotatorStyle = {
    display: 'inline-block',
    color: '#8e6b4a',
    position: 'relative',
    whiteSpace: 'nowrap',
    top: '0',
    left: '0',
    animation: 'move 5s infinite',
    animationDelay: '1s'
  };

  const keyframesStyle = `
    @keyframes move {
      0%   { top: 0px; }
      20%  { top: -2rem; }
      40%  { top: -4rem; }
      60%  { top: -6rem; }
      80%  { top: -8rem; }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div style={containerStyle}>
          <span> I design for users and code for performance —</span>
          <div style={rotatorContainerStyle}>
            <div style={innerRotatorStyle}>
              {phrases.map((phrase, index) => (
                <div 
                  key={index} 
                  style={{ 
                    height: '2rem', 
                    display: 'flex', 
                    alignItems: 'center' 
                  }}
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TextRotator;