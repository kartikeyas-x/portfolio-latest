import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold">
            Portfolio
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-light-bg/95 dark:bg-dark-bg/95"
      >
        <div className="px-4 py-2 space-y-1">
          <NavLinks mobile onClick={() => setIsOpen(false)} />
        </div>
      </motion.div>
    </nav>
  );
};

const NavLinks = ({ mobile, onClick }) => {
  const links = ['Home', 'About', 'Projects', 'Experience', 'Contact'];
  const baseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const mobileClasses = mobile ? "block w-full text-left" : "";

  return links.map(link => (
    <Link
      key={link}
      to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
      className={`${baseClasses} ${mobileClasses} hover:bg-light-primary/10 dark:hover:bg-dark-primary/10`}
      onClick={onClick}
    >
      {link}
    </Link>
  ));
};

export default Navbar;