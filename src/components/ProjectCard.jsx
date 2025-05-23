import React, { useState } from 'react';

const ProjectCard = ({ project, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Comprehensive null/undefined checking
  if (!project) {
    return null; // Or return a placeholder/error component
  }

  // Destructuring with even more robust default values
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
      className={`relative overflow-hidden group rounded-lg transition-all duration-500 ease-in-out 
        border border-transparent hover:border-[#8b7355]/20
        before:absolute before:inset-0 before:-z-10 before:animate-gradient-xy
        before:bg-gradient-to-r before:from-[#8b7355]/10 before:via-[#a69887]/10 before:to-[#8b7355]/10
        ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)',
        boxShadow: 'inset 0 0 20px rgba(139,115,85,0.05)'
      }}
    >
      {/* Hover lighting effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,115,85,0.1), transparent 40%)`,
          zIndex: 1
        }}
      ></div>

      {/* Project Image */}
      <div className="mb-4 overflow-hidden rounded-sm relative z-10 transition-all duration-500 ease-in-out 
        group-hover:scale-[1.05] group-hover:shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out
            group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      {/* Project Details */}
      <div className="relative z-10 px-4 pb-4 font-poppins"> {/* Ensure font-poppins is applied here */}
        <h3 className="text-xl font-lora font-light text-[#4a3f35] dark:text-[#e8e3d9] mb-2 
          transition-all duration-500 ease-in-out
          group-hover:translate-y-[-2px] group-hover:text-opacity-90">
          {title}
        </h3>
        <p className="text-sm font-poppins text-[#665544] dark:text-[#bdb7ae] mb-3 
          transition-all duration-500 ease-in-out
          group-hover:translate-y-[-1px] group-hover:text-opacity-80">
          {description}
        </p>

        {/* Tags */}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#f0e6d6] text-[#4a3f35] dark:bg-[#363030] dark:text-[#e8e3d9] 
                  rounded-full text-xs transition-all duration-500 ease-in-out
                  group-hover:scale-110 group-hover:bg-opacity-80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b7355] dark:text-[#a69887] hover:underline text-sm flex items-center 
                transition-all duration-500 ease-in-out
                group-hover:translate-y-[-1px] group-hover:text-opacity-80"
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
                transition-all duration-500 ease-in-out
                group-hover:translate-y-[-1px] group-hover:text-opacity-80"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;