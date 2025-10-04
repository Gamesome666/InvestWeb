import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LogoMark } from './Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [investorsDropdownOpen, setInvestorsDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <LogoMark size="default" variant="color" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Investors Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setInvestorsDropdownOpen(true)}
              onMouseLeave={() => setInvestorsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2 flex items-center">
                投资者
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {investorsDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-screen max-w-4xl">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* All investors */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">所有投资者</h3>
                        <Link 
                          to="/projects" 
                          className="block py-2 hover:text-primary-600 transition-colors"
                          onClick={() => setInvestorsDropdownOpen(false)}
                        >
                          <div className="font-medium">投资项目</div>
                          <div className="text-sm text-gray-500">浏览实时投资机会</div>
                        </Link>
                        <Link 
                          to="/how-it-works" 
                          className="block py-2 hover:text-primary-600 transition-colors"
                          onClick={() => setInvestorsDropdownOpen(false)}
                        >
                          <div className="font-medium">运作方式</div>
                          <div className="text-sm text-gray-500">了解投资流程</div>
                        </Link>
                      </div>

                      {/* Featured */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">专业服务</h3>
                        <Link 
                          to="/blockchain" 
                          className="block py-2 hover:text-primary-600 transition-colors"
                          onClick={() => setInvestorsDropdownOpen(false)}
                        >
                          <div className="font-medium">区块链溯源</div>
                          <div className="text-sm text-gray-500">透明可信的投资记录</div>
                        </Link>
                        <Link 
                          to="/returns" 
                          className="block py-2 hover:text-primary-600 transition-colors"
                          onClick={() => setInvestorsDropdownOpen(false)}
                        >
                          <div className="font-medium">投资回报</div>
                          <div className="text-sm text-gray-500">查看历史收益数据</div>
                        </Link>
                      </div>

                      {/* More */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">更多资源</h3>
                        <Link 
                          to="/faq" 
                          className="block py-2 hover:text-primary-600 transition-colors"
                          onClick={() => setInvestorsDropdownOpen(false)}
                        >
                          <div className="font-medium">常见问题</div>
                          <div className="text-sm text-gray-500">获取常见问题解答</div>
                        </Link>
                        <Link 
                          to="/about" 
                          className="block py-2 hover:text-primary-600 transition-colors"
                          onClick={() => setInvestorsDropdownOpen(false)}
                        >
                          <div className="font-medium">关于我们</div>
                          <div className="text-sm text-gray-500">了解我们的使命</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2 flex items-center">
                资源中心
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {resourcesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-4">
                    <Link 
                      to="/faq" 
                      className="block py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                      onClick={() => setResourcesDropdownOpen(false)}
                    >
                      <div className="font-medium">帮助中心</div>
                      <div className="text-sm text-gray-500">查找答案和指南</div>
                    </Link>
                    <Link 
                      to="/about" 
                      className="block py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                      onClick={() => setResourcesDropdownOpen(false)}
                    >
                      <div className="font-medium">关于平台</div>
                      <div className="text-sm text-gray-500">了解更多信息</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="搜索项目..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">CN</span>
            </button>

            {/* Log In */}
            <button className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              登录
            </button>

            {/* Sign Up */}
            <Link to="/register">
              <button className="bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                注册
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative px-4">
              <input
                type="text"
                placeholder="搜索项目..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <svg 
                className="absolute left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="px-4 space-y-3">
              <Link to="/projects" className="block text-gray-700 hover:text-primary-600 font-medium">
                投资项目
              </Link>
              <Link to="/how-it-works" className="block text-gray-700 hover:text-primary-600 font-medium">
                运作方式
              </Link>
              <Link to="/blockchain" className="block text-gray-700 hover:text-primary-600 font-medium">
                区块链溯源
              </Link>
              <Link to="/returns" className="block text-gray-700 hover:text-primary-600 font-medium">
                投资回报
              </Link>
              <Link to="/faq" className="block text-gray-700 hover:text-primary-600 font-medium">
                常见问题
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-primary-600 font-medium">
                关于我们
              </Link>
            </div>

            <div className="px-4 pt-4 border-t border-gray-200 space-y-2">
              <button className="block w-full text-center text-gray-700 font-medium py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                登录
              </button>
              <Link to="/register" className="block">
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700">
                  注册
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


