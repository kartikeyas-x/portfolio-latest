


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Music, Pause, Play } from 'lucide-react';
import SpotifyWebApi from 'spotify-web-api-js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  
  // Spotify integration states
  const [spotifyClient, setSpotifyClient] = useState(null);
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  // State to track which nav item was just clicked
  const [clickedNavItem, setClickedNavItem] = useState(null);
  const vibrateVariants = {
    rest: { rotate: 0 },
    vibrate: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.3,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const connectSpotify = async () => {
    // Placeholder Spotify connection logic
    try {
      const spotifyApi = new SpotifyWebApi();
      setSpotifyClient(spotifyApi);
      setIsSpotifyConnected(true);
    } catch (error) {
      console.error('Spotify connection failed', error);
    }
  };

  const togglePlayPause = async () => {
    // Placeholder play/pause logic
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 
          ${scrolled 
            ? 'bg-[#f4f1ea]/80 dark:bg-[#2c2824]/80 backdrop-blur-md shadow-sm' 
            : 'bg-[#f4f1ea] dark:bg-[#2c2824]'}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Left section with date and time */}
            <div className="flex flex-col">
              <span className="text-sm font-light tracking-wide text-[#766e65] dark:text-[#bdb7ae] font-poppins">
                {formatTime(dateTime)}
              </span>
              <span className="text-xs font-light tracking-wide text-[#766e65] dark:text-[#bdb7ae] font-poppins">
                {formatDate(dateTime)}
              </span>
            </div>

            {/* Center section with nav items */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item === 'home' ? '' : item}`}
                  className="group relative text-sm tracking-wide text-[#766e65] 
                    dark:text-[#bdb7ae] transition-colors duration-300 
                    hover:text-[#4a4643] dark:hover:text-[#e8e3d9] font-poppins"
                >
                  <span className="relative">
                    {item}
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4a4643] 
                        dark:bg-[#e8e3d9] transition-all duration-300 
                        group-hover:w-full"
                    ></span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Right section with theme toggle and Spotify */}
            <div className="flex items-center space-x-4">
              {/* Spotify Integration */}
              {isSpotifyConnected ? (
                <div className="flex items-center space-x-2">
                  {currentTrack && (
                    <span className="text-xs text-[#766e65] dark:text-[#bdb7ae] max-w-[100px] truncate font-poppins">
                      {currentTrack.name}
                    </span>
                  )}
                  <button
                    onClick={togglePlayPause}
                    className="group p-2 text-[#766e65] hover:text-[#4a4643] 
                      dark:text-[#bdb7ae] dark:hover:text-[#e8e3d9] 
                      transition-all duration-300 
                      hover:scale-110 active:scale-95"
                    aria-label="Play/Pause"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                </div>
              ) : (
                <button
                  onClick={connectSpotify}
                  className="group p-2 text-[#766e65] hover:text-[#4a4643] 
                    dark:text-[#bdb7ae] dark:hover:text-[#e8e3d9] 
                    transition-all duration-300 
                    hover:scale-110 active:scale-95"
                  aria-label="Connect Spotify"
                >
                  <Music size={18} />
                </button>
              )}

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="group p-2 text-[#766e65] hover:text-[#4a4643] 
                  dark:text-[#bdb7ae] dark:hover:text-[#e8e3d9] 
                  transition-all duration-300 
                  hover:rotate-12 hover:scale-110 active:scale-95"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group md:hidden text-[#766e65] hover:text-[#4a4643] 
                  dark:text-[#bdb7ae] dark:hover:text-[#e8e3d9] 
                  transition-all duration-300 
                  hover:scale-110 active:scale-95"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden absolute left-0 right-0 bg-[#f4f1ea]/95 dark:bg-[#2c2824]/95 backdrop-blur-md shadow-sm">
              <div className="flex flex-col space-y-3 px-4 py-4">
                {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item === 'home' ? '' : item}`}
                    className="group relative text-sm tracking-wide text-[#766e65] 
                      dark:text-[#bdb7ae] transition-colors duration-300 
                      hover:text-[#4a4643] dark:hover:text-[#e8e3d9] font-poppins"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative">
                      {item}
                      <span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4a4643] 
                          dark:bg-[#e8e3d9] transition-all duration-300 
                          group-hover:w-full"
                      ></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Add padding to the body to prevent content from being hidden behind the navbar */}
      <div className="pt-14"></div>
    </>
  );
};

export default Navbar;
