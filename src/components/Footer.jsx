import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, BehanceIcon } from './CustomIcons';


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950/80 border-t border-slate-900/60 font-mono text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left column */}
        <div>
          <span>© 2026 Vishishta. All rights reserved.</span>
          <span className="mx-2 text-slate-700">|</span>
          <span className="text-slate-400">Vishishta Dilsara</span>
        </div>

        {/* Center/Right Social List */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/VishishtaDilsara" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/in/vishishta-dilsara-14059a348/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a 
            href="https://www.facebook.com/vishishta.dilsara?_rdc=2&_rdr#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
            title="Facebook"
          >
            <FacebookIcon size={16} />
          </a>
          <a 
            href="https://www.instagram.com/_vish__x___" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
            title="Instagram"
          >
            <InstagramIcon size={16} />
          </a>
          <a 
            href="https://www.behance.net/vishishdilsara" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
            title="Behance"
          >
            <BehanceIcon size={16} />
          </a>
        </div>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer"
          title="Scroll to Top"
        >
          <span>Top</span>
          <ArrowUp size={12} className="animate-bounce" />
        </button>

      </div>
    </footer>
  );
}
