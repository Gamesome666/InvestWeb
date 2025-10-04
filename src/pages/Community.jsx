import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Community() {
  const [activeTab, setActiveTab] = useState('discussions')

  const discussions = [
    {
      id: 1,
      title: '如何评估早期创业项目的潜力？',
      author: 'Zhang Wei',
      avatar: '👨‍💼',
      replies: 23,
      likes: 45,
      category: '投资策略',
      time: '2小时前',
      excerpt: '想听听大家在评估种子轮项目时关注哪些关键指标...'
    },
    {
      id: 2,
      title: '区块链技术在股权管理中的应用',
      author: 'Li Mei',
      avatar: '👩‍💻',
      replies: 18,
      likes: 32,
      category: '技术讨论',
      time: '5小时前',
      excerpt: '智能合约如何确保投资透明度和安全性？'
    },
    {
      id: 3,
      title: '分享：我的第一笔天使投资经验',
      author: 'Chen Ming',
      avatar: '🧑‍🚀',
      replies: 56,
      likes: 89,
      category: '投资经验',
      time: '1天前',
      excerpt: '从筛选项目到最终退出，完整复盘我的投资历程...'
    },
    {
      id: 4,
      title: '欧盟众筹法规更新解读',
      author: 'Wang Jing',
      avatar: '👩‍⚖️',
      replies: 12,
      likes: 28,
      category: '法律法规',
      time: '2天前',
      excerpt: '最新的MiFID II修订对个人投资者有什么影响？'
    }
  ]

  const events = [
    {
      id: 1,
      title: '创业投资实战工作坊',
      date: '2025年10月15日',
      time: '14:00 - 17:00',
      format: '线下 + 直播',
      location: '柏林创新中心',
      attendees: 45,
      maxAttendees: 60,
      icon: '🎯'
    },
    {
      id: 2,
      title: '项目路演日：AI & 机器学习',
      date: '2025年10月22日',
      time: '19:00 - 21:00',
      format: '线上直播',
      location: 'Zoom会议',
      attendees: 128,
      maxAttendees: 200,
      icon: '🤖'
    },
    {
      id: 3,
      title: '投资者见面会：绿色能源专场',
      date: '2025年11月5日',
      time: '15:00 - 18:00',
      format: '线下活动',
      location: '慕尼黑科技园',
      attendees: 32,
      maxAttendees: 50,
      icon: '🌱'
    }
  ]

  const resources = [
    {
      id: 1,
      title: '天使投资完全指南',
      type: '电子书',
      downloads: 1234,
      icon: '📚',
      description: '从零开始学习天使投资的方法论和实战技巧'
    },
    {
      id: 2,
      title: '尽职调查清单模板',
      type: 'PDF文档',
      downloads: 856,
      icon: '📋',
      description: '专业的项目评估和尽职调查checklist'
    },
    {
      id: 3,
      title: '投资决策框架视频课程',
      type: '视频教程',
      downloads: 2341,
      icon: '🎬',
      description: '12节课系统学习如何做出明智的投资决策'
    },
    {
      id: 4,
      title: '创业公司估值计算器',
      type: '在线工具',
      downloads: 1567,
      icon: '🧮',
      description: '使用多种方法快速评估创业公司价值'
    }
  ]

  const experts = [
    {
      id: 1,
      name: 'Dr. Michael Schmidt',
      avatar: '👨‍🏫',
      title: '天使投资专家',
      investments: 28,
      followers: 1243,
      expertise: ['SaaS', 'FinTech', '企业服务']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: '👩‍💼',
      title: '连续创业者 & 投资人',
      investments: 15,
      followers: 892,
      expertise: ['电商', '消费品', '移动应用']
    },
    {
      id: 3,
      name: 'Thomas Weber',
      avatar: '🧑‍💻',
      title: '技术投资顾问',
      investments: 34,
      followers: 2156,
      expertise: ['AI/ML', '区块链', '物联网']
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            🤝 创作者交流平台
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            连接投资者与创业者
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            分享经验、学习知识、建立联系 - 一起成长的社区
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-1">2,845</div>
              <div className="text-sm text-gray-600">活跃成员</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-1">1,234</div>
              <div className="text-sm text-gray-600">讨论话题</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-1">156</div>
              <div className="text-sm text-gray-600">线上活动</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-1">89</div>
              <div className="text-sm text-gray-600">专家导师</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg inline-flex gap-2">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'discussions'
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              💬 社区讨论
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'events'
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📅 活动日历
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'resources'
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📚 学习资源
            </button>
            <button
              onClick={() => setActiveTab('experts')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'experts'
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              👥 专家导师
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="flex gap-4">
                  <div className="text-4xl">✍️</div>
                  <div className="flex-1">
                    <textarea
                      placeholder="分享您的想法、提出问题或开启新话题..."
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      rows="3"
                    />
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50">
                          📎 添加附件
                        </button>
                        <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50">
                          🏷️ 选择标签
                        </button>
                      </div>
                      <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                        发布话题
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex gap-4">
                    <div className="text-4xl">{discussion.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-primary-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="font-medium">{discussion.author}</span>
                            <span>•</span>
                            <span>{discussion.time}</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                              {discussion.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{discussion.excerpt}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <button className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {discussion.replies} 回复
                        </button>
                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {discussion.likes}
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                          分享
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{event.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date} · {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          {event.format}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{event.attendees} 人已报名</span>
                      <span>{event.maxAttendees - event.attendees} 个名额</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full transition-all"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                    立即报名
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{resource.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          📥 {resource.downloads.toLocaleString()} 次下载
                        </div>
                        <button className="px-5 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                          获取资源
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experts Tab */}
          {activeTab === 'experts' && (
            <div className="grid md:grid-cols-3 gap-6">
              {experts.map((expert) => (
                <div key={expert.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="text-6xl mb-4">{expert.avatar}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{expert.title}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">{expert.investments}</div>
                      <div className="text-xs text-gray-500">投资项目</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{expert.followers}</div>
                      <div className="text-xs text-gray-500">关注者</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {expert.expertise.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    关注
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              加入我们的社区
            </h2>
            <p className="text-xl mb-8 opacity-90">
              与2000+投资者和创业者一起学习、成长和成功
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  立即注册
                </button>
              </Link>
              <Link to="/projects">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:-translate-y-1">
                  浏览项目
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

