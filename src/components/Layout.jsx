// components/Layout.jsx
import { useEffect } from 'react';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

const Layout = ({ children }) => {
  // Ensure smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f2eb] dark:bg-[#1a1614] transition-colors duration-300">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;