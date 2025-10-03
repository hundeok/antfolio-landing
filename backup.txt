'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import icon from '@/assets/icon.png';

export default function NoonchitCombined() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 스크롤 기반 변환
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  // 문제점들이 모이는 효과
  const problemScale = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);
  const problemOpacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);
  const solutionScale = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const solutionOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  
  // 대시보드 등장
  const dashboardY = useTransform(scrollYProgress, [0.5, 0.65], ['100%', '0%']);
  const dashboardScale = useTransform(scrollYProgress, [0.5, 0.65], [0.8, 1]);
  
  // 배경 색상 전환
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#0f172a", "#1e1b4b", "#312e81", "#0f172a"]
  );

  // 스프링 애니메이션
  const springConfig = { stiffness: 300, damping: 30 };
  const smoothScale = useSpring(heroScale, springConfig);

  // 애니메이션 variants
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

  const cryptoCoins = [
    { name: 'Bitcoin', symbol: '₿', color: 'from-orange-500 to-yellow-500' },
    { name: 'Ethereum', symbol: 'Ξ', color: 'from-blue-500 to-purple-500' },
    { name: 'Cardano', symbol: '₳', color: 'from-blue-400 to-cyan-400' },
    { name: 'Solana', symbol: '◎', color: 'from-purple-500 to-pink-500' },
    { name: 'BNB', symbol: 'B', color: 'from-yellow-500 to-orange-500' },
    { name: 'XRP', symbol: 'X', color: 'from-gray-500 to-slate-500' },
  ];

  const problems = [
    "놓치는 급등락 기회들",
    "복잡한 차트 분석",
    "고래 움직임 파악 불가",
    "산발적인 정보들",
    "느린 반응 속도",
    "감정적인 투자 결정"
  ];

  return (
    <div ref={containerRef} className="relative">
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.5;
          }
        }
        
        .floating-bg {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes pulse-crypto {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        .crypto-float {
          animation: pulse-crypto 3s ease-in-out infinite;
        }
        
        .magnetic-pull {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* 동적 배경 */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: bgColor }}
      />

      {/* 패럴랙스 배경 */}
      <motion.div 
        className="fixed inset-0 pointer-events-none overflow-hidden -z-5"
        style={{ y: backgroundY }}
      >
        <div className="floating-bg absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-bg absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }}></div>
      </motion.div>

      {/* Header */}
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
            {[
              { name: '문제점', href: '#problems' },
              { name: '솔루션', href: '#solution' },
              { name: '주요 기능', href: '#features' },
              { name: '타겟 사용자', href: '#target' },
              { name: '다운로드', href: '#download' }
            ].map((item, index) => (
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

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{ 
          scale: smoothScale,
          opacity: heroOpacity 
        }}
      >
        <div className="text-center z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-8">
              <motion.div 
                className="w-16 h-16 relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Image 
                  src={icon} 
                  alt="눈칫 로고" 
                  width={64} 
                  height={64}
                  className="rounded-2xl shadow-2xl"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      target.style.display = 'none';
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl" style={{display: 'none'}}>
                  <span className="text-white font-bold text-3xl">👁</span>
                </div>
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              시장은 잠들지 않습니다.<br />
              <span className="gradient-text text-3xl md:text-5xl lg:text-6xl">
                <span className="block sm:inline">당신의 결정적인 순간도</span>{' '}
                <span className="block sm:inline">마찬가지입니다.</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              혼란스러운 암호화폐 시장에서 가장 중요한 순간을 놓치고 계신가요?
            </p>
            
            <div className="text-xl md:text-2xl font-semibold text-white mb-12">
              이제 <span className="gradient-text font-bold">눈칫(Noonchit)</span>과 함께하세요.
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                지금 바로 다운로드
              </motion.button>
              <motion.button 
                className="glass-effect text-white px-10 py-4 rounded-xl text-lg font-semibold"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                데모 체험하기
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* 떠다니는 크립토 로고들 */}
        {cryptoCoins.map((crypto, index) => (
          <motion.div
            key={crypto.name}
            className="absolute crypto-float"
            style={{
              left: `${15 + (index * 12)}%`,
              top: `${20 + (index % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${crypto.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl opacity-30`}>
              {crypto.symbol}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Problems Section */}
      <section id="problems" className="min-h-screen flex items-center justify-center relative py-20">
        <div className="text-center max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            기존 투자의 한계
          </motion.h2>

          <div className="relative w-full h-96">
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                className="absolute magnetic-pull"
                initial={{
                  x: `${(index % 3 - 1) * 300}px`,
                  y: `${Math.floor(index / 3 - 1) * 150}px`,
                  opacity: 0.8,
                  scale: 1
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 0.8
                }}
                style={{
                  scale: problemScale,
                  opacity: problemOpacity
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: false }}
              >
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl px-6 py-4 text-red-200 whitespace-nowrap">
                  ❌ {problem}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="min-h-screen flex items-center justify-center relative py-20">
        <motion.div 
          className="text-center max-w-6xl mx-auto px-6"
          style={{
            scale: solutionScale,
            opacity: solutionOpacity
          }}
        >
          <motion.div
            className="w-96 h-96 mx-auto mb-12 relative"
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
          
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-32 h-32 relative">
              <Image 
                src={icon} 
                alt="눈칫 로고" 
                width={128} 
                height={128}
                className="rounded-3xl shadow-2xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    target.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl" style={{display: 'none'}}>
                <span className="text-white font-bold text-6xl">👁</span>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            모든 것을 <span className="gradient-text">한눈에</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            24시간 깨어있는 AI가 시장을 감시하고,<br />
            가장 중요한 순간을 놓치지 않도록 도와드립니다.
          </p>
        </motion.div>
      </section>

      {/* Features Section with Dashboard */}
      <section id="features" className="min-h-screen flex items-center justify-center relative py-20">
        <motion.div 
          className="w-full max-w-7xl mx-auto px-6"
          style={{
            y: dashboardY,
            scale: dashboardScale
          }}
        >
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
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "고래 감지",
                  value: "1,247 BTC",
                  change: "+15.7%",
                  icon: "🐋",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "급등 알림",
                  value: "SOL",
                  change: "+127.3%",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "거래량 폭증",
                  value: "MATIC",
                  change: "+890%",
                  icon: "📈",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-xl p-6 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: false }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 text-2xl`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-white">{item.value}</span>
                    <span className="text-green-400 font-semibold">{item.change}</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50">
                    <motion.div
                      className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.3
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

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
                  <motion.div
                    key={i}
                    className="absolute w-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      bottom: '20%'
                    }}
                    animate={{
                      height: [`${30 + Math.random() * 40}%`, `${20 + Math.random() * 50}%`]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 상세 기능 설명 */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: "🐋",
                gradient: "from-blue-500 to-cyan-500",
                title: "고래의 움직임을 실시간으로 추적하세요",
                description: "시장의 큰손들이 어디로 움직이는지 가장 먼저 파악하여, 거대한 흐름에 올라타세요. 정교한 필터는 수많은 거래 속에서 유의미한 고래의 매매 내역만을 선별합니다."
              },
              {
                icon: "⚡",
                gradient: "from-purple-500 to-pink-500",
                title: "급등락과 거래량 폭증을 놓치지 마세요",
                description: "시장의 관심이 집중되는 순간, 자금이 몰리는 지점을 즉시 포착하여 결정적인 매매 타이밍을 잡으세요. 가장 폭발적인 변화를 보이는 종목을 실시간 브리핑합니다."
              },
              {
                icon: "📊",
                gradient: "from-emerald-500 to-teal-500",
                title: "복잡한 데이터를 직관적으로 파악하세요",
                description: "어려운 데이터 분석은 '눈칫'에게 맡기세요. 중요한 정보를 직관적인 UI로 표현하여, 빠르고 정확한 판단을 내릴 수 있도록 돕습니다."
              },
              {
                icon: "🚀",
                gradient: "from-orange-500 to-red-500",
                title: "최고의 속도와 안정성을 경험하세요",
                description: "아무리 거친 시장이라도 멈추거나 버벅대지 않습니다. 최적화된 데이터 처리 기술로 가장 중요한 순간에 가장 빠른 성능을 약속합니다."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-8 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-white text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Target Users Section */}
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
            {[
              {
                icon: "💼",
                gradient: "from-blue-500 to-purple-500",
                title: "프로 트레이더",
                description: "매 순간 시장의 맥박을 직접 느끼고 싶은 전문 투자자들을 위한 강력한 도구"
              },
              {
                icon: "⚖️",
                gradient: "from-purple-500 to-pink-500",
                title: "스캘퍼 & 단타 투자자",
                description: "데이터에 기반한 냉철한 판단을 원하는 빠른 매매 전문가들을 위한 솔루션"
              },
              {
                icon: "🔥",
                gradient: "from-pink-500 to-orange-500",
                title: "열정적인 투자자",
                description: "자신만의 트레이딩 전략을 한 단계 발전시키고 싶은 투자자들을 위한 파트너"
              }
            ].map((target, index) => (
              <motion.div
                key={index}
                className="text-center glass-effect rounded-2xl p-8 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${target.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-4xl">{target.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{target.title}</h3>
                <p className="text-slate-300">{target.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="min-h-screen flex items-center justify-center relative py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div 
            className="glass-effect rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              animate={{
                background: [
                  "linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)",
                  "linear-gradient(135deg, #f472b6, #60a5fa, #a78bfa)",
                  "linear-gradient(225deg, #a78bfa, #f472b6, #60a5fa)"
                ]
              }}
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              시장의 &apos;눈치&apos;를 보는 것을 넘어,<br />
              시장을 이끌어 가세요
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              지금 바로 &apos;눈칫&apos;을 다운로드하고, 가장 강력한 데이터 파트너와 함께<br />
              새로운 차원의 투자를 경험하세요.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                📱 App Store에서 다운로드
              </motion.button>
              <motion.button 
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                🤖 Google Play에서 다운로드
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
            
            {[
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
            ].map((section) => (
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
    </div>
  );
}