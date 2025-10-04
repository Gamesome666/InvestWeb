import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, TrendingUp, Coins, Percent } from 'lucide-react'

export default function InvestmentAmount() {
  const navigate = useNavigate()
  const location = useLocation()
  const project = location.state?.project || {
    id: 1,
    name: 'SmartHealth Monitor',
    nameZh: '智能健康监测设备',
    logo: '🏥',
    fundingGoal: 500000,
    currentFunding: 387000
  }

  // 投资金额选项
  const presetAmounts = [100, 500, 1000, 5000]
  const [amount, setAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)

  // 计算相关数据
  const projectValuation = 3000000 // 项目估值
  const equityPercentage = ((amount / projectValuation) * 100).toFixed(4)
  const tokenAmount = Math.floor(amount / 10) // 每€10 = 1 token
  const expectedAnnualReturn = 18 // 预期年化收益率
  const expectedReturn = ((amount * expectedAnnualReturn) / 100).toFixed(2)

  const handlePresetClick = (value) => {
    setAmount(value)
    setIsCustom(false)
    setCustomAmount('')
  }

  const handleCustomChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setCustomAmount(value)
    if (value) {
      setAmount(parseInt(value))
      setIsCustom(true)
    }
  }

  const handleNext = () => {
    if (amount >= 100) {
      navigate('/invest/confirm', {
        state: {
          project,
          investmentDetails: {
            amount,
            equityPercentage,
            tokenAmount,
            expectedReturn
          }
        }
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* 进度指示器 */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">选择金额</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">确认信息</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">完成</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 左侧：投资金额选择 */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                选择投资金额
              </h1>
              <p className="text-gray-600 mb-6">
                最低投资€100，开启您的创业投资之旅
              </p>

              {/* 项目信息 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl mr-3">
                    {project.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.nameZh}</h3>
                    <p className="text-sm text-gray-600">{project.name}</p>
                  </div>
                </div>
              </div>

              {/* 预设金额按钮 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  快速选择金额
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handlePresetClick(preset)}
                      className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                        amount === preset && !isCustom
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      €{preset.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* 自定义金额 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  或输入自定义金额
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                    €
                  </span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="输入金额（最低€100）"
                    className={`w-full pl-10 pr-4 py-4 border-2 rounded-xl text-lg ${
                      isCustom
                        ? 'border-blue-500 focus:border-blue-600'
                        : 'border-gray-300 focus:border-gray-400'
                    } focus:outline-none`}
                  />
                </div>
                {amount < 100 && amount > 0 && (
                  <p className="text-red-500 text-sm mt-2">
                    最低投资金额为 €100
                  </p>
                )}
              </div>

              {/* 滑块 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  拖动滑块调整
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={amount}
                  onChange={(e) => {
                    setAmount(parseInt(e.target.value))
                    setIsCustom(false)
                    setCustomAmount('')
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>€100</span>
                  <span>€10,000</span>
                </div>
              </div>
            </div>

            {/* 导航按钮 */}
            <div className="flex gap-4 mt-6">
              <Link
                to="/invest/demo"
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                返回
              </Link>
              <button
                onClick={handleNext}
                disabled={amount < 100}
                className={`flex-1 py-4 rounded-xl font-semibold transition-all flex items-center justify-center ${
                  amount >= 100
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                下一步
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 右侧：投资详情预览 */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                投资详情
              </h2>

              {/* 投资金额显示 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-6">
                <div className="text-sm opacity-90 mb-1">您的投资金额</div>
                <div className="text-4xl font-bold">€{amount.toLocaleString()}</div>
              </div>

              {/* 详细计算 */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                  <Percent className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">获得股权比例</div>
                    <div className="text-2xl font-bold text-gray-900">{equityPercentage}%</div>
                    <div className="text-xs text-gray-500 mt-1">
                      基于项目估值 €{(projectValuation / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <Coins className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">股权Token数量</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {tokenAmount.toLocaleString()} Tokens
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      每€10 = 1 Token
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">预期年化收益</div>
                    <div className="text-2xl font-bold text-gray-900">€{expectedReturn}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      基于{expectedAnnualReturn}%年化回报率（示例）
                    </div>
                  </div>
                </div>
              </div>

              {/* 投资说明 */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">投资说明</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>所有投资将通过区块链智能合约执行</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>股权Token将在确认后1-3个工作日内发放</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>锁定期为12个月，期间无法转让</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>分红将按季度自动发放到您的钱包</span>
                  </li>
                </ul>
              </div>

              {/* 风险提示 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>风险提示：</strong> 投资初创企业存在较高风险，可能损失全部本金。请仅投资您可承受损失的金额。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #9333ea);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #9333ea);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}

