import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Shield, Cloud, Terminal, Compass, Layers } from 'lucide-react';
import awsCcpBadge from '../assets/aws_certified_cloud_practitioner.png';
import kcnaBadge from '../assets/kcna_badge.png';
import mslaBadge from '../assets/microsoft_student_ambassador.png';
import finopsBadge from '../assets/finops_certified_practitioner.png';
import aviatrixBadge from '../assets/aviatrix_badge.png';






const certificationsData = [
  // 1. AWS Certified Cloud Practitioner
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 30, 2026',
    // Replace the link below with your actual Credly / verification URL
    verifyUrl: 'https://www.credly.com/badges/a16c7026-df43-4e5e-b8ec-ebd8c2ed3f3b/public_url',
    // Custom beautiful SVG badge definition or React Icon
    badgeColor: 'from-orange-500/20 to-amber-600/20 border-orange-500/30',
    iconColor: 'text-orange-400',
    icon: Cloud,
    badgeText: 'AWS',
    image: awsCcpBadge
  },
  // 2. Kubernetes and Cloud Native Associate — KCNA
  {
    id: 'kcna',
    name: 'Kubernetes and Cloud Native Associate (KCNA)',
    issuer: 'The Linux Foundation / CNCF',
    date: 'Jul 7, 2026',
    // Replace the link below with your actual verification URL
    verifyUrl: 'https://www.credly.com/badges/c167faae-f140-4573-a703-9cac78508ead/public_url',
    badgeColor: 'from-blue-600/20 to-cyan-500/20 border-blue-500/30',
    iconColor: 'text-blue-400',
    icon: SteeringWheelIcon, // Defined below
    badgeText: 'CNCF',
    image: kcnaBadge
  },
  // 3. Associate Microsoft Student Ambassador
  {
    id: 'msla',
    name: 'Associate Microsoft Student Ambassador',
    issuer: 'Microsoft',
    date: 'Jan 2025',
    verifyUrl: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/24bf9d57-6a9b-4c08-9077-c37de54255a7',
    badgeColor: 'from-blue-600/20 to-sky-500/20 border-blue-500/30',
    iconColor: 'text-blue-400',
    icon: Award,
    badgeText: 'MSLA',
    image: mslaBadge
  },

  // 4. Aviatrix Multicloud Certified Badge
  {
    id: 'aviatrix',
    name: 'Aviatrix Multicloud Certified Badge',
    issuer: 'Aviatrix',
    date: 'Oct 5, 2025',
    // Replace the link below with your actual verification URL
    verifyUrl: 'https://www.credly.com/badges/33b3e1d5-e6b8-4142-b52e-82ddca17b7e6/public_url',
    badgeColor: 'from-rose-500/20 to-pink-600/20 border-rose-500/30',
    iconColor: 'text-rose-400',
    icon: Layers,
    badgeText: 'AVX',
    image: aviatrixBadge
  },
  // 5. FinOps Certified Practitioner Badge
  {
    id: 'finops',
    name: 'FinOps Certified Practitioner Badge',
    issuer: 'FinOps Foundation',
    date: 'Jan 3, 2026',
    // Replace the link below with your actual verification URL
    verifyUrl: 'https://www.credly.com/badges/58b80853-6ad0-4358-bc95-7722111b6872/public_url',
    badgeColor: 'from-emerald-500/20 to-teal-600/20 border-emerald-500/30',
    iconColor: 'text-emerald-400',
    icon: Shield,
    badgeText: 'FINOPS',
    image: finopsBadge
  }
];

// Custom Kubernetes-style steering wheel icon
function SteeringWheelIcon({ className, size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v7" />
      <path d="M12 15v7" />
      <path d="M2 12h7" />
      <path d="M15 12h7" />
      <path d="m5.8 5.8 4.4 4.4" />
      <path d="m13.8 13.8 4.4 4.4" />
      <path d="m18.2 5.8-4.4 4.4" />
      <path d="m10.2 10.2-4.4 4.4" />
    </svg>
  );
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  // Initially show only 3 cards
  const visibleCertifications = showAll ? certificationsData : certificationsData.slice(0, 3);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Professional <span className="text-gradient-purple">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Cloud, Kubernetes, Multicloud, and FinOps credentials verifying my technical skills.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleCertifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    opacity: { duration: 0.2 }, 
                    layout: { type: 'spring', stiffness: 250, damping: 25 },
                    delay: showAll ? 0 : index * 0.05
                  }}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between items-center text-center h-full group relative overflow-hidden"
                >
                  {/* Decorative faint background badge name */}
                  <div className="absolute -right-4 -bottom-6 text-7xl font-extrabold text-slate-800/10 select-none font-mono pointer-events-none uppercase">
                    {cert.badgeText}
                  </div>

                  <div className="flex flex-col items-center">
                    {/* Badge Image Area (using customized gradient icon container or image) */}
                    <div className={`w-36 h-36 rounded-2xl flex items-center justify-center ${cert.image ? '' : `bg-gradient-to-br ${cert.badgeColor} border`} mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                      {cert.image ? (
                        <img src={cert.image} alt={cert.name} className="w-full h-full object-contain p-1" />
                      ) : (
                        <>
                          <Icon className={`${cert.iconColor} w-16 h-16`} />
                          <div className="absolute inset-0 rounded-2xl bg-slate-950/20 mix-blend-overlay" />
                        </>
                      )}
                    </div>

                    {/* Cert Title & Issuer */}
                    <div className="space-y-2 mb-6">
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {cert.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 text-xs font-mono text-slate-400">
                        <span>Issued by: {cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verification Info & Date */}
                  <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-slate-900 z-10">
                    <span className="text-xs font-mono text-slate-500">
                      Date: {cert.date}
                    </span>
                    
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold transition-all duration-300 hover:text-white cursor-pointer"
          >
            <span>{showAll ? 'Show Less' : 'More Certifications'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
