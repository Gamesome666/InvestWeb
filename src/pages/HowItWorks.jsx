export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up in less than 2 minutes. Verify your identity to comply with regulations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Browse Opportunities',
      description: 'Explore our curated selection of vetted startups. Filter by industry, stage, and more.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Make Your Investment',
      description: 'Choose your investment amount (starting from just €100) and complete the transaction.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Receive Blockchain Tokens',
      description: 'Your equity is tokenized on the blockchain. Transparent, secure, and verifiable.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Track & Earn Returns',
      description: 'Monitor your portfolio and receive dividends directly to your wallet as companies grow.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-2xl text-gray-600">
            Investing in startups is now as simple as 1-2-3-4-5
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Icon/Number */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary-600 to-primary-900 rounded-3xl flex items-center justify-center text-white shadow-2xl transform hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a href="/register">
            <button className="btn-primary text-lg px-12 py-5">
              Get Started Now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}


