import { Link, useLocation } from 'react-router-dom'
import { CheckCircle, Mail, Calendar, TrendingUp, Sparkles } from 'lucide-react'

export default function ThankYou() {
  const location = useLocation()
  const formData = location.state?.formData

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full">
        {/* 成功图标 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 animate-bounce shadow-lg">
            <CheckCircle className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            感谢您的关注！
            <Sparkles className="h-8 w-8 text-yellow-500" />
          </h1>
          <p className="text-xl text-gray-600">
            我们已收到您的注册意向
          </p>
        </div>

        {/* 主卡片 */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          {/* 用户信息确认 */}
          {formData && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                我们会尽快联系您
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">姓名：</span>
                  <span className="font-medium text-gray-900">{formData.fullName}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">邮箱：</span>
                  <span className="font-medium text-gray-900">{formData.email}</span>
                </div>
                {formData.investorType && (
                  <div className="flex items-center">
                    <span className="text-gray-600 w-24">类型：</span>
                    <span className="font-medium text-gray-900">
                      {formData.investorType === 'individual' ? '个人投资者' : 
                       formData.investorType === 'institution' ? '机构投资者' : '创业者'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 下一步说明 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">接下来会发生什么？</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">24小时内</h3>
                  <p className="text-gray-600">
                    我们的团队会审核您的申请，并通过邮件发送欢迎信息和平台使用指南
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">2-3个工作日内</h3>
                  <p className="text-gray-600">
                    您会收到账户激活链接，可以开始浏览项目并完成投资者认证
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">随时开始投资</h3>
                  <p className="text-gray-600">
                    账户激活后，您就可以从€100开始投资优质创业项目，开启投资之旅
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 提示信息 */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm text-yellow-800">
              <strong>温馨提示：</strong>请留意您的邮箱（包括垃圾邮件文件夹），我们会通过邮件与您保持联系。如有任何问题，请随时回复我们的邮件。
            </p>
          </div>
        </div>

        {/* 继续探索 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            在等待的同时，继续探索
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Link
              to="/projects"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-md transition-all text-center border-2 border-blue-200 hover:border-blue-400"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">浏览项目</h3>
              <p className="text-sm text-gray-600">
                查看所有投资机会
              </p>
            </Link>

            <Link
              to="/how-it-works"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-md transition-all text-center border-2 border-purple-200 hover:border-purple-400"
            >
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">了解流程</h3>
              <p className="text-sm text-gray-600">
                投资如何运作
              </p>
            </Link>

            <Link
              to="/invest/demo"
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-md transition-all text-center border-2 border-green-200 hover:border-green-400"
            >
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-900 mb-2">体验演示</h3>
              <p className="text-sm text-gray-600">
                模拟投资流程
              </p>
            </Link>
          </div>
        </div>

        {/* 社交分享 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">喜欢我们的平台？</h3>
          <p className="mb-6 opacity-90">
            分享给您的朋友，一起发现优质投资机会
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all backdrop-blur-sm">
              分享到微信
            </button>
            <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all backdrop-blur-sm">
              分享到Twitter
            </button>
            <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all backdrop-blur-sm">
              分享到LinkedIn
            </button>
          </div>
        </div>

        {/* 返回首页 */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}

