// // // components/Footer.jsx
// // import React from "react";
// // import {
// //   Instagram,
// //   Twitter,
// //   Github,
// //   Linkedin,
// //   Mail,
// // } from "lucide-react";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#f0ede6] dark:bg-[#242020] text-[#4a3f35] dark:text-[#e8e3d9] py-6 transition-colors duration-300">
// //       <div className="max-w-6xl mx-auto px-6">
// //         {/* Top Section */}
// //         <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
// //           {/* Email Subscription Form */}
// //           <div className="w-full md:w-1/2">
// //             <h4 className="text-lg font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-4">
// //               Stay Updated
// //             </h4>
// //             <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="flex-1 p-2 rounded-md bg-white dark:bg-[#1a1614] 
// //                          text-[#4a3f35] dark:text-[#e8e3d9] 
// //                          border border-[#8b7355] dark:border-[#a69887]
// //                          placeholder-[#8b7355] dark:placeholder-[#a69887]
// //                          focus:outline-none focus:ring-2 focus:ring-[#8b7355] dark:focus:ring-[#a69887]"
// //                 required
// //               />
// //               <button
// //                 type="submit"
// //                 className="bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb] dark:text-[#1a1614]
// //                          py-2 px-4 rounded-md font-medium
// //                          hover:bg-[#665544] dark:hover:bg-[#bdb7ae] transition-all"
// //               >
// //                 Subscribe
// //               </button>
// //             </form>
// //           </div>
// //           {/* Resume Download */}
// //           <div className="w-full md:w-1/2 flex justify-start md:justify-end">
// //             <a
// //               href="/path-to-resume.pdf"
// //               download
// //               className="bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb] dark:text-[#1a1614]
// //                        py-2 px-4 rounded-md font-medium
// //                        hover:bg-[#665544] dark:hover:bg-[#bdb7ae] transition-all"
// //             >
// //               Download Resume
// //             </a>
// //           </div>
// //         </div>
// //         {/* Divider */}
// //         <hr className="my-6 border-[#8b7355] dark:border-[#363030]" />
// //         {/* Bottom Section */}
// //         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
// //           {/* Social Media Icons */}
// //           <div className="flex space-x-4">
// //             {[
// //               { Icon: Github, href: "https://github.com" },
// //               { Icon: Linkedin, href: "https://linkedin.com" },
// //               { Icon: Mail, href: "mailto:your.email@example.com" },
// //               { Icon: Twitter, href: "https://twitter.com" },
// //               { Icon: Instagram, href: "https://instagram.com" },
// //             ].map(({ Icon, href }) => (
// //               <a
// //                 key={href}
// //                 href={href}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-[#8b7355] dark:text-[#a69887] 
// //                          hover:text-[#665544] dark:hover:text-[#bdb7ae] 
// //                          transition-transform transform hover:scale-110"
// //               >
// //                 <Icon size={24} />
// //               </a>
// //             ))}
// //           </div>
// //           {/* Copyright */}
// //           <div className="text-sm text-[#665544] dark:text-[#bdb7ae]">
// //             © 2024 [Your Name]. All Rights Reserved.
// //           </div>
// //         </div>

// //         {/* Scrolling Thank You Message */}
// //         <div className="mt-6 overflow-hidden">
// //           <div className="flex whitespace-nowrap animate-scroll">
// //             <div className="flex space-x-4">
// //               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
// //                 Thank you for visiting my portfolio! ✨
// //               </span>
// //               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
// //                 I appreciate you taking the time to explore my work! 🌟
// //               </span>
// //               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
// //                 Thank you for visiting my portfolio! ✨
// //               </span>
// //               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
// //                 I appreciate you taking the time to explore my work! 🌟
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes scroll {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }
// //         .animate-scroll {
// //           animation: scroll 20s linear infinite;
// //         }
// //       `}</style>
// //     </footer>
// //   );
// // };

// import React from "react";
// import {
//   Instagram,
//   Twitter,
//   Github,
//   Linkedin,
//   Mail,
//   Download,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#f0ede6] dark:bg-[#242020] text-[#4a3f35] dark:text-[#e8e3d9] py-6 transition-colors duration-300 font-poppins">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
//           {/* Email Subscription Form */}
//           <div className="w-full md:w-1/2">
//             <h4 className="text-lg font-lora font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-4">
//               Stay Updated
//             </h4>
//             <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 p-2 rounded-md bg-white dark:bg-[#1a1614] 
//                          text-[#4a3f35] dark:text-[#e8e3d9] 
//                          border border-[#8b7355] dark:border-[#a69887]
//                          placeholder-[#8b7355] dark:placeholder-[#a69887]
//                          focus:outline-none focus:ring-2 focus:ring-[#8b7355] dark:focus:ring-[#a69887]"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb] dark:text-[#1a1614]
//                          py-2 px-4 rounded-md font-medium
//                          hover:bg-[#665544] dark:hover:bg-[#bdb7ae] transition-all"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//           {/* Resume Download */}
//           <div className="w-full md:w-1/2 flex justify-start md:justify-end">
//             <a
//               href="/path-to-resume.pdf"
//               download
//               className="group relative inline-flex items-center justify-center 
//                        px-6 py-2 overflow-hidden 
//                        bg-[#8b7355] dark:bg-[#a69887] 
//                        text-[#f5f2eb] dark:text-[#1a1614]
//                        font-medium rounded-md
//                        hover:bg-[#665544] dark:hover:bg-[#bdb7ae] 
//                        transition-all duration-300 
//                        transform hover:scale-105 
//                        hover:shadow-lg"
//             >
//               <span className="absolute top-0 left-0 w-full h-full 
//                         bg-[#665544] dark:bg-[#bdb7ae] 
//                         opacity-0 group-hover:opacity-10 
//                         transition-opacity duration-300"></span>
//               <Download className="mr-2 transition-transform group-hover:rotate-360 group-hover:scale-110" />
//               <span className="relative z-10">Download Resume</span>
//             </a>
//           </div>
//         </div>
//         {/* Divider */}
//         <hr className="my-6 border-[#8b7355] dark:border-[#363030]" />
//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             {[
//               { Icon: Github, href: "https://github.com" },
//               { Icon: Linkedin, href: "https://linkedin.com" },
//               { Icon: Mail, href: "mailto:your.email@example.com" },
//               { Icon: Twitter, href: "https://twitter.com" },
//               { Icon: Instagram, href: "https://instagram.com" },
//             ].map(({ Icon, href }) => (
//               <a
//                 key={href}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#8b7355] dark:text-[#a69887] 
//                          hover:text-[#665544] dark:hover:text-[#bdb7ae] 
//                          transition-transform transform hover:scale-110"
//               >
//                 <Icon size={24} />
//               </a>
//             ))}
//           </div>
//           {/* Copyright */}
//           <div className="text-sm text-[#665544] dark:text-[#bdb7ae] font-poppins">
//             © 2024 [Your Name]. All Rights Reserved.
//           </div>
//         </div>

//         {/* Scrolling Thank You Message */}
//         <div className="mt-6 overflow-hidden">
//           <div className="flex whitespace-nowrap animate-scroll">
//             <div className="flex space-x-4">
//               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
//                 Thank you for visiting my portfolio! ✨
//               </span>
//               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
//                 I appreciate you taking the time to explore my work! 🌟
//               </span>
//               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
//                 Thank you for visiting my portfolio! ✨
//               </span>
//               <span className="inline-block px-4 text-[#8b7355] dark:text-[#a69887]">
//                 I appreciate you taking the time to explore my work! 🌟
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 20s linear infinite;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;


// // export default Footer;

import React, { useState } from "react";
import { Instagram, Twitter, Github, Linkedin, Mail, Download, Check } from "lucide-react";

const Footer = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000); // Reset after 2 seconds
  };

  return (
    <footer className="bg-[#f0ede6] dark:bg-[#242020] text-[#4a3f35] dark:text-[#e8e3d9] py-6 transition-colors duration-300 font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Email Subscription Form */}
          <div className="w-full md:w-1/2">
            <h4 className="text-lg font-lora font-medium text-[#4a3f35] dark:text-[#e8e3d9] mb-4">
              Stay Updated
            </h4>
            <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-md bg-white dark:bg-[#1a1614] 
                         text-[#4a3f35] dark:text-[#e8e3d9] 
                         border border-[#8b7355] dark:border-[#a69887]
                         placeholder-[#8b7355] dark:placeholder-[#a69887]
                         focus:outline-none focus:ring-2 focus:ring-[#8b7355] dark:focus:ring-[#a69887]"
                required
              />
              <button
                type="submit"
                className="bg-[#8b7355] dark:bg-[#a69887] text-[#f5f2eb] dark:text-[#1a1614]
                         py-2 px-4 rounded-md font-medium
                         hover:bg-[#665544] dark:hover:bg-[#bdb7ae] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Resume Download */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-end">
            <a
              href="/path-to-resume.pdf"
              download
              onClick={handleDownload}
              className={`relative inline-flex items-center justify-center 
                          px-6 py-2 overflow-hidden rounded-md 
                          bg-gradient-to-r from-[#8b7355] to-[#a69887] 
                          text-[#f5f2eb] dark:text-[#1a1614] font-medium 
                          shadow-md transition-transform transform duration-300 
                          hover:scale-105 hover:shadow-lg 
                          active:scale-95 ${downloaded ? "animate-success" : ""}`}
            >
              <span className="absolute inset-0 bg-[#665544] dark:bg-[#bdb7ae] opacity-0 hover:opacity-20 transition-opacity"></span>
              {downloaded ? (
                <Check className="mr-2 animate-fade-in" />
              ) : (
                <Download className="mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
              )}
              <span className="relative z-10">
                {downloaded ? "Downloaded!" : "Download Resume"}
              </span>
            </a>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-6 border-[#8b7355] dark:border-[#363030]" />
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:your.email@example.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Instagram, href: "https://instagram.com" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b7355] dark:text-[#a69887] 
                         hover:text-[#665544] dark:hover:text-[#bdb7ae] 
                         transition-transform transform hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          {/* Copyright */}
          <div className="text-sm text-[#665544] dark:text-[#bdb7ae] font-poppins">
            © 2024 [Your Name]. All Rights Reserved.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes success {
          0% {
            transform: scale(1);
            background-color: #8b7355;
          }
          50% {
            transform: scale(1.1);
            background-color: #6fbf73;
          }
          100% {
            transform: scale(1);
            background-color: #8b7355;
          }
        }

        .animate-success {
          animation: success 0.6s ease-in-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
