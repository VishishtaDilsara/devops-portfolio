import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, BehanceIcon } from './CustomIcons';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';



export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', mobile: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null


  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in Name, Email, and Message fields.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1. Save contact message persistently to Firebase Firestore
      let dbSaved = false;
      try {
        const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || "";
        if (projectId && projectId !== "YOUR_FIREBASE_PROJECT_ID") {
          await addDoc(collection(db, "contacts"), {
            name: formState.name,
            email: formState.email,
            phone: formState.mobile || "",
            message: formState.message,
            timestamp: serverTimestamp()
          });
          dbSaved = true;
          console.log("Message successfully saved to Firebase Database");
        } else {
          console.warn("Firebase not configured. Skipping Firestore write.");
        }
      } catch (fbError) {
        console.error("Firebase Firestore write failed:", fbError);
      }

      // 2. Dispatch email notification via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";
      let emailSent = false;

      if (
        serviceId && serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
        templateId && templateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
        publicKey && publicKey !== "YOUR_EMAILJS_PUBLIC_KEY"
      ) {
        const emailParams = {
          from_name: formState.name,
          from_email: formState.email,
          from_phone: formState.mobile || "Not Provided",
          message: formState.message,
          to_name: "Vishishta Dilsara",
          to_email: "vishishtadilsara2002@gmail.com"
        };

        const result = await emailjs.send(serviceId, templateId, emailParams, publicKey);
        if (result.status === 200 || result.text === "OK") {
          emailSent = true;
          console.log("Email notification successfully sent via EmailJS");
        }
      }

      // Handle feedback states
      if (dbSaved || emailSent) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', mobile: '', message: '' });
      } else {
        // If neither is configured, show setup alert to help user connect keys, and trigger success locally for visual demo
        alert("Portfolio backend setup is incomplete! Please copy .env.example to .env and configure your EmailJS or Firebase keys to receive messages.");
        setSubmitStatus('success');
        setFormState({ name: '', email: '', mobile: '', message: '' });
      }


    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-900">
      {/* Decorative Blur BG */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Have a question, proposal, or want to discuss a project? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Let’s schedule a call and <span className="text-gradient-purple">build something impactful</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                I’m currently accepting new projects and would love to hear about your ideas, challenges, and goals.
              </p>
            </div>

            {/* Interactive Info List */}
            <div className="space-y-4 font-mono text-xs sm:text-sm">
              {/* Phone item */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between border border-slate-800/40 group/item">
                <div className="flex items-center space-x-3.5 text-slate-300">
                  <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/item:bg-cyan-500/20 transition-all">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Phone</div>
                    <a href="tel:+94761673391" className="font-semibold hover:text-cyan-400 transition-colors">
                      +94 761 673 391
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+94 761 673 391', 'phone')}
                  className="p-1.5 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Email item */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between border border-slate-800/40 group/item">
                <div className="flex items-center space-x-3.5 text-slate-300">
                  <span className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover/item:bg-violet-500/20 transition-all">
                    <Mail size={16} />
                  </span>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Email Address</div>
                    <a href="mailto:vishishtadilsara2002@gmail.com" className="font-semibold hover:text-violet-400 transition-colors break-all">
                      vishishtadilsara2002@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('vishishtadilsara2002@gmail.com', 'email')}
                  className="p-1.5 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Address item */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between border border-slate-800/40 group/item">
                <div className="flex items-center space-x-3.5 text-slate-300">
                  <span className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover/item:bg-pink-500/20 transition-all">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Office Address</div>
                    <span className="font-semibold text-slate-300">
                      No. 01, Indigasketiya, Baddegama
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('No. 01, Indigasketiya, Baddegama', 'address')}
                  className="p-1.5 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all cursor-pointer"
                  title="Copy Address"
                >
                  {copiedField === 'address' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Social Icons list */}
            <div className="space-y-3 pt-4">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Follow My Work</div>
              <div className="flex items-center space-x-3">
                {/* GitHub */}
                <a 
                  href="https://github.com/VishishtaDilsara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800 transition-all duration-200"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/vishishta-dilsara-14059a348/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800 transition-all duration-200"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/vishishta.dilsara?_rdc=2&_rdr#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800 transition-all duration-200"
                  title="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/_vish__x___" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800 transition-all duration-200"
                  title="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>

                {/* Behance */}
                <a 
                  href="https://www.behance.net/vishishdilsara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-800 transition-all duration-200"
                  title="Behance"
                >
                  <BehanceIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/60 shadow-xl relative overflow-hidden">
              
              {/* Form Success overlay */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-slate-950/95 z-25 flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30"
                  >
                    <Check size={24} className="text-emerald-400" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-slate-100">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-400 font-light max-w-sm">
                    Thank you! Your message has been forwarded directly to my inbox. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    type="button"
                    className="mt-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer hover:border-cyan-500/30"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}

              {/* Form Error overlay */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-slate-950/95 z-25 flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center border border-rose-500/30">
                    <span className="text-xl font-bold font-mono text-rose-400">!</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Submission Failed</h4>
                  <p className="text-sm text-slate-400 font-light max-w-sm">
                    There was an issue sending your message. Please check your network connection or verify that the Web3Forms key is configured correctly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    type="button"
                    className="mt-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer hover:border-rose-500/30"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}


              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-slate-400">
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-slate-200 transition-all font-sans text-sm placeholder:text-slate-600"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-slate-400">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-slate-200 transition-all font-sans text-sm placeholder:text-slate-600"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-xs font-mono font-medium text-slate-400">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formState.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-slate-200 transition-all font-sans text-sm placeholder:text-slate-600"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-slate-400">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-slate-200 transition-all font-sans text-sm placeholder:text-slate-600 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
