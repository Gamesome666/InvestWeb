import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredTag, setHoveredTag] = useState(null)

  // 跟踪鼠标位置
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // 浮动标签数据
  const floatingTags = [
    // 项目类型
    { text: 'AI Startups', type: 'category', position: { top: '15%', left: '8%' } },
    { text: 'Health Tech', type: 'category', position: { top: '25%', left: '85%' } },
    { text: 'Blockchain', type: 'category', position: { top: '45%', left: '12%' } },
    { text: 'Clean Energy', type: 'category', position: { top: '60%', left: '88%' } },
    { text: 'FinTech', type: 'category', position: { top: '75%', left: '15%' } },
    { text: 'EdTech', type: 'category', position: { top: '35%', left: '90%' } },
    
    // 投资金额
    { text: '€100 - €1,000', type: 'amount', position: { top: '20%', left: '18%' } },
    { text: '€1,000 - €5,000', type: 'amount', position: { top: '55%', left: '82%' } },
    { text: '€5,000+', type: 'amount', position: { top: '70%', left: '8%' } },
    
    // 地区
    { text: 'Berlin', type: 'location', position: { top: '30%', left: '20%' } },
    { text: 'Amsterdam', type: 'location', position: { top: '50%', left: '18%' } },
    { text: 'Paris', type: 'location', position: { top: '65%', left: '85%' } },
    { text: 'London', type: 'location', position: { top: '80%', left: '82%' } },
    
    // 收益
    { text: '15-25% ROI', type: 'return', position: { top: '40%', left: '85%' } },
    { text: 'High Growth', type: 'return', position: { top: '85%', left: '20%' } },
  ]

  const stats = [
    { value: '€5.2M+', label: 'Total Funded' },
    { value: '42', label: 'Successful Projects' },
    { value: '8,500+', label: 'Active Investors' }
  ]

  const getTagColor = (type) => {
    switch(type) {
      case 'category': return 'from-blue-500 to-blue-600'
      case 'amount': return 'from-purple-500 to-purple-600'
      case 'location': return 'from-green-500 to-green-600'
      case 'return': return 'from-yellow-500 to-orange-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section with Floating Tags - Wellfound Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
        {/* 背景渐变效果随鼠标移动 */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.15), transparent 50%)`
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />

        {/* 浮动标签 */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingTags.map((tag, index) => {
            const distance = Math.sqrt(
              Math.pow(mousePosition.x - (window.innerWidth * parseFloat(tag.position.left) / 100), 2) +
              Math.pow(mousePosition.y - (window.innerHeight * parseFloat(tag.position.top) / 100), 2)
            )
            const maxDistance = 300
            const influence = Math.max(0, 1 - distance / maxDistance)
            
            return (
              <motion.div
                key={index}
                className="absolute pointer-events-auto cursor-pointer"
                style={{
                  top: tag.position.top,
                  left: tag.position.left,
                }}
                animate={{
                  x: influence * (mousePosition.x - window.innerWidth * parseFloat(tag.position.left) / 100) * 0.1,
                  y: influence * (mousePosition.y - window.innerHeight * parseFloat(tag.position.top) / 100) * 0.1,
                  scale: hoveredTag === index ? 1.2 : 1,
                }}
                whileHover={{ scale: 1.15, zIndex: 50 }}
                onHoverStart={() => setHoveredTag(index)}
                onHoverEnd={() => setHoveredTag(null)}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <div className={`bg-gradient-to-r ${getTagColor(tag.type)} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap text-sm font-semibold`}>
                  {tag.text}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find what's next
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Invest €100, own startup shares via blockchain
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/projects">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Projects
                </motion.button>
              </Link>
              <Link to="/invest/demo">
                <motion.button 
                  className="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-gray-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try Demo
                </motion.button>
              </Link>
            </motion.div>

            {/* 滚动提示 */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block text-gray-400"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Where startups and investors connect
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* For Investors */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                For Investors
              </h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Start with just €100</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Blockchain-secured investments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent returns and equity tokens</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Curated high-potential startups</span>
                </li>
              </ul>
              <Link to="/register">
                <motion.button 
                  className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Investing
                </motion.button>
              </Link>
            </motion.div>

            {/* For Startups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                For Startups
              </h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reach 8,500+ investors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fast funding process</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated compliance and legal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart contract token distribution</span>
                </li>
              </ul>
              <Link to="/register">
                <motion.button 
                  className="mt-8 w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg border-2 border-gray-900"
                  whileHover={{ scale: 1.02, backgroundColor: '#111827', color: '#fff' }}
                  whileTap={{ scale: 0.98 }}
                >
                  List Your Startup
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Trusted by</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
              <div className="text-2xl font-bold text-gray-400">SmartHealth</div>
              <div className="text-2xl font-bold text-gray-400">GreenEnergy</div>
              <div className="text-2xl font-bold text-gray-400">EduAI</div>
              <div className="text-2xl font-bold text-gray-400">FinFlow</div>
              <div className="text-2xl font-bold text-gray-400">CryptoBase</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Ready to start?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Join thousands of investors building their startup portfolio today
            </p>
            <Link to="/register">
              <motion.button 
                className="bg-white text-blue-600 px-12 py-6 rounded-xl font-bold text-xl shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started for Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
