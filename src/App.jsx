import { useState, useEffect } from 'react'

// Features data
const features = [
  {
    icon: "☀️",
    title: "Solar Powered",
    description: "700W solar panel keeps Garbot running all day. Zero emissions, zero fuel costs."
  },
  {
    icon: "🤖",
    title: "AI-Powered",
    description: "Computer vision detects garbage. Cloud AI makes decisions. Autonomous operation."
  },
  {
    icon: "☁️",
    title: "Cloud Managed",
    description: "Fleet management dashboard. Real-time monitoring. Over-the-air updates."
  },
  {
    icon: "🚙",
    title: "4-Wheel Drive",
    description: "Off-road capability. Handles grass, gravel, and uneven terrain."
  },
  {
    icon: "🦾",
    title: "Robotic Arm",
    description: "Articulated pickup arm. Multiple hand options. Reliable garbage collection."
  },
  {
    icon: "📡",
    title: "LTE Connected",
    description: "Always online. Streams data to cloud. Receives commands in real-time."
  }
]

const specifications = [
  { label: "Solar Panel", value: "700W (2384 × 1303 mm)" },
  { label: "Speed", value: "10 km/h" },
  { label: "Form Factor", value: "~2.4m × 1.3m" },
  { label: "Connectivity", value: "LTE" },
  { label: "AI Compute", value: "NVIDIA Jetson Nano" },
  { label: "Obstacles", value: "Stop & wait" },
]

const batteryOptions = [
  {
    name: "Standard",
    description: "Li-ion battery optimized for daytime operation",
    bestFor: "Parks with good sun exposure",
    price: "Included"
  },
  {
    name: "Extended",
    description: "Larger Li-ion pack for longer runtime",
    bestFor: "All-day coverage",
    price: "+$500"
  },
  {
    name: "All-Season",
    description: "LiFePO4 chemistry for cold weather",
    bestFor: "Year-round operation",
    price: "+$800"
  },
  {
    name: "Night",
    description: "Large battery, no solar, LED lights",
    bestFor: "24-hour coverage",
    price: "+$1,200"
  }
]

const armOptions = [
  {
    name: "Basic",
    dof: "2-DOF",
    lift: "Grabber only",
    price: "Included",
    description: "Simple gripper for bottles and cans"
  },
  {
    name: "Standard", 
    dof: "3-DOF",
    lift: "2kg",
    price: "+$300",
    description: "Extended reach for bags and larger items"
  },
  {
    name: "Premium",
    dof: "6-DOF",
    lift: "5kg+",
    price: "+$800",
    description: "Full articulation. Picks up almost anything"
  }
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f1a]/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🗑️</span>
            <span className="text-2xl font-bold tracking-tight">Garbot</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="hover:text-[#e94560] transition">How It Works</a>
            <a href="#features" className="hover:text-[#e94560] transition">Features</a>
            <a href="#specs" className="hover:text-[#e94560] transition">Specs</a>
            <a href="#options" className="hover:text-[#e94560] transition">Options</a>
            <a href="#contact" className="px-6 py-2 bg-[#c41e3a] hover:bg-[#e94560] rounded-full font-semibold transition">
              Get Updates
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #c41e3a 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #e94560 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
          <div className="float-animation text-8xl mb-8">🤖</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            The Future of <span className="text-[#c41e3a]">Park Cleanup</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Autonomous solar-powered garbage collection robots. 
            AI-powered. Cloud-managed. Zero emissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-[#c41e3a] hover:bg-[#e94560] rounded-full text-lg font-bold transition glow-red">
              Join the Waitlist
            </a>
            <a href="#how-it-works" className="px-8 py-4 border border-gray-600 hover:border-[#e94560] rounded-full text-lg font-semibold transition">
              Learn More
            </a>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-3xl font-bold text-[#c41e3a]">700W</div>
              <div className="text-gray-400 text-sm">Solar Power</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-3xl font-bold text-[#c41e3a]">10</div>
              <div className="text-gray-400 text-sm">km/h Speed</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-3xl font-bold text-[#c41e3a]">AI</div>
              <div className="text-gray-400 text-sm">Powered</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-3xl font-bold text-[#c41e3a]">Cloud</div>
              <div className="text-gray-400 text-sm">Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How <span className="text-[#c41e3a]">Garbot</span> Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <div className="text-5xl mb-4">☀️</div>
                <h3 className="text-xl font-bold mb-3">1. Solar Charging</h3>
                <p className="text-gray-400">
                  700W solar panel charges the battery during the day. Garbot runs entirely on solar power - no grid connection needed.
                </p>
              </div>
            </div>
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3">2. AI Patrols</h3>
                <p className="text-gray-400">
                  Autonomous navigation with GPS waypoints. Computer vision detects garbage in real-time. AI decides what to pick up.
                </p>
              </div>
            </div>
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <div className="text-5xl mb-4">🗑️</div>
                <h3 className="text-xl font-bold mb-3">3. Collects Garbage</h3>
                <p className="text-gray-400">
                  Robotic arm picks up detected items. Bin stores until full. Cloud manages fleet and alerts when service needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Built for <span className="text-[#c41e3a]">Autonomy</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Every feature designed for fully autonomous park cleanup.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition border border-white/10 hover:border-[#c41e3a]/50">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="text-[#c41e3a]">Specifications</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {specifications.map((spec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 flex justify-between items-center">
                  <span className="text-gray-400">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Battery Options */}
      <section id="options" className="py-24 px-6 bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Battery <span className="text-[#c41e3a]">Options</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Choose the right power configuration for your deployment.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {batteryOptions.map((option, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition border border-white/10">
                <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                <div className="text-2xl font-bold text-[#c41e3a] mb-4">{option.price}</div>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500">Best for: {option.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arm Options */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Arm <span className="text-[#c41e3a]">Options</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Different pickup capabilities at different price points.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {armOptions.map((option, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition border border-white/10 hover:border-[#c41e3a]/50">
                <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
                <div className="text-xl font-bold text-[#c41e3a] mb-4">{option.price}</div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>DOF:</span>
                    <span>{option.dof}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Lift:</span>
                    <span>{option.lift}</span>
                  </div>
                </div>
                <p className="text-gray-400">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#c41e3a]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay in the <span className="text-[#c41e3a]">Loop</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            We're building the future of autonomous park cleanup. 
            Get updates on our progress and be first in line when Garbot launches.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#c41e3a]"
            />
            <button className="px-8 py-4 bg-[#c41e3a] hover:bg-[#e94560] rounded-full font-bold transition glow-red">
              Notify Me
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-6">
            No spam. We'll only share Garbot updates.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🗑️</span>
            <span className="text-xl font-bold">Garbot</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Garbot. The future of autonomous park cleanup.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
