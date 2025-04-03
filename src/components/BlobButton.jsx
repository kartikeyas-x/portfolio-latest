import React from 'react';
import '../styles/BlobButton.css';

const BlobButton = ({ href = "#projects", children = "EXPLORE MY WORK" }) => {
  return (
    <div className="blob-btn-container relative inline-block">
      <a 
        href={href} 
        className="blob-btn group relative inline-block px-10 py-4 
        border-2 border-[#8b7355] 
        text-[#8b7355] dark:border-[#a69887] dark:text-[#a69887] 
        font-light tracking-wider text-sm
        hover:bg-[#8b7355] hover:text-[#f5f2eb]
        dark:hover:bg-[#a69887] dark:hover:text-[#1a1614]
        transition-all duration-300 
        rounded-3xl"
      >
        {children}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" 
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BlobButton;