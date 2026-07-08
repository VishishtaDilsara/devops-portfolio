import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Server, Globe, Cpu, Code2, Smartphone } from 'lucide-react';

const workExperience = [
  {
    role: 'DevOps Engineer',
    icon: Server,
    color: 'from-cyan-400 to-blue-500',
    description: 'Experienced in deploying scalable applications using CI/CD pipelines, Kubernetes orchestration, Infrastructure as Code (IaC), and modern cloud infrastructure.',
    tags: ['AWS', 'CI/CD', 'Kubernetes', 'IaC', 'Docker']
  },
  {
    role: 'Cloud Engineer',
    icon: Cpu,
    color: 'from-emerald-400 to-teal-500',
    description: 'AWS Certified Cloud Practitioner | Aviatrix Multicloud Certified Badge | FinOps Certified Practitioner Badge',
    tags: ['AWS Certified Cloud Practitioner', 'Aviatrix Multicloud', 'FinOps']
  },
  {
    role: 'Open Source Contributor',
    icon: Globe,
    color: 'from-amber-400 to-orange-500',
    description: 'Contributed to multiple open-source projects on GitHub, collaborating on real-world codebases and improving features and fixes.',
    tags: ['GitHub', 'Git Collaboration', 'Bug Fixes', 'Community']
  },
  {
    role: 'Full-Stack Developer',
    icon: Code2,
    color: 'from-violet-400 to-fuchsia-500',
    description: 'Hands-on experience building web applications using MERN stack, Next.js, Laravel, and pure HTML, CSS, and JavaScript.',
    tags: ['MERN', 'Next.js', 'Laravel', 'Vanilla JS']
  },
  {
    role: 'Flutter Developer',
    icon: Smartphone,
    color: 'from-pink-400 to-rose-500',
    description: 'Flutter developer with experience in building real-world mobile applications using modern development practices.',
    tags: ['Flutter', 'Dart', 'State Management', 'REST APIs']
  }
];

const educationHistory = [
  {
    period: 'June 2023 - Present',
    degree: 'BComp(Hons.) in Software Engineering',
    institution: 'University of Sri Jayewardenepura',
    description: 'Currently pursuing a Bachelor of Computing (Hons.) in Software Engineering, focusing on software engineering principles, advanced databases, cloud computing, and DevOps methodologies.'
  },
  {
    period: 'May 2022 - May 2023',
    degree: 'Diploma in Information Technology',
    institution: 'ESOFT Metro Campus',
    description: 'Successfully completed the Assured Diploma in Information Technology (DITEC), establishing core programming and IT systems knowledge.'
  },
  {
    period: 'Jan 2019 - Feb 2022',
    degree: 'Advanced Level (Mathematics Stream)',
    institution: 'High School',
    description: 'Successfully completed Advanced Level examinations in the Mathematics stream with excellent grades: 1 A, 1 B, and 1 C.'
  },
  {
    period: 'Dec 2018',
    degree: 'Ordinary Level (English Medium)',
    institution: 'High School',
    description: 'Successfully completed Ordinary Level examinations in English medium with outstanding results: 8 As and 1 B.'
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work'); // 'work' or 'education'

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            My <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            A chronological overview of my professional experience and educational background.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md relative">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 relative z-10 cursor-pointer ${
                activeTab === 'work' ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
              {activeTab === 'work' && (
                <motion.div
                  layoutId="activeExperienceTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 relative z-10 cursor-pointer ${
                activeTab === 'education' ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap size={16} />
              <span>Education</span>
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeExperienceTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'work' ? (
              <motion.div
                key="work-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative border-l border-slate-800 pl-6 sm:pl-8 space-y-12 ml-4"
              >
                {workExperience.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={item.role} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ delay: idx * 0.08, type: 'spring', stiffness: 100 }}
                      className="relative group"
                    >
                      {/* Timeline dot icon */}
                      <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors duration-300">
                        <Icon size={16} />
                      </span>

                      {/* Card Content */}
                      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                            {item.role}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="education-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative border-l border-slate-800 pl-6 sm:pl-8 space-y-12 ml-4"
              >
                {educationHistory.map((item, idx) => (
                  <motion.div 
                    key={item.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: idx * 0.08, type: 'spring', stiffness: 100 }}
                    className="relative group"
                  >
                    {/* Timeline dot icon */}
                    <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 text-violet-400 group-hover:border-violet-500/50 group-hover:text-violet-300 transition-colors duration-300">
                      <GraduationCap size={16} />
                    </span>

                    {/* Card Content */}
                    <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors duration-300">
                          {item.degree}
                        </h3>
                        <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-violet-400/90 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full w-fit">
                          <Calendar size={12} />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <div className="text-sm font-semibold text-slate-300">{item.institution}</div>

                      <p className="text-sm text-slate-400 leading-relaxed font-light pt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
