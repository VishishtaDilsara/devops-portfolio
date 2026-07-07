import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code } from 'lucide-react';
import { 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiGithubactions, 
  SiJenkins, 
  SiArgo, 
  SiHelm, 


  SiPrometheus, 
  SiGrafana, 
  SiElastic, 
  SiLinux, 
  SiNginx, 
  SiGit, 
  SiGithub, 
  SiGnubash, 
  SiPython, 
  SiNodedotjs, 
  SiReact, 
  SiNextdotjs, 
  SiMongodb, 
  SiMysql, 
  SiFirebase, 
  SiFlutter, 
  SiLaravel 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';


const devOpsTools = [
  { name: 'AWS', Icon: FaAws, color: 'hover:border-amber-500/40 hover:text-[#FF9900] hover:shadow-amber-500/10' },
  { name: 'Docker', Icon: SiDocker, color: 'hover:border-sky-500/40 hover:text-[#2496ED] hover:shadow-sky-500/10' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: 'hover:border-blue-500/40 hover:text-[#326CE5] hover:shadow-blue-500/10' },
  { name: 'Terraform', Icon: SiTerraform, color: 'hover:border-violet-500/40 hover:text-[#7B42BC] hover:shadow-violet-500/10' },
  { name: 'GitHub Actions', Icon: SiGithubactions, color: 'hover:border-blue-400/40 hover:text-[#2088FF] hover:shadow-blue-400/10' },
  { name: 'Jenkins', Icon: SiJenkins, color: 'hover:border-red-500/40 hover:text-[#D24939] hover:shadow-red-500/10' },
  { name: 'ArgoCD', Icon: SiArgo, color: 'hover:border-orange-400/40 hover:text-[#F3C012] hover:shadow-orange-400/10' },
  { name: 'Helm', Icon: SiHelm, color: 'hover:border-sky-700/40 hover:text-[#0F1689] hover:shadow-sky-700/10' },

  { name: 'Prometheus', Icon: SiPrometheus, color: 'hover:border-orange-600/40 hover:text-[#E6522C] hover:shadow-orange-600/10' },
  { name: 'Grafana', Icon: SiGrafana, color: 'hover:border-yellow-500/40 hover:text-[#FADE06] hover:shadow-yellow-500/10' },
  { name: 'Loki', Icon: SiGrafana, color: 'hover:border-yellow-600/40 hover:text-[#E5A50A] hover:shadow-yellow-600/10' }, // Loki log aggregator
  { name: 'ELK Stack', Icon: SiElastic, color: 'hover:border-teal-500/40 hover:text-[#00BFB3] hover:shadow-teal-500/10' },
  { name: 'Linux', Icon: SiLinux, color: 'hover:border-amber-400/40 hover:text-[#FCC624] hover:shadow-amber-400/10' },
  { name: 'Nginx', Icon: SiNginx, color: 'hover:border-emerald-600/40 hover:text-[#009639] hover:shadow-emerald-600/10' },
  { name: 'Git', Icon: SiGit, color: 'hover:border-orange-500/40 hover:text-[#F05032] hover:shadow-orange-500/10' },
  { name: 'GitHub', Icon: SiGithub, color: 'hover:border-slate-400/40 hover:text-[#FFFFFF] hover:shadow-slate-400/10' },
  { name: 'Bash', Icon: SiGnubash, color: 'hover:border-green-500/40 hover:text-[#4EAA25] hover:shadow-green-500/10' }
];

const generalFullStackTools = [
  { name: 'Python', Icon: SiPython, color: 'hover:border-yellow-400/40 hover:text-[#3776AB] hover:shadow-yellow-400/10' },
  { name: 'Node.js', Icon: SiNodedotjs, color: 'hover:border-green-500/40 hover:text-[#339933] hover:shadow-green-500/10' },
  { name: 'React', Icon: SiReact, color: 'hover:border-cyan-400/40 hover:text-[#61DAFB] hover:shadow-cyan-400/10' },
  { name: 'Next.js', Icon: SiNextdotjs, color: 'hover:border-slate-300/40 hover:text-[#FFFFFF] hover:shadow-slate-300/10' },
  { name: 'MongoDB', Icon: SiMongodb, color: 'hover:border-green-600/40 hover:text-[#47A248] hover:shadow-green-600/10' },
  { name: 'MySQL', Icon: SiMysql, color: 'hover:border-sky-600/40 hover:text-[#4479A1] hover:shadow-sky-600/10' },
  { name: 'Firebase', Icon: SiFirebase, color: 'hover:border-amber-400/40 hover:text-[#FFCA28] hover:shadow-amber-400/10' },
  { name: 'Flutter', Icon: SiFlutter, color: 'hover:border-cyan-500/40 hover:text-[#02569B] hover:shadow-cyan-500/10' },
  { name: 'Laravel', Icon: SiLaravel, color: 'hover:border-rose-600/40 hover:text-[#FF2D20] hover:shadow-rose-600/10' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      {/* Dynamic Ambient Glow Circles */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Technical <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            My technology toolbelt, specialized in modern cloud architecture, automation, monitoring, and full-stack development.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          
          {/* 1. DevOps & Cloud Core (Prominent Section) */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Server size={18} />
              </span>
              <h3 className="text-xl font-bold text-slate-100 tracking-wide uppercase font-mono">
                DevOps, Infrastructure & Observability
              </h3>
              <div className="h-px bg-slate-800 flex-grow hidden sm:block" />
              <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 uppercase">Core Focus</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {devOpsTools.map((tool, idx) => {
                const Icon = tool.Icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.02 }}
                    className={`glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center space-y-3 aspect-square border border-slate-800/80 cursor-pointer group ${tool.color}`}
                  >
                    <Icon className="w-10 h-10 transition-all duration-300 group-hover:scale-110 text-slate-400 group-hover:text-inherit" />
                    <span className="text-xs font-semibold font-mono tracking-wider text-slate-300">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 2. Programming & Full Stack Development (Secondary Section) */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Code size={18} />
              </span>
              <h3 className="text-xl font-bold text-slate-100 tracking-wide uppercase font-mono">
                Programming Languages & App Development
              </h3>
              <div className="h-px bg-slate-800 flex-grow hidden sm:block" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {generalFullStackTools.map((tool, idx) => {
                const Icon = tool.Icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.02 }}
                    className={`glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center space-y-3 aspect-square border border-slate-800/30 cursor-pointer group ${tool.color}`}
                  >
                    <Icon className="w-8 h-8 transition-all duration-300 group-hover:scale-105 text-slate-500 group-hover:text-inherit" />
                    <span className="text-xs font-semibold font-mono tracking-wider text-slate-400">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
