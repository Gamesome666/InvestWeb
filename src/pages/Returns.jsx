import { useState } from 'react'
import { Link } from 'react-router-dom'

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

  const calculateROI = () => {
    return (((calculateReturns() - amount) / amount) * 100).toFixed(1)
  }

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            💰 投资回报计算器
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            预测您的投资收益
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            使用我们的智能计算器，了解您的投资如何随时间增长
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                智能收益计算器
              </h2>
              <p className="text-gray-600">拖动滑块调整参数，实时查看投资收益预测</p>
            </div>

            <div className="space-y-10">
              {/* Amount */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-gray-800">
                    💶 投资金额
                  </label>
                  <span className="text-2xl font-bold text-primary-600">
                    €{amount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${((amount - 100) / 9900) * 100}%, #E5E7EB ${((amount - 100) / 9900) * 100}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>€100</span>
                  <span>€10,000</span>
                </div>
              </div>

              {/* Rate */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-gray-800">
                    📈 预期年化收益率
                  </label>
                  <span className="text-2xl font-bold text-green-600">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${((rate - 5) / 25) * 100}%, #E5E7EB ${((rate - 5) / 25) * 100}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>5%（保守）</span>
                  <span>30%（激进）</span>
                </div>
              </div>

              {/* Years */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-gray-800">
                    ⏰ 投资期限
                  </label>
                  <span className="text-2xl font-bold text-orange-600">
                    {years} 年
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${((years - 1) / 4) * 100}%, #E5E7EB ${((years - 1) / 4) * 100}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1年</span>
                  <span>5年</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 p-8 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-700 rounded-2xl text-white shadow-xl">
              <h3 className="text-center text-lg font-semibold mb-6 opacity-90">📊 预测收益结果</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">初始投资</div>
                  <div className="text-2xl md:text-3xl font-bold">€{amount.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">预计总值</div>
                  <div className="text-2xl md:text-3xl font-bold">€{Number(calculateReturns()).toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">净收益</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-300">+€{Number(calculateProfit()).toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">投资回报率</div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">+{calculateROI()}%</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>*此预测基于历史数据，过往表现不代表未来收益。实际收益可能有所不同。</p>
            </div>
          </div>
        </div>

        {/* Revenue Sources */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                💼 收益来源详解
              </h2>
              <p className="text-lg text-gray-600">了解您的投资如何为您带来回报</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 h-full">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📅 分红收益</h3>
                  <p className="text-gray-700 leading-relaxed">
                    当公司开始盈利后，您将获得季度或年度分红。所有分红通过智能合约自动分发到您的钱包，透明可追溯。
                  </p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 h-full">
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📈 资本增值</h3>
                  <p className="text-gray-700 leading-relaxed">
                    随着初创企业成长和估值提升，您持有的股权代币价值也会增长。未来将推出二级市场交易功能，提供流动性。
                  </p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 h-full">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 退出收益</h3>
                  <p className="text-gray-700 leading-relaxed">
                    当初创企业被收购或上市（IPO）时，您将根据持股比例获得相应的收益份额，这通常是最大的收益来源。
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl">
              <div className="flex gap-4">
                <svg className="w-7 h-7 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2 text-lg">⚠️ 投资风险提示</h4>
                  <p className="text-yellow-900 leading-relaxed">
                    投资早期创业公司存在较高风险，您可能损失全部投资。请仅投资您可承受损失的资金。建议进行投资组合多元化以分散风险。过往业绩不代表未来表现。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Performance */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                📊 历史表现数据
              </h2>
              <p className="text-lg text-gray-600">基于平台过往项目的真实数据</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-green-600 mb-2">18.5%</div>
                <div className="text-sm text-gray-600">平均年化收益率</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">3.2年</div>
                <div className="text-sm text-gray-600">平均投资周期</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
                <div className="text-sm text-gray-600">项目成功率</div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/projects" className="inline-block">
                <button className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  🚀 开始投资，实现收益
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


