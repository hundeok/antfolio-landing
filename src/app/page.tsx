'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Antfolio Constants
const NAVIGATION_ITEMS = [
  { name: '문제점', href: '#problems' },
  { name: '솔루션', href: '#solution' },
  { name: '주요 기능', href: '#features' },
  { name: '타겟 사용자', href: '#target' },
  { name: '다운로드', href: '#download' }
];

const INVESTMENT_ASSETS = [
  { name: 'Apple', symbol: 'AAPL', color: 'from-green-500 to-emerald-500' },
  { name: 'Tesla', symbol: 'TSLA', color: 'from-red-500 to-rose-500' },
  { name: 'Microsoft', symbol: 'MSFT', color: 'from-blue-500 to-cyan-500' },
  { name: 'Google', symbol: 'GOOGL', color: 'from-purple-500 to-violet-500' },
  { name: 'Amazon', symbol: 'AMZN', color: 'from-orange-500 to-amber-500' },
  { name: 'NVIDIA', symbol: 'NVDA', color: 'from-lime-500 to-green-500' }
];

const PROBLEMS = [
  "막연한 투자 결정",
  "근거 없는 확신", 
  "감정적인 매매",
  "흩어진 투자 정보",
  "가설 검증 부족",
  "체계적 분석 없음"
];

const DASHBOARD_FEATURES = [
  {
    title: "가설 증명",
    value: "87.3%",
    change: "+12.4%",
    icon: "🎯",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "데이터 분석", 
    value: "실시간",
    change: "+99.9%",
    icon: "📊",
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "수익률 추적",
    value: "+24.7%", 
    change: "+5.8%",
    icon: "📈",
    color: "from-emerald-500 to-green-600"
  }
];

const MAIN_FEATURES = [
  {
    icon: "🎯",
    gradient: "from-green-500 to-emerald-500",
    title: "투자 가설을 데이터로 검증하세요",
    description: "막연한 예측이 아닌 구체적인 데이터로 투자 아이디어를 검증합니다. AI가 수집한 다양한 정보를 바탕으로 가설의 타당성을 객관적으로 평가해드립니다."
  },
  {
    icon: "📊",
    gradient: "from-teal-500 to-cyan-500", 
    title: "흩어진 정보를 하나의 스토리로 연결하세요",
    description: "기업 실적, 시장 동향, 뉴스 등 파편화된 정보들을 하나의 일관된 투자 논리로 구성합니다. 복잡한 데이터를 직관적으로 이해할 수 있도록 시각화합니다."
  },
  {
    icon: "📈", 
    gradient: "from-emerald-500 to-green-600",
    title: "자신만의 투자 철학을 구축하세요",
    description: "검증된 가설들을 바탕으로 일관성 있는 투자 원칙을 만들어갑니다. 매 순간의 투자 결정이 하나의 큰 그림을 그려나가도록 돕습니다."
  },
  {
    icon: "🚀",
    gradient: "from-lime-500 to-green-500",
    title: "확신 있는 투자로 성과를 극대화하세요", 
    description: "데이터에 기반한 확신으로 변동성에 흔들리지 않는 투자를 실현합니다. 명확한 근거가 뒷받침하는 포트폴리오로 장기적 성과를 추구하세요."
  }
];

const TARGET_USERS = [
  {
    icon: "💼",
    gradient: "from-green-500 to-teal-500",
    title: "체계적 투자자",
    description: "근거 있는 투자 결정을 원하는 전문적이고 신중한 투자자들을 위한 도구"
  },
  {
    icon: "📚",
    gradient: "from-teal-500 to-cyan-500", 
    title: "데이터 기반 투자자",
    description: "정량적 분석과 객관적 지표를 중시하는 합리적 의사결정자들을 위한 솔루션"
  },
  {
    icon: "🎓",
    gradient: "from-emerald-500 to-green-600",
    title: "성장하는 투자자",
    description: "투자 실력을 체계적으로 발전시키고 싶은 학습 지향적 투자자들을 위한 파트너"
  }
];

// Animation variants
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

// Components
function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: "rgba(20, 83, 45, 0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(46, 139, 87, 0.2)"
      }}
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
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/icon.png" 
                alt="Antfolio 로고" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30"></div>
          </div>
          <div>
            <span className="text-white text-2xl font-bold">Antfolio</span>
            <span className="text-green-200 text-sm ml-2">Connect the Dots</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-green-200 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          App Store
        </motion.button>
      </nav>
    </motion.header>
  );
}

function HeroSection({ heroScale, heroOpacity }) {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ 
        scale: heroScale,
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
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/icon.png" 
                  alt="Antfolio 로고" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            성공적인 투자는<br />
            <span className="text-3xl md:text-5xl lg:text-6xl" style={{
              background: "linear-gradient(135deg, #10b981, #059669, #047857)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              '왜?'라는 질문에 답할 수 있어야 합니다
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            머릿속 투자 아이디어를 확실한 데이터로 검증하고, 흔들리지 않는 투자 철학을 만들어보세요.
          </p>
          
          <div className="text-xl md:text-2xl font-semibold text-white mb-12">
            <span style={{color: "#10b981"}} className="font-bold">Antfolio</span>와 함께 당신만의 투자 서사를 완성하세요.
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              지금 바로 다운로드
            </motion.button>
            <motion.button 
              className="text-white px-10 py-4 rounded-xl text-lg font-semibold border border-green-500/30 bg-green-500/10 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              데모 체험하기
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating investment assets */}
      {INVESTMENT_ASSETS.map((asset, index) => (
        <motion.div
          key={asset.name}
          className="absolute"
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
          <div className={`w-16 h-16 bg-gradient-to-r ${asset.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl opacity-30`}>
            {asset.symbol}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

function ProblemsSection({ problemScale, problemOpacity }) {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative py-20"
      style={{
        scale: problemScale,
        opacity: problemOpacity
      }}
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          이런 고민들, 혹시 익숙하신가요?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-red-400 text-2xl mb-3 block">❌</span>
              <p className="text-white font-semibold">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function SolutionSection({ solutionScale, solutionOpacity }, ref) {
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
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3))",
                "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3))",
                "linear-gradient(225deg, rgba(5, 150, 105, 0.3), rgba(34, 197, 94, 0.3))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              borderRadius: "50%",
              filter: "blur(40px)"
            }}
          />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="/icon.png" 
                alt="Antfolio 로고" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          모든 것을 <span style={{
            background: "linear-gradient(135deg, #10b981, #059669)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>하나로</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          흩어진 투자 정보들을 하나의 일관된 스토리로 연결하고,<br />
          데이터에 기반한 확신 있는 투자를 시작하세요.
        </p>
      </motion.div>
    </section>
  );
}

const SolutionSectionForward = React.forwardRef(SolutionSection);

function FeaturesSection({ dashboardY, dashboardScale }, ref) {
  return (
    <section ref={ref} id="features" className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div
        className="w-full max-w-7xl mx-auto px-6"
        style={{ y: dashboardY, scale: dashboardScale }}
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
            투자의 '왜?'에 답하는 체계적인 접근
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl p-8 shadow-2xl mb-16 border border-green-500/20 bg-green-500/5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {DASHBOARD_FEATURES.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-xl relative overflow-hidden h-48 border border-green-500/20 bg-green-500/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: false }}
              >
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
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 z-20">
                  <motion.div 
                    className="w-full h-full bg-gradient-to-r from-green-400 to-emerald-400" 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }} 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-xl p-6 border border-green-500/20 bg-green-500/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">실시간 투자 가설 검증</h3>
            <div className="h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-slate-400 text-lg">가설 검증 대시보드</div>
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="absolute w-2 bg-gradient-to-t from-green-500 to-emerald-500 rounded-full" 
                  style={{ left: `${20 + i * 15}%`, bottom: '20%' }} 
                  animate={{ height: [`${30 + Math.random() * 40}%`, `${20 + Math.random() * 50}%`] }} 
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }} 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {MAIN_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-8 transition-all duration-500 relative overflow-hidden border border-green-500/20 bg-green-500/5 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02, boxShadow: "0 30px 60px rgba(34, 197, 94, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
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

const FeaturesSectionForward = React.forwardRef(FeaturesSection);

function TargetSection() {
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
          {TARGET_USERS.map((target, index) => (
            <motion.div
              key={index}
              className="text-center rounded-2xl p-8 transition-all duration-500 relative overflow-hidden border border-green-500/20 bg-green-500/5 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
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

function CTASection() {
  return (
    <section id="download" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          className="rounded-3xl p-12 border border-green-500/20 bg-green-500/5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(45deg, #10b981, #059669, #047857)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            투자의 '왜?'에 답하는<br />
            확실한 파트너를 만나보세요
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            지금 바로 Antfolio를 다운로드하고, 데이터에 기반한 투자 철학으로<br />
            변동성에 흔들리지 않는 확신 있는 투자를 시작하세요.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
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
              📱 App Store에서 다운로드
            </motion.button>
            
            <motion.button
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(20, 184, 166, 0.4)"
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
  );
}

function Footer() {
  const footerSections = [
    {
      title: "서비스",
      links: ["투자 가설 검증", "데이터 분석", "포트폴리오 추적", "API 서비스"]
    },
    {
      title: "지원",
      links: ["사용 가이드", "고객 지원", "FAQ", "개발자 문서"]
    },
    {
      title: "커뮤니티",
      links: ["트위터", "링크드인", "유튜브", "블로그"]
    }
  ];

  return (
    <motion.footer 
      className="relative z-10 px-6 py-16 border-t border-green-500/20"
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
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/icon.png" 
                  alt="Antfolio 로고" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white text-xl font-bold">Antfolio</span>
                <span className="text-green-200 text-sm ml-2">Connect the Dots</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              데이터로 증명하는<br />
              확신 있는 투자 파트너
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
          className="border-t border-green-500/20 mt-12 pt-8 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">&copy; 2025 Antfolio. All rights reserved.</p>
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

// Main Landing Component
export default function AntfolioLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const solutionRef = useRef(null);
  const { scrollYProgress: solutionScrollProgress } = useScroll({
    target: solutionRef,
    offset: ["start end", "center center"] 
  });

  const featuresRef = useRef(null);
  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "start center"]
  });

  // Scroll-based transformations
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const problemScale = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const problemOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);

  const solutionScale = useTransform(solutionScrollProgress, [0, 1], [0.8, 1]);
  const solutionOpacity = useTransform(solutionScrollProgress, [0, 1], [0, 1]);
  
  const dashboardY = useTransform(featuresScrollProgress, [0, 1], ['30%', '0%']);
  const dashboardScale = useTransform(featuresScrollProgress, [0, 1], [0.9, 1]);
  
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#0f1f13", "#1a4d2e", "#2d5a3d", "#0f1f13"]
  );

  return (
    <div ref={containerRef} className="relative">
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
        
        @keyframes pulse-invest {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        .invest-float {
          animation: pulse-invest 3s ease-in-out infinite;
        }
      `}</style>

      {/* Dynamic background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: bgColor }}
      />

      {/* Parallax background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none overflow-hidden -z-5"
        style={{ y: backgroundY }}
      >
        <div className="floating-bg absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full filter blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-bg absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }}></div>
      </motion.div>

      <Header />
      
      <HeroSection 
        heroScale={heroScale} 
        heroOpacity={heroOpacity} 
      />
      
      <ProblemsSection 
        problemScale={problemScale} 
        problemOpacity={problemOpacity} 
      />
      
      <SolutionSectionForward
        ref={solutionRef}
        solutionScale={solutionScale} 
        solutionOpacity={solutionOpacity} 
      />
      
      <FeaturesSectionForward
        ref={featuresRef}
        dashboardY={dashboardY} 
        dashboardScale={dashboardScale} 
      />
      
      <TargetSection />
      
      <CTASection />

      <Footer />
    </div>
  );
}