import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, DollarSign, Shield, Code, Scale, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: '全部问题', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'investment', name: '投资相关', icon: <DollarSign className="h-5 w-5" /> },
    { id: 'platform', name: '平台相关', icon: <Shield className="h-5 w-5" /> },
    { id: 'technical', name: '技术相关', icon: <Code className="h-5 w-5" /> },
    { id: 'legal', name: '法律相关', icon: <Scale className="h-5 w-5" /> }
  ]

  const faqs = [
    // 投资相关
    {
      category: 'investment',
      question: '最低投资金额是多少？',
      answer: '我们的平台最低投资金额为€100。这个低门槛让更多人能够参与创业投资，实现投资组合的多样化。您可以选择投资一个项目€100，也可以将€1000分散投资到10个不同的项目中。'
    },
    {
      category: 'investment',
      question: '如何选择投资项目？',
      answer: '建议从以下几个方面评估项目：1) 查看项目的商业模式和市场潜力；2) 了解创始团队的背景和经验；3) 分析财务预测和资金使用计划；4) 查看项目的融资进度和投资者数量；5) 阅读其他投资者的评价和讨论。我们建议分散投资，不要将所有资金投入单一项目。'
    },
    {
      category: 'investment',
      question: '投资后多久能看到收益？',
      answer: '创业投资通常是中长期投资，收益时间因项目而异。一般来说：短期（6-12个月）可能看到项目的初步进展；中期（1-3年）项目开始产生收入，可能有少量分红；长期（3-5年）项目成熟或退出（IPO/被收购）时获得主要回报。请注意，创业投资存在高风险，并非所有项目都能盈利。'
    },
    {
      category: 'investment',
      question: '投资是否可以撤回？',
      answer: '一旦投资确认并完成支付，资金将直接转给项目方，无法撤回。这是因为项目方需要确定的资金来执行商业计划。不过，在锁定期（通常12个月）结束后，您可以在二级市场上出售您的股权Token（该功能即将推出）。因此，请在投资前仔细评估项目，只投资您可以承受损失的金额。'
    },
    {
      category: 'investment',
      question: '收益如何分配？',
      answer: '收益分配通过智能合约自动执行：1) 分红收益：项目盈利后，按您持有的Token比例自动分配到您的钱包，通常按季度发放；2) 增值收益：项目估值上升时，您的Token价值相应增长；3) 退出收益：项目被收购或IPO时，按股权比例获得相应回报。所有收益分配都公开透明，可在区块链上查询。'
    },

    // 平台相关
    {
      category: 'platform',
      question: '平台如何盈利？',
      answer: '我们的盈利模式透明且合理：1) 项目方服务费：向成功融资的项目收取5-7%的服务费；2) 投资成功费：投资者获得回报时收取小额成功费（通常2-3%）；3) 二级市场交易费：未来在Token交易市场收取少量手续费。我们不收取账户管理费或年费，也不从投资本金中扣除任何费用。'
    },
    {
      category: 'platform',
      question: '平台如何筛选项目？',
      answer: '我们有严格的项目审核流程：1) 初步筛选：评估商业计划书、团队背景、市场潜力；2) 尽职调查：核实公司注册信息、财务状况、知识产权；3) 专家评审：由行业专家和投资人组成的委员会进行评估；4) 合规审查：确保项目符合所有法律法规要求。只有通过所有审核环节的项目才能上线，通过率约15-20%。'
    },
    {
      category: 'platform',
      question: '平台收取什么费用？',
      answer: '对投资者，我们的费用结构非常简单：投资时不收取任何费用，您的全部投资金额都会转给项目方。仅在您获得投资回报时，我们收取2-3%的成功费。例如，您投资€1000，最终获得€1500回报，我们仅从€500收益中收取€10-15。没有收益就没有费用，我们与您的利益完全一致。'
    },
    {
      category: 'platform',
      question: '我的资金安全吗？',
      answer: '我们采取多重措施保障资金安全：1) 资金托管：投资资金由第三方持牌金融机构托管；2) 智能合约：所有交易通过区块链智能合约执行，透明可追溯；3) 加密技术：采用银行级加密保护您的账户和交易信息；4) 保险保障：平台购买专业责任保险，覆盖技术风险。请注意，这些措施保护的是交易安全，投资本身的市场风险需要您自行承担。'
    },

    // 技术相关
    {
      category: 'technical',
      question: '什么是股权Token？',
      answer: '股权Token是代表您在项目中所有权的数字凭证。就像传统的股票证书，但以区块链Token的形式存在。每个Token对应特定的股权比例，记录在区块链上。Token的优势包括：永久保存、无法篡改、可以追溯完整的交易历史、支持自动分红、未来可在二级市场交易。您可以在平台的钱包中查看所有持有的Token。'
    },
    {
      category: 'technical',
      question: '如何保证交易安全？',
      answer: '我们使用区块链技术确保交易安全：1) 去中心化：交易记录分布式存储，不依赖单一服务器；2) 加密保护：所有交易使用密码学技术加密；3) 不可篡改：一旦记录到区块链，任何人都无法修改或删除；4) 智能合约：自动执行，消除人为错误和欺诈风险；5) 多重签名：大额交易需要多方确认。整个过程公开透明，您可以随时验证交易记录。'
    },
    {
      category: 'technical',
      question: '需要了解区块链技术吗？',
      answer: '完全不需要！我们的平台设计得非常易用，就像使用普通的投资平台一样简单。您不需要了解区块链的技术细节，不需要管理复杂的加密钱包，也不需要了解智能合约编程。所有技术复杂性都由我们在后台处理。您只需要：1) 注册账户；2) 选择项目；3) 确认投资金额；4) 完成支付。剩下的一切都自动完成。'
    },
    {
      category: 'technical',
      question: '如何查看我的投资记录？',
      answer: '登录账户后，您可以在"我的投资"页面查看所有信息：1) 投资组合：显示所有投资项目、金额和当前价值；2) Token余额：查看持有的所有股权Token；3) 交易历史：完整的投资和收益记录；4) 区块链验证：每笔交易都有对应的区块链交易ID，可以在区块浏览器上独立验证。我们还提供导出功能，方便您进行税务申报。'
    },

    // 法律相关
    {
      category: 'legal',
      question: '投资是否受法律保护？',
      answer: '是的。我们的平台和所有投资活动都在欧盟法律框架下运营：1) 平台持有相关金融服务牌照；2) 遵守MiFID II（金融工具市场指令）和众筹监管条例；3) 所有项目都签署法律约束性的投资协议；4) 股权Token代表真实的公司股权，受公司法保护。不过请注意，法律保护的是您的权利，不保证投资回报。创业投资本身具有高风险。'
    },
    {
      category: 'legal',
      question: '如何进行税务申报？',
      answer: '投资收益需要依法纳税，具体规则因国家而异：1) 分红收益：通常按股息税率征税（各国15-30%不等）；2) 资本利得：Token增值或出售收益按资本利得税征税；3) 我们提供详细的税务报表，包括所有交易记录和收益明细；4) 建议咨询当地税务顾问了解具体申报要求。部分国家对创业投资有税收优惠政策，例如持有期超过一定年限可免税或减税。'
    },
    {
      category: 'legal',
      question: '国际投资者可以参与吗？',
      answer: '目前我们主要服务欧盟和欧洲经济区（EEA）的投资者。如果您在这些地区居住并拥有有效身份证明，就可以注册和投资。对于其他国家的投资者，我们正在扩展服务范围，计划在2025年下半年开放美国、加拿大、澳大利亚等市场。非开放地区的投资者可以先注册候补名单，一旦您所在地区开放就会收到通知。'
    },
    {
      category: 'legal',
      question: '如果项目失败了怎么办？',
      answer: '创业投资存在较高风险，项目失败是可能的。在这种情况下：1) 股权清算：如果公司破产，会按法律顺序清算资产，股权投资者通常在债权人之后受偿；2) 损失确认：您可能损失全部或大部分投资本金；3) 税务处理：资本损失可能可以抵扣其他投资收益（具体规则咨询税务顾问）；4) 经验教训：参与投资者社区讨论，从失败中学习。因此我们强烈建议：只投资可承受损失的金额，分散投资到多个项目以降低风险。'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // 过滤FAQ
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero区域 */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            常见问题
          </h1>
          <p className="text-xl opacity-90 mb-8">
            找到您关心问题的答案，开启安心投资之旅
          </p>

          {/* 搜索框 */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索问题..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* 分类标签 */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ列表 */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {faq.question}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {categories.find(c => c.id === faq.category)?.name}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="prose prose-blue max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">未找到相关问题</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              清除筛选条件
            </button>
          </div>
        )}

        {/* 更多帮助 */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">还有其他问题？</h2>
          <p className="text-lg opacity-90 mb-8">
            我们的客服团队随时为您提供帮助
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              联系客服
            </Link>
            <Link
              to="/how-it-works"
              className="bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-all border-2 border-white/20"
            >
              了解如何运作
            </Link>
          </div>
        </div>

        {/* 相关链接 */}
        <div className="mt-12 text-center">
          <h3 className="text-gray-900 font-semibold mb-4">您可能还想了解</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blockchain" className="text-blue-600 hover:text-blue-700 font-medium">
              区块链技术说明
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/returns" className="text-blue-600 hover:text-blue-700 font-medium">
              收益说明
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/projects" className="text-blue-600 hover:text-blue-700 font-medium">
              浏览项目
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/invest/demo" className="text-blue-600 hover:text-blue-700 font-medium">
              体验投资流程
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

