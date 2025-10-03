// components/Footer.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon from '@/assets/icon.png';

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const footerSections = [
    {
      title: "서비스",
      links: ["실시간 고래 추적", "급등락 알림", "거래량 분석", "API 서비스"]
    },
    {
      title: "지원",
      links: ["사용 가이드", "고객 지원", "FAQ", "개발자 문서"]
    },
    {
      title: "커뮤니티",
      links: ["트위터", "텔레그램", "디스코드", "유튜브"]
    }
  ];

  return (
    <motion.footer 
      className="relative z-10 px-6 py-16 border-t border-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
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
              <div>
                <span className="text-white text-xl font-bold">눈칫</span>
                <span className="text-slate-400 text-sm ml-2">Noonchit</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              24시간 시장을 감시하는<br />
              강력한 데이터 트레이딩 파트너
            </p>
          </motion.div>
          
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3 text-slate-400">
                {section.links.map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">&copy; 2025 Noonchit. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <motion.a 
              href="/terms" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              서비스 이용약관
            </motion.a>
            <span>|</span>
            <motion.a 
              href="/privacy" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              개인정보 처리방침
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}