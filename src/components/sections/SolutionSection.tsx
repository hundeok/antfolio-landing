'use client';
import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import icon from '@/assets/icon.png';
import app1 from '@/assets/app1.PNG';
import app2 from '@/assets/app2.PNG';
import app3 from '@/assets/app3.PNG';
import app4 from '@/assets/app4.PNG';
import app5 from '@/assets/app5.PNG';
import app6 from '@/assets/app6.PNG';

interface SolutionSectionProps {
  solutionScale: MotionValue<number>;
  solutionOpacity: MotionValue<number>;
}

const SolutionSection = React.forwardRef<HTMLDivElement, SolutionSectionProps>(
  ({ solutionScale, solutionOpacity }, ref) => {
    const appImages = [app1, app2, app3, app4, app5, app6];

    return (
      <section ref={ref} id="solution" className="flex items-center justify-center relative py-24">
        <motion.div
          className="text-center max-w-6xl mx-auto px-6"
          style={{
            scale: solutionScale,
            opacity: solutionOpacity
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-12">
            {/* 배경 원 */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                  "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))",
                  "linear-gradient(225deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                borderRadius: "50%",
                filter: "blur(40px)"
              }}
            />
            
            {/* 회오리 패턴으로 펼쳐지는 앱 스크린샷들 */}
            {appImages.map((appImage, index) => {
              // 12시 방향부터 시계방향으로 정돈된 회오리 패턴 (모바일 최적화)
              const angle = (index * 60 - 90) * Math.PI / 180; // -90도로 12시 방향 시작
              const baseRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 70; // 모바일에서 반지름 축소
              const radiusIncrement = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20; // 모바일에서 증가폭 축소
              const radius = baseRadius + index * radiusIncrement;
              const spiralX = Math.cos(angle) * radius;
              const spiralY = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ 
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                    rotate: 0
                  }}
                  whileInView={{
                    scale: [0, 1.2, 1],
                    opacity: [0, 0.8, 0.6],
                    x: spiralX,
                    y: spiralY,
                    rotate: index * 10 // 살짝만 회전
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  viewport={{ once: true }}
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-40px',
                    marginTop: '-60px'
                  }}
                >
                  <Image
                    src={appImage}
                    alt={`앱 스크린샷 ${index + 1}`}
                    width={typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 80}
                    height={typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 120}
                    className="rounded-lg shadow-lg opacity-60"
                  />
                </motion.div>
              );
            })}
            
            {/* 회전하는 로고 (가장 위에) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 relative">
                <Image
                  src={icon}
                  alt="눈칫 로고"
                  fill
                  className="rounded-3xl shadow-2xl object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      target.style.display = 'none';
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl absolute inset-0" style={{display: 'none'}}>
                  <span className="text-white font-bold text-2xl md:text-4xl lg:text-6xl">👁</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            모든 것을 <span className="gradient-text">한눈에</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            24시간 깨어있는 AI가 시장을 감시하고,<br />
            가장 중요한 순간을 놓치지 않도록 도와드립니다.
          </p>
        </motion.div>
      </section>
    );
  }
);

SolutionSection.displayName = 'SolutionSection';

export default SolutionSection;