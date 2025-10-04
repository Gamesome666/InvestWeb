import { useState } from 'react'

export default function Returns() {
  const [amount, setAmount] = useState(1000)
  const [rate, setRate] = useState(15)
  const [years, setYears] = useState(3)

  const calculateReturns = () => {
    const total = amount * Math.pow(1 + rate / 100, years)
    return total.toFixed(0)
  }

  const calculateProfit = () => {
    return (calculateReturns() - amount).toFixed(0)
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Potential Returns
          </h1>
          <p className="text-2xl text-gray-600">
            Understand how your investments can grow over time
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Investment Calculator
            </h2>

            <div className="space-y-8">
              {/* Amount */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Investment Amount: €{amount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Rate */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Expected Annual Return: {rate}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Years */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Investment Period: {years} years
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Results */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary-600 to-primary-900 rounded-xl text-white">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm opacity-90 mb-2">Initial Investment</div>
                  <div className="text-3xl font-bold">€{amount.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-2">Projected Value</div>
                  <div className="text-3xl font-bold">€{Number(calculateReturns()).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-2">Profit</div>
                  <div className="text-3xl font-bold text-accent-400">+€{Number(calculateProfit()).toLocaleString()}</div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center">
              *This is a projection based on historical data. Past performance does not guarantee future results.
            </p>
          </div>
        </div>

        {/* Revenue Sources */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How You Earn Returns
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dividend Payments</h3>
                  <p className="text-lg text-gray-700">
                    Receive quarterly or annual dividends as companies become profitable. Payments are automatically distributed to your wallet via smart contracts.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Token Appreciation</h3>
                  <p className="text-lg text-gray-700">
                    As startups grow and their valuation increases, your equity tokens become more valuable. Future secondary market trading will allow liquidity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Exit Events</h3>
                  <p className="text-lg text-gray-700">
                    When a startup gets acquired or goes public (IPO), you receive your proportional share of the proceeds based on your equity stake.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-10 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Investment Risk Warning</h4>
                  <p className="text-yellow-800">
                    Investing in early-stage companies carries significant risk. You may lose all of your investment. Only invest money you can afford to lose. Diversification is recommended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


