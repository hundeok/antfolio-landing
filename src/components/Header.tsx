// components/Header.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon from '@/assets/icon.png';

export default function Header() {
  const navigationItems = [
    { name: '문제점', href: '#problems' },
    { name: '솔루션', href: '#solution' },
    { name: '주요 기능', href: '#features' },
    { name: '타겟 사용자', href: '#target' },
    { name: '다운로드', href: '#download' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-effect"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Image 
                src={icon} 
                alt="눈칫 로고" 
                width={40} 
                height={40}
                className="rounded-xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    target.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <span className="text-white font-bold text-xl" style={{display: 'none'}}>👁</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
          </div>
          <div>
            <span className="text-white text-2xl font-bold">눈칫</span>
            <span className="text-slate-400 text-sm ml-2">Noonchit</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.button 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            App Store
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
