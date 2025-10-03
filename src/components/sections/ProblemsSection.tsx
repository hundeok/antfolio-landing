'use client';
import { motion, MotionValue } from 'framer-motion';
import { PROBLEMS } from '@/lib/constants';
import Image from 'next/image';
import problem1 from '@/assets/problem1.png';
import problem2 from '@/assets/problem2.png';
import problem3 from '@/assets/problem3.png';
import problem4 from '@/assets/problem4.png';
import problem5 from '@/assets/problem5.png';
import problem6 from '@/assets/problem6.png';

interface ProblemsSectionProps {
  problemScale: MotionValue<number>;
  problemOpacity: MotionValue<number>;
}

export default function ProblemsSection({ problemScale, problemOpacity }: ProblemsSectionProps) {
  return (
    <section id="problems" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="text-center max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          기존 투자의 한계
        </motion.h2>

        <div className="relative w-full h-96">
          {PROBLEMS.map((problem, index) => {
            // 이미지 배열
            const problemImages = [problem1, problem2, problem3, problem4, problem5, problem6];
            
            // 웹과 모바일 구분한 정갈한 시작 위치
            const startPositions = [
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? -150 : -300, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? -80 : -150 
              },  // 왼쪽 위
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 300, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? -80 : -150 
              },   // 오른쪽 위
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? -180 : -350, 
                y: 0 
              },     // 왼쪽 중간
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 350, 
                y: 0 
              },      // 오른쪽 중간
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? -150 : -300, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 150 
              },   // 왼쪽 아래
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 300, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 150 
              }     // 오른쪽 아래
            ];

            // 웹과 모바일 구분한 정갈한 최종 위치
            const bouncePositions = [
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? -100 : -200, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? -60 : -100 
              },  // 왼쪽 위
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 200, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? -60 : -100 
              },   // 오른쪽 위
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? -120 : -250, 
                y: 0 
              },     // 왼쪽 중간
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 250, 
                y: 0 
              },      // 오른쪽 중간
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? -100 : -200, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 100 
              },   // 왼쪽 아래
              { 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 200, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 100 
              }     // 오른쪽 아래
            ];

            return (
              <motion.div
                key={problem}
                className="absolute"
                initial={{
                  x: startPositions[index].x,
                  y: startPositions[index].y,
                  opacity: 0.8,
                  scale: 1.1
                }}
                whileInView={{
                  x: [
                    startPositions[index].x,  // 시작점
                    0,                        // 중앙으로 모임
                    bouncePositions[index].x  // 튕기면서 퍼짐
                  ],
                  y: [
                    startPositions[index].y,  // 시작점
                    0,                        // 중앙으로 모임
                    bouncePositions[index].y  // 튕기면서 퍼짐
                  ],
                  scale: [1, 0.5, 1.2],       // 작아졌다가 더 크게!
                  opacity: [0.8, 1, 0.9]      // 투명도 변화
                }}
                style={{
                  left: '45%',  // 50% → 45% (왼쪽으로 20% 이동)
                  top: '50%',
                  scale: problemScale,
                  opacity: problemOpacity
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                  times: [0, 0.6, 1]  // 60%까지 모이고, 40%에서 퍼짐
                }}
                viewport={{ once: false }}
              >
                <div className="relative">
                  {/* 문제점 이미지 + 제목 오버레이 */}
                  <div className="relative w-24 h-24 mb-3 mx-auto group">
                    <Image
                      src={problemImages[index]}
                      alt={`문제점 ${index + 1}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                    
                    {/* 글로우 효과 */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-xl blur-sm -z-10 opacity-50"></div>
                  </div>
                  
                  {/* 하단 문제점 텍스트 */}
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg px-3 py-1 text-red-200 text-xs shadow-lg">
                    {problem}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}