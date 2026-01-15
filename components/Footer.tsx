'use client';

import { motion } from 'framer-motion';
import { useAppSelector } from '@/app/hooks';

export default function Footer() {
  const theme = useAppSelector((state) => state.ui.theme);
  
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
      theme === 'dark' ? 'border-white/10' : 'border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
        >
          © {new Date().getFullYear()} Sakib Ahmad. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

