import React from 'react';
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
  return (
    <div className="relative min-h-screen text-slate-100 bg-[#030712] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Global Background Ambient Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-40 pointer-events-none" />

      {/* Main Layout Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
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
