import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
      {/* Global Background Ambient Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-40 pointer-events-none" />

      {/* Main Layout Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Home />
          <Experience />
          <Certifications />
          <Projects />
          <Skills />
          <Blogs />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
