import { motion } from 'framer-motion'

// 基础卡片
export function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      className={`
        bg-white rounded-2xl shadow-lg p-6 
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { 
        y: -8, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      } : {}}
    >
      {children}
    </motion.div>
  )
}

// 项目卡片
export function ProjectCard({ children, className = '' }) {
  return (
    <motion.div
      className={`
        bg-white rounded-2xl overflow-hidden shadow-lg 
        transition-all duration-300 cursor-pointer
        ${className}
      `}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)' 
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

// 特色卡片（带渐变边框）
export function FeatureCard({ children, className = '' }) {
  return (
    <motion.div
      className={`
        relative bg-white rounded-2xl p-8 
        shadow-xl overflow-hidden
        ${className}
      `}
      whileHover={{ 
        y: -10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* 渐变边框效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      {children}
    </motion.div>
  )
}

// 统计卡片
export function StatCard({ children, className = '' }) {
  return (
    <motion.div
      className={`
        text-center p-8 bg-white rounded-2xl shadow-lg
        ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

// 玻璃态卡片
export function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      className={`
        bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8
        border border-white/20
        ${className}
      `}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

