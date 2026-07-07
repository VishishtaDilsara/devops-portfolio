import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, BehanceIcon } from './CustomIcons';
import profileImg from '../assets/profile.jpg';


export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Text Section */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 cyber-pulse-dot" />
              <span className="text-xs font-mono text-cyan-400 tracking-wider">SYSTEM ACTIVE • READY TO BUILD</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100"
            >
              Hi, I'm <br />
              <span className="text-gradient-rainbow">Vishishta Dilsara</span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants} 
              className="text-lg sm:text-xl md:text-2xl font-semibold font-mono text-cyan-400/90 leading-relaxed border-l-2 border-cyan-500/50 pl-4"
            >
              DevOps Engineer | Cloud Engineer | SRE Enthusiast | Open Source Contributor
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-light text-justify"
            >
              I am a final year undergraduate reading B.Comp(Hons.) in Software Engineering at the University of Sri Jayewardenepura. I am passionate about DevOps, Cloud Computing, Site Reliability Engineering, and Cloud Infrastructure. I enjoy building scalable applications, automating infrastructure, creating CI/CD pipelines, deploying cloud-native systems, and contributing to open-source projects.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-4 pt-2"
            >
              <button 
                onClick={() => handleScrollTo('#projects')}
                className="group flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => handleScrollTo('#contact')}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <Send size={16} className="text-cyan-400" />
              </button>

              {/* Download CV: Update the href link below with your actual CV file URL */}
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("CV Download Placeholder: Please replace the href link in src/components/Home.jsx with the absolute URL of your CV PDF.");
                }}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-950/60 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800/40 hover:border-slate-800 font-medium transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              variants={itemVariants} 
              className="flex items-center space-x-3 pt-6 border-t border-slate-900 w-fit"
            >
              <span className="text-xs font-mono text-slate-500 tracking-wider mr-2 uppercase">Connect</span>
              
              {/* GitHub */}
              <a 
                href="https://github.com/VishishtaDilsara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800/40 hover:border-cyan-500/30 transition-all duration-200"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/vishishta-dilsara-14059a348/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800/40 hover:border-cyan-500/30 transition-all duration-200"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/vishishta.dilsara?_rdc=2&_rdr#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800/40 hover:border-cyan-500/30 transition-all duration-200"
                title="Facebook"
              >
                <FacebookIcon size={18} />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/_vish__x___" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800/40 hover:border-cyan-500/30 transition-all duration-200"
                title="Instagram"
              >
                <InstagramIcon size={18} />
              </a>

              {/* Behance */}
              <a 
                href="https://www.behance.net/vishishdilsara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800/40 hover:border-cyan-500/30 transition-all duration-200"
                title="Behance"
              >
                <BehanceIcon size={18} />
              </a>
            </motion.div>
          </div>

          {/* Photo Section */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group"
            >
              {/* Outer Cyber Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              {/* Inner Decorative Box */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-slate-700/60 flex items-center justify-center p-2">
                <img 
                  src={profileImg} 
                  alt="Vishishta Dilsara" 
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />

                {/* Tech elements overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md rounded-lg p-3 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute" />
                    <span className="text-[10px] font-mono text-slate-300">k8s-cluster // node-01</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">HEALTHY</span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
