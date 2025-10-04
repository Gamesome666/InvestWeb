import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition, { FadeInWhenVisible, StaggerContainer, StaggerItem } from '../components/PageTransition'
import { ProjectCard } from '../components/Card'

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
    },
    {
      id: 4,
      name: 'CryptoWallet Pro',
      tagline: 'Next-generation secure cryptocurrency wallet',
      category: 'tech',
      raised: 445000,
      goal: 600000,
      investors: 178,
      daysLeft: 15,
      image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'BioHealth Labs',
      tagline: 'Breakthrough cancer research and treatment',
      category: 'health',
      raised: 892000,
      goal: 1000000,
      investors: 342,
      daysLeft: 5,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Solar Innovations',
      tagline: 'Affordable solar panels for everyone',
      category: 'energy',
      raised: 276000,
      goal: 500000,
      investors: 127,
      daysLeft: 18,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌟' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'health', name: 'Health', icon: '🏥' },
    { id: 'energy', name: 'Clean Energy', icon: '⚡' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-6xl">
            <FadeInWhenVisible>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Investment Opportunities
              </h1>
              <p className="text-xl text-blue-100">
                Browse our curated selection of high-potential startups
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        <div className="container mx-auto max-w-7xl px-4 py-12">
          {/* Filters */}
          <FadeInWhenVisible>
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`
                      px-6 py-3 rounded-xl font-semibold transition-all
                      ${filter === cat.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'}
                    `}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Projects Grid */}
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const progress = (project.raised / project.goal) * 100

                return (
                  <StaggerItem key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                      <ProjectCard>
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                          <motion.img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                          {/* Days left badge */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <span className="font-bold text-gray-900">{project.daysLeft} days</span>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                          <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                            {categories.find(c => c.id === project.category)?.name}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {project.name}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {project.tagline}
                          </p>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="font-semibold text-gray-900">
                                €{(project.raised / 1000).toFixed(0)}K raised
                              </span>
                              <span className="text-gray-500">
                                of €{(project.goal / 1000).toFixed(0)}K
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <motion.div
                                className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progress}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-gray-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                              </svg>
                              <span>{project.investors} investors</span>
                            </div>
                            <div className="font-bold text-blue-600">
                              {Math.round(progress)}% funded
                            </div>
                          </div>
                        </div>
                      </ProjectCard>
                    </Link>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerContainer>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <FadeInWhenVisible>
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters
                </p>
                <motion.button
                  onClick={() => setFilter('all')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Show All Projects
                </motion.button>
              </div>
            </FadeInWhenVisible>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
