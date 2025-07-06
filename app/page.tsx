'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  BookOpen, 
  Download,
  CheckCircle,
  Star,
  Terminal,
  Monitor,
  Smartphone,
  Globe,
  Play,
  ExternalLink
} from 'lucide-react'
import ToolsSection from '@/components/ToolsSection'
import RoadmapSection from '@/components/RoadmapSection'

const features = [
  {
    title: "Comprehensive Backup Guide",
    description: "Step-by-step instructions to safely backup all your important data before the transition.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hardware Compatibility",
    description: "Detailed guidance on checking and configuring hardware compatibility with Ubuntu.",
    icon: Monitor,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Essential Applications",
    description: "Curated list of 100+ essential tools across 10 categories for every need.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Productivity Optimization",
    description: "Advanced tips for mastering Ubuntu shortcuts, workspaces, and workflow efficiency.",
    icon: Zap,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Security & Privacy",
    description: "Best practices for maintaining security and privacy in your new Ubuntu environment.",
    icon: Shield,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Community Support",
    description: "Access to Ubuntu forums, documentation, and community resources for ongoing help.",
    icon: Users,
    color: "from-teal-500 to-green-500"
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Developer",
    content: "This guide made my transition from Windows to Ubuntu incredibly smooth. The step-by-step instructions and comprehensive tool recommendations saved me hours of research.",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Digital Artist",
    content: "I was worried about losing my creative workflow, but the guide helped me find perfect Linux alternatives for all my tools. GIMP and Krita are amazing!",
    avatar: "MR"
  },
  {
    name: "Alex Thompson",
    role: "Student",
    content: "As a student, I needed something reliable and free. This guide helped me set up Ubuntu perfectly for my studies and development work.",
    avatar: "AT"
  }
]

const stats = [
  { number: "5", label: "Structured Phases" },
  { number: "100+", label: "Essential Tools" },
  { number: "10", label: "Tool Categories" },
  { number: "24/7", label: "Community Support" }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">The Ultimate Windows to Ubuntu Guide</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="gradient-text">Windows to Ubuntu</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Your comprehensive roadmap for seamlessly transitioning from Windows to Ubuntu. 
              From backup strategies to productivity optimization - we've got you covered.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose This Guide?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive, step-by-step instructions designed to make your transition smooth and successful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Tools Section */}
      <ToolsSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Users Say</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of users who have successfully transitioned to Ubuntu with our comprehensive guide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-100 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-blue-50">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Make the Switch?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your journey to Ubuntu today with our comprehensive guide. 
              Get access to step-by-step instructions, tool recommendations, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                View Full Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Windows to Ubuntu Guide</h3>
            <p className="text-gray-400 mb-6">Your comprehensive roadmap for a successful transition</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400">
              <span>Made with ❤️ by Oday Bakkour</span>
              <span className="hidden sm:inline">•</span>
              <span>Open Source</span>
              <span className="hidden sm:inline">•</span>
              <span>Community Driven</span>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <a href="https://github.com/OdayBakkour1/windows2ubuntu" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 