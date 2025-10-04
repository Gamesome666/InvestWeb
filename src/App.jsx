import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Returns from './pages/Returns'
import Register from './pages/Register'
import InvestmentDemo from './pages/InvestmentDemo'
import InvestmentAmount from './pages/InvestmentAmount'
import InvestmentConfirm from './pages/InvestmentConfirm'
import InvestmentSuccess from './pages/InvestmentSuccess'
import Blockchain from './pages/Blockchain'
import FAQ from './pages/FAQ'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/register" element={<Register />} />
            <Route path="/invest/demo" element={<InvestmentDemo />} />
            <Route path="/invest/amount" element={<InvestmentAmount />} />
            <Route path="/invest/confirm" element={<InvestmentConfirm />} />
            <Route path="/invest/success" element={<InvestmentSuccess />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


