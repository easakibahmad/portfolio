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
          <div className="space-y-6">
            <p className={`text-lg md:text-xl leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Software Engineer with nearly <span className="text-purple-400 font-semibold">2 years of experience</span> developing scalable applications. Committed to delivering high-performance solutions with clean code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className={`text-lg font-bold ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Frontend Expertise
                </h3>
                <p className={`text-base leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Creating responsive, pixel-perfect interfaces with{' '}
                  <span className="text-blue-400 font-medium">React 19</span>,{' '}
                  <span className="text-blue-400 font-medium">Next.js</span>, and{' '}
                  <span className="text-blue-400 font-medium">Tailwind CSS</span>.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className={`text-lg font-bold ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Backend Skills
                </h3>
                <p className={`text-base leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Building robust APIs with{' '}
                  <span className="text-blue-400 font-medium">Python (FastAPI)</span>,{' '}
                  <span className="text-blue-400 font-medium">Java Spring Boot</span>, and{' '}
                  <span className="text-blue-400 font-medium">PostgreSQL</span>.
                </p>
              </div>
            </div>
            
            <div className={`pt-4 border-t ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <p className={`text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Proven ability to design <span className="text-purple-400 font-medium">complex database schemas</span>, secure <span className="text-purple-400 font-medium">RESTful APIs</span>, and manage <span className="text-purple-400 font-medium">production deployments</span> on{' '}
                <span className="text-blue-400 font-medium">GCP (Cloud Run, Cloud SQL)</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


