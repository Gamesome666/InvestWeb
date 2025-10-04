import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

export default function ProjectDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [investAmount, setInvestAmount] = useState(500)

  // Mock data
  const project = {
    id: 1,
    name: 'SmartHealth Monitor',
    tagline: 'AI-powered wearable health monitoring device',
    category: 'Health Tech',
    raised: 387000,
    goal: 500000,
    investors: 156,
    daysLeft: 12,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    description: 'SmartHealth Monitor is revolutionizing personal health tracking with our AI-powered wearable device. Our technology provides real-time health insights and early disease detection.',
    problem: 'Current health monitoring devices are reactive and lack predictive capabilities.',
    solution: 'Our AI algorithms analyze biometric data in real-time to predict health issues before they become serious.',
    market: 'The global wearable health tech market is projected to reach $60B by 2027.',
    team: [
      {
        name: 'Dr. Sarah Chen',
        role: 'CEO & Co-founder',
        bio: 'Former tech lead at Google Health, PhD in Biomedical Engineering from MIT'
      },
      {
        name: 'James Rodriguez',
        role: 'CTO',
        bio: '15 years in medical device development, ex-Medtronic senior engineer'
      }
    ],
    minInvestment: 100,
    valuationPerShare: 0.05
  }

  const calculateShares = (amount) => {
    return Math.floor(amount / project.valuationPerShare)
  }

  const calculateEquity = (amount) => {
    return ((amount / project.goal) * 10).toFixed(4) // Assuming 10% equity offered
  }

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'team', name: 'Team' },
    { id: 'financials', name: 'Financials' },
    { id: 'updates', name: 'Updates' }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Image */}
      <div className="h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Header */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-primary-600 mb-2 uppercase">
                {project.category}
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {project.name}
              </h1>
              <p className="text-2xl text-gray-600">
                {project.tagline}
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 font-semibold transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.name}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">About</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">The Problem</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Solution</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Market Opportunity</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.market}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Leadership Team</h2>
                  <div className="space-y-6">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex gap-6 items-start">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                          <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                          <p className="text-gray-700">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'financials' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Financial Overview</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Funding Goal</h3>
                      <p className="text-4xl font-bold text-primary-600">
                        €{(project.goal / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Valuation</h3>
                      <p className="text-2xl font-bold text-gray-900">€5M pre-money</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Equity Offered</h3>
                      <p className="text-2xl font-bold text-gray-900">10%</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'updates' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Updates</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary-600 pl-6">
                      <div className="text-sm text-gray-500 mb-1">2 days ago</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Reached 75% funding milestone!
                      </h3>
                      <p className="text-gray-700">
                        We're thrilled to announce that we've raised over €375K...
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-6">
                      <div className="text-sm text-gray-500 mb-1">1 week ago</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        FDA clearance received
                      </h3>
                      <p className="text-gray-700">
                        Major milestone achieved with FDA Class II clearance...
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg sticky top-24">
              {/* Funding Progress */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    €{(project.raised / 1000).toFixed(0)}K
                  </span>
                  <span className="text-lg text-gray-500">
                    of €{(project.goal / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div
                    className="bg-gradient-to-r from-accent-500 to-accent-600 h-4 rounded-full"
                    style={{ width: `${(project.raised / project.goal) * 100}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{project.investors}</div>
                    <div className="text-sm text-gray-600">Investors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{project.daysLeft}</div>
                    <div className="text-sm text-gray-600">Days Left</div>
                  </div>
                </div>
              </div>

              {/* Investment Calculator */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Investment Amount (€)
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={investAmount}
                  onChange={(e) => setInvestAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-4">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    €{investAmount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {calculateShares(investAmount)} shares · {calculateEquity(investAmount)}% equity
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link to="/register">
                <button className="w-full btn-primary text-lg py-4 mb-4">
                  Invest Now
                </button>
              </Link>
              
              <p className="text-xs text-gray-500 text-center">
                Minimum investment: €{project.minInvestment}
              </p>

              {/* Risk Warning */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Risk Warning:</strong> Investing in startups involves risk. You may lose all of your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


