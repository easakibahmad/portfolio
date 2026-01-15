'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap } from 'react-icons/hi';
import Image from 'next/image';
import { useAppSelector } from '@/app/hooks';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const theme = useAppSelector((state) => state.ui.theme);

  return (
    <section
      id="education"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            EDUCATION
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`glass rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 ${
            theme === 'dark' 
              ? 'hover:shadow-lg hover:shadow-purple-500/20' 
              : 'hover:shadow-lg hover:shadow-purple-500/10'
          }`}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600" />
          <div className="pl-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white p-2 flex-shrink-0">
                <Image
                  src="/assets/du.png"
                  alt="University of Dhaka Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Bachelor of Computer Science and Engineering
                  </h3>
                  <span className="text-purple-400 font-semibold text-sm md:text-base">
                    2019 - 2024
                  </span>
                </div>
                <p className={`text-xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>University of Dhaka</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

