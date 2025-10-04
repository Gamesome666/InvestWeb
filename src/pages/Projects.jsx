import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      name: 'SmartHealth Monitor',
      tagline: 'AI-powered wearable health monitoring device',
      category: 'health',
      raised: 387000,
      goal: 500000,
      investors: 156,
      daysLeft: 12,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'GreenEnergy Storage',
      tagline: 'Revolutionary battery technology for renewable energy',
      category: 'energy',
      raised: 624000,
      goal: 800000,
      investors: 203,
      daysLeft: 8,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'EduAI Platform',
      tagline: 'Personalized learning experiences powered by AI',
      category: 'tech',
      raised: 156000,
      goal: 300000,
      investors: 89,
      daysLeft: 25,
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'tech', name: 'Technology' },
    { id: 'health', name: 'Health' },
    { id: 'energy', name: 'Clean Energy' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Investment Opportunities
          </h1>
          <p className="text-xl text-gray-600">
            Browse our curated selection of high-potential startups
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary-600 uppercase">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.daysLeft} days left
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.tagline}
                  </p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-bold text-gray-900">
                        €{(project.raised / 1000).toFixed(0)}K raised
                      </span>
                      <span className="text-gray-500">
                        of €{(project.goal / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-accent-500 to-accent-600 h-3 rounded-full transition-all"
                        style={{ width: `${(project.raised / project.goal) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="font-semibold">{project.investors}</span>
                    </div>
                    <div className="text-primary-600 font-bold text-lg">
                      {Math.round((project.raised / project.goal) * 100)}%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


