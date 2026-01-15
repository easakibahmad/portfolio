'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiChevronDown, HiDocumentText } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/app/hooks';

export default function Hero() {
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-600 to-blue-600 p-1">
              <div className={`w-full h-full rounded-full overflow-hidden p-1 ${
                theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
              }`}>
                <Image
                  src="/assets/sakib.jpeg"
                  alt="Sakib Ahmad"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Sakib Ahmad</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className={`text-2xl md:text-3xl mb-4 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Software Engineer (Fullstack)
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          <motion.button
            onClick={() => copyToClipboard('+880-1516083593', 'phone')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer relative group"
          >
            <HiPhone size={18} />
            <span>+880-1516083593</span>
            <AnimatePresence>
              {copied === 'phone' && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs rounded-full whitespace-nowrap"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button
            onClick={() => copyToClipboard('sakib.sgc.du@gmail.com', 'email')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer relative group"
          >
            <HiMail size={18} />
            <span>sakib.sgc.du@gmail.com</span>
            <AnimatePresence>
              {copied === 'email' && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs rounded-full whitespace-nowrap"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <div className="flex items-center gap-2">
            <HiLocationMarker size={18} />
            <span>Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://github.com/easakibahmad"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
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
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
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
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
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
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1H-c5gm0_9zwTvK42-3aekKQIxedlp1Ap/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all ${
                theme === 'dark'
                  ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
                  : 'bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200 hover:border-gray-300'
              }`}
            >
              <HiDocumentText size={20} />
              <span>View Resume</span>
            </motion.a>
          </div>
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            whileHover={{ scale: 1.2, color: '#a78bfa' }}
            className="cursor-pointer"
          >
            <HiChevronDown size={32} className={`transition-colors ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-purple-400' 
                : 'text-gray-600 hover:text-purple-500'
            }`} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

