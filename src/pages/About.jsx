export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-8 text-center">
            About InvestHub
          </h1>
          
          <div className="bg-white rounded-xl p-12 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We're on a mission to democratize startup investing. For too long, early-stage investment opportunities have been limited to wealthy individuals and institutions. We believe everyone should have the chance to invest in the next big thing.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              By leveraging blockchain technology, we're making startup investing accessible, transparent, and secure for everyone—starting from just €100.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">€5.2M+</div>
              <div className="text-gray-700 font-semibold">Total Funded</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">42</div>
              <div className="text-gray-700 font-semibold">Funded Projects</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">8,500+</div>
              <div className="text-gray-700 font-semibold">Investors</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-2">Transparency</h3>
                <p className="text-gray-700 text-lg">
                  Every transaction is recorded on the blockchain. No hidden fees, no surprises.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-2">Accessibility</h3>
                <p className="text-gray-700 text-lg">
                  Start investing with just €100. We're breaking down barriers to entry.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-2">Quality</h3>
                <p className="text-gray-700 text-lg">
                  We vet every project thoroughly. Only 5% of applications make it onto our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


