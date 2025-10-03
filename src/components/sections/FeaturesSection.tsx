'use client';
import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { DASHBOARD_FEATURES, MAIN_FEATURES } from '@/lib/constants';

// '주요 기능' 카드용 이미지
import featureImg1 from '@/assets/feature1.png';
import featureImg2 from '@/assets/feature2.png';
import featureImg3 from '@/assets/feature3.png';
// '상세 기능 설명' 카드용 이미지를 나머지로 가정
import featureImg4 from '@/assets/feature4.png';
import featureImg5 from '@/assets/feature5.png';
import featureImg6 from '@/assets/feature6.png';
import featureImg7 from '@/assets/feature7.png';


interface FeaturesSectionProps {
  dashboardY: MotionValue<string>;
  dashboardScale: MotionValue<number>;
}

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

const FeaturesSection = React.forwardRef<HTMLElement, FeaturesSectionProps>(
  ({ dashboardY, dashboardScale }, ref) => {

    const dashboardFeaturesWithImages = DASHBOARD_FEATURES.map((feature, index) => {
      const images = [featureImg1, featureImg2, featureImg3, featureImg4, featureImg5, featureImg6, featureImg7];
      return { ...feature, image: images[index] };
    });

    const mainFeaturesWithImages = MAIN_FEATURES.map((feature, index) => {
      const images = [featureImg4, featureImg5, featureImg6, featureImg7];
      return { ...feature, image: images[index] };
    });

    return (
      <section ref={ref} id="features" className="min-h-screen flex items-center justify-center relative py-20">
        <motion.div
          className="w-full max-w-7xl mx-auto px-6"
          style={{ y: dashboardY, scale: dashboardScale }}
        >
          {/* 상단 제목 부분 */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              주요 기능
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              시장의 &apos;눈치&apos;를 보는 것을 넘어, 시장을 이끌어 가세요
            </p>
          </motion.div>

          <motion.div
            className="glass-effect rounded-3xl p-8 shadow-2xl mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            {/* '주요 기능' 카드 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {dashboardFeaturesWithImages.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-xl relative overflow-hidden h-48"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: false }}
                >
                  {/* ▼▼▼ 이미지를 감싸는 motion.div를 추가하고 여기에 애니메이션을 적용 ▼▼▼ */}
                  <motion.div
                    className="absolute inset-0"
                    animate={
                      // index가 0, 1, 2일 때 (첫 3개)만 애니메이션 적용
                      index < 3 ? {
                        scale: [1, 1.08, 1], // 1 -> 1.08 -> 1 크기로 반복
                      } : {}
                    }
                    transition={
                      index < 3 ? {
                        duration: 4, // 4초 동안
                        repeat: Infinity, // 무한 반복
                        ease: "easeInOut", // 부드럽게
                        delay: index * 0.5, // 각 카드마다 0.5초 딜레이
                      } : {}
                    }
                  >
                    <Image src={item.image} alt={`${item.title} 배경`} layout="fill" objectFit="cover" className="opacity-40" />
                  </motion.div>
                  {/* ▲▲▲ 여기까지 변경 ▲▲▲ */}

                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 text-2xl`}>{item.icon}</div>
                    <div className="mt-auto">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-white">{item.value}</span>
                        <span className="text-green-400 font-semibold">{item.change}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 z-20">
                    <motion.div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* '실시간 시장 동향' 섹션 */}
            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">실시간 시장 동향</h3>
              <div className="h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-slate-400 text-lg">Live Chart Simulation</div>
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} className="absolute w-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full" style={{ left: `${20 + i * 15}%`, bottom: '20%' }} animate={{ height: [`${30 + Math.random() * 40}%`, `${20 + Math.random() * 50}%`] }} transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* '상세 기능 설명' 섹션 */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {mainFeaturesWithImages.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-8 transition-all duration-500 relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02, boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Image src={feature.image} alt={`${feature.title} 배경`} layout="fill" objectFit="cover" className="opacity-20" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="text-white text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    );
  }
);

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;