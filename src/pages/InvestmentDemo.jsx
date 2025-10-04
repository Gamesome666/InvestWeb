import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react'

export default function InvestmentDemo() {
  // 示例项目
  const demoProject = {
    id: 1,
    name: 'SmartHealth Monitor',
    nameZh: '智能健康监测设备',
    category: 'Health Tech',
    logo: '🏥',
    fundingGoal: 500000,
    currentFunding: 387000,
    investors: 156,
    daysLeft: 12
  }

  const progress = (demoProject.currentFunding / demoProject.fundingGoal) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Demo提示 */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-yellow-800 font-semibold mb-1">演示模式</h3>
              <p className="text-yellow-700 text-sm">
                这是一个完整的投资流程演示，无需真实支付。您可以体验整个投资过程，了解我们的平台如何运作。
              </p>
            </div>
          </div>
        </div>

        {/* 主标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            体验投资流程
          </h1>
          <p className="text-xl text-gray-600">
            3个简单步骤，开启您的创业投资之旅
          </p>
        </div>

        {/* 流程步骤预览 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">选择投资金额</h3>
            <p className="text-sm text-gray-600">
              从€100起，选择您的投资金额
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">确认投资信息</h3>
            <p className="text-sm text-gray-600">
              查看详情并填写基本信息
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">获得股权Token</h3>
            <p className="text-sm text-gray-600">
              完成投资，收到数字股权凭证
            </p>
          </div>
        </div>

        {/* 示例项目展示 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-4xl mr-4">
                {demoProject.logo}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{demoProject.nameZh}</h2>
                <p className="text-blue-100">{demoProject.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">{demoProject.category}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">演示项目</span>
            </div>
          </div>

          <div className="p-6">
            {/* 融资进度 */}
            <div className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    €{demoProject.currentFunding.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    目标 €{demoProject.fundingGoal.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{Math.round(progress)}%</div>
                  <div className="text-sm text-gray-500">已完成</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* 关键数据 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-500 text-sm mb-1">投资人数</div>
                <div className="text-2xl font-bold text-gray-900">{demoProject.investors}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-500 text-sm mb-1">剩余时间</div>
                <div className="text-2xl font-bold text-gray-900">{demoProject.daysLeft} 天</div>
              </div>
            </div>

            {/* 投资优势 */}
            <div className="border-t pt-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">投资这个项目的优势</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>低门槛：</strong>最低€100即可参与
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>高潜力：</strong>预期年化回报15-25%
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>区块链保障：</strong>透明、安全、可追溯
                  </div>
                </div>
              </div>
            </div>

            {/* CTA按钮 */}
            <Link
              to="/invest/amount"
              state={{ project: demoProject }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              开始体验投资流程
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-center text-sm text-gray-500 mt-4">
              这是演示模式，不会产生真实交易
            </p>
          </div>
        </div>

        {/* 返回链接 */}
        <div className="text-center">
          <Link to="/projects" className="text-blue-600 hover:text-blue-700 font-medium">
            ← 返回项目列表
          </Link>
        </div>
      </div>
    </div>
  )
}

