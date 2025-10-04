import { useLocation, Link } from 'react-router-dom'
import { CheckCircle, Download, Share2, TrendingUp, Coins, Calendar } from 'lucide-react'

export default function InvestmentSuccess() {
  const location = useLocation()
  const { project, investmentDetails, investorInfo } = location.state || {}

  // 如果没有数据，显示默认内容
  const hasData = project && investmentDetails

  if (!hasData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">会话已过期</h2>
          <Link
            to="/invest/demo"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            返回投资演示
          </Link>
        </div>
      </div>
    )
  }

  // 生成模拟交易ID
  const transactionId = `DEMO-${Date.now().toString().slice(-8)}`
  const currentDate = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 成功图标和标题 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 animate-bounce">
            <CheckCircle className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎉 投资演示完成！
          </h1>
          <p className="text-xl text-gray-600">
            恭喜您成功完成投资流程演示
          </p>
        </div>

        {/* 主要信息卡片 */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          {/* 渐变头部 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm opacity-90 mb-1">交易ID（Demo）</div>
                <div className="text-lg font-mono">{transactionId}</div>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-90 mb-1">日期</div>
                <div className="text-lg">{currentDate}</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl mr-4">
                {project.logo}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{project.nameZh}</h2>
                <p className="text-blue-100">{project.name}</p>
              </div>
            </div>
          </div>

          {/* 投资详情 */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">投资详情</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-700 mb-1">投资金额</div>
                    <div className="text-3xl font-bold text-gray-900">
                      €{investmentDetails.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Coins className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-700 mb-1">获得Token</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {investmentDetails.tokenAmount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">股权比例</div>
                <div className="text-xl font-bold text-gray-900">
                  {investmentDetails.equityPercentage}%
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">预期年收益</div>
                <div className="text-xl font-bold text-green-600">
                  €{investmentDetails.expectedReturn}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">锁定期</div>
                <div className="text-xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-1" />
                  12个月
                </div>
              </div>
            </div>

            {/* 投资者信息 */}
            {investorInfo && (
              <div className="border-t pt-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">投资者信息</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">姓名：</span>
                    <span className="ml-2 font-medium text-gray-900">{investorInfo.fullName}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">邮箱：</span>
                    <span className="ml-2 font-medium text-gray-900">{investorInfo.email}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">类型：</span>
                    <span className="ml-2 font-medium text-gray-900">
                      {investorInfo.investorType === 'individual' ? '个人投资者' : '机构投资者'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 下一步说明 */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-3">📋 实际投资流程中的下一步</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>完成KYC（身份验证）和银行转账</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>智能合约自动生成并发送股权Token到您的钱包</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>通过Dashboard实时追踪项目进展和收益</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>按季度自动接收分红到您的账户</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Demo提示 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-yellow-900 mb-2">💡 这是一个演示</h3>
          <p className="text-yellow-800 mb-4">
            您刚才体验的是完整的投资流程演示，没有产生任何真实交易或费用。如果您对我们的平台感兴趣，欢迎注册真实账户。
          </p>
          <div className="flex gap-3">
            <button className="flex items-center text-sm text-yellow-800 hover:text-yellow-900 font-medium">
              <Download className="h-4 w-4 mr-1" />
              下载演示报告
            </button>
            <button className="flex items-center text-sm text-yellow-800 hover:text-yellow-900 font-medium">
              <Share2 className="h-4 w-4 mr-1" />
              分享体验
            </button>
          </div>
        </div>

        {/* CTA按钮 */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            to="/projects"
            className="bg-white text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all border-2 border-gray-300 text-center"
          >
            浏览更多项目
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-center"
          >
            注册真实账户
          </Link>
        </div>

        {/* 相关链接 */}
        <div className="text-center space-y-2">
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/how-it-works" className="text-blue-600 hover:text-blue-700">
              了解如何运作
            </Link>
            <Link to="/blockchain" className="text-blue-600 hover:text-blue-700">
              区块链技术说明
            </Link>
            <Link to="/faq" className="text-blue-600 hover:text-blue-700">
              常见问题
            </Link>
          </div>
          <Link to="/" className="block text-gray-500 hover:text-gray-700 text-sm">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}

