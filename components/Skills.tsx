'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAppSelector } from '@/app/hooks';

const skillCategories = [
  {
    title: 'Core Stack',
    skills: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'JavaScript (ES6+)',
      'Python (FastAPI)',
      'Java Spring Boot',
      'Node.js',
      'PostgreSQL',
    ],
  },
  {
    title: 'Frontend Ecosystem',
    skills: [
      'Redux (RTK Query)',
      'Zustand',
      'TanStack Query',
      'Tailwind CSS',
      'shadcn/ui',
      'Ant Design',
      'DaisyUI',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      'Express.js',
      'Java Spring Boot',
      '.NET',
      'Java (basic)',
      'C#',
      'MongoDB',
      'SQLAlchemy',
      'Alembic',
      'Pydantic',
      'OTP Services',
      'REST APIs',
    ],
  },
  {
    title: 'Infrastructure & Tools',
    skills: [
      'GCP (Cloud SQL, Cloud Run, Cloud Build)',
      'Supabase',
      'Firebase (Auth, Storage)',
      'Clerk',
      'Git',
      'GitHub',
      'GitLab',
      'Jira',
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const theme = useAppSelector((state) => state.ui.theme);

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-transparent to-[#0f0f0f]' 
          : 'bg-gradient-to-b from-transparent to-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">
            SKILLS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-12 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className={`glass rounded-2xl p-6 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'hover:bg-gray-50 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                    }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className={`px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm transition-all duration-200 cursor-default ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/30'
                        : 'text-gray-700 hover:text-gray-900 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/20'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

