import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ExperienceTimeline from './pages/Experience';  // Correct import
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <div className="bg-[#f5f5f0] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperienceTimeline />} />  {/* Correct usage of component */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
