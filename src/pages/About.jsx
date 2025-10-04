import PageTransition, { FadeInWhenVisible, StaggerContainer, StaggerItem } from '../components/PageTransition'
import { PrimaryButton } from '../components/Button'
import { Card } from '../components/Card'

export default function About() {
  const team = [
    { name: 'Sarah Chen', role: 'CEO & Founder', avatar: '👩‍💼', bio: 'Former Goldman Sachs, Stanford MBA' },
    { name: 'Michael Rodriguez', role: 'CTO', avatar: '👨‍💻', bio: 'Ex-Google Engineer, Blockchain Expert' },
    { name: 'Emily Watson', role: 'Head of Legal', avatar: '👩‍⚖️', bio: 'Securities Law Specialist' },
    { name: 'David Kim', role: 'Head of Operations', avatar: '👨‍💼', bio: '15 years in FinTech' }
  ]

  const milestones = [
    { year: '2023', title: 'Company Founded', desc: 'InvestHub was born with a vision' },
    { year: '2023', title: 'First €1M Raised', desc: 'Platform reached first milestone' },
    { year: '2024', title: '42 Projects Funded', desc: 'Growing startup ecosystem' },
    { year: '2025', title: '8,500+ Investors', desc: 'Community keeps expanding' }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <FadeInWhenVisible>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About InvestHub
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                We're democratizing startup investing through blockchain technology
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <FadeInWhenVisible>
              <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                  We're on a mission to democratize startup investing. For too long, early-stage 
                  investment opportunities have been limited to wealthy individuals and institutions. 
                  We believe everyone should have the chance to invest in the next big thing.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-6">
                  By leveraging blockchain technology, we're making startup investing accessible, 
                  transparent, and secure for everyone—starting from just €100.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <StaggerContainer>
              <div className="grid md:grid-cols-4 gap-8">
                <StaggerItem>
                  <Card className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      €5.2M+
                    </div>
                    <div className="text-gray-700 font-semibold">Total Funded</div>
                  </Card>
                </StaggerItem>
                <StaggerItem>
                  <Card className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      42
                    </div>
                    <div className="text-gray-700 font-semibold">Funded Projects</div>
                  </Card>
                </StaggerItem>
                <StaggerItem>
                  <Card className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      8,500+
                    </div>
                    <div className="text-gray-700 font-semibold">Active Investors</div>
                  </Card>
                </StaggerItem>
                <StaggerItem>
                  <Card className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      18%
                    </div>
                    <div className="text-gray-700 font-semibold">Avg. Returns</div>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                Meet Our Team
              </h2>
            </FadeInWhenVisible>
            
            <StaggerContainer>
              <div className="grid md:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center">
                      <div className="text-6xl mb-4">{member.avatar}</div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600">
                        {member.bio}
                      </p>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                Our Journey
              </h2>
            </FadeInWhenVisible>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600" />

              {milestones.map((milestone, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card>
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.desc}
                        </p>
                      </Card>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10" />
                    </div>
                    <div className="w-5/12" />
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Join Us on This Journey
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Be part of the future of startup investing
              </p>
              <PrimaryButton to="/register">
                Get Started Today
              </PrimaryButton>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
