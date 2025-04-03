// import React, { useEffect, useRef } from "react";

// const ParticleBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
    
//     // Progressive intensity color palette (dark to light)
//     const colors = [
//       { r: 50, g: 35, b: 20 },    // Very dark brown
//       { r: 70, g: 50, b: 30 },    // Dark brown
//       { r: 90, g: 65, b: 40 },    // Medium brown
//       { r: 110, g: 80, b: 50 },   // Light brown
//       { r: 130, g: 95, b: 60 },   // Lighter brown
//       { r: 150, g: 110, b: 70 },  // Very light brown
//       { r: 170, g: 125, b: 80 },  // Pale brown
//       { r: 190, g: 140, b: 90 },  // Very pale brown
//       { r: 210, g: 155, b: 100 }, // Almost beige
//       { r: 230, g: 170, b: 110 }, // Light beige
//       { r: 240, g: 185, b: 120 }, // Lighter beige
//       { r: 250, g: 200, b: 130 }, // Very light beige
//       { r: 255, g: 215, b: 140 }, // Pale beige
//       { r: 255, g: 230, b: 150 }, // Almost white
//       { r: 255, g: 245, b: 160 }  // Brightest
//     ];
    
//     const numberOfLines = 15;
//     const lineSpacing = 30;
//     const lines = [];
//     let animationFrameId;
    
//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       canvas.width = innerWidth;
//       canvas.height = innerHeight;
//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;
      
//       lines.length = 0;
//       for (let i = 0; i < numberOfLines; i++) {
//         const layerPosition = i / numberOfLines;
//         const color = colors[i];
        
//         lines.push({
//           y: (canvas.height / 2) + (i - numberOfLines / 2) * lineSpacing,
//           amplitude: 20 * (1 - layerPosition * 0.3), // Increased amplitude
//           speed: 0.001 + (layerPosition * 0.0005),  // Slightly faster
//           phase: (i / numberOfLines) * Math.PI * 2,
//           points: [],
//           color,
//           opacity: 0.2 + (layerPosition * 0.4),     // More pronounced opacity progression
//           lineWidth: 1.5 + layerPosition * 1.5      // Thicker lines
//         });
        
//         for (let x = 0; x <= canvas.width; x += 1) {
//           lines[i].points.push({ x, y: 0 });
//         }
//       }
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const animate = (timestamp) => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Darker background gradient
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       gradient.addColorStop(0, 'rgba(30, 20, 10, 0.1)');
//       gradient.addColorStop(1, 'rgba(40, 30, 20, 0.2)');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       lines.forEach((line, lineIndex) => {
//         ctx.beginPath();
        
//         line.points.forEach((point, index) => {
//           const x = point.x;
//           const primaryWave = Math.sin(timestamp * line.speed + x * 0.002 + line.phase) * line.amplitude;
//           const secondaryWave = Math.sin(timestamp * line.speed * 0.5 + x * 0.001) * line.amplitude * 0.5;
//           const y = line.y + primaryWave + secondaryWave;
          
//           if (index === 0) {
//             ctx.moveTo(x, y);
//           } else {
//             const prevPoint = line.points[index - 1];
//             const xc = (prevPoint.x + x) / 2;
//             const yc = (prevPoint.y + y) / 2;
//             ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
//           }
          
//           point.y = y;
//         });
        
//         const lineGradient = ctx.createLinearGradient(0, line.y - line.amplitude, 0, line.y + line.amplitude);
//         const { r, g, b } = line.color;
        
//         // Enhanced gradient contrast
//         lineGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.7})`);
//         lineGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${line.opacity})`);
//         lineGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.7})`);
        
//         ctx.strokeStyle = lineGradient;
//         ctx.lineWidth = line.lineWidth;
//         ctx.lineCap = 'round';
//         ctx.stroke();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate(0);

//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       lines.forEach((line, index) => {
//         const distY = Math.abs(mouseY - line.y);
//         if (distY < 80) {
//           const influence = (80 - distY) / 80;
//           line.amplitude = Math.min(
//             20 * (1 - (index / numberOfLines) * 0.3),
//             line.amplitude + influence * 8  // Increased mouse influence
//           );
//         } else {
//           line.amplitude = 20 * (1 - (index / numberOfLines) * 0.3);
//         }
//       });
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full"
//       style={{ 
//         pointerEvents: "none",
//         opacity: 0.9,             // Increased overall opacity
//         mixBlendMode: "screen"    // Changed blend mode to enhance visibility
//       }}
//     />
//   );
// };

// export default ParticleBackground;

// import React, { useEffect, useRef, useState } from "react";

// const ParticleBackground = () => {
//   const canvasRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
    
//     // Progressive intensity color palette (dark to light)
//     const colors = [
//       { r: 50, g: 35, b: 20 },    // Very dark brown
//       { r: 70, g: 50, b: 30 },    // Dark brown
//       { r: 90, g: 65, b: 40 },    // Medium brown
//       { r: 110, g: 80, b: 50 },   // Light brown
//       { r: 130, g: 95, b: 60 },   // Lighter brown
//       { r: 150, g: 110, b: 70 },  // Very light brown
//       { r: 170, g: 125, b: 80 },  // Pale brown
//       { r: 190, g: 140, b: 90 },  // Very pale brown
//       { r: 210, g: 155, b: 100 }, // Almost beige
//       { r: 230, g: 170, b: 110 }, // Light beige
//       { r: 240, g: 185, b: 120 }, // Lighter beige
//       { r: 250, g: 200, b: 130 }, // Very light beige
//       { r: 255, g: 215, b: 140 }, // Pale beige
//       { r: 255, g: 230, b: 150 }, // Almost white
//       { r: 255, g: 245, b: 160 }  // Brightest
//     ];
    
//     const numberOfLines = 15;
//     const lineSpacing = 30;
//     const lines = [];
//     let animationFrameId;
    
//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       canvas.width = innerWidth;
//       canvas.height = innerHeight * 2; // Increased height to allow scrolling
//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;
      
//       lines.length = 0;
//       for (let i = 0; i < numberOfLines; i++) {
//         const layerPosition = i / numberOfLines;
//         const color = colors[i];
        
//         lines.push({
//           y: (canvas.height / 2) + (i - numberOfLines / 2) * lineSpacing,
//           amplitude: 20 * (1 - layerPosition * 0.3),
//           speed: 0.001 + (layerPosition * 0.0005),
//           phase: (i / numberOfLines) * Math.PI * 2,
//           points: [],
//           color,
//           opacity: 0.2 + (layerPosition * 0.4),
//           lineWidth: 1.5 + layerPosition * 1.5
//         });
        
//         for (let x = 0; x <= canvas.width; x += 1) {
//           lines[i].points.push({ x, y: 0 });
//         }
//       }
//     };

//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     window.addEventListener("scroll", handleScroll);

//     const animate = (timestamp) => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Adjust background position based on scroll
//       const scrollOffset = scrollPosition;
      
//       // Darker background gradient
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       gradient.addColorStop(0, 'rgba(30, 20, 10, 0.1)');
//       gradient.addColorStop(1, 'rgba(40, 30, 20, 0.2)');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, -scrollOffset, canvas.width, canvas.height);
      
//       lines.forEach((line, lineIndex) => {
//         ctx.beginPath();
        
//         line.points.forEach((point, index) => {
//           const x = point.x;
//           const primaryWave = Math.sin(timestamp * line.speed + x * 0.002 + line.phase) * line.amplitude;
//           const secondaryWave = Math.sin(timestamp * line.speed * 0.5 + x * 0.001) * line.amplitude * 0.5;
          
//           // Adjust y position with scroll offset and parallax effect
//           const y = line.y + primaryWave + secondaryWave - scrollOffset * (1 - lineIndex / numberOfLines);
          
//           if (index === 0) {
//             ctx.moveTo(x, y);
//           } else {
//             const prevPoint = line.points[index - 1];
//             const xc = (prevPoint.x + x) / 2;
//             const yc = (prevPoint.y + y) / 2;
//             ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
//           }
          
//           point.y = y;
//         });
        
//         const lineGradient = ctx.createLinearGradient(0, line.y - line.amplitude, 0, line.y + line.amplitude);
//         const { r, g, b } = line.color;
        
//         // Enhanced gradient contrast
//         lineGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.7})`);
//         lineGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${line.opacity})`);
//         lineGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.7})`);
        
//         ctx.strokeStyle = lineGradient;
//         ctx.lineWidth = line.lineWidth;
//         ctx.lineCap = 'round';
//         ctx.stroke();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate(0);

//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       lines.forEach((line, index) => {
//         const distY = Math.abs(mouseY - line.y + scrollPosition) % canvas.height;
//         if (distY < 80) {
//           const influence = (80 - distY) / 80;
//           line.amplitude = Math.min(
//             20 * (1 - (index / numberOfLines) * 0.3),
//             line.amplitude + influence * 8
//           );
//         } else {
//           line.amplitude = 20 * (1 - (index / numberOfLines) * 0.3);
//         }
//       });
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("scroll", handleScroll);
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [scrollPosition]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full"
//       style={{ 
//         pointerEvents: "none",
//         opacity: 1,
//         mixBlendMode: "screen",
//         zIndex: 1// Ensure it's behind other content
//       }}
//     />
//   );
// };

// export default ParticleBackground;
// import React, { useEffect, useRef, useState } from "react";

// const ParticleBackground = () => {
//   const canvasRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Dark mode detection
//     const detectDarkMode = () => {
//       const isDark = document.documentElement.classList.contains('dark');
//       setIsDarkMode(isDark);
//     };

//     // Initial detection
//     detectDarkMode();

//     // Observer for dark mode changes
//     const observer = new MutationObserver(detectDarkMode);
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ['class']
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
    
//     // Distinct color palettes with clear differentiation
//     const colorPalettes = {
//       light: [
//         { r: 120, g: 100, b: 80, baseOpacity: 0.15 },   // Soft brown
//         { r: 100, g: 80, b: 60, baseOpacity: 0.2 },     // Deeper brown
//         { r: 80, g: 60, b: 40, baseOpacity: 0.25 },     // Dark brown
//         { r: 60, g: 40, b: 20, baseOpacity: 0.3 },      // Very dark brown
//         { r: 40, g: 20, b: 10, baseOpacity: 0.35 }      // Almost black brown
//       ],
//       dark: [
//         { r: 200, g: 180, b: 160, baseOpacity: 0.15 },  // Light warm gray
//         { r: 180, g: 160, b: 140, baseOpacity: 0.2 },   // Warm gray
//         { r: 160, g: 140, b: 120, baseOpacity: 0.25 },  // Medium warm gray
//         { r: 140, g: 120, b: 100, baseOpacity: 0.3 },   // Dark warm gray
//         { r: 120, g: 100, b: 80, baseOpacity: 0.35 }    // Very dark warm gray
//       ]
//     };

//     const colors = isDarkMode ? colorPalettes.dark : colorPalettes.light;
    
//     const numberOfLines = 6; // Reduced number of lines
//     const lineSpacing = 100;  // Increased spacing between lines
//     const lines = [];
//     let animationFrameId;
    
//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       canvas.width = innerWidth;
//       canvas.height = innerHeight * 2; // Increased height to allow scrolling
//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;
      
//       lines.length = 0;
//       for (let i = 0; i < numberOfLines; i++) {
//         const layerPosition = i / numberOfLines;
//         const color = colors[i] || colors[colors.length - 1];
        
//         lines.push({
//           y: (canvas.height / 2) + (i - numberOfLines / 2) * lineSpacing,
//           amplitude: 40 * (1 - layerPosition * 0.3),
//           speed: 0.001 + (layerPosition * 0.0005),
//           phase: (i / numberOfLines) * Math.PI * 2,
//           points: [],
//           color,
//           opacity: color.baseOpacity,
//           lineWidth: 2 + layerPosition * 2
//         });
        
//         for (let x = 0; x <= canvas.width; x += 1) {
//           lines[i].points.push({ x, y: 0 });
//         }
//       }
//     };

//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     window.addEventListener("scroll", handleScroll);

//     const animate = (timestamp) => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Adjust background position based on scroll
//       const scrollOffset = scrollPosition;
      
//       // Background gradient based on mode
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       if (isDarkMode) {
//         gradient.addColorStop(0, 'rgba(20, 15, 10, 0.05)');
//         gradient.addColorStop(1, 'rgba(30, 25, 20, 0.1)');
//       } else {
//         gradient.addColorStop(0, 'rgba(240, 235, 230, 0.05)');
//         gradient.addColorStop(1, 'rgba(230, 225, 220, 0.1)');
//       }
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, -scrollOffset, canvas.width, canvas.height);
      
//       lines.forEach((line, lineIndex) => {
//         ctx.beginPath();
        
//         line.points.forEach((point, index) => {
//           const x = point.x;
//           const primaryWave = Math.sin(timestamp * line.speed + x * 0.002 + line.phase) * line.amplitude;
//           const secondaryWave = Math.sin(timestamp * line.speed * 0.5 + x * 0.001) * line.amplitude * 0.5;
          
//           // Adjust y position with scroll offset and parallax effect
//           const y = line.y + primaryWave + secondaryWave - scrollOffset * (1 - lineIndex / numberOfLines);
          
//           if (index === 0) {
//             ctx.moveTo(x, y);
//           } else {
//             const prevPoint = line.points[index - 1];
//             const xc = (prevPoint.x + x) / 2;
//             const yc = (prevPoint.y + y) / 2;
//             ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
//           }
          
//           point.y = y;
//         });
        
//         const lineGradient = ctx.createLinearGradient(0, line.y - line.amplitude, 0, line.y + line.amplitude);
//         const { r, g, b } = line.color;
        
//         // Enhanced gradient contrast with increased visibility
//         lineGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.5})`);
//         lineGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${line.opacity})`);
//         lineGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.5})`);
        
//         ctx.strokeStyle = lineGradient;
//         ctx.lineWidth = line.lineWidth;
//         ctx.lineCap = 'round';
//         ctx.stroke();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate(0);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("scroll", handleScroll);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isDarkMode, scrollPosition]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full"
//       style={{ 
//         pointerEvents: "none",
//         opacity: 0.8,
//         mixBlendMode: "difference",
//         zIndex: 1 
//       }}
//     />
//   );
// };

// export default ParticleBackground;

import React, { useEffect, useRef, useState } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Dark mode detection
    const detectDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial detection
    detectDarkMode();

    // Observer for dark mode changes
    const observer = new MutationObserver(detectDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Distinct color palettes with high contrast
    const colorPalettes = {
      light: [
        { r: 100, g: 100, b: 120, contrast: 0.3 },   // Soft blue-gray
        { r: 120, g: 120, b: 140, contrast: 0.4 },   // Muted blue
        { r: 140, g: 140, b: 160, contrast: 0.5 },   // Medium blue-gray
        { r: 160, g: 160, b: 180, contrast: 0.6 },   // Light blue-gray
        { r: 180, g: 180, b: 200, contrast: 0.7 },   // Pale blue
      ],
      dark: [
        { r: 30, g: 50, b: 70, contrast: 0.4 },     // Deep blue-gray
        { r: 40, g: 60, b: 80, contrast: 0.5 },     // Dark blue
        { r: 50, g: 70, b: 90, contrast: 0.6 },     // Medium blue-gray
        { r: 60, g: 80, b: 100, contrast: 0.7 },    // Light blue-gray
        { r: 70, g: 90, b: 110, contrast: 0.8 },    // Pale blue
      ]
    };

    const colors = isDarkMode ? colorPalettes.dark : colorPalettes.light;
    
    const numberOfLines = 6; // Reduced number of lines for more impact
    const lineSpacing = 100;  // Increased spacing between lines
    const lines = [];
    let animationFrameId;
    
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight * 2; // Increased height to allow scrolling
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      
      lines.length = 0;
      for (let i = 0; i < numberOfLines; i++) {
        const layerPosition = i / numberOfLines;
        const color = colors[i] || colors[colors.length - 1];
        
        lines.push({
          y: (canvas.height / 2) + (i - numberOfLines / 2) * lineSpacing,
          amplitude: 40 * (1 - layerPosition * 0.3),
          speed: 0.001 + (layerPosition * 0.0005),
          phase: (i / numberOfLines) * Math.PI * 2,
          points: [],
          color,
          opacity: 0.5 + color.contrast,
          lineWidth: 2.5 + layerPosition * 2
        });
        
        for (let x = 0; x <= canvas.width; x += 1) {
          lines[i].points.push({ x, y: 0 });
        }
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Adjust background position based on scroll
      const scrollOffset = scrollPosition;
      
      // Background gradient based on mode with more contrast
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      if (isDarkMode) {
        gradient.addColorStop(0, 'rgba(10, 15, 20, 0.1)');
        gradient.addColorStop(1, 'rgba(15, 20, 25, 0.2)');
      } else {
        gradient.addColorStop(0, 'rgba(240, 245, 250, 0.1)');
        gradient.addColorStop(1, 'rgba(235, 240, 245, 0.2)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, -scrollOffset, canvas.width, canvas.height);
      
      lines.forEach((line, lineIndex) => {
        ctx.beginPath();
        
        line.points.forEach((point, index) => {
          const x = point.x;
          const primaryWave = Math.sin(timestamp * line.speed + x * 0.002 + line.phase) * line.amplitude;
          const secondaryWave = Math.sin(timestamp * line.speed * 0.5 + x * 0.001) * line.amplitude * 0.5;
          
          // Adjust y position with scroll offset and parallax effect
          const y = line.y + primaryWave + secondaryWave - scrollOffset * (1 - lineIndex / numberOfLines);
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            const prevPoint = line.points[index - 1];
            const xc = (prevPoint.x + x) / 2;
            const yc = (prevPoint.y + y) / 2;
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
          }
          
          point.y = y;
        });
        
        const lineGradient = ctx.createLinearGradient(0, line.y - line.amplitude, 0, line.y + line.amplitude);
        const { r, g, b } = line.color;
        
        // Enhanced gradient contrast with more opacity
        lineGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.7})`);
        lineGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${line.opacity})`);
        lineGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.7})`);
        
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = line.lineWidth;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.3)`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, scrollPosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ 
        pointerEvents: "none",
        opacity: 1,
        mixBlendMode: "color-dodge",
        zIndex: 1
      }}
    />
  );
};

export default ParticleBackground;




// 'use client';

// import React, { useEffect, useRef, useState } from "react";
// import { useTheme } from "next-themes";
// import { useScroll, motion, useTransform } from "framer-motion";

// const ParticleBackground = () => {
//   const canvasRef = useRef(null);
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 1000], [0, 500]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Color palettes for light and dark themes
//     const lightColors = [
//       { r: 230, g: 170, b: 110 },
//       { r: 240, g: 185, b: 120 },
//       { r: 250, g: 200, b: 130 },
//       { r: 255, g: 215, b: 140 },
//       { r: 255, g: 230, b: 150 },
//       { r: 255, g: 245, b: 160 }
//     ];

//     const darkColors = [
//       { r: 50, g: 35, b: 20 },
//       { r: 70, g: 50, b: 30 },
//       { r: 90, g: 65, b: 40 },
//       { r: 110, g: 80, b: 50 },
//       { r: 130, g: 95, b: 60 },
//       { r: 150, g: 110, b: 70 }
//     ];

//     const colors = theme === 'dark' ? darkColors : lightColors;
    
//     const numberOfLines = 15;
//     const lineSpacing = 30;
//     const lines = [];
//     let animationFrameId;
    
//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       canvas.width = innerWidth;
//       canvas.height = innerHeight;
//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;
      
//       lines.length = 0;
//       for (let i = 0; i < numberOfLines; i++) {
//         const layerPosition = i / numberOfLines;
//         const color = colors[i % colors.length];
        
//         lines.push({
//           y: (canvas.height / 2) + (i - numberOfLines / 2) * lineSpacing,
//           amplitude: 20 * (1 - layerPosition * 0.3),
//           speed: 0.001 + (layerPosition * 0.0005),
//           phase: (i / numberOfLines) * Math.PI * 2,
//           points: [],
//           color,
//           opacity: 0.4 + (layerPosition * 0.5),
//           lineWidth: 2.5 + layerPosition * 2.5
//         });
        
//         for (let x = 0; x <= canvas.width; x += 1) {
//           lines[i].points.push({ x, y: 0 });
//         }
//       }
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const animate = (timestamp) => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       gradient.addColorStop(0, theme === 'dark' ? 'rgba(30, 20, 10, 0.15)' : 'rgba(255, 250, 240, 0.15)');
//       gradient.addColorStop(1, theme === 'dark' ? 'rgba(40, 30, 20, 0.25)' : 'rgba(255, 245, 230, 0.25)');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       const scrollOffset = y.get();
      
//       lines.forEach((line, lineIndex) => {
//         ctx.beginPath();
        
//         line.points.forEach((point, index) => {
//           const x = point.x;
//           const primaryWave = Math.sin(timestamp * line.speed + x * 0.002 + line.phase) * line.amplitude;
//           const secondaryWave = Math.sin(timestamp * line.speed * 0.5 + x * 0.001) * line.amplitude * 0.5;
//           const y = line.y + primaryWave + secondaryWave - scrollOffset * (1 - lineIndex / numberOfLines);
          
//           if (index === 0) {
//             ctx.moveTo(x, y);
//           } else {
//             const prevPoint = line.points[index - 1];
//             const xc = (prevPoint.x + x) / 2;
//             const yc = (prevPoint.y + y) / 2;
//             ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
//           }
          
//           point.y = y;
//         });
        
//         const lineGradient = ctx.createLinearGradient(0, line.y - line.amplitude, 0, line.y + line.amplitude);
//         const { r, g, b } = line.color;
        
//         lineGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.8})`);
//         lineGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${line.opacity})`);
//         lineGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${line.opacity * 0.8})`);
        
//         ctx.strokeStyle = lineGradient;
//         ctx.lineWidth = line.lineWidth;
//         ctx.lineCap = 'round';
//         ctx.stroke();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate(0);

//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       lines.forEach((line, index) => {
//         const distY = Math.abs(mouseY - line.y);
//         if (distY < 80) {
//           const influence = (80 - distY) / 80;
//           line.amplitude = Math.min(
//             20 * (1 - (index / numberOfLines) * 0.3),
//             line.amplitude + influence * 8
//           );
//         } else {
//           line.amplitude = 20 * (1 - (index / numberOfLines) * 0.3);
//         }
//       });
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [mounted, theme, y]);

//   if (!mounted) return null;

//   return (
//     <motion.canvas
//       ref={canvasRef}
//       className="fixed inset-0 w-full h-full"
//       style={{ 
//         pointerEvents: "none",
//         opacity: 0.95,
//         mixBlendMode: "screen",
//         y
//       }}
//     />
//   );
// };

// export default ParticleBackground;