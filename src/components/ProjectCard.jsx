import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags }) => {
  return (
    <motion.div
      className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-4 mb-6 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-hover rounded-xl p-6 h-full">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-2 py-1 rounded-full bg-opacity-20 bg-current"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;