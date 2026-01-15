'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAppSelector } from '@/app/hooks';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const theme = useAppSelector((state) => state.ui.theme);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`glass rounded-2xl p-8 md:p-10 transition-all duration-300 ${
            theme === 'dark' 
              ? 'hover:shadow-lg hover:shadow-purple-500/20' 
              : 'hover:shadow-lg hover:shadow-purple-500/10'
          }`}
        >
          <p className={`text-lg md:text-xl leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Software Engineer with nearly <span className="text-purple-400 font-semibold">2 years of experience</span> developing scalable applications. Combines frontend expertise in creating responsive, pixel-perfect interfaces (
            <span className="text-blue-400">React 19, Next.js, Tailwind CSS</span>) with backend skills in 
            <span className="text-blue-400"> Python (FastAPI)</span> and <span className="text-blue-400">PostgreSQL</span>. Proven ability to design complex database schemas, secure RESTful APIs, and manage production deployments on <span className="text-purple-400">GCP (Cloud Run, Cloud SQL)</span>. Committed to delivering high-performance solutions with clean code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


