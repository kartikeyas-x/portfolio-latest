import React, { useState } from 'react';

const YingYangCats = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 === 7) {
      setIsSpinning(true);
      const audio = new Audio('data:audio/mp3;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE4QPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
      audio.play();
      setTimeout(() => {
        setIsSpinning(false);
        setClickCount(0);
      }, 3000);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
        width: '4rem',
        height: '4rem',
        pointerEvents: 'auto'
      }}
      onClick={handleClick}
    >
      <div 
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          clipPath: 'circle(50% at 50%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Layer */}
        <div 
          className={`absolute w-full h-full transition-colors duration-300 
            ${hoverSide === 'white' ? 'bg-black' : 
              hoverSide === 'black' ? 'bg-white' : 'bg-transparent'}`}
        />

        {/* SVG Cats */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 300 300" 
          className={`absolute w-full h-full transition-transform duration-300 
            ${isSpinning ? 'animate-spin' : ''}
            ${hoverSide === 'white' 
              ? 'translate-x-[45px] translate-y-[95px] scale-[1.4] rotate-180' 
              : hoverSide === 'black' 
              ? 'translate-x-[45px] translate-y-[95px] scale-[1.4] rotate-0' 
              : ''}`}
        >
          {/* White side path */}
          <path 
            d="M198.63 43.54c-8.535-4.018 3.727 22.035-12.55 45.9-20.702 30.36-48.977 21.085-41.787 33.538 6.11 10.582 14.963 5.18 22.04 1.094 14.174-8.184 27.137-10.15 28.113 3.987 1.042 15.096-20.733 19.503-38.7 21.456-14.98 1.746-26.072.598-39.257 7.506-7.503 3.93-12.945 8.577-11.272 16.88 1.543 7.663 6.38 9.685 14.245 8.033 14.377-3.02 29.986-17.01 35.77-5.653 5.19 10.192-17.612 11.026-28.038 18.733-13.19 9.75-18.697 22.952-23.197 36.583-1.806 5.473-6.094 20.647-2.37 25.047 11.313 2.326 21.947-8.24 31.515-4.824 9.426 3.366 18.753 8.822 24.982 16.656 6.99 8.79.88 29.34 11.896 31.524 91.172-57.992 104.09-103.495 104.09-139.778 0-46.43-24.75-92.793-75.48-116.68z" 
            fill="#f2f2f2"
            onMouseEnter={(e) => {
              e.stopPropagation();
              setHoverSide('white');
            }}
          />

          {/* Black side path */}
          <path 
            d="M101.38 256.46c8.535 4.018-3.726-22.035 12.55-45.9 20.703-30.36 48.978-21.085 41.788-33.538-6.11-10.582-14.963-5.18-22.04-1.094-14.174 8.184-27.138 10.148-28.113-3.987-1.042-15.096 20.732-19.503 38.7-21.456 14.978-1.746 26.072-.598 39.257-7.506 7.502-3.93 12.943-8.578 11.27-16.88-1.543-7.663-6.38-9.685-14.244-8.033-14.378 3.02-29.987 17.01-35.77 5.653-5.19-10.192 17.612-11.026 28.037-18.733 13.19-9.75 18.697-22.952 23.197-36.583 1.807-5.473 6.094-20.647 2.372-25.047-11.314-2.326-21.948 8.24-31.517 4.824-9.425-3.366-18.752-8.822-24.98-16.656-6.992-8.79-.88-29.34-11.897-31.524C38.82 57.99 25.9 103.495 25.9 139.778c0 46.43 24.75 92.793 75.48 116.68z" 
            fill="#1a1a1a"
            onMouseEnter={(e) => {
              e.stopPropagation();
              setHoverSide('black');
            }}
          />

          {/* White cat's face details */}
          <path 
            d="M110.677 57.635s-1.826 3.912 2.206 7.82c4.032 3.91 7.86.79 7.86.79M143.635 85.076s-1.826 3.912 2.206 7.82c4.032 3.91 7.86.79 7.86.79" 
            fill="none" 
            stroke="#ececec" 
            strokeWidth="6.774" 
            strokeLinecap="round" 
          />
          <path 
            d="M104.733 80.926s3.077 8.615 6.49 10.237c3.416 1.623 10.488-1.248 10.488-1.248l3.996-4.744 5.243-.25-6.742-3.494 1.498 3.745-4.245 5.494s.47 8.58 2.997 10.736c2.53 2.157 8.74 1 8.74 1" 
            fill="none" 
            stroke="#ececec" 
            strokeWidth="6.774" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Black cat's face details */}
          <g stroke="#1a1a1a" fill="none" strokeWidth="6" strokeLinecap="round">
            <path 
              d="M189.063 252.215s1.826-3.912-2.206-7.82c-4.032-3.91-7.86-.79-7.86-.79M156.105 224.773s1.826-3.91-2.206-7.82c-4.033-3.91-7.862-.79-7.862-.79" 
              strokeWidth="6.77406" 
            />
            <path 
              d="M195.007 228.923s-3.077-8.614-6.492-10.236c-3.414-1.623-10.486 1.248-10.486 1.248l-3.996 4.744-5.243.25 6.742 3.494-1.498-3.745 4.245-5.494s-.47-8.58-2.997-10.736c-2.53-2.157-8.74-1-8.74-1" 
              strokeLinejoin="round" 
              strokeWidth="6.77406" 
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default YingYangCats;