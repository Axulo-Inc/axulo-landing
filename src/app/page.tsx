import Image from "next/image";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { ArrowRight, CheckCircle, Zap, Shield, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-950 text-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Axulo <span className="text-blue-400">Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl">
              Building the future of decentralized intelligence. Secure, scalable, and production-ready solutions for the modern web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#waitlist" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold text-lg transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Axulo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide the tools and infrastructure needed to build and scale your next big idea.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="h-10 w-10 text-blue-500" />,
                title: "Ultra Fast",
                description: "Built on top of cutting-edge technology for maximum performance and low latency."
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-500" />,
                title: "Secure by Design",
                description: "Enterprise-grade security built into every layer of our infrastructure."
              },
              {
                icon: <Rocket className="h-10 w-10 text-blue-500" />,
                title: "Scale Anywhere",
                description: "Deploy globally with automatic scaling that grows with your user base."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to transform your business?
              </h2>
              <ul className="space-y-4">
                {[
                  "Early access to new features",
                  "Direct support from our engineering team",
                  "Custom integration consulting",
                  "Scale-as-you-grow pricing models"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-white">Axulo</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            &copy; {new Date().getFullYear()} Axulo Technologies Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
