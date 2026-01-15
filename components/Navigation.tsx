'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { toggleTheme } from '@/app/features/uiSlice';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useAppSelector((state) => state.ui.activeSection);
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Glow effect */}
                <motion.div 
                  className={`absolute -inset-1 rounded-xl blur-lg opacity-30 transition-opacity ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600' 
                      : 'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400'
                  }`}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Main logo box */}
                <div className={`relative px-4 py-2 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-purple-600/30 border-purple-500/40 backdrop-blur-md shadow-lg shadow-purple-500/20'
                    : 'bg-gradient-to-br from-purple-100/80 via-blue-100/60 to-purple-100/80 border-purple-300/60 backdrop-blur-md shadow-lg shadow-purple-300/30'
                } group-hover:border-purple-400 group-hover:shadow-purple-500/40 group-hover:scale-105`}>
                  <div className="flex items-center justify-center">
                    <span className={`text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient`}>
                      SA
                    </span>
                  </div>
                </div>
              </div>
              {/* Name text - shown on larger screens */}
              <div className="hidden md:flex flex-col items-start -space-y-1">
                <motion.span 
                  className={`text-sm font-bold leading-tight transition-colors ${
                    theme === 'dark' ? 'text-gray-200 group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
                  }`}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Sakib
                </motion.span>
                <motion.span 
                  className={`text-xs leading-tight transition-colors ${
                    theme === 'dark' ? 'text-gray-400 group-hover:text-blue-300' : 'text-gray-600 group-hover:text-blue-500'
                  }`}
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  Ahmad
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-purple-400'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <motion.button
              onClick={() => dispatch(toggleTheme())}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={() => dispatch(toggleTheme())}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>
            <button
              className={theme === 'dark' ? 'text-white' : 'text-gray-900'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-md border-t ${
              theme === 'dark'
                ? 'bg-[#0a0a0a]/95 border-white/10'
                : 'bg-white/95 border-gray-200'
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-purple-400 bg-purple-400/10'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

