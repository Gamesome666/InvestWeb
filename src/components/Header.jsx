import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LogoMark } from './Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <LogoMark size="default" variant="color" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/projects" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Projects
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/blockchain" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Blockchain
            </Link>
            <Link to="/returns" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Returns
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Log In
            </button>
            <Link to="/register">
              <button className="btn-primary">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/projects" className="block text-gray-700 hover:text-primary-600 font-medium">
              Projects
            </Link>
            <Link to="/how-it-works" className="block text-gray-700 hover:text-primary-600 font-medium">
              How It Works
            </Link>
            <Link to="/blockchain" className="block text-gray-700 hover:text-primary-600 font-medium">
              Blockchain
            </Link>
            <Link to="/returns" className="block text-gray-700 hover:text-primary-600 font-medium">
              Returns
            </Link>
            <Link to="/faq" className="block text-gray-700 hover:text-primary-600 font-medium">
              FAQ
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary-600 font-medium">
              About
            </Link>
            <div className="pt-4 space-y-2">
              <button className="block w-full text-center text-primary-600 font-semibold py-2">
                Log In
              </button>
              <Link to="/register" className="block">
                <button className="btn-primary w-full">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


