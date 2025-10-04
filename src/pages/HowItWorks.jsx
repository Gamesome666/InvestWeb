import PageTransition, { FadeInWhenVisible, StaggerContainer, StaggerItem, SlideInFromLeft, SlideInFromRight } from '../components/PageTransition'
import { PrimaryButton } from '../components/Button'
import { Card } from '../components/Card'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Create Your Account',
      description: 'Sign up in minutes with just your email. No complex verification needed to start browsing.',
      icon: '👤',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '2',
      title: 'Browse Projects',
      description: 'Explore curated startups across tech, health, energy, and more. Each vetted by our expert team.',
      icon: '🔍',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '3',
      title: 'Make Your Investment',
      description: 'Choose your investment amount (starting from just €100) and complete the transaction.',
      icon: '💰',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '4',
      title: 'Receive Blockchain Tokens',
      description: 'Your equity is tokenized on the blockchain. Transparent, secure, and verifiable.',
      icon: '🪙',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '5',
      title: 'Track & Earn',
      description: 'Monitor your investments and receive automated dividends directly to your wallet.',
      icon: '📈',
      color: 'from-pink-500 to-red-500'
    }
  ]

  const benefits = [
    { icon: '🔒', title: 'Secure', desc: 'Bank-level security with blockchain verification' },
    { icon: '⚡', title: 'Fast', desc: 'Invest in minutes, receive tokens in hours' },
    { icon: '💎', title: 'Transparent', desc: 'All transactions recorded on blockchain' },
    { icon: '🌍', title: 'Global', desc: 'Invest from anywhere in the world' }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <FadeInWhenVisible>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                How It Works
              </h1>
              <p className="text-xl text-blue-100">
                Start investing in startups in 5 simple steps
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            {steps.map((step, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Number Circle */}
                  <motion.div
                    className={`flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-2">{step.icon}</div>
                      <div className="text-2xl font-bold">{step.number}</div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <Card className="flex-1" hover={false}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                Why InvestHub?
              </h2>
            </FadeInWhenVisible>

            <StaggerContainer>
              <div className="grid md:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center">
                      <motion.div 
                        className="text-6xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.desc}
                      </p>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <FadeInWhenVisible>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <motion.div
                    className="text-white text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-xl font-semibold">Watch Demo Video</p>
                    <p className="text-sm text-blue-100 mt-2">Coming Soon</p>
                  </motion.div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of investors building their startup portfolio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryButton to="/register" className="bg-white text-blue-600 hover:bg-gray-100">
                  Create Account
                </PrimaryButton>
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/invest/demo">Try Demo</a>
                </motion.button>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
