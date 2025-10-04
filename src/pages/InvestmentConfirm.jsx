import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, User, Mail, Briefcase, CheckCircle, AlertTriangle } from 'lucide-react'

export default function InvestmentConfirm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { project, investmentDetails } = location.state || {}

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    investorType: 'individual',
    agreeTerms: false,
    agreeRisks: false
  })

  const [errors, setErrors] = useState({})

  // 如果没有投资详情，重定向回开始
  if (!project || !investmentDetails) {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // 清除错误
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = '请输入您的姓名'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱地址'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '您需要同意投资条款'
    }
    
    if (!formData.agreeRisks) {
      newErrors.agreeRisks = '您需要确认已理解投资风险'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // 跳转到成功页面
      navigate('/invest/success', {
        state: {
          project,
          investmentDetails,
          investorInfo: formData
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
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="ml-2 text-sm font-medium text-green-600">选择金额</span>
            </div>
            <div className="w-12 h-0.5 bg-blue-600" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">确认信息</span>
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
          {/* 左侧：投资者信息表单 */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                确认投资信息
              </h1>
              <p className="text-gray-600 mb-6">
                请填写您的基本信息以完成投资演示
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 姓名 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* 邮箱 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    邮箱地址 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* 投资者类型 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Briefcase className="inline h-4 w-4 mr-1" />
                    投资者类型
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`cursor-pointer border-2 rounded-xl p-4 transition-all ${
                      formData.investorType === 'individual'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="investorType"
                        value="individual"
                        checked={formData.investorType === 'individual'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-2">👤</div>
                        <div className="font-medium text-gray-900">个人投资者</div>
                      </div>
                    </label>

                    <label className={`cursor-pointer border-2 rounded-xl p-4 transition-all ${
                      formData.investorType === 'institution'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="investorType"
                        value="institution"
                        checked={formData.investorType === 'institution'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-2">🏢</div>
                        <div className="font-medium text-gray-900">机构投资者</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 条款同意 */}
                <div className="space-y-3 pt-4 border-t">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      我已阅读并同意{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        投资条款与条件
                      </a>
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-red-500 text-sm ml-8">{errors.agreeTerms}</p>
                  )}

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeRisks"
                      checked={formData.agreeRisks}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      我理解投资风险，明白可能损失全部本金
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.agreeRisks && (
                    <p className="text-red-500 text-sm ml-8">{errors.agreeRisks}</p>
                  )}
                </div>

                {/* Demo提示 */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                      这是演示模式，提交后不会产生真实交易或收费。您的信息仅用于演示目的。
                    </p>
                  </div>
                </div>

                {/* 导航按钮 */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    返回
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                  >
                    确认投资（Demo）
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* 右侧：投资摘要 */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                投资摘要
              </h2>

              {/* 项目信息 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl mr-3">
                    {project.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.nameZh}</h3>
                    <p className="text-sm text-gray-600">{project.name}</p>
                  </div>
                </div>
              </div>

              {/* 投资详情 */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">投资金额</span>
                  <span className="font-bold text-gray-900 text-lg">
                    €{investmentDetails.amount.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">获得股权</span>
                  <span className="font-bold text-blue-600">
                    {investmentDetails.equityPercentage}%
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Token数量</span>
                  <span className="font-bold text-purple-600">
                    {investmentDetails.tokenAmount.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">预期年化收益</span>
                  <span className="font-bold text-green-600">
                    €{investmentDetails.expectedReturn}
                  </span>
                </div>
              </div>

              {/* 投资条款 */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">投资条款</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>锁定期</span>
                    <span className="font-medium">12个月</span>
                  </li>
                  <li className="flex justify-between">
                    <span>分红方式</span>
                    <span className="font-medium">按季度自动发放</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Token发放</span>
                    <span className="font-medium">1-3个工作日</span>
                  </li>
                </ul>
              </div>

              {/* 下一步说明 */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">确认后</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>查看投资确认详情</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>了解如何追踪您的投资</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>探索更多投资机会</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

