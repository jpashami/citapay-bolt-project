import React from 'react';
import { ArrowRightCircle, Send, Shield, Globe2, Wallet, DollarSign, ArrowDownUp, Coins, LineChart as ChartLineUp, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Send className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">CitaPay</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How it Works</a>
            <a href="#token" className="hover:text-blue-400 transition-colors">Token</a>
            <a href="#benefits" className="hover:text-blue-400 transition-colors">Benefits</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors">
            Get Started
          </button>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Borderless Money Transfer on the Blockchain
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Send money globally with CitaPay's secure peer-to-peer platform. Fast, affordable, and powered by blockchain technology.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center space-x-2 transition-colors">
                <span>Start Now</span>
                <ArrowRightCircle className="w-5 h-5" />
              </button>
              <button className="border border-white hover:border-blue-400 hover:text-blue-400 px-8 py-3 rounded-full transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=2000&q=80" 
              alt="Blockchain Technology"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose CitaPay?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-400" />,
                title: "Secure Transactions",
                description: "Enterprise-grade security with blockchain technology ensuring your money is safe."
              },
              {
                icon: <Globe2 className="w-12 h-12 text-blue-400" />,
                title: "Global Coverage",
                description: "Send money to anyone, anywhere in the world, instantly and at low costs."
              },
              {
                icon: <Wallet className="w-12 h-12 text-blue-400" />,
                title: "Easy to Use",
                description: "Simple interface for sending and receiving money, no technical knowledge required."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How CitaPay Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wallet className="w-10 h-10 text-blue-400" />,
                title: "Create Wallet",
                description: "Set up your digital wallet in minutes"
              },
              {
                icon: <DollarSign className="w-10 h-10 text-blue-400" />,
                title: "Add Funds",
                description: "Load your wallet using various payment methods"
              },
              {
                icon: <ArrowDownUp className="w-10 h-10 text-blue-400" />,
                title: "Exchange",
                description: "Convert to your preferred currency"
              },
              {
                icon: <Send className="w-10 h-10 text-blue-400" />,
                title: "Send Money",
                description: "Transfer funds instantly to recipients"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-700/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">CITA Token</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80" 
                alt="CITA Token"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Powering the Future of Cross-Border Payments</h3>
              <p className="text-gray-300 mb-8">
                The CITA token is the native cryptocurrency of the CitaPay ecosystem, designed to facilitate instant, low-cost cross-border transactions while providing additional benefits to token holders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <Coins className="w-8 h-8 text-blue-400" />,
                    title: "Utility Token",
                    description: "Used for transaction fees and governance"
                  },
                  {
                    icon: <ChartLineUp className="w-8 h-8 text-blue-400" />,
                    title: "Staking Rewards",
                    description: "Earn passive income by staking CITA"
                  },
                  {
                    icon: <Lock className="w-8 h-8 text-blue-400" />,
                    title: "Governance Rights",
                    description: "Vote on protocol upgrades"
                  },
                  {
                    icon: <DollarSign className="w-8 h-8 text-blue-400" />,
                    title: "Fee Discounts",
                    description: "Save on transaction fees"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-slate-700/50 p-4 rounded-xl">
                    {feature.icon}
                    <h4 className="text-lg font-semibold mt-2 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center space-x-2 transition-colors">
                <span>Buy CITA Token</span>
                <ArrowRightCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8">Join thousands of users who trust CitaPay for their global transactions</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Send className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">CitaPay</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 CitaPay. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;