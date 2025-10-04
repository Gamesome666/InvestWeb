export default function Logo({ className = "w-10 h-10", variant = "color" }) {
  // variant: "color" | "white" | "dark"
  
  const colors = {
    color: {
      gradient1: "#2563eb", // blue-600
      gradient2: "#9333ea", // purple-600
      accent: "#10b981"     // green-500
    },
    white: {
      gradient1: "#ffffff",
      gradient2: "#f3f4f6",
      accent: "#ffffff"
    },
    dark: {
      gradient1: "#1f2937",
      gradient2: "#111827",
      accent: "#374151"
    }
  }

  const c = colors[variant]

  return (
    <svg 
      className={className} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* 渐变定义 */}
        <linearGradient id={`logoGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: c.gradient1, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: c.gradient2, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* 背景圆形 */}
      <circle cx="24" cy="24" r="23" fill={`url(#logoGradient-${variant})`} opacity="0.1" />
      
      {/* 区块链方块 - 左下 */}
      <rect 
        x="8" 
        y="26" 
        width="8" 
        height="8" 
        rx="1.5"
        fill={`url(#logoGradient-${variant})`}
        opacity="0.8"
      />
      
      {/* 区块链方块 - 中间 */}
      <rect 
        x="20" 
        y="18" 
        width="8" 
        height="8" 
        rx="1.5"
        fill={`url(#logoGradient-${variant})`}
      />
      
      {/* 区块链方块 - 右上 */}
      <rect 
        x="32" 
        y="10" 
        width="8" 
        height="8" 
        rx="1.5"
        fill={c.accent}
      />
      
      {/* 连接线 - 展示增长趋势 */}
      <path 
        d="M 14 30 L 24 22 L 36 14" 
        stroke={c.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      
      {/* 硬币符号 - 右下角 */}
      <circle cx="38" cy="38" r="6" fill={c.accent} opacity="0.9" />
      <text 
        x="38" 
        y="41" 
        fontSize="8" 
        fontWeight="bold" 
        fill="white" 
        textAnchor="middle"
      >
        €
      </text>
    </svg>
  )
}

// Logo的纯图标版本（无文字）
export function LogoIcon({ className = "w-8 h-8" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#9333ea", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* 简化版：三个递增的方块 */}
      <rect x="4" y="24" width="10" height="10" rx="2" fill="url(#iconGradient)" opacity="0.7" />
      <rect x="15" y="15" width="10" height="10" rx="2" fill="url(#iconGradient)" />
      <rect x="26" y="6" width="10" height="10" rx="2" fill="#10b981" />
      
      {/* 增长箭头 */}
      <path 
        d="M 9 29 L 20 20 L 31 11" 
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  )
}

// Logo标记（带文字的完整版）
export function LogoMark({ size = "default", variant = "color" }) {
  const sizes = {
    small: { logo: "w-8 h-8", text: "text-lg" },
    default: { logo: "w-10 h-10", text: "text-2xl" },
    large: { logo: "w-12 h-12", text: "text-3xl" }
  }
  
  const textColors = {
    color: "text-gray-900",
    white: "text-white",
    dark: "text-gray-900"
  }
  
  const s = sizes[size]
  
  return (
    <div className="flex items-center space-x-2">
      <Logo className={s.logo} variant={variant} />
      <span className={`${s.text} font-bold ${textColors[variant]}`}>
        InvestHub
      </span>
    </div>
  )
}

