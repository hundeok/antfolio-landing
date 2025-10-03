'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TARGET_USERS } from '@/lib/constants';

// 1. assets 폴더의 이미지들을 import 합니다.
import targetImg1 from '@/assets/target1.png';
import targetImg2 from '@/assets/target2.png';
import targetImg3 from '@/assets/target3.png';


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

export default function TargetSection() {

  // 2. 기존 데이터와 이미지 데이터를 결합합니다.
  const targetsWithImages = TARGET_USERS.map((target, index) => {
    const images = [targetImg1, targetImg2, targetImg3];
    return {
      ...target,
      image: images[index]
    };
  });

  return (
    <section id="target" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            이런 분들을 위해 태어났습니다
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {targetsWithImages.map((target, index) => (
            <motion.div
              key={index}
              className="text-center glass-effect rounded-2xl p-8 transition-all duration-500 relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* 맥박 효과를 위한 이미지 배경 */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5, // 5초 동안
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.7, // 각 카드마다 0.7초 딜레이
                }}
              >
                <Image src={target.image} alt={`${target.title} 배경`} layout="fill" objectFit="cover" className="opacity-20" />
              </motion.div>

              {/* 기존 콘텐츠를 감싸는 컨테이너 */}
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${target.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-4xl">{target.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{target.title}</h3>
                <p className="text-slate-300">{target.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}