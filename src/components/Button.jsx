import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// 主按钮
export function PrimaryButton({ children, onClick, to, type = 'button', className = '', disabled = false }) {
  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gradient-to-r from-blue-600 to-purple-600 
        text-white font-bold py-4 px-8 rounded-xl 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  )

  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent
}

// 次要按钮
export function SecondaryButton({ children, onClick, to, type = 'button', className = '', disabled = false }) {
  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-white text-gray-900 font-bold py-4 px-8 rounded-xl 
        border-2 border-gray-300 hover:border-gray-400
        shadow-md hover:shadow-lg 
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  )

  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent
}

// 轮廓按钮
export function OutlineButton({ children, onClick, to, type = 'button', className = '', disabled = false }) {
  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-transparent text-blue-600 font-bold py-4 px-8 rounded-xl 
        border-2 border-blue-600 hover:bg-blue-600 hover:text-white
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  )

  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent
}

// 图标按钮
export function IconButton({ children, onClick, className = '', disabled = false }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-3 rounded-lg bg-gray-100 hover:bg-gray-200 
        text-gray-700 transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {children}
    </motion.button>
  )
}

// 文字按钮
export function TextButton({ children, onClick, to, className = '' }) {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className={`
        text-blue-600 hover:text-blue-700 font-semibold
        transition-colors duration-200
        ${className}
      `}
      whileHover={{ x: 3 }}
    >
      {children}
    </motion.button>
  )

  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent
}

// 渐变按钮（大）
export function GradientButton({ children, onClick, to, className = '' }) {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className={`
        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
        text-white font-bold py-5 px-12 rounded-2xl 
        shadow-2xl hover:shadow-3xl 
        transition-all duration-300
        text-lg
        ${className}
      `}
      whileHover={{ 
        scale: 1.05, 
        y: -3,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )

  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent
}

// 加载按钮
export function LoadingButton({ children, loading, onClick, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={loading}
      className={`
        bg-gradient-to-r from-blue-600 to-purple-600 
        text-white font-bold py-4 px-8 rounded-xl 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300
        disabled:opacity-70 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${className}
      `}
      whileHover={{ scale: loading ? 1 : 1.05, y: loading ? 0 : -2 }}
      whileTap={{ scale: loading ? 1 : 0.98 }}
    >
      {loading && (
        <motion.div
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
      {children}
    </motion.button>
  )
}

