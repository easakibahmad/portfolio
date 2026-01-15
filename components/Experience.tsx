'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiExternalLink, HiCheckCircle } from 'react-icons/hi';
import { useAppSelector } from '@/app/hooks';

const experiences = [
  {
    company: 'YAANA Technologies, LLC',
    position: 'Software Engineer (Frontend)',
    period: '25/09/2024 - Present',
    website: 'https://www.yaanatech.com/',
    description: 'Developing (Neustring, a full-stack application) features for specific clients, working with international developers and business analysts',
  },
  {
    company: 'PENTA GLOBAL LIMITED',
    position: 'Software Engineer (Frontend)',
    period: '03/03/2024 - Present',
    website: 'https://www.pentabd.com/',
    description: [
      'Collaborated on the frontend development of large-scale web applications using React 19, Next.js, and TypeScript, translating Figma designs into production-ready components.',
      'Integrated frontend architectures with Django and Java Spring Boot REST APIs, optimising UI performance, accessibility, and user experience.',
      'Implemented advanced state management, routing, and reusable component libraries to ensure scalable and maintainable code quality.',
    ],
  },
  {
    company: 'FLUXION TECH',
    position: 'Software Engineer (Fullstack) - (part-time)',
    period: '15/10/2025 - Present',
    description: [
      'Developed a full-stack contact management system for the National Board of Revenue (NBR) using Next.js 15, FastAPI, and PostgreSQL.',
      'Designed hierarchical database schemas and secured APIs using JWT & OTP.',
      'Deployed to production on GCP (Cloud Run, SQL) following clean architecture.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const theme = useAppSelector((state) => state.ui.theme);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            WORK EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-12" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`glass rounded-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-300 ${
                theme === 'dark' 
                  ? 'hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'hover:bg-gray-50 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600" />
              <div className="pl-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 group-hover:scale-110 transition-transform">
                    <HiBriefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-2xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.company}
                        </h3>
                        {exp.website && (
                          <motion.a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-purple-400 hover:text-purple-300 transition-all duration-200"
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <HiExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 text-sm md:text-base">
                        <HiCalendar size={16} />
                        <span className="font-semibold">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-xl text-blue-400 mb-4">{exp.position}</p>
                    {Array.isArray(exp.description) ? (
                      <ul className={`space-y-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 mt-0.5 p-1 rounded-full ${
                              theme === 'dark' 
                                ? 'bg-purple-500/20' 
                                : 'bg-purple-100'
                            }`}>
                              <HiCheckCircle 
                                size={16} 
                                className={`${
                                  theme === 'dark' 
                                    ? 'text-purple-400' 
                                    : 'text-purple-600'
                                }`} 
                              />
                            </div>
                            <span className="flex-1 leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

