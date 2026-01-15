'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiDocumentText } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaCode, FaWhatsapp } from 'react-icons/fa';
import { useAppSelector } from '@/app/hooks';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const theme = useAppSelector((state) => state.ui.theme);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-transparent to-[#0f0f0f]' 
          : 'bg-gradient-to-b from-transparent to-gray-50'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-12 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.button
              onClick={() => copyToClipboard('sakib.sgc.du@gmail.com', 'email')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group relative ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 group-hover:scale-110 transition-transform">
                <HiMail size={24} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Email</p>
                <p className={`group-hover:text-purple-400 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  sakib.sgc.du@gmail.com
                </p>
              </div>
              <AnimatePresence>
                {copied === 'email' && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs rounded-full whitespace-nowrap z-10"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => copyToClipboard('+880-1516083593', 'phone')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group relative ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 group-hover:scale-110 transition-transform">
                <HiPhone size={24} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Phone</p>
                <p className={`group-hover:text-purple-400 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  +880-1516083593
                </p>
              </div>
              <AnimatePresence>
                {copied === 'phone' && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs rounded-full whitespace-nowrap z-10"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="https://wa.me/8801516083593"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/20' 
                  : 'bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:shadow-green-500/10'
              }`}
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-green-600 group-hover:scale-110 transition-transform">
                <FaWhatsapp size={24} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>WhatsApp</p>
                <p className={`group-hover:text-green-500 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  +880-1516083593
                </p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'bg-gray-100 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600">
                <HiLocationMarker size={24} className="text-white" />
              </div>
              <div>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Location</p>
                <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Dhaka, Bangladesh
                </p>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="https://drive.google.com/file/d/1H-c5gm0_9zwTvK42-3aekKQIxedlp1Ap/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all mb-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-purple-500/50'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-purple-500/50'
            }`}
          >
            <HiDocumentText size={20} />
            <span>View Resume</span>
          </motion.a>

          <div className={`flex items-center justify-center gap-6 pt-6 border-t ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200'
          }`}>
            <motion.a
              href="https://github.com/easakibahmad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setHoveredLink('github')}
              onHoverEnd={() => setHoveredLink(null)}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors relative"
            >
              <FaGithub size={24} className={`transition-colors ${
                theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-900'
              }`} />
              <AnimatePresence>
                {hoveredLink === 'github' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none z-10"
                  >
                    GitHub
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
            <motion.a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setHoveredLink('leetcode')}
              onHoverEnd={() => setHoveredLink(null)}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors relative"
            >
              <FaCode size={24} className="text-[#FFA116] hover:text-[#FFB84D] transition-colors" />
              <AnimatePresence>
                {hoveredLink === 'leetcode' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none z-10"
                  >
                    LeetCode
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ea-sakib-ahmad/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setHoveredLink('linkedin')}
              onHoverEnd={() => setHoveredLink(null)}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors relative"
            >
              <FaLinkedin size={24} className="text-[#0077b5] hover:text-[#00a0dc] transition-colors" />
              <AnimatePresence>
                {hoveredLink === 'linkedin' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none z-10"
                  >
                    LinkedIn
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

