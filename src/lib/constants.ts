// lib/constants.ts

// 네비게이션 메뉴
export const NAVIGATION_ITEMS = [
  { name: '문제점', href: '#problems' },
  { name: '솔루션', href: '#solution' },
  { name: '주요 기능', href: '#features' },
  { name: '타겟 사용자', href: '#target' },
  { name: '다운로드', href: '#download' }
] as const;

// 크립토 코인 데이터
export const CRYPTO_COINS = [
  { name: 'Bitcoin', symbol: '₿', color: 'from-orange-500 to-yellow-500' },
  { name: 'Ethereum', symbol: 'Ξ', color: 'from-blue-500 to-purple-500' },
  { name: 'Cardano', symbol: '₳', color: 'from-blue-400 to-cyan-400' },
  { name: 'Solana', symbol: '◎', color: 'from-purple-500 to-pink-500' },
  { name: 'BNB', symbol: 'B', color: 'from-yellow-500 to-orange-500' },
  { name: 'XRP', symbol: 'X', color: 'from-gray-500 to-slate-500' },
] as const;

// 문제점 리스트
export const PROBLEMS = [
  "놓치는 급등락 기회들",
  "복잡한 차트 분석", 
  "고래 움직임 파악 불가",
  "산발적인 정보들",
  "느린 반응 속도",
  "감정적인 투자 결정"
] as const;

// 대시보드 기능 카드
export const DASHBOARD_FEATURES = [
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
] as const;

// 주요 기능 설명
export const MAIN_FEATURES = [
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
] as const;

// 타겟 사용자
export const TARGET_USERS = [
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
] as const;

// 푸터 섹션 데이터
export const FOOTER_SECTIONS = [
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
] as const;

// 애니메이션 설정
export const ANIMATION_CONFIG = {
  // 스프링 설정
  spring: {
    stiffness: 300,
    damping: 30
  },
  
  // 스크롤 구간 설정
  scroll: {
    hero: [0, 0.15],
    problems: [0.25, 0.35], 
    solution: [0.3, 0.4],
    dashboard: [0.5, 0.65],
    bgColors: [0, 0.3, 0.6, 1]
  },
  
  // 배경색 시퀀스
  backgroundColors: [
    "#0f172a", // slate-900
    "#1e1b4b", // indigo-900  
    "#312e81", // indigo-800
    "#0f172a"  // slate-900
  ],
  
  // 애니메이션 지연시간
  delays: {
    stagger: 0.2,
    children: 0.1,
    section: 0.8
  }
} as const;

// Framer Motion Variants
export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
} as const;

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.delays.stagger,
      delayChildren: ANIMATION_CONFIG.delays.children
    }
  }
} as const;

export const SCALE_ON_HOVER = {
  whileHover: { 
    scale: 1.05, 
    y: -2 
  },
  whileTap: { 
    scale: 0.95 
  },
  transition: { 
    duration: 0.2 
  }
} as const;

// 브랜드 색상
export const BRAND_COLORS = {
  primary: "from-blue-500 via-purple-500 to-pink-500",
  secondary: "from-slate-700 to-slate-800", 
  accent: "from-cyan-500 to-blue-500",
  success: "from-green-500 to-emerald-500",
  warning: "from-yellow-500 to-orange-500",
  danger: "from-red-500 to-pink-500"
} as const;

// 반응형 브레이크포인트 (Tailwind 기준)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;