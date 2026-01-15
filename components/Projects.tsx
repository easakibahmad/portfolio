'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useAppSelector } from '@/app/hooks';

interface Project {
  title: string;
  description: string;
  type: string;
  company?: string;
  github?: string;
  githubServer?: string;
}

const projects: Project[] = [
  {
    title: 'Yaana Technologies, LLC',
    description: 'Internal full-stack web application.',
    type: 'Professional',
  },
  {
    title: 'Penta Global Limited',
    description: 'Internal full-stack web applications.',
    type: 'Professional',
  },
  {
    title: 'NBR Contact Management System',
    company: 'Fluxion Tech',
    description: 'Full-stack government contact management system.',
    type: 'Professional',
  },
  {
    title: 'Birth Registration System (BDRIS)',
    description: 'Government platform for citizen birth data management.',
    type: 'Professional',
  },
  {
    title: 'Movie Mania',
    description: 'A movie app and review platform using a movie API',
    type: 'Personal',
  },
  {
    title: 'CSEDU Thesis Service',
    description: 'A platform for managing thesis projects',
    type: 'Personal',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const theme = useAppSelector((state) => state.ui.theme);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">
            PROJECTS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-12 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass rounded-2xl p-6 transition-all duration-300 group cursor-default ${
                theme === 'dark' 
                  ? 'hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'hover:bg-gray-100 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-xl font-bold transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-white group-hover:text-purple-400' 
                    : 'text-gray-900 group-hover:text-purple-600'
                }`}>
                  {project.title}
                </h3>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-200"
                  >
                    <FaGithub size={20} className={`transition-colors ${
                      theme === 'dark' 
                        ? 'text-white hover:text-gray-300' 
                        : 'text-gray-800 hover:text-gray-900'
                    }`} />
                  </motion.a>
                )}
              </div>
              {project.company && (
                <p className="text-sm text-purple-400 mb-2">{project.company}</p>
              )}
              <p className={`mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>{project.description}</p>
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === 'Professional'
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                      : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  }`}
                >
                  {project.type}
                </span>
                {project.githubServer && (
                  <motion.a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 2 }}
                    className={`text-xs transition-all duration-200 flex items-center gap-1 ${
                      theme === 'dark' 
                        ? 'text-gray-400 hover:text-purple-400' 
                        : 'text-gray-600 hover:text-purple-500'
                    }`}
                  >
                    Server <HiExternalLink size={12} className="inline" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

