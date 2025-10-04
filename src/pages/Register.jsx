import { useState } from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investorType: 'individual',
    interests: [],
    investmentRange: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would send data to Google Sheets or Airtable
    alert('Thank you for your interest! We will contact you soon.')
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="py-20 bg-gradient-to-br from-primary-50 to-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Register Your Interest
            </h1>
            <p className="text-xl text-gray-600">
              Join thousands of investors building their startup portfolio
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 shadow-xl">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Investor Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Investor Type *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="investorType"
                      value="individual"
                      checked={formData.investorType === 'individual'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="ml-3 text-gray-700">Individual Investor</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="investorType"
                      value="institutional"
                      checked={formData.investorType === 'institutional'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="ml-3 text-gray-700">Institutional Investor</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="investorType"
                      value="entrepreneur"
                      checked={formData.investorType === 'entrepreneur'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="ml-3 text-gray-700">Entrepreneur (Seeking Funding)</span>
                  </label>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Interested Industries
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Technology', 'Health', 'Energy', 'Consumer'].map(interest => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest.toLowerCase()}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary-600 rounded"
                      />
                      <span className="ml-3 text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Investment Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Planned Investment Range
                </label>
                <select
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select range...</option>
                  <option value="100-1000">€100 - €1,000</option>
                  <option value="1000-5000">€1,000 - €5,000</option>
                  <option value="5000-10000">€5,000 - €10,000</option>
                  <option value="10000+">€10,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your investment goals..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-bold"
              >
                Submit Interest
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center">
              By submitting, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}


