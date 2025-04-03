
import React, { useState } from 'react';

const ProjectCard = ({ project, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  if (!project) {
    return null;
  }

  const {
    title = 'Untitled Project',
    description = 'No description available',
    tags = [],
    image = '/api/placeholder/600/400',
    github = null,
    live = null
  } = project;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className={`relative overflow-hidden group rounded-lg transition-all duration-300 
        border border-transparent hover:border-[#8b7355]/20 h-full
        ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)',
        boxShadow: 'inset 0 0 20px rgba(139,115,85,0.05)'
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,115,85,0.1), transparent 40%)`,
          zIndex: 1
        }}
      />

      <div className="flex flex-col h-full">
        <div className="relative z-10 transition-all duration-300 
          group-hover:scale-[1.02] group-hover:shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transform transition-transform duration-300 
              group-hover:scale-105 group-hover:brightness-110"
          />
        </div>

        <div className="relative z-10 p-4 flex flex-col flex-grow">
          <h3 className="text-xl sm:text-2xl font-lora font-light text-[#4a3f35] dark:text-[#e8e3d9] mb-2 
            transition-all duration-300 
            group-hover:translate-x-1 group-hover:text-opacity-90">
            {title}
          </h3>
          <p className="text-sm sm:text-base font-poppins text-[#665544] dark:text-[#bdb7ae] mb-3 flex-grow
            transition-all duration-300 
            group-hover:translate-x-2 group-hover:text-opacity-80">
            {description}
          </p>

          {Array.isArray(tags) && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#f0e6d6] text-[#4a3f35] dark:bg-[#363030] dark:text-[#e8e3d9] 
                    rounded-full text-xs transition-all duration-300 
                    group-hover:scale-105 group-hover:bg-opacity-80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex space-x-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b7355] dark:text-[#a69887] hover:underline text-sm flex items-center 
                  transition-all duration-300 
                  group-hover:translate-x-2 group-hover:text-opacity-80"
              >
                GitHub
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b7355] dark:text-[#a69887] hover:underline text-sm flex items-center 
                  transition-all duration-300 
                  group-hover:translate-x-2 group-hover:text-opacity-80"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
