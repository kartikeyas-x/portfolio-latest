

// export default EducationSection;
import React, { useState } from 'react';

const EducationSection = () => {
  const [mousePositions, setMousePositions] = useState({});

  const education = [
      {
        id: 1,
        period: "November 2021 – Present",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Rajasthan Technical University, Kota",
        achievements: ["GPA: 9.26", "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Development, Business Analysis"]
      },
    
    {
      id: 2,
      period: "2019 - 2020",
      degree: "Higher Secondary Certification",
      institution: "CBSE",
      achievements: ["Percentage: 83%"]
    }
  ];

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    const rotateX = (y / (rect.height / 2)) * 15;
    const rotateY = -(x / (rect.width / 2)) * 15;

    setMousePositions(prev => ({
      ...prev,
      [index]: { x: e.clientX - rect.left, y: e.clientY - rect.top, rotateX, rotateY }
    }));
  };

  const handleMouseLeave = (index) => {
    setMousePositions(prev => ({
      ...prev,
      [index]: { x: 0, y: 0, rotateX: 0, rotateY: 0 }
    }));
  };

  return (
<section className="max-w-3xl py-4 font-poppins pl-3">

      <div className="flex items-center gap-3 mb-8">
      <h2 className="text-2xl font-lora tracking-wider text-[#4a3f35] dark:text-[#e8e3d9] text-left 
  transition-all duration-300 hover:tracking-widest hover:text-[#8b7355] dark:hover:text-[#a69887]">
  EDUCATION
</h2>

      </div>

      <div className="relative pl-4">
        {education.map((item, index) => {
          const mousePos = mousePositions[index] || { x: 0, y: 0, rotateX: 0, rotateY: 0 };

          return (
            <div 
              key={item.id} 
              className="mb-12 last:mb-0 relative group perspective-1000"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Timeline dot */}
              <div className="absolute top-3 left-0 w-4 h-4 rounded-full bg-white border-2 border-[#e5ded5] 
                            dark:bg-[#363030] dark:border-[#363030] 
                            group-hover:scale-125 group-hover:bg-[#8b7355] dark:group-hover:bg-[#a69887] 
                            transition-all duration-300" />
              
              {/* Card */}
              <div 
                className="relative overflow-hidden rounded-lg transition-all duration-300 
                  border border-transparent hover:border-[#8b7355]/20 min-h-[200px] pl-8"
                style={{
                  transform: `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out',
                  background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)',
                  boxShadow: 'inset 0 0 20px rgba(139,115,85,0.05)'
                }}
              >
                {/* Hover lighting effect */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,115,85,0.1), transparent 40%)`,
                    zIndex: 1
                  }}
                ></div>

                {/* Card Content */}
                <div className="relative z-10 p-6">
                  {/* Year pill */}
                  <div className="absolute top-2 left-4 px-3 py-1 bg-[#f1e6d6] text-[#8b7355] text-xs 
                                rounded-full font-medium group-hover:bg-[#8b7355] group-hover:text-white 
                                dark:bg-[#3c3a32] dark:text-[#a69887] group-hover:dark:bg-[#8b7355] group-hover:dark:text-white 
                                transition-colors">
                    {item.period}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-lora text-[#4a3f35] mb-1 dark:text-[#e8e3d9] 
                      transition-all duration-300 
                      group-hover:translate-x-1 group-hover:text-opacity-90"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {item.degree}
                    </h3>
                    <p className="text-sm text-[#665544] mb-3 dark:text-[#bdb7ae] 
                      transition-all duration-300 
                      group-hover:translate-x-2 group-hover:text-opacity-80"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {item.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="inline-block px-2 py-1 bg-[#f1e6d6] text-[#8b7355] text-xs rounded-full 
                                     group-hover:bg-[#8b7355] group-hover:text-white 
                                     dark:bg-[#3c3a32] dark:text-[#a69887] dark:group-hover:bg-[#8b7355] 
                                     dark:group-hover:text-white transition-colors duration-300 
                                     group-hover:scale-105"
                          style={{ transform: 'translateZ(10px)' }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
